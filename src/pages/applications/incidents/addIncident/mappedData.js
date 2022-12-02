import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Select, MenuItem, Checkbox, Divider, Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/mappedData.module.css'
import { useTranslation } from 'react-i18next'

const MappedData = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Mapped Data')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Visibility/Weather')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Visibility/Weather')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Population Presence and Density')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type='text'
                      fullWidth
                      size='small'
                      placeholder={`${t('Population Presence and Density')}`}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Location Condition')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Location Condition')}`} />
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
                    <Typography variant='subtitle2'>{`${t('Access Type')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Access Type')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Motive')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Motive')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Internal Contributing Factors')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type='text'
                      fullWidth
                      size='small'
                      placeholder={`${t('Internal Contributing Factors')}`}
                    />
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
                    <Typography variant='subtitle2'>{`${t('Holiday')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Checkbox color='secondary' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Open or Closed for Business?')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type='text'
                      fullWidth
                      size='small'
                      placeholder={`${t('Open or Closed for Business?')}`}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('External Contributing Factors')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type='text'
                      fullWidth
                      size='small'
                      placeholder={`${t('External Contributing Factors')}`}
                    />
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
                    <Typography variant='subtitle2'>{`${t('Subjects Involved by Type')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Subjects Involved by Type')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Vehicles Involved')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Vehicles Involved')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Actions Taken')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Actions Taken')}`} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} columnGap={4}>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Outcome Resolution')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Outcome Resolution')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Time Cleared')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Outcomes')}`} />
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

export default MappedData
