import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Select, MenuItem, Checkbox, Fab, Autocomplete, Radio, FormHelperText } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/coreAttributes.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number-2'

const CoreAttributes = () => {
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

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  }

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }
  ]

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Core Attributes')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Client Name')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Job Type')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Migration Status')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Is Active')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Force Active')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Force Inactive')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Office#')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Client#')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Client#')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Office Name')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Region')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Division')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Legacy Sub Tier')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Tier 13')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Heliaus Job Number')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Winteam Customer Number')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Billing Address 1')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Billing Address 2')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Billing City')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Billing State')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Billing Zip')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Client Short Name')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Contact One')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Contact Two')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Fax')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Alt. Fax')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Vertical Market')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Physical Addr 1')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Physical Addr 2')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Country')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Physical State')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Physical City')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Physical Zip')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Phone')}`}</Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Alt Phone')}`}</Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Currency')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Currency Code')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Timezone')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Winteam Timezone')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9} className={styles.textField}>
                <Typography variant='subtitle2'>{`${t('Timezone Difference')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={8} className={styles.textField}>
                <Typography variant='subtitle2'>{`${t('Days Served')}`}</Typography>
                <Grid container>
                  <Grid item xs={12} md={1.6} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Monday')}`}
                  </Grid>
                  <Grid item xs={12} md={1.7} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Tuesday')}`}
                  </Grid>
                  <Grid item xs={12} md={2.2} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Wednesday')}`}
                  </Grid>
                  <Grid item xs={12} md={1.9} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Thursday')}`}
                  </Grid>
                  <Grid item xs={12} md={1.4} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Friday')}`}
                  </Grid>
                  <Grid item xs={12} md={1.8} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Saturday')}`}
                  </Grid>
                  <Grid item xs={12} md={1.2} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Sunday')}`}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item={12} xs={12}></Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Latitude')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Longitude')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Radius (In Mtrs.)')}`}</Typography>
                <Grid container>
                  <Grid item xs={4} md={4}>
                    <TextField required variant='outlined' size='small' type='text' />
                  </Grid>
                  <Grid item xs={8} md={8}>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Manage Geofence')}`}
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Day End Time')}`}</Typography>
                <TextField type='time' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Select Language')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Armed')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Heliaus Site')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Zones')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('USSA Covered Site')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Pilot Site')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Activity Indicator')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Patrol Account?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Additional sites/branches/aops/aows/tier 13 to select the sites from'
                )}`}</Typography>
                <Autocomplete
                  multiple
                  id='tags-outlined'
                  options={top100Films}
                  getOptionLabel={option => option.title}
                  defaultValue={[top100Films[1]]}
                  filterSelectedOptions
                  renderInput={params => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Disallow editing of AR, Event and Finalized Incident'
                )}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Activity Closure Process')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enable Gamification?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Allow Device Volume Control?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Quick Record Enabled?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Manual Login Allowed (v10.5)?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('HIPPA Site ?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={1.9}>
                <Typography variant='subtitle2'>{`${t('GPS Probability')}`}</Typography>
                <TextField type='text' fullWidth size='small' className={styles.aster} />
                <FormHelperText className={styles.aster}>{`${t(
                  '(0 will disable the site gps probability and will enable zone gps probability.)'
                )}`}</FormHelperText>
              </Grid>
              <Grid item xs={12} md={1.9}>
                <Typography variant='subtitle2'>{`${t('Accuracy check in Mtr.')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
                <FormHelperText className={styles.aster}>{`${t(
                  '(0 means this value will not be considered,This value cannot be greater than 1000.)'
                )}`}</FormHelperText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Site Start Date')}`}</Typography>
                <TextField type='time' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Visitor Screening')}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Disabled')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Enabled')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Visitor Occupancy')}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Disabled')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Enabled')}`}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Maximum Occupancy')}`}</Typography>
                <TextField type='time' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Fuse Visitor Screening and Occupancy')}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Auto Update Occupancy Stats (Portal) ?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Maximum Occupancy')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Beacon Logic')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Root Cause & Corrective Action Plan Required?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Officer can mute the task and messages alerts on device for 5 minutes?'
                )}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Officers can edit other officers activity or event on device?'
                )}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Facial Recognition required?')}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Optional')}`}
                <br />
                <Typography variant='caption' className={styles.aster}>{`${t(
                  'Facial Recognition required?'
                )}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Select the alert-type for tours, tasks and messages on device'
                )}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Default notification from the device')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Heliaus notification on the device')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Is HELIAUS App Migrated to 10.5?')}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Is Quick Scan Enabled?')}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Camera HELIAUS device app')}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Enable All')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Disable All')}`}
                <br />
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Disable for Selected Apps')}`}
                <br />
                <Typography variant='caption' className={styles.aster}>{`${t(
                  '(Version 10.5, 10.4.0181 and above.)'
                )}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Gallery HELIAUS device app')}`}</Typography>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Enable All')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Disable All')}`}
                <br />
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Disable for Selected Apps')}`}
                <br />
                <Typography variant='caption' className={styles.aster}>{`${t(
                  '(Version 10.5, 10.4.0181 and above.)'
                )}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Is Janitorial Site?')}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
                <br />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Is Enrolled For Time & Attendance?')}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Copy Tasks from 10.4 to 10.5')}`}
                </Fab>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Is ETK Enrolled ?')}`}
                  </Grid>
                  <Grid item xs={12} md={12} className={styles.headerTwo}>
                    <Checkbox color='secondary' />
                    {`${t('Is Post Watch Job ?')}`}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Allow Replacements of Location Identifier(Beacon, NFC, Barcode, GPS)?'
                )}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Last updated On')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Client Risk Score')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Heliaus Risk Score')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Email Sending Technique')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Enforce IP Restriction')}`}</Typography>
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Yes')}`}
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('No')}`}
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

export default CoreAttributes
