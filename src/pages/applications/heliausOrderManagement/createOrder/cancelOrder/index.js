import { Breadcrumbs, Checkbox, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/cancelOrder.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'
import { DataGrid } from '@mui/x-data-grid'
import Alert from '@mui/material/Alert'
import Link from 'next/link'

const CancelOrder = () => {
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
      field: 'model',
      headerName: 'Model',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'phoneNumber',
      headerName: 'Phone Number',
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
        <Link href='/applications/heliausOrderManagement/createOrder/cancelOrder'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Cancel Order')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='h6'>{`${t('Cancel Order')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>
                  {`${t('Order Type')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('HELIAUS Devices')}`}
                  <br />
                  <Radio
                    color='secondary'
                    value='device'
                    checked={selectedValue === 'device'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Device')}`}
                </Typography>
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
                  {`${t('Portal')}`}
                  <Radio
                    value='patrolBill'
                    checked={selectedValue === 'patrolBill'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Patrol')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Select A Site')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField
                  type='text'
                  size='small'
                  placeholder={`${t('Search A Site')}`}
                  fullWidth
                  onChange={e => setInputValue(e.target.value)}
                />
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
              <Grid item xs={12} md={12} className={styles.block}>
                {inputValue && inputValue.length >= '4' ? (
                  <>
                    <Typography variant='subtitle'>{`${t('Select devices to be Cancelled')}`}</Typography>
                    <DataGrid
                      autoHeight
                      columns={columns}
                      rows={rows}
                      pageSize={pageSize}
                      rowsPerPageOptions={[7, 10, 25, 50]}
                      onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                    />
                  </>
                ) : (
                  <Grid item xs={12} md={12} className={styles.block}>
                    <Typography variant='subtitle' className={`${styles.aster} ${styles.headerText}`}>{`${t(
                      'Select a site to view the list of devices'
                    )}`}</Typography>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Effective Date')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Effective Date</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>{`${t('Contact/Return Shipping Information')}`}</Typography>
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
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Address Line 1')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Address Line 2')}`}</Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Country (Select a site to get the country name)')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Effective Date</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('State (Select a site to get the State names listed)')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Effective Date</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('City')}`}</Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Zip')}`}</Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Why is this device being cancelled?')}`}
                  <br />
                  <Radio
                    color='secondary'
                    value='alliedUniversal'
                    checked={selectedValue === 'alliedUniversal'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Allied Universal no longer services client')}`}
                  <br />
                  <Radio
                    value='reducedPortal'
                    checked={selectedValue === 'reducedPortal'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Reduced Portal Service - Retained Client')}`}
                  <br />
                  <Radio
                    value='covidRelated'
                    checked={selectedValue === 'covidRelated'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Covid 19 Related')}`}
                  <Radio
                    value='heliausCancel'
                    checked={selectedValue === 'heliausCancel'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('HELIAUS Cancel')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Comments')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' multiline rows={2} size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle2' className={styles.aster}>{`${t(
                  'We will suspend/terminate the service on the old device and the job associated with the device will be charged a non-refundable fee for the equipment not returned.'
                )}`}</Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Submit')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default CancelOrder
