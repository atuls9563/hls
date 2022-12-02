import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/packageCheckInDetails.module.css'
import Link from 'next/link'

const PackageCheckInDetails = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Package Check-In Details')}`}
              </Typography>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.buttonOne}>
                {`${t('Print')}`}
              </Fab>
              <Close onClick={handleEditClose} className={styles.icon} />
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
                {`${t('Resident Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('William')}`}
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
                {`${t('Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('03:19:00')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Shipper')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('DHL')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Package Type')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Box')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Piece Count')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('560')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Tracking Number')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('T09123')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                type='submit'
                onClick={handleEditClose}
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
              <Link href='/applications/vvmDashboard/viewPackageCheckInData/packageCheckOut'>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Process to Check-Out')}`}
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default PackageCheckInDetails
