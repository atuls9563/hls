import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Checkbox, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/siteSupervisor.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'

const SiteSupervisor = () => {
  const { t } = useTranslation()

  function handleOnChange(value) {
    this.setState({
      phone: value
    })
  }

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Site Supervisor')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Name')}`}</Typography>
                <TextField type='text' fullWidth size='small' placeholder={`${t('Name')}`} />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Email')}`}</Typography>
                <TextField type='text' fullWidth size='small' placeholder={`${t('Email')}`} />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Cell No')}`}</Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('User ID')}`}</Typography>
                <TextField type='text' fullWidth size='small' placeholder={`${t('User ID')}`} />
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

export default SiteSupervisor
