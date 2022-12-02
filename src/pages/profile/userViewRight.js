// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import LockOutline from 'mdi-material-ui/LockOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { useTranslation } from 'react-i18next'

// ** Demo Components Imports

import EditProfile from './editProfile'
import ChangePassword from './changePassword'
import Multifactor from './multifactor'

// ** Styled Tab component

const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  color: 'gray'
}))

const UserViewRight = ({ invoiceData }) => {
  const { t } = useTranslation()

  // ** State
  const [value, setValue] = useState('editProfile')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        textColor='inherit'
        indicatorColor='secondary'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='editProfile' label={`${t('Edit Profile')}`} icon={<AccountOutline sx={{ fontSize: '18px' }} />} />
        <Tab value='security' label={`${t('Security')}`} icon={<LockOutline sx={{ fontSize: '18px' }} />} />
        <Tab
          value='multi'
          label={`${t('Multifactor Authentication')}`}
          icon={<LockOutline sx={{ fontSize: '18px' }} />}
        />
      </TabList>
      <Box>
        <TabPanel value='editProfile'>
          <EditProfile />
        </TabPanel>
        <TabPanel value='security'>
          <ChangePassword />
        </TabPanel>
        <TabPanel value='multi'>
          <Multifactor />
        </TabPanel>
      </Box>
    </TabContext>
  )
}

export default UserViewRight
