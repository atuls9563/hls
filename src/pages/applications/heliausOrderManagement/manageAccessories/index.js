import { Grid, Paper, Typography, TextField, InputAdornment, Divider, Fab, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/manageAccessories.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, SquareEditOutline, Close } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

const ManageAccessories = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.01,
      field: 'item',
      headerName: 'Item',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'tin',
      headerName: 'TIN',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'category',
      headerName: 'Category',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'clientBillable',
      headerName: 'Client Billable',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'patrolService',
      headerName: 'Patrol Service',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'partOfNewOrder',
      headerName: 'Part Of New Order',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'partOfAccesOrder',
      headerName: 'Part Of Access. Order',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'action',
      headerName: 'Action',
      minWidth: 180,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <SquareEditOutline />
            <Close />
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
        <Link href='/applications/heliausOrderManagement/manageAccessories'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Manage Accessories')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Manage Accessories')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Link href='/applications/heliausOrderManagement/manageAccessories/addAccessory'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add A New Accessory')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={6.5} className={styles.headerRight}>
            <Link href='/applications/heliausOrderManagement/manageAccessories/manageDeviceGroup'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Manage Device Group')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/manageAccessories/manageCarrier'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Manage Carrier')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausOrderManagement/manageAccessories/manageDeviceType'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Manage Device Type')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={3} className={styles.search}>
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
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Magnify />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={9} className={`${styles.block} ${styles.headerRight}`}>
            <Link href='/applications/heliausOrderManagement/manageAccessories/manageCountryAssociation'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Manage Carrier, Device Type and Country Association ')}`}
              </Fab>
            </Link>
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

export default ManageAccessories
