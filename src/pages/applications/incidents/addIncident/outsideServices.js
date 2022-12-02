import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Select, MenuItem, Checkbox, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/outsideServices.module.css'
import { useTranslation } from 'react-i18next'

const OutsideServices = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Outside Services')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Service Type')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value=''>Select Service Type</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Fire Dept/Police Dept/EMT service/Vendor')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type='text'
                      fullWidth
                      size='small'
                      placeholder={`${t('Fire Dept/Police Dept/EMT service/Vendor')}`}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Unit#')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Unit#')}`} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Responding Official')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Responding Official')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Requested')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Arrived')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Cleared')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item={12} xs={12}>
            <Divider className={styles.divider} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Service Type')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value=''>Select Service Type</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Outside Services -3')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Outside Services -3')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Unit#')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Unit#')}`} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Responding Official')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Responding Official')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Requested')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Arrived')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Cleared')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item={12} xs={12}>
            <Divider className={styles.divider} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Destination')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Destination')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Report#')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' placeholder={`${t('Report#')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('911 Called')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Checkbox color='secondary' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Police case number(if any)')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Police case number(if any)')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Media on Scene')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Checkbox color='secondary' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Comment')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' rows={2} multiline />
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

export default OutsideServices
