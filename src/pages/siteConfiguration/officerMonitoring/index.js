import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Divider, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/officerMonitoring.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Close, Magnify, SquareEditOutline } from 'mdi-material-ui'
import AddDevice from './addDevice'


const OfficerMonitoring = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const columns = [
    {
      flex: 0.01,
      field: 'sitePhoneNo',
      headerName: 'Site Phone No.',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'deviceImeiToMonitor',
      headerName: 'Device IMEI to Monitor',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'postName',
      headerName: 'Post Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'superVisorName',
      headerName: 'Supervisor Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'supervisorEmail',
      headerName: 'Supervisor E-Mail',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'supervisorPhoneNo',
      headerName: 'Supervisor Phone No.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'enable/Disable',
      headerName: 'Enable/Disable',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Checkbox />
          </>
        )
      }
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
            <SquareEditOutline className={styles.headingOne}  />
            <Close className={styles.headingOne} />

            <AddDevice
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
        <Link href='/siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/officerMonitoring'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Officer Monitoring')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2.5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Officer Monitoring')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} className={styles.textField}>
            <Fab color='secondary' variant='extended' size='medium' onClick={handleEditClickOpen}  className={styles.button}>
              {`${t('Add Device')}`}
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

export default OfficerMonitoring
