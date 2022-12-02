import { Grid, Paper, Typography, TextField, InputAdornment, Divider, Fab } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/excludeZones.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, Close } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

const ExcludeZones = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.01,
      field: 'zoneId',
      headerName: 'Zone Id',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'Name',
      headerName: 'Name',
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
        <Link href='/applications/heliausOrderManagement/manageAccessories/ExcludeZones'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Manage Carrier')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Manage Carrier')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Add')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Carrier Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField fullWidth type='text' size='small' />
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.blockTwo}>
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

export default ExcludeZones
