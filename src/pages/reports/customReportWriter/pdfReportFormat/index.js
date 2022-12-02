import { Grid, Paper } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Magnify from 'mdi-material-ui/Magnify'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import styles from '../../../../../styles/pdfReportFormat.module.css'
import Typography from '@mui/material/Typography'
import SquareEditOutline from 'mdi-material-ui/SquareEditOutline'
import TrashCanOutline from 'mdi-material-ui/TrashCanOutline'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Fab from '@mui/material/Fab'

const PdfReportFormat = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const rows = [{ id: 1, formatName: 'Mayank', createdOn: '11-2-2020 06:59:22' }]

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
      field: 'formatName',
      headerName: 'Format Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'createdOn',
      headerName: 'Created on',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'actions',
      headerName: 'Actions',
      minWidth: 110,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Link color='inherit' href='/reports/customReportWriter/pdfReportFormat/editPdfReport'>
              <SquareEditOutline onClick={notify} className={styles.icon} />
            </Link>

            <TrashCanOutline className={styles.icon} />
          </>
        )
      }
    }
  ]

  return (
    <Paper elevation={0}>
      <Grid container>
        <Grid item xs={12} md={12} className={styles.space}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Link color='inherit' href='/reports/customReportWriter/pdfReportFormat/addPdfReport'>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Add PDF Report Format')}`}
                </Fab>
              </Link>
            </Grid>
            <Grid item xs={12} md={12} className={styles.extra}>
              <Typography variant='caption' className={styles.heading3}>
                {`${t('You can create different report design formats for your Custom report writer reports.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={styles.extra}>
              <TextField
                size='small'
                fullWidth
                placeholder={`${t('Enter Keywords')}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <Typography variant='subtitle2' className={styles.heading2}>
                        {`${t('Search')}`}
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
            <ToastContainer closeOnClick autoClose={5000}></ToastContainer>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PdfReportFormat
