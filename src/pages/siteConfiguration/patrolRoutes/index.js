import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Divider, Checkbox, Switch } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/allPatrolRoutes.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Close, ContentCopy, Eye, Magnify, SquareEditOutline } from 'mdi-material-ui'

const PatrolRoutes = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const columns = [
    {
      flex: 0.01,
      field: 'routeName',
      headerName: 'Route Name',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'routeAlias',
      headerName: 'Route Alias',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'startTime',
      headerName: 'Start Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'endTime',
      headerName: 'End Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'enable/Disable',
      headerName: 'Enable/Disable',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'dayOfPatrol',
      headerName: 'Day of Patrol',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'actions',
      headerName: 'Actions',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: '',
      headerName: '',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <SquareEditOutline className={styles.headingOne} />
            <Eye className={styles.headingOne} />
            <Typography variant='subtitle' className={styles.headingOne}>{`${t('S')}`}</Typography>
            <ContentCopy className={styles.headingOne} />
            <Switch defaultChecked />
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
        <Link href='/siteConfiguration/allPatrolRoutes'>
          <Typography variant='subtitle' className={styles.link}>{`${t('All Patrol Routes')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2.5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('All Patrol Routes')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} className={styles.textField}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              onClick={handleEditClickOpen}
              className={styles.button}
            >
              {`${t('Add New Route')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={12} className={styles.top}>
            <Typography variant='caption' className={`${styles.aster} ${styles.headingTwo}`}>
              {`${t('All Patrol Routes for global selected site Heliaus Test Site V2 (1106661) - #1106661')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='caption' className={`${styles.aster} ${styles.headingTwo}`}>
              <b>{`${t('Note: Atleast one stop is required to enable the route.')}`}</b>
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

export default PatrolRoutes
