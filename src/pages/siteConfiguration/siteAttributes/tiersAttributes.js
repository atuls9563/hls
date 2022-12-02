import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Checkbox, Fab, Divider, Select, MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/tiersAttributes.module.css'
import { useTranslation } from 'react-i18next'

const TiersAttributes = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Tiers')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Entity Tier 1')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Division Tier 2')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Region Tier 3')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('BMGM Tier 4')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('AOP Tier 5')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Client Tier 6')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('AOW Tier 7')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('RVP Tier 8')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Area Manager Tier 9')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('VP Retail National Tier 10')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Property Manager Tier 11')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Portfolio Manager Tier 12')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField}>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Tier 13')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField}>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  <Checkbox color='secondary' />
                  {`${t('Override Client Tier')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Client Tier</MenuItem>
                </Select>
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

export default TiersAttributes
