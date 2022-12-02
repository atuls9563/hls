import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Checkbox, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/derivedAttributes.module.css'
import { useTranslation } from 'react-i18next'

const DerivedAttributes = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Derived Attributes')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('HB Volume')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 1 day')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('# of Devices')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Barcode Volume')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Event Volume')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('AR Volume')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Incident Volume')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Site Form Volume')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Total Clock-Ins')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Total Clock-Out')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption'>{`${t('Last 30 days')}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('HPW')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('USD Per Week')}`}</Typography>
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

export default DerivedAttributes
