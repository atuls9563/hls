import { Fragment, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Translate from 'mdi-material-ui/Translate'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/language.module.css'

const UserLanguageDropdown = props => {
  const { layout, theme } = props

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hook
  const { i18n } = useTranslation()

  // ** Var
  // const { layout } = settings

  const handleLangDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }
  
  const handleLangItemClick = lang => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      {layout == 'horizontal' ? (
        <>
          <Link
            sx={{ py: 2 }}
            selected={i18n.language === 'enl'}
            onClick={() => handleLangItemClick('enl')}
            className={styles.language1}
          >
            English
          </Link>
          <Link
            sx={{ py: 2 }}
            selected={i18n.language === 'frl'}
            onClick={() => handleLangItemClick('frl')}
            className={styles.language2}
          >
            Français
          </Link>
          <Link
            sx={{ py: 2 }}
            selected={i18n.language === 'es'}
            onClick={() => handleLangItemClick('es')}
            className={styles.language2}
          >
            Español
          </Link>
          <Link
            sx={{ py: 2 }}
            selected={i18n.language === 'hi'}
            onClick={() => handleLangItemClick('hi')}
            className={styles.language2}
          >
            हिन्दी
          </Link>
        </>
      ) : (
        <>
          <IconButton
            color='inherit'
            aria-haspopup='true'
            aria-controls='customized-menu'
            onClick={handleLangDropdownOpen}
          >
            <Translate />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLangDropdownClose}
            sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem sx={{ py: 2 }} selected={i18n.language === 'enl'} onClick={() => handleLangItemClick('enl')}>
              English
            </MenuItem>
            <MenuItem sx={{ py: 2 }} selected={i18n.language === 'frl'} onClick={() => handleLangItemClick('frl')}>
              Français
            </MenuItem>
            <MenuItem sx={{ py: 2 }} selected={i18n.language === 'es'} onClick={() => handleLangItemClick('es')}>
              Español
            </MenuItem>
            <MenuItem sx={{ py: 2 }} selected={i18n.language === 'hi'} onClick={() => handleLangItemClick('hi')}>
              हिन्दी
            </MenuItem>
          </Menu>
        </>
      )}
    </Fragment>
  )
}

export default UserLanguageDropdown
