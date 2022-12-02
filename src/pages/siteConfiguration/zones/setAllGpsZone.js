import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useTranslation } from 'react-i18next'
import { Fab, Typography } from '@mui/material'
import styles from '../../../../styles/setAllGpsZone.module.css'

function SetAllGpsZone({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) {
  const { t } = useTranslation()

  return (
    <div>
      <Dialog open={openEditTwo} onClose={handleEditCloseTwo}>
        <DialogContent>
        <DialogContentText>
        <Typography variant='h5' className={styles.link}>
              {`${t('Set All Zones to GPS Zones?')}`}
            </Typography>
          </DialogContentText><br/>
          <DialogContentText>
            {`${t(
              "Setting All Zones to GPS Zones will replace all location identifiers to GPS. This action is irreversible."
            )}`}
          </DialogContentText>
          <br/>
          <DialogContentText>
            {`${t(
              "Do you want to continue?"
            )}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.footer}>
          <Fab
            color='secondary'
            onClick={handleEditCloseTwo}
            variant='extended'
            size='medium'
            type='submit'
            className={styles.button}
          >
            {`${t('Continue')}`}
          </Fab>
          <Fab
            color='secondary'
            onClick={handleEditCloseTwo}
            variant='extended'
            size='medium'
            type='submit'
            className={styles.button}
          >
            {`${t('Cancel')}`}
          </Fab>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SetAllGpsZone
