import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import styles from '../../../styles/myReports.module.css'
import Magnify from 'mdi-material-ui/Magnify'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'

const MyReports = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.1,
      field: 'reportSection',
      headerName: 'Report Section',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'startDate',
      headerName: 'Start Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'endDate',
      headerName: 'End Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'description',
      headerName: 'Description',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'requestedAt',
      headerName: 'Requested At(EST)',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'completedAt',
      headerName: 'Completed At(EST)',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'status',
      headerName: 'Status',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]

  const rows = [{ id: 1 }]

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/reports'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Reports')}`}</Typography>
        </Link>
        <Link href='/reports/myReports'>
          <Typography variant='subtitle' className={styles.link}>{`${t('My Reports')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant="outlined" >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('MY REPORTS')}`}
                </Typography>
              </Grid>

              <Grid item xs={12} md={3.4}>
                <TextField
                  size='small'
                  fullWidth
                  placeholder={`${t('Enter Keywords')}`}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        {' '}
                        <Typography variant='subtitle2' className={styles.heading2}>
                          {`${t('Filter by')}`}
                        </Typography>{' '}
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
            </Grid>
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
    </>
  )
}

export default MyReports
