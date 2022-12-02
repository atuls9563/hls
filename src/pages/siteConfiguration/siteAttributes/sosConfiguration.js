import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Checkbox, Fab, Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/sosConfiguration.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'

const SOSConfiguration = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

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
              {`${t('SOS Configurationg')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={2}>
                <Typography variant='subtitle2'>{`${t('SOS Enabled?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography variant='subtitle2'>{`${t('SOS / All Clear alert will be send to?')}`}</Typography>
                <Typography variant='subtitle2'>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('All Site Explicit Contacts')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('As Per Contact Distribution(SOS/ALL CLEAR Alert)')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('SOS Number')}`}</Typography>
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

export default SOSConfiguration
