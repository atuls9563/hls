import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Select, MenuItem, TextField, Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/employee.module.css'
import { useTranslation } from 'react-i18next'

const Employee = () => {
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
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('First Name')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Last Name')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Unit')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Building')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Address Line 1')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Address Line 2')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                      {`${t('City')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('Country')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>
                      {`${t('State')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value=''>Select State</MenuItem>
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
                      {`${t('Zip')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Cell Phone No.')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.asterTwo}>
                      {`${t('Note: SMS alerts will be sent to cell phone no.')}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Cell Phone No. -2')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Private No.')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Office Phone')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Alt No.')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Home No.')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Fax No.')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Primary E-mail Id')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.asterTwo}>
                      {`${t('Note: Email alerts will be sent to primary email address.')}`}
                    </Typography>
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
                    <Typography variant='subtitle2'>{`${t('Primary E-mail Id - 2')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Secondary E-mail Id')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t("Driver's License")}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Pin Number')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Driving Directions')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' rows={2} multiline />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Storage Unit')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Parking Space 1')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Parking Space 2')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Emergency Contact First Name')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Emergency Contact Last Name')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Emergency Contact Cell No.')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Headshot')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='file' fullWidth size='small' />
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
                    <Typography variant='subtitle2'>{`${t('Badge Keytag Barcode')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Notes')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField type='text' fullWidth size='small' rows={2} multiline />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Enable 2 Step?')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />{' '}
                    {`${t('Yes')}`}{' '}
                    <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                    {`${t('No')}`}
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

export default Employee
