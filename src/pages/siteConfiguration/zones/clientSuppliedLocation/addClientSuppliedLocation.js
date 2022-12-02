import { Breadcrumbs, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/addClientSuppliedLocation.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const AddClientSuppliedLocation = () => {
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
        <Link href='/siteConfiguration/zones'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Zones')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/zones/clientSuppliedLocation'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Client Supplied Location ID')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/clientSuppliedLocation/addclientSuppliedLocation'>
          <Typography className={styles.link} variant='subtitle'>{`${t(
            'Add Client Supplied Location ID'
          )}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Client Supplied Location ID')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <span className={styles.header}>
                  <Typography variant='subtitle2'>
                    {`${t('Select Zone')}`}
                    <span className={styles.aster}>*</span>
                  </Typography>
                  &nbsp;
                  <Typography variant='caption'>
                    {`${t('(Zones without Client Supplied Location Id are listed here)')}`}:
                  </Typography>
                </span>
                <Select size='small' fullWidth>
                  <MenuItem value='select'>Select</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Location ID')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddClientSuppliedLocation
