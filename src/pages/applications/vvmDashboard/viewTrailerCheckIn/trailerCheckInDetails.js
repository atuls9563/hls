import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/trailerCheckInDetails.module.css'
import Link from 'next/link'

const TrailerCheckInDetails = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Trailer Check-In Details')}`}
              </Typography>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Print')}`}
              </Fab>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Date & Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Trailer No.')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('T10203')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Tractor No.')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('T56820')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Carrier')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Test')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Notes')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Test')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Driver First Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Erik')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Driver Last Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Selvig')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t("Driver's License#")}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('785412')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('License Expires')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-25')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Address')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('98745 EGER ST')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('City')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Tacoma')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('State')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('AL')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Country')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('USA')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Zip')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('9528620')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('DOB')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('1982-11-25')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Gender')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Male')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Eye Color')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('BL')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Height')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('070 in')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Hair Color')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('RD')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('DL Type')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('C')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Driver Middle Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Yes')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Check in/out  date & time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-22')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Trailer Image')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('N/A')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Tractor Image')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Officer Name')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Seal Pic')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Officer Name')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Headshot')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Officer Name')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                onClick={handleEditClose}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
              <Link href='/applications/vvmDashboard/viewTrailerCheckIn/trailerCheckOut'>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Processs to Check-Out')}`}
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default TrailerCheckInDetails
