import { Breadcrumbs, Checkbox, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/changeOrder.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number-2'
import { DataGrid } from '@mui/x-data-grid'
import Alert from '@mui/material/Alert'
import Link from 'next/link'

const ChangeOrder = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [selectedValue, setSelectedValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  function handleOnChange(value) {
    this.setState({
      phone: value
    })
  }

  const columns = [
    {
      flex: 0.01,
      field: 'imei',
      headerName: 'IMEI',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'deviceName',
      headerName: 'Device Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'carrier',
      headerName: 'Carrier',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'phoneNumber',
      headerName: 'Phone Number',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'changePhoneNumber',
      headerName: 'Change Phone Number?',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'desiredAreaCode',
      headerName: 'Desired Area Code',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'reason',
      headerName: 'Reason',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]

  const rows = [
    {
      id: 1
    }
  ]

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('HELIAUS Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/createOrder/changeOrder'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Change Order')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='h6'>{`${t('Change Order')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>
                  {`${t('Change Type')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('HELIAUS Devices')}`}
                  <br />
                  <Radio
                    color='secondary'
                    value='deviceReplacement'
                    checked={selectedValue === 'deviceReplacement'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Device Replacement')}`}
                  <Radio
                    value='carrierSwap'
                    checked={selectedValue === 'carrierSwap'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Carrier Swap')}`}
                  <Radio
                    value='billRateChange'
                    checked={selectedValue === 'billRateChange'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Bill Rate Change')}`}
                </Typography>
                {selectedValue == 'billRateChange' ? (
                  <Typography variant='subtitle2'>
                    {`${t('Once approved, the bill rate change will get reflected in the next invoice.')}`}
                  </Typography>
                ) : null}
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('HELIAUS Services')}`}
                  <br />
                  <Radio
                    color='secondary'
                    value='portalBill'
                    checked={selectedValue === 'portalBill'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Portal Bill Rate Change')}`}
                  <Radio
                    value='patrolBill'
                    checked={selectedValue === 'patrolBill'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Patrol Bill Rate Change')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Select A Site')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth onChange={e => setInputValue(e.target.value)} />
                {inputValue && inputValue.length <= '4' ? (
                  <Alert icon={false} color='info' className={styles.alert}>
                    {`${t('Please enter 5 or more characters to start searching.')}`}
                  </Alert>
                ) : !inputValue ? null : (
                  <Alert icon={false} color='info' className={styles.alert}>
                    {`${t('No Sites Found')}`}
                  </Alert>
                )}
              </Grid>
              {selectedValue == 'billRateChange' || selectedValue == 'portalBill' || selectedValue == 'patrolBill' ? (
                <Grid item xs={12} md={5.5} className={styles.block}>
                  <Typography variant='subtitle2'>{`${t('Please upload the signed order form')}`}</Typography>
                  <Typography variant='caption'>
                    {`${t(
                      '(You can upload upto 3 files by Holding Down the Ctrl Key while Clicking on the file names in the file open window)'
                    )}`}
                    <span className={styles.aster}>*</span>
                  </Typography>
                  <TextField type='file' size='small' fullWidth />
                </Grid>
              ) : !selectedValue ? null : null}

              {selectedValue == 'deviceReplacement' ? (
                <Grid item xs={12} md={5.5} className={styles.block}>
                  <Typography variant='subtitle2'>{`${t('Is 10.5 Project?')}`}</Typography>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' />
                    {`${t('Yes')}`}
                  </Typography>
                </Grid>
              ) : null}
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle2' className={styles.aster}>{`${t(
                  'Disclaimer: If your device is less than 24 months old then there may be an early termination fee. If you think your device is under warranty. Please mention that in the comments.'
                )}`}</Typography>
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>{`${t('Select devices to be replaced')}`}</Typography>
              </Grid>
           
              
              <Grid item xs={12} md={12} className={styles.block}>
                {inputValue && inputValue.length >= '4' ? (
                  <DataGrid
                    autoHeight
                    columns={columns}
                    rows={rows}
                    pageSize={pageSize}
                    rowsPerPageOptions={[7, 10, 25, 50]}
                    onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                  />
                ) : <>
                <Typography variant='subtitle' className={`${styles.aster} ${styles.headerText}`}>{`${t(
                  'Select a site to view the list of devices'
                )}`}</Typography>
              
                </>}
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Comments')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' multiline rows={2} size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>{`${t('Contact Information')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Phone Number')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              {selectedValue == 'deviceReplacement' || selectedValue == 'carrierSwap' ? (
                <>
                  <Grid item xs={12} md={12} className={styles.block}>
                    <Typography variant='subtitle'>{`${t('Shipping Information')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping Option')}`}
                      <span className={styles.aster}>*</span>
                      <Radio
                        color='secondary'
                        value='yes'
                        checked={selectedValue === 'yes'}
                        onChange={handleChangeTwo}
                      />
                      {`${t('2 Day Shipping')}`}
                      <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                      {`${t('Overnight')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping Name')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <TextField type='text' size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping Street Address')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <TextField type='text' size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>{`${t('Shipping Address Suite, Apt, other')}`}</Typography>
                    <TextField type='text' size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping City')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <TextField type='text' size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping State')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <Select size='small' fullWidth>
                      <MenuItem value='selectZone'>Select Zone</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping Zip')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <TextField type='text' size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping Country (Select a site to get the country name)')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <Select size='small' fullWidth>
                      <MenuItem value='selectZone'>Select Zone</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>
                      {`${t('Shipping Phone Number')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                    <MuiPhoneNumber
                      defaultCountry={'in'}
                      onChange={handleOnChange}
                      variant='outlined'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={5.5} className={styles.block}>
                    <Typography variant='subtitle2'>{`${t('Shipping Comments')}`}</Typography>
                    <TextField type='text' multiline rows={2} size='small' fullWidth />
                  </Grid>
                </>
              ) : null}
              <Grid item xs={12} md={12} className={styles.block}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Place Order')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default ChangeOrder
