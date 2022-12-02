import { Breadcrumbs, Fab, Grid, Paper, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '../../../../../styles/addHindiTestForm.module.css'
import { useTranslation } from 'react-i18next'

const AddHindiTestForm = () => {
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
        <Link href='/applications/forms/hindiTestForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t('हिंदी टेस्ट फॉर्म')}`}</Typography>
        </Link>
        <Link href='/applications/forms/hindiTestForm/addHindiTestForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add हिंदी टेस्ट फॉर्म')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add हिंदी टेस्ट फॉर्म')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the हिंदी टेस्ट फॉर्म.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('आगंतुक का नाम')}`} <span className={styles.aster}>*</span>
            </Typography>
            <TextField autoFocus required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('आगंतुक का पता')}`} </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={4} className={styles.footer}>
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

export default AddHindiTestForm
