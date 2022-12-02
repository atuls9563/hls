import { Grid, Paper, Typography, Fab, TextField, Divider } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addJSAAcknowledgement.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddJsaAcknowledgement = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/forms'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Forms')}`}</Typography>
        </Link>
        <Link href='/applications/forms/jsaAcknowledgement'>
          <Typography className={styles.link} variant='subtitle'>{`${t('JSA Acknowledgement')}`}</Typography>
        </Link>
        <Link href='/applications/forms/jsaAcknowledgement/addJSAAcknowledgement'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add JSA Acknowledgement')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add JSA Acknowledgement')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the JSA Acknowledgement.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t("Security Professional's Name")}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Employee Number')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Job Number')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Client / Worksite Name')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Client / Worksite Address')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Post(s)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t("Account Manager's Name")}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('What am I about to do ?')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('What can go wrong ?')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('How can someone get hurt ?')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('What am I going to do about it ?')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t(
                'I hereby acknowledge that my Manager has reviewed the Job Safety Analysis for each job/post/task for which I am assigned.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t("Emloyee's Signature")}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date Employee Signed')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t("Account Manager's / Supervisor's Signature")}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date Account Manager / Supervisor Signed')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={7} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save Only')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save & Send Email')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}


export default AddJsaAcknowledgement
