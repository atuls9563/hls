import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Select, MenuItem, TextField, Checkbox,  } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/basic.module.css'
import { useTranslation } from 'react-i18next'


const Basic = () => {
  const { t } = useTranslation()
  const [personName, setPersonName] = React.useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Incident Basic Info')}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Sub Site')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select
                      size='small'
                      className={styles.select}
                      fullWidth
                      displayEmpty
                      value={personName}
                      onChange={handleChange}
                      renderValue={selected => {
                        if (selected.length === 0) {
                          return <span>{`${t('Select Sub Site')}`}</span>
                        }

                        return selected.join(', ')
                      }}
                    >
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Zone')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Incident Severity')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
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
                    <Typography variant='subtitle2'>
                      {`${t('Date of Incident')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='date' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Time of Incident')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='time' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Mark as Confidential Report')}`}</Typography>
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
                    <Typography variant='subtitle2'>
                      {`${t('Reporting Officer')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select
                      size='small'
                      className={styles.select}
                      fullWidth
                      displayEmpty
                      value={personName}
                      onChange={handleChange}
                      renderValue={selected => {
                        if (selected.length === 0) {
                          return <span>{`${t('Select a Officer')}`}</span>
                        }

                        return selected.join(', ')
                      }}
                    >
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Primary Incident Category*')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Additional Incident Categories')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>
                      {`${t('Narrative')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' multiline rows={2} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Attachments')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type='file'
                      fullWidth
                      size='small'
                      inputProps={{
                        multiple: true
                      }}
                    />
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

export default Basic
