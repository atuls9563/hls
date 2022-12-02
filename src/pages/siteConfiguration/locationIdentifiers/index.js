import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Divider } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/locationIdentifiers.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Close, Magnify, SquareEditOutline, Eye } from 'mdi-material-ui'
import UpdateAllBeacon from './updateAllBeacon'
import BeaconDetails from './beaconDetails'

const LocationIdentifiers = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const columns = [
    {
      flex: 0.01,
      field: 'macId',
      headerName: 'Mac/Id',
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
      flex: 0.01,
      field: 'name',
      headerName: 'Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'zoneName',
      headerName: 'Zone Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'beaconDistance',
      headerName: 'Beacon Distance',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'addedOn',
      headerName: 'Added On',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: '',
      headerName: '',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Link href='/siteConfiguration/locationIdentifiers/editLocationIdentifier'>
              <SquareEditOutline className={styles.headingOne} />
            </Link>
            <Close className={styles.headingOne} />
            <Eye className={styles.headingOne}  onClick={handleEditClickOpen} />
            <BeaconDetails
             openEdit={openEdit}
             setOpenEdit={setOpenEdit}
             handleEditClickOpen={handleEditClickOpen}
             handleEditClose={handleEditClose}/>
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
        <Link href='/siteConfiguration/locationIdentifiers'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Location Identifiers')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2.5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Location Identifiers')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.7} className={styles.textField}>
            <Link href='/siteConfiguration/locationIdentifiers/addLocationIdentifier'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add A Location Identifiers')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={5} className={styles.textFieldTwo}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleEditClickOpen}
              className={styles.button}
            >
              {`${t('Update all beacon calibration')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Export to PDF')}`}
            </Fab>
            <UpdateAllBeacon
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
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
              checkboxSelection
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default LocationIdentifiers
