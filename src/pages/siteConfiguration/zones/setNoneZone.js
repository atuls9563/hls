import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useTranslation } from 'react-i18next'
import { Fab, Typography } from '@mui/material'
import styles from '../../../../styles/setNoneZone.module.css'

function SetNoneZone({ openEditThree, setOpenEditThree, handleEditClickOpenThree, handleEditCloseThree }) {
  const { t } = useTranslation()

  return (
    <div>
      <Dialog open={openEditThree} onClose={handleEditCloseThree}>
        <DialogContent>
        <DialogContentText>
        <Typography variant='h5' className={styles.link}>
              {`${t('Set All Zones to None?')}`}
            </Typography>
          </DialogContentText><br/>
          <DialogContentText>
            {`${t(
              "Setting All Zones To None will erase all location identifiers and set all location identifiers as None. This action is irreversible."
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
            onClick={handleEditCloseThree}
            variant='extended'
            size='medium'
            type='submit'
            className={styles.button}
          >
            {`${t('Continue')}`}
          </Fab>
          <Fab
            color='secondary'
            onClick={handleEditCloseThree}
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

export default SetNoneZone
