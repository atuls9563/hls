import { Grid, Paper, Typography, TextField, InputAdornment, Divider, Fab, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/zones.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, SquareEditOutline, Close, MapMarker } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import SetDefaultZone from './setDefaultZone'
import SetAllGpsZone from './setAllGpsZone'
import SetNoneZone from './setNoneZone'
import AssociateTourPoints from './associateTourPoints'

const Zones = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const [openEditThree, setOpenEditThree] = useState(false)
  const [openEditFour, setOpenEditFour] = useState(false)

  const handleEditClickOpenFour = () => setOpenEditFour(true)
  const handleEditCloseFour = () => setOpenEditFour(false)

  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditCloseThree = () => setOpenEditThree(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

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
      field: 'name',
      headerName: 'Name',
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
      field: 'class',
      headerName: 'Class',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'locationIdentifierNumber',
      headerName: 'Location Identifier Number',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'locationIdentifier',
      headerName: 'Location Identifier',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'workflows',
      headerName: 'Workflows',
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
            <MapMarker className={styles.icon}  onClick={handleEditClickOpenFour}/>
            <Link href='/siteConfiguration/zones/editZoneDetails' >
              <SquareEditOutline  className={styles.icon}/>
            </Link>
            <Close className={styles.icon}/>
            <AssociateTourPoints
             openEditFour={openEditFour}
             setOpenEditFour={setOpenEditFour}
             handleEditClickOpenFour={handleEditClickOpenFour}
             handleEditCloseFour={handleEditCloseFour}/>
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
          <Typography variant='subtitle' className={styles.icon}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.icon}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/zones'>
          <Typography className={styles.icon} variant='subtitle'>{`${t('Zones')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Zones')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} className={styles.headerRight}>
            <Link href='/siteConfiguration/zones/createZone'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add/Edit Zones(MAP)')}`}
              </Fab>
            </Link>
            <Fab
              color='secondary'
              onClick={handleEditClickOpen}
              variant='extended'
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('Set Default Zone (for centering the Data Visualization MAP)')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Export')}`}
            </Fab>
            <SetDefaultZone
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
          <Grid item xs={12} md={9} className={`${styles.block} ${styles.headerRight}`}>
            <Fab
              color='secondary'
              onClick={handleEditClickOpenTwo}
              variant='extended'
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('Set All Zones To GPS Zones')}`}
            </Fab>
            <Fab
              color='secondary'
              onClick={handleEditClickOpenThree}
              variant='extended'
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('Set All Zones To None')}`}
            </Fab>
            <Link href='/siteConfiguration/zones/clientSuppliedLocation'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Client Supplied Location ID')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.block} ${styles.headerRight}`}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Updated Edited Zone Name')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Deleted Selected Zones')}`}
            </Fab>
            <SetAllGpsZone
              openEditTwo={openEditTwo}
              setOpenEditTwo={setOpenEditTwo}
              handleEditClickOpenTwo={handleEditClickOpenTwo}
              handleEditCloseTwo={handleEditCloseTwo}
            />
            <SetNoneZone
              openEditThree={openEditThree}
              setOpenEditThree={setOpenEditThree}
              handleEditClickOpenThree={handleEditClickOpenThree}
              handleEditCloseThree={handleEditCloseThree}
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

export default Zones
