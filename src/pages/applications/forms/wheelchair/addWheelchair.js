import { Grid, Paper, Typography, Fab, TextField, Select, MenuItem } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addWheelchair.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddWheelchair = () => {
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
        <Link href='/applications/forms/wheelchair'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Wheelchair')}`}</Typography>
        </Link>
        <Link href='/applications/forms/wheelchair/addWheelchair'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Wheelchair')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Wheelchair')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Wheelchair.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Officer')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value='select'>Select Officer</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Wheelchair')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Notes')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' multiline rows={2} type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Comment')}`}
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

export default AddWheelchair
