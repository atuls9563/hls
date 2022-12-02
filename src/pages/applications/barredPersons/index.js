import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Divider,
  Radio,
  Select,
  MenuItem,
  Breadcrumbs
} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/barredPersons.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, Eye } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'

const BarredPersons = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [selectedValue, setSelectedValue] = useState('yes')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const columns = [
    {
      flex: 0.01,
      field: 'createDate&Time',
      headerName: 'Create/Add Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'firstName',
      headerName: 'First Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'lastName',
      headerName: 'Last Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'expirationDate',
      headerName: 'Expiration Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'comments',
      headerName: 'comments',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'images',
      headerName: 'Images',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'barringSite',
      headerName: 'Barring Site',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'barredFor',
      headerName: 'Barred For',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'resident/employeeName',
      headerName: 'Resident/Employee Name',
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
      field: 'action',
      headerName: 'Action',
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
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/barredPersons'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Barred Persons')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2.5}>
            <Typography variant='h5' className={styles.link}>
              {`${t('Barred Persons')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link href='/applications/barredPersons/addBarredPerson'>
              <Fab className={styles.button} color='secondary' variant='extended' size='medium' type='submit'>
                {`${t('Add Barred Person')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className={styles.header}>
            <Fab color='secondary' variant='extended' className={styles.button} size='medium' type='submit'>
              {`${t('Search')}`}
            </Fab>
            <Fab color='secondary' variant='extended' className={styles.button} size='medium' type='submit'>
              {`${t('PDF with small Images')}`}
            </Fab>
            <Fab color='secondary' variant='extended' className={styles.button} size='medium' type='submit'>
              {`${t('PDF with Big Images')}`}
            </Fab>
            <Fab color='secondary' variant='extended' className={styles.button} size='medium' type='submit'>
              {`${t('CSV')}`}
            </Fab>
          </Grid>

          <Grid item xs={12} md={4} className={styles.content}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Honor Expiration Date?')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingFive}>
              <Radio color='secondary' value='small' checked={selectedValue === 'small'} onChange={handleChangeTwo} />
              {`${t('No')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingFive}>
              <Radio color='secondary' value='small' checked={selectedValue === 'small'} onChange={handleChangeTwo} />
              {`${t('Yes')}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={3.5} className={styles.search}>
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
          <Grid item xs={12} md={2} className={styles.select}>
            <Select size='small' fullWidth>
              <MenuItem value='globallyBarred'>Globally Barred</MenuItem>
              <MenuItem value='showAll'>Show All</MenuItem>
            </Select>
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

export default BarredPersons
