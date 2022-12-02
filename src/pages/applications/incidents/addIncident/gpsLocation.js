import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Fab, Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/gpsLocation.module.css'
import { useTranslation } from 'react-i18next'
import Iframe from 'react-iframe'

const GpsLocation = () => {
  const { t } = useTranslation()

  
  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={10}>
                <Typography variant='h6'>
                  <b>{`${t('GPS Location')}`}</b>
                </Typography>
              </Grid>
              <Grid item xs={12} md={10} className={styles.textField}>
                <Typography variant='subtitle'>
                  <b>{`${t(
                    'Balloon indicates Current Position (Latitude / Longitude), and will appear in the center of the map. To change the current position, drag and drop the balloon to desired location.'
                  )}`}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={7} className={styles.map}>
                <Iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1343765121787!2d75.80593331478795!3d26.835677983160778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6076d0ae8d9%3A0xf4d3e10aaf84d262!2sDolphin%20Softwares!5e0!3m2!1sen!2sin!4v1662721802658!5m2!1sen!2sin'
                  style='border:0;'
                  loading='lazy'
                  width='100%'
                  height='450px'
                  id='myId'
                  display='initial'
                  position='relative'
                />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container className={styles.textField}>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Latitude')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
                <Grid container className={styles.textField}>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Longitude')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
                <Grid container className={styles.textField} justifyContent='center'>
                  <Grid item={12} md={8}>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Point to Selected Zone/Site')}`}
                    </Fab>
                  </Grid>
                  <Grid container className={styles.textField}>
                    <Grid item xs={12} md={12}>
                      <Typography variant='subtitle2'>
                        {`${t('Map Lookup Address')}`} <span className={styles.aster}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField type='text' fullWidth size='small' />
                    </Grid>
                  </Grid>
                  <Grid item={12} md={6} className={styles.textField}>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Locate & Point')}`}
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default GpsLocation
