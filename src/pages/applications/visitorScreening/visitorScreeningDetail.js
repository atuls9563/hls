import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/visitorScreeningDetail.module.css'

const VisitorScreeningDetail = ({
  openEditThree,
  setOpenEditThree,
  handleEditClickOpenThree,
  handleEditCloseThree
}) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditThree} onClose={handleEditCloseThree}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Expected Trailer Details')}`}
              </Typography>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Print')}`}
              </Fab>
              <Close onClick={handleEditCloseThree} className={styles.icon} />
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
                {`${t("Take visitor's temperature. Does the person have a fever (>100.3°F)?")}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('T10203')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Officer')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t("Have you travelled to any of these locations in the last 14 days? China, Italy, Spain")}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('T56820')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Status')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t("Have you had contact with anyone with COVID-19 in the last 14 days?")}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Test')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Screening Duration')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t("Do you currently have a fever (>100°F), difficulty breathing, or cough?")}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Test')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t("In the last 14 days, have you had a fever(>100°F), difficulty, or cough?")}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('11:05:2020 00:00')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Zone')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('End Date & Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Image')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default VisitorScreeningDetail
