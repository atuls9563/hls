import { Grid, Paper, Typography, Fab, TextField, Select, MenuItem } from '@mui/material'
import React from 'react'
import styles from '../../../../styles/addLocationIdentifier.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddLocationIdentifier = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/locationIdentifiers'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Location Identifiers')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/locationIdentifiers/addLocationIdentifier'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add A Location Identifier')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add A Location Identifier')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Location Identifier Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Who notified you?')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value={0}>{`${t('Select A Location Identifier Type')}`}</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('MAC Address / Barcode Number / NFC Code etc')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Zone')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value={0}>{`${t('Select A Zone')}`}</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={7} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save ')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Cancel')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddLocationIdentifier
