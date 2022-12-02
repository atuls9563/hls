import { Grid, Paper, Typography, TextField, InputAdornment, Divider} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/siteInspections.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, Eye } from 'mdi-material-ui'
import SiteInspectionDetails from './siteInspectionDetails'

const SiteInspections = () => {
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
      headerName: 'Date / Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'inspectionDate',
      headerName: 'Inspection Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'inspectionTime',
      headerName: 'Inspection Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'inspectorName',
      headerName: 'Inspector Name',
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
            <Eye onClick={handleEditClickOpen} className={styles.icon}/>
            <SiteInspectionDetails
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

        <Link href='/applications/siteInspections'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Site Inspections')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Site Inspections')}`}
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

export default SiteInspections
