import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Checkbox, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/officeMonitoring.module.css'
import { useTranslation } from 'react-i18next'

const OfficeMonitoring = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Officer Monitoring')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable/Disable Officer Monitoring')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable/Disable Out of Geofence Alerts')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Speed Limit (In mph) (0 = Alerts disabled, minimum : 15)')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={styles.footer}>
              <Grid item xs={6} md={2}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save')}`}
                </Fab>
              </Grid>
              <Grid item xs={6} md={1}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Cancel')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default OfficeMonitoring
