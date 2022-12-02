import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Button, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/dynamicTours.module.css'
import CheckBold from 'mdi-material-ui/CheckBold'
import CloseThick from 'mdi-material-ui/CloseThick'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Fab from '@mui/material/Fab'
import DynamicAITour from './dynamicAITourDetails'

const DynamicTours = () => {
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const { t } = useTranslation()
  const [openEdit, setOpenEdit] = useState(false)
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)
  const [anchorEl, setAnchorEl] = useState(true)

  const handleClick = event => {
    setAnchorEl(!anchorEl)
  }




  const rows = [
    {
      id: 1,
      tourName: 'Early Morning Tour (3am - 7am)',
      stops: 5
    },

    {
      id: 3,
      tourName: 'Morning Tour (7am - 11am)',
      stops: 9
    },
    {
      id: 4,
      tourName: 'Midday Tour (11am - 3pm)',
      stops: 4
    },
    {
      id: 5,
      tourName: 'Afternoon Tour (3pm - 7pm)',
      stops: 0
    },
    {
      id: 6,
      tourName: 'Night Tour (7pm - 11pm)',
      stops: 0
    },
    {
      id: 7,
      tourName: 'Late Night Tour (11pm - 3am)',
      stops: 1
    }
  ]

  const columns = [
    {
      flex: 0.3,
      field: 'tourName',
      headerName: 'Tour Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'stops',
      headerName: '# Stops',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <Typography className={styles.tbodyTwo} onClick={handleEditClickOpen}>
            {props?.row?.stops}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      field: 'mon',
      headerName: 'Mon',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <Button onClick={handleClick}>
            {anchorEl ? (
              <div className={styles.colorPick}>
                <CheckBold />
              </div>
            ) : (
              <span className={styles.colorPick3}>
                <CloseThick />
              </span>
            )}
          </Button>
        )
      }
    },
    {
      flex: 0.1,
      field: 'tue',
      headerName: 'Tue',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    },
    {
      flex: 0.1,
      field: 'wed',
      headerName: 'Wed',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    },
    {
      flex: 0.1,
      field: 'thu',
      headerName: 'Thu',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    },
    {
      flex: 0.1,
      field: 'fri',
      headerName: 'Fri',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    },
    {
      flex: 0.1,
      field: 'sat',
      headerName: 'Sat',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    },
    {
      flex: 0.1,
      field: 'sun',
      headerName: 'Sun',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    },
    {
      flex: 0.1,
      field: 'all',
      headerName: 'All',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <div className={styles.colorPick}>
            <CheckBold />
          </div>
        )
      }
    }
  ]

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/dynamicTours'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Dynamic AI Tours')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Dynamic AI Tours')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={styles.headText}>
            <Fab color='secondary' variant='extended' size='medium' className={styles.button2}>
              {`${t('Exclude Zones')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' className={styles.button2}>
              {`${t('Set Tour Start Point')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.headingtext}>
              <span className={styles.aster}>*</span>
              {`${t('Click on the squares below to accept or reject a recommended AI Tour')}`}
            </Typography>
          </Grid>
          <DataGrid
            autoHeight
            columns={columns}
            rows={rows}
            pageSize={pageSize}
            rowsPerPageOptions={[7, 10]}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            
          />
          <DynamicAITour
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            handleEditClickOpen={handleEditClickOpen}
            handleEditClose={handleEditClose}
          />
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.footerText}>
              {`${t('Accepted Dynamic Tours')}`} : <b>42</b>, {`${t('Rejected Dynamic')}`}
              Tours : <b>0</b>.
            </Typography>
          </Grid>
          <Grid container className={styles.footer}>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle2' className={styles.footerText2}>
                <span className={styles.colorPick2}>
                  <CheckBold />
                </span>
                = {`${t('Accepted Tours, that will be required on the day and time shown.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle2' className={styles.footerText2}>
                <span className={styles.colorPick3}>
                  <CloseThick />
                </span>
                ={`${t('Rejected Tours that will not be required on the day and time shown.')}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default DynamicTours
