import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Select, MenuItem,Divider } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/residentVisitorHistory.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import { Magnify } from 'mdi-material-ui'

const ResidentVisitorHistory = () => {
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
      field: 'officer',
      headerName: 'Officer',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'activity',
      headerName: 'Activity',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'details',
      headerName: 'Details',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'images',
      headerName: 'Images',
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
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={3.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={4} className={styles.header}>
            <Select size='small' className={styles.select}>
              <MenuItem value='last30Days'>Last 30 Days</MenuItem>
            </Select>
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
          <Grid item xs={12} md={9} className={styles.headerTwo}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Print')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Export')}`}
            </Fab>
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

export default ResidentVisitorHistory
