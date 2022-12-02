import { Grid, Paper, Typography, Fab, TextField } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addMemo.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddMemo = () => {
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
        <Link href='/applications/forms/memo'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Memo')}`}</Typography>
        </Link>
        <Link href='/applications/forms/memo/addMemo'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Memo')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Memo')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t('Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Memo.')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Upload Document')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Comments,if any')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
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


export default AddMemo
