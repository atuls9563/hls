import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Divider, Breadcrumbs } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/events.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, Eye } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'

const Events = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.01,
      field: 'date&Time',
      headerName: 'Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'evntId',
      headerName: 'Event ID',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'officer',
      headerName: 'Officer',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'narrative',
      headerName: 'Narrative',
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
      field: 'zone',
      headerName: 'Zone',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'images',
      headerName: 'Images',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return <Eye />
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
        <Link color='inherit' href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link color='inherit' href='/applications/events'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Events')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Events')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Link href='/applications/events/addEvent'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add Event')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={4.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={4} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
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

export default Events
