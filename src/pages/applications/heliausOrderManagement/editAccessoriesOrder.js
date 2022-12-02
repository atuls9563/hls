import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Select, MenuItem, TextField, Checkbox, Breadcrumbs, Divider, Radio, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/editAccessoriesOrder.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'
import Link from 'next/link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const EditAccessoriesOrder = () => {
  const columns = [
    {
      flex: 0.01,
      id: 'parts',
      label: 'Parts',
      minWidth: 80,
      colSpan: ({ row }) => {
        if (row.id === 'SUBTOTAL' || row.id === 'TOTAL') {
          return 1
        }
        if (row.id === 'TAX') {
          return 1
        }

        return undefined
      },
      valueGetter: ({ value, row }) => {
        if (row.id === 'SUBTOTAL' || row.id === 'TAX' || row.id === 'TOTAL') {
          return row.label
        }

        return value
      }
    },
    {
      flex: 0.01,
      id: 'quantity',
      label: 'Quantity',
      minWidth: 80
    },
    {
      flex: 0.01,
      id: 'clientPrice',
      label: 'Client Price',
      minWidth: 80
    },
    {
      flex: 0.01,
      id: 'totalClientPrice',
      label: 'Total Client Price',
      minWidth: 80
    },
    {
      flex: 0.01,
      id: 'jobCost',
      label: 'Job Cost',
      minWidth: 80
    },
    {
      id: 0.01,
      id: 'totalJobCost',
      label: 'Total Job Cost',
      minWidth: 80
    }
  ]

  function createData(parts, quantity, clientPrice, totalClientPrice, jobCost, totalJobCost) {
    return { parts, quantity, clientPrice, totalClientPrice, jobCost, totalJobCost }
  }

  const rows = [
    createData('India', 'IN', 1324171354, 3287263, 200, 'jeo'),
    createData('China', 'CN', 1403500365, 9596961, 150, 750)
  ]

  const { t } = useTranslation()
  const [page, setPage] = useState(0)
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
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Heliaus Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/editAccessoriesOrder'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Edit Accessory & Supplies Order')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('EDIT ACCESSORIES ORDER-#23727')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={7.5}>
                <Typography variant='subtitle2'>
                  <Checkbox color='secondary' />
                  {`${t('My order include a Bluetooth printer, Bluetooth scanner, or an intrinsically safe case')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Select A Site')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' placeholder={`${t('Room/Street#')}`} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle' className={styles.headingTwo}>{`${t(
              'Please fill in the quantity of items you wish to order'
            )}`}</Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' colSpan={2}>
                      Device Accessory
                    </TableCell>
                    <TableCell align='right' colSpan={4}>
                      All amounts in USD
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => {
                    return (
                      <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                        {columns.map(column => {
                          const value = row[column.id]

                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ maxHeight: 440 }} className={styles.textField}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' colSpan={2}>
                      Location Identifier
                    </TableCell>
                    <TableCell align='right' colSpan={4}>
                      All amounts in USD
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => {
                    return (
                     
                     <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                        {columns.map(column => {
                          const value = row[column.id]
                          
                          return (
                            
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ maxHeight: 440 }} className={styles.textField}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' colSpan={2}>
                      VVM
                    </TableCell>
                    <TableCell align='right' colSpan={4}>
                      All amounts in USD
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => {
                    return (
                      
                      <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                        {columns.map(column => {
                          const value = row[column.id]
                          
                          return (
                            
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Comments')}`}
            </Typography>
            <TextField type='text' fullWidth size='small' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Typography variant='subtitle' className={styles.headingTwo}>{`${t('Contact Information')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small'  />
              </Grid>
              <Grid item xs={12} md={3.9}>
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
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Typography variant='subtitle' className={styles.headingTwo}>{`${t('Shipping Information')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                {`${t('Overnight')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('2nd Day')}`}
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Street Address')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Shipping Address Suite, Apt, other')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping City')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping State')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectCategory'>Select Category</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Zip')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Country')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectCategory'>Select Category</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
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
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.textField}>
            <Typography variant='subtitle2'>{`${t('Shipping Comments')}`}</Typography>
            <TextField type='text' multiline rows={2} fullWidth size='small' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}></Grid>
          <Grid item xs={12} md={6} className={styles.textField}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Update Order')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditAccessoriesOrder
