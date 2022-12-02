import { Breadcrumbs, Fab, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from '../../../../styles/addActivityReport.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const AddActivityReport = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/activityReport'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Activity Report')}`}
          </Typography>
        </Link>
        <Link href='/applications/activityReport/addActivityReport'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Add Activity Report')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Activity Report')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t('Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the AR.')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Officer Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>

            <Select size='small' fullWidth>
              <MenuItem value='selectOfficerName'>Select Officer Name</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Narrative')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField multiline type='text' minRows={2} fullWidth />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Category')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectCategory'>Select Category</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Additional Activity Report Categories')}`}</Typography>
            <TextField type='text' size='small' fullWidth />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Zone (Select from the drop-down below)')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectZone'>Select Zone</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5}className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Images')}`}</Typography>
            <TextField type='file' fullWidth />
          </Grid>
        <Grid item xs={12} md={12}>
          <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
            {`${t('Submit')}`}
          </Fab>
        </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddActivityReport
