import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Select, MenuItem, TextField, Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/address.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'

const Address = () => {
  const { t } = useTranslation()
  const [personName, setPersonName] = useState([])
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
              {`${t('Other Basic Info')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('On Property')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Checkbox color='secondary' defaultChecked />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Room/Street')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Room/Street#')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Building')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Building')}`} />
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
                    <Typography variant='subtitle2'>{`${t('Floor')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Floor')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Apt/Unit')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Apt/Unit')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Area Secured')}`}</Typography>
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
                    <Typography variant='subtitle2'>{`${t('Department')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Department')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Area Type')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Area Type')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Shift Supervisor')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Shift Supervisor')}`} />
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
                    <Typography variant='subtitle2'>{`${t('Officer at Location')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Checkbox color='secondary' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Reprting Officer Type')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='all'>Other</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Officer Post')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' placeholder={`${t('Building')}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Reporting Phone')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
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
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Address
