import { Grid, Paper, Typography, TextField, InputAdornment, Divider } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/provisioningManagers.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, SquareEditOutline } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

const ProvisioningManagers = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.01,
      field: 'provisioningManager',
      headerName: 'Provisioning Manager',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'email',
      headerName: 'Email Id',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'countriesAssociated',
      headerName: 'Countries Associated with',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: '',
      headerName: '',
      minWidth: 120,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <Link href='/applications/heliausOrderManagement/provisioningManagers/editProvisioningManagers'>
            <SquareEditOutline className={styles.icon} />
          </Link>
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
        <Link href='/applications/heliausOrderManagement/provisioningManagers'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Provisioning Managers')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Provisioning Managers')}`}
            </Typography>
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

export default ProvisioningManagers
