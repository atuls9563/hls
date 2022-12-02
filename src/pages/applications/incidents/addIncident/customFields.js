import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/customFields.module.css'
import { useTranslation } from 'react-i18next'

const CustomFields = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Email')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Email')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Year')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='date' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Signature')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='file' fullWidth size='small' placeholder={`${t('Choose Files')}`} inputProps={{
                        multiple: true
                      }}/>
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

export default CustomFields
