import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Divider,
  Select,
  MenuItem,
  } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/lostandfound.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, Eye, SquareEditOutline } from 'mdi-material-ui'
import ChangeStatus from './changeStatus'

const Lostandfound = () => {
  
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const columns = [
    {
      flex: 0.01,
      field: 'date&Time',
      headerName: 'Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'item',
      headerName: 'Item#',
      minWidth: 40,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'itemDescription',
      headerName: 'Item Description',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'status',
      headerName: 'Status',
      minWidth: 40,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'images',
      headerName: 'Images',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.011,
      field: '',
      headerName: '',
      minWidth: 250,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Grid container>
              <Grid item xs={12} md={2}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button} onClick={handleEditClickOpen}>
                  <SquareEditOutline />
                  Change Status
                </Fab>
              </Grid>
            </Grid>
            <Eye />
            <SquareEditOutline />
            <ChangeStatus
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
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
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>

        <Link href='/applications/lostandfound'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Lost/Inquiry & Found')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Lost/Inquiry & Found')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Link href='/applications/lostandfound/addLostandfound'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add Lost/Inquiry & Found')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={1}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Print')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={1}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Export')}`}
            </Fab>
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
          <Grid item xs={12} md={3} className={styles.textField}>
            <Select size='small' fullWidth>
              <MenuItem value='lost/Inquiry&Found'>Lost/Inquiry & Found</MenuItem>
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

export default Lostandfound
