import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../styles/editBeaconCaliberation.module.css'
import React from 'react'
import { TextField, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

const EditBeaconCaliberation = ({ openEditThree, setOpenEditThree, handleEditClickOpenThree, handleEditCloseThree }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditThree} onClose={handleEditCloseThree}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Edit Beacon Calibration')}`}
              </Typography>
              <Close onClick={handleEditCloseThree} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle2'>{`${t('RSSI Value (Please enter between -65 to -95)')}`}</Typography>
                  <TextField type='text' size='small' fullWidth />
                </Grid>
                <Grid item xs={12} md={12} className={styles.block}>
                  <Typography variant='subtitle2'>{`${t('Meter Distance')}`}</Typography>
                  <TextField type='text' size='small' fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Update')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default EditBeaconCaliberation
