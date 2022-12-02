// ** React Imports
import { useState, Fragment } from 'react'
// ** Next Import
import { useRouter } from 'next/router'
// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
// ** Icons Imports
import EmailOutline from 'mdi-material-ui/EmailOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import { useTranslation } from 'react-i18next'
// ** Context
import { useAuth } from 'src/hooks/useAuth'

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 10,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = props => {
  const { t } = useTranslation()
  // ** Props
  const { settings } = props

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  // ** Hooks
  const router = useRouter()
  const { logout } = useAuth()

  // ** Vars
  const { direction } = settings

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }
  const stylesOne = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    fontSize: '12px',
    textDecoration: 'none',
    wordWrap: 'break-word'
  }
  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar
          alt='John Doe'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src='/images/avatars/1.png'
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: '2.5rem', height: '2.5rem' }} />
            </Badge>
            <Box sx={{ display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                {`${t('Admin')}`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem onClick={handleEditClickOpen}>
          <Box sx={stylesOne}>
            <AccountOutline sx={{ mr: 2 }} />
            <Typography> {`${t('Dolphin Softwares(1106380) -#1106380 : Watonga OK')}`}</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleDropdownClose('/profile')}>
          <Box sx={styles}>
            <AccountOutline sx={{ mr: 2 }} />
            {`${t('My Profile')}`}
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleDropdownClose('#')}>
          <Box sx={styles}>
            <EmailOutline sx={{ mr: 2 }} />
            {`${t('My Permissions')}`}
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleDropdownClose('/profile/help')}>
          <Box sx={styles}>
            <HelpCircleOutline sx={{ mr: 2 }} />
            {`${t('Help')}`}
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ py: 2 }} onClick={handleLogout}>
          <LogoutVariant sx={{ mr: 2, fontSize: '1.375rem', color: 'text.secondary' }} />
          {`${t('Logout')}`}
        </MenuItem>
      </Menu>
      <DialogBox
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        handleEditClickOpen={handleEditClickOpen}
        handleEditClose={handleEditClose}
      />
    </Fragment>
  )
}

export default UserDropdown
