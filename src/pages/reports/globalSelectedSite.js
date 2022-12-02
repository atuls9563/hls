import { Grid, Paper } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Magnify from 'mdi-material-ui/Magnify'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import CalendarMonthOutline from 'mdi-material-ui/CalendarMonthOutline'
import Account from 'mdi-material-ui/Account'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import FilePdfBox from 'mdi-material-ui/FilePdfBox'
import ContentCopy from 'mdi-material-ui/ContentCopy'
import SquareEditOutline from 'mdi-material-ui/SquareEditOutline'
import TrashCanOutline from 'mdi-material-ui/TrashCanOutline'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Scheduler from './scheduler'
import { useState } from 'react'
import styles from '../../../styles/globalSelectedSite.module.css'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'

const GlobalSelectedSite = () => {
  const { t } = useTranslation()
  const [openEdit, setOpenEdit] = useState(false)
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const accountAlert = () => {
    alert('Please schedule this report before setting the distribution.')
  }

  const notify = () => {
    toast.success(
      `Success. 
      The reports is being generated. You may check the My Reports section in few minutes and download your report`,
      {
        theme: 'colored'
      }
    )
  }

  const columns = [
    {
      flex: 0.01,
      field: 'reportId',
      headerName: 'Report ID',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'reportFor',
      headerName: 'Report For',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'site',
      headerName: 'Site',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'reportTitle',
      headerName: 'Report Title',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'dateRange',
      headerName: 'Date Range',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'schedule',
      headerName: 'Schedule',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <CalendarMonthOutline onClick={handleEditClickOpen} className={styles.icon} />
            <Scheduler
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
          </>
        )
      }
    },
    {
      flex: 0.1,
      field: 'distribution',
      headerName: 'Distribution',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return <Account onClick={accountAlert} className={styles.icon} />
      }
    },
    {
      flex: 0.1,
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <FilePdfBox className={styles.icon} onClick={notify} />
            <FileDocumentOutline onClick={notify} className={styles.icon} />
            <Link href='/reports/customReportWriter/copyCustomReport'>
              <ContentCopy className={styles.icon} />
            </Link>
            <Link href='/reports/customReportWriter/editCustomReport'>
              <SquareEditOutline className={styles.icon} />
            </Link>
            <TrashCanOutline className={styles.icon} />
          </>
        )
      }
    }
  ]

  const rows = [
    {
      id: 1,
      reportId: 1,
      reportFor: 'Activities',
      site: 'Heliaus Test Site V2(110661)- #1106661',
      reportTitle: 'Random',
      dateRange: 'Last 7 days',
      schedule: 'hello',
      distribution: ''
    },
    {
      id: 2,
      reportId: 2,
      reportFor: 'Activities',
      site: 'Heliaus Test Site V2(110661)- #1106661',
      reportTitle: 'Random',
      dateRange: 'Last 7 days'
    },
    {
      id: 3,
      reportId: 3,
      reportFor: 'Activities',
      site: 'Heliaus Test Site V2(110661)- #1106661',
      reportTitle: 'Random',
      dateRange: 'Shift Wise'
    },
    {
      id: 4,
      reportId: 4,
      reportFor: 'Activities',
      site: 'Heliaus Test Site V2(110661)- #1106661',
      reportTitle: 'Random',
      dateRange: 'Shift Wise'
    },
    {
      id: 5,
      reportId: 5,
      reportFor: 'Activities',
      site: 'Heliaus Test Site V2(110661)- #1106661',
      reportTitle: 'Random',
      dateRange: 'Last 7 days'
    }
  ]

  return (
    <Paper elevation={0}>
      <Grid container>
        <Grid item xs={12} md={12} className={styles.space}>
          <Grid container>
            <Grid item xs={12} md={12} className={styles.headingLine}>
              <Typography variant='h6' className={styles.topHeading}>
                {`${t('All Site Reports')}`}
              </Typography>
              <Typography variant='caption' className={styles.heading3}>
                {`${t('All reports for global selected site Heliaus Test Site V2 (1106661)-#1106661')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={1} className={styles.block}>
              <Typography className={styles.heading4} variant='subtitle2'>
                {`${t('Filter By')}`}:
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Select size='small' fullWidth>
                <MenuItem value='myDeletedReports'>My Deleted Reports</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} md={5}>
              <Typography variant='subtitle2' className={styles.heading1}>
                <Checkbox color='secondary' />
                {`${t('Show Only Scheduled Reports')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.5}>
              <TextField
                size='small'
                fullWidth
                placeholder={`${t('Enter Keywords')}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Typography variant='subtitle2' className={styles.heading2}>
                        { `${t('Filter By')}`}
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
              <ToastContainer closeOnClick autoClose={5000}></ToastContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GlobalSelectedSite
