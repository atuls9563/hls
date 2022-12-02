import { Grid, Paper, Typography, TextField, InputAdornment, Divider, Fab, Radio } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/manageDeviceType.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, SquareEditOutline, Close } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

const ManageDeviceType = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const columns = [
    {
      flex: 0.01,
      field: 'deviceTypeName',
      headerName: 'Device Type Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'tangoeItemNumber',
      headerName: 'Tangoe Item Number(TIN)',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'deviceIsTypeFor',
      headerName: 'Device Type Is For',
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
        <Link href='/applications/heliausOrderManagement/manageAccessories/manageDeviceType'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Manage Device Type')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Manage Device Type')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Add')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={3} className={styles.block}>
            <Typography variant='subtitle2' >
              {`${t('Device Type Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField fullWidth type='text' size='small' />
          </Grid>
          <Grid item xs={12} md={3} className={styles.block}>
            <Typography variant='subtitle2' >
              {`${t('Tangoe Item Number (TIN)')}`}
            </Typography>
            <TextField fullWidth type='text' size='small' placeholder={`${t('Enter (TIN)')}`} />
          </Grid>
          <Grid item xs={12} md={3.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Device Type Is For')}`}<span className={styles.aster}>*</span></Typography>
            <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
            {`${t('New Order')}`}
            <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
            {`${t('Change Order')}`}
          </Grid>
          <Grid item xs={12} md={2} className={styles.blockTwo}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save')}`}
            </Fab>
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

export default ManageDeviceType
