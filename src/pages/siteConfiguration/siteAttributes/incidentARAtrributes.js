import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Checkbox, Fab, Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/incidentARAttributes.module.css'
import { useTranslation } from 'react-i18next'

const IncidentARAttributes = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Incidents')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Close and Auto Approve Incidents within 15 min of being entered?'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Show ONLY the Favorite Nature for this site ?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Category Suggestion?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Require Email Verification?')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Uses Custom Levels')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Allow Officer to Approve')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} columnGap={3}>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('View Prior Incidents on device')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Site uses custom incident number')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={12} className={styles.textField}>
                <Typography variant='subtitle2'>{`${t('Report')}`}</Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='basic'
                    checked={selectedValue === 'basic'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Basic')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='complete'
                    checked={selectedValue === 'complete'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Complete')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='customFormatAmazon'
                    checked={selectedValue === 'customFormatAmazon'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(Amazon)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='customFormatJLL'
                    checked={selectedValue === 'customFormatJLL'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(JLL)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='customFormatBurns'
                    checked={selectedValue === 'customFormatBurns'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(Burns)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='customFormatSFMOMA'
                    checked={selectedValue === 'customFormatSFMOMA'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(SFMOMA)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='PREIT'
                    checked={selectedValue === 'PREIT'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(Capital City Mall - PREIT)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='samsung'
                    checked={selectedValue === 'samsung'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(Samsung)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='medImmune'
                    checked={selectedValue === 'medImmune'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Custom Format(MedImmune)')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Activity Reports')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Radio
                  color='secondary'
                  value='basicReport'
                  checked={selectedValue === 'basicReport'}
                  onChange={handleChangeTwo}
                />
                {`${t('Basic')}`}
                <Radio
                  color='secondary'
                  value='customFormatJLL'
                  checked={selectedValue === 'customFormatJLL'}
                  onChange={handleChangeTwo}
                />
                {`${t('Custom Format(JLL)')}`}
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

export default IncidentARAttributes
