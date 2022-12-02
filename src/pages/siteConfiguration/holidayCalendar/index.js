import { Grid, Paper, Typography, Fab } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/holidayCalendar.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Close, SquareEditOutline } from 'mdi-material-ui'
import EditHoliday from './editHoliday'

const HolidayCalendar = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.01,
      field: 'title',
      headerName: 'Title',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'dateFrom',
      headerName: 'Date From',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'dateTo',
      headerName: 'Date To',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'type',
      headerName: 'Type',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'name',
      headerName: 'Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'description',
      headerName: 'Description',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'actions',
      headerName: 'Actions',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Link href='/siteConfiguration/holidayCalendar/editHoliday'>
              <SquareEditOutline className={styles.headingOne} />
            </Link>

            <Close className={styles.headingOne} />
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
        <Link href='/siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/holidayCalendar'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Heliaus Remote Events')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('HOLIDAY CALENDAR')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1.5} className={styles.rightSlide}>
            <Link href='/siteConfiguration/holidayCalendar/addHoliday'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add Holiday')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} className={styles.top}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('All Holidays')}`}
            </Typography>
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

export default HolidayCalendar
