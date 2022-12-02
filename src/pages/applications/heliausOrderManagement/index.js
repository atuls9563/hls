import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Divider,
  Breadcrumbs,
  Select,
  MenuItem
} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/heliausOrderManagement.module.css'
import { useTranslation } from 'react-i18next'
import { Close, Magnify } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import ApprovedRejectOrder from './approved&RejectOrder'
import ApproveCancel from './approveCancel'

const HeliausOrderManagement = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const columns = [
    {
      flex: 0.01,
      field: 'orderNo',
      headerName: 'Ord. No.',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Close className={`${styles.icon} ${styles.heading2}`} />
            <Link href='/applications/heliausOrderManagement/orderStatus'>
              <Typography variant='subtitle' className={`${styles.icon} ${styles.heading2}`}>
                {`${t('2341')}`}
              </Typography>
            </Link>
          </>
        )
      }
    },
    {
      flex: 0.01,
      field: 'site',
      headerName: 'Site',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'approved',
      headerName: 'Approved',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Typography
              variant='subtitle'
              onClick={handleEditClickOpen}
              className={`${styles.icon} ${styles.heading2}`}
            >
              {`${t('No')}`}
            </Typography>

            <ApprovedRejectOrder
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
          </>
        )
      }
    },
    {
      flex: 0.01,
      field: 'type',
      headerName: 'Type',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'orderDate',
      headerName: 'Order Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'csm',
      headerName: 'CSM',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'qtyOrdered',
      headerName: 'Qty. Ord.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'qtyFil',
      headerName: 'Qty. Fil.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'orderStatus',
      headerName: 'Order Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'equipProv',
      headerName: 'Equip. Prov. Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: '',
      headerName: '',
      minWidth: 180,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Fab
              color='secondary'
              variant='extended'
              onClick={handleEditClickOpenTwo}
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('Update Status')}`}
            </Fab>
            <ApproveCancel
              openEditTwo={openEditTwo}
              setOpenEditTwo={setOpenEditTwo}
              handleEditClickOpenTwo={handleEditClickOpenTwo}
              handleEditCloseTwo={handleEditCloseTwo}
            />
          </>
        )
      }
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
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('HELIAUS Order Management')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4.7}>
            <Typography variant='h5' className={styles.link}>
              {`${t('HELIAUS Order Management')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7.3} className={styles.headerRight}>
            <Link href='/applications/heliausOrderManagement/equipmentProvisionedReport'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Equipment Provisioned Report')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/heliausServices'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Heliaus Services')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/provisioningManagers'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Provisioning Managers')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.topTen} ${styles.headerRight}`}>
            <Link href='/applications/heliausOrderManagement/orderCSMS'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('CSMs')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/orderCommisionedRecipients'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Commisioned Receipents')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/addHeliausOrderManagement'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Print')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/addHeliausOrderManagement'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Export')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={7} className={styles.topTen}>
            <Typography variant='subtitle'>{`${t('Create Order')}`}</Typography>
            <Link href='/applications/heliausOrderManagement/createOrder/addOrder'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add Order')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/createOrder/changeOrder'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Change Order')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/createOrder/cancelOrder'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Cancel Order')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={5} className={`${styles.topTen} ${styles.headerRight}`}>
            <Typography variant='subtitle'>{`${t('Provisioning')}`}</Typography>
            <Link href='/applications/heliausOrderManagement/returnRMA'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Return/RMA List')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/manageAccessories'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Manage Accesories')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} md={1.5} className={styles.textField}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('Date Filter')}`}:
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={styles.textField}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('From')}`}
                </Typography>
                <TextField type='date' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5} className={styles.textField}>
                <Typography variant='subtitle2' className={styles.heading}>
                  {`${t('To')}`}
                </Typography>
                <TextField type='datetime-local' size='small' />
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Go')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Country')}`}:</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Filter')}`}:</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('CSM')}`}:</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.search}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={9} className={styles.search}>
            <Typography variant='h5' className={styles.link}>
              {`${t('Orders')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={`${styles.topTen} ${styles.headerRight}`}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Enter Keywords')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Typography variant='subtitle2' className={styles.heading2}>
                      {`${t('Filter by')}`}
                    </Typography>
                    <Divider orientation='vertical' className={styles.divider3} />
                    <Magnify />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} className={styles.table}>
            <DataGrid
              autoHeight
              columns={columns}
              rows={rows}
              pageSize={pageSize}
              rowsPerPageOptions={[7, 10, 25, 50]}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default HeliausOrderManagement
