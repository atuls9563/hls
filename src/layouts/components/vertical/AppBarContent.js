// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import styles from '../../../../styles/verticalAppBar.module.css'
import { useState } from 'react'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'
import { MapMarker } from 'mdi-material-ui'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/layouts/components/UserDropdown'
import Dialog from './DialogBox'
import { Typography } from '@mui/material'

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  const [openEdit, setOpenEdit] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  return (
    <>
      <Box className={styles.head}>
        <Box>
          <Typography className={styles.subHead} onClick={handleEditClickOpen}>
            <MapMarker /> Dolphin Softwares(1106380) -#1106380 : Watonga OK
          </Typography>
          <Box className={styles.actions_left}>
            {hidden ? (
              <IconButton color='inherit' className={styles.icon} onClick={toggleNavVisibility}>
                <MenuIcon />
              </IconButton>
            ) : null}
          </Box>
        </Box>
        <Box className={styles.actions_right}>
          <LanguageDropdown settings={settings} saveSettings={saveSettings} />
          <ModeToggler settings={settings} saveSettings={saveSettings} />
          <UserDropdown settings={settings} />
        </Box>
      </Box>
      <Dialog
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        handleEditClickOpen={handleEditClickOpen}
        handleEditClose={handleEditClose}
      />
    </>
  )
}

export default AppBarContent
