import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Select, MenuItem, Checkbox, Divider, Fab, Autocomplete, Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/vvmAttributes.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'

const VVMAttributes = () => {
  const { t } = useTranslation()
  const [categoryLevelOne, setCategoryLevelOne] = useState([])
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
              {`${t('VVM')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('VVM Resident Process?')}`}</Typography>
                <Typography variant='caption'>{`${t(
                  'When this checkbox is checked, the visitor/contractor Check In process works against Employees/Residents'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Employee Search?')}`}</Typography>
                <Typography variant='caption'>{`${t(
                  "When this checkbox is checked, this allows to search employees while checking in the employees. If you don't have a populated list of employees, and, would like to just check them in, let this be unchecked"
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Safelist Limit Based On')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Safelist Limit for days')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Safelist Maximum Per 30 Days')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Badge/Parking Pass format')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Enable Badge/Parking Pass Printing for Employee/Resident'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Disable Returning Visitors/Contractors')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Notify Employees/Residents for Visitor/Contractor Check In'
                )}`}</Typography>
                <Typography variant='subtitle2'>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('All Employees/Residents')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Selected Employees/Residents')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Notifcation Type for Visitor/Contractor Check In'
                )}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('None')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('SMS')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Email')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Both')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Notify Employees/Residents for Package Check In')}`}</Typography>
                <Typography variant='subtitle2'>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('All Employees/Residents')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Selected Employees/Residents')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Notifcation Type for Package Check In')}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('None')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('SMS')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Email')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Both')}`}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable 2 Step?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Bobtail Checkout from Trailer Check In?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable BT Badge Printing from Mobile?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable VVM Portal')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Site Logo')}`}
                  <span className={styles.aster}> {`${t('Size(400x360)')}`}</span>
                </Typography>
                <TextField type='file' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Sub Domain')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Tiny URL')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable SeeSaw')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Security Desk Phone Number')}`}</Typography>
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
                <Typography variant='subtitle2'>{`${t(
                  'Enable Notification For Visitors/Contractors Checked-In But not Checked-Out'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Show Parking Categories')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Print Parking Ticket')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Site Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Terms and Conditions')}`}</Typography>
                <TextField type='text' multiline rows={2} fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Address Line 1')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Address Line 2')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('City')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('State')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Zip')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Additional Information')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Safety Contact Info')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable DL Scan')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Default Visitor Expiration Date')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Default Contractor Expiration Date')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable VVM Search V2?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Manage VVM Search V2 Settings')}`}
                </Fab>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'How many past days to check for returning visitors/contractor (Portal Only)?'
                )}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Require new barred persons review?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'New barred persons review number of days to review'
                )}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Require barred person review at check in without match?'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enabled barred person check for trailer in/out?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Allow Checked In Visitor/Contractor Editing on Portal?'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Free to Tow?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Free to Tow in Days?')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <Typography variant='caption' className={styles.aster}>{`${t('(0 = Lifetime)')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Free to Tow after # of Violations in 0 days?')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Import/Export Resident Portal?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Parking Pass Print in Trailer?')}`}</Typography>
                <Checkbox color='secondary' />
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

export default VVMAttributes
