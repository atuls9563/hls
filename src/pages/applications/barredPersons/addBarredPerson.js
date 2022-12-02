import { Breadcrumbs, Checkbox, Fab, Grid, Paper, Radio, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from '../../../../styles/addBarredPerson.module.css'
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
        <Link href='/applications/barredPersons'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Barred Persons')}`}
          </Typography>
        </Link>
        <Link href='/applications/barredPersons/addBarredPerson'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Add Barred Person')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Barred Person')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.header}>
            <Radio color='secondary' defaultChecked />
            <Typography variant='subtitle'>{`${t('Global selected site')}`}</Typography>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t('(Heliaus Test Site V2 (1106661) - #1106661)')}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container className={styles.block}>
              <Grid item xs={12} md={4}>
                <Typography variant='subtitle2'>
                  {`${t('First Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='subtitle2'>
                  {`${t('Last Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='subtitle2'>
                  {`${t('Is Permanent')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Checkbox color='secondary' defaultChecked />
              </Grid>
              <Grid item xs={12} md={5.9} className={styles.heading}>
                <Typography variant='subtitle2'>{`${t('Comments')}`}</Typography>
                <TextField minRows={2} multiline type='text'  />
              </Grid>
              <Grid item xs={12} md={5.9} className={styles.heading}>
                <Typography variant='subtitle2'>{`${t('Images')}`}</Typography>
                <TextField type='file' size='small' fullWidth />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Save')}`}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddActivityReport
