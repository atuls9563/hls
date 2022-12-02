import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../styles/updateAllBeacon.module.css'
import React from 'react'
import { TextField, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

const UpdateAllBeacon = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Update All Beacon Calibration')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle' className={styles.topHeading}>
                    {`${t('Enter RSSI Value')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField type='text' size="small" className={styles.textArea} placeholder={`${t('RSSI Value')}`} />
                  <Typography variant='caption'>{`${t(
                    '(This value will be updated for all beacons for this site)'
                  )}`}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' onClick={handleEditClose} className={styles.button2}>
                {`${t('Update')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='submit' onClick={handleEditClose} className={styles.button2}>
                {`${t('Close')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default UpdateAllBeacon
