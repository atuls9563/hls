import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Divider, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/tourDetails.module.css'

const TourDetails = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Tour Details')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Tour Number')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('8745823')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Tour Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('% Required')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('09:46')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Start Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-09-19')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('End Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Vinay Pasapala')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Enabled')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('SG5')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Task Required')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Officer Name')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Active Days')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Niraj')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('# Of Runs ')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Nitesh')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Point Id / Location')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Entry Point')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Exit Point')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('FE Zone1')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('cafeteria > Floor - 1')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('cafeteria > Floor - 1 > FE Zone2')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Clock Room > Floor - 1')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Indoor Play Zone > Floor - 1')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t("Lobby > Floor's - 1")}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Yes')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Main Office > Floor - 1')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Main Office > Floor - 1 > Computer Room in Main Ofc')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Main Office > Floor - 1 > Computer Room in Main Ofc > Cabin in Computer Room')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Office Front Desk > Floor - 1')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Park Area')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Parking Zone2')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Parking Zone3')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Parking Zone4')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingFour}>
                {`${t('Server Room > Floor - 1')}`}
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
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Print')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default TourDetails
