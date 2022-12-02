import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../../styles/parkingAndVehicleViolationsDetails.module.css'

const ParkingAndVehicleViolationsDetails = ({
  openEditTwo,
  setOpenEditTwo,
  handleEditClickOpenTwo,
  handleEditCloseTwo
}) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditTwo} onClose={handleEditCloseTwo}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Parking and Vehicle Violations Detail')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Date & Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Ticket Number')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('09:46')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('License Plate No.')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('202258')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Date')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-09-19')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Post Name (i.e. Main Gate or Security Office)')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('SG5')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('02:18:00')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Officer Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Niraj')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Location')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Vancouver')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Vehicle Make')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Bohra Hemant')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Vehicle Model')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Goyal Mayank')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Vehicle Color')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Black')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Driver Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Naresh Ravva')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Narrative')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Yes')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Images')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('No')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Parking Violation Status')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('N/A')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Amount')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Yes')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Payee')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('No')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Payment Method')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('N/A')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Processed By')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Yes')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Select a Category')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('No')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Print')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Print (Custom)')}`}
              </Fab>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                type='submit'
                onClick={handleEditCloseTwo}
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default ParkingAndVehicleViolationsDetails
