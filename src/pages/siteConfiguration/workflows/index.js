import { Grid, Paper, Typography, TextField, InputAdornment, Divider, Fab } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/workflows.module.css'
import { useTranslation } from 'react-i18next'
import { Close, ContentCopy, Eye, Magnify, SquareEditOutline } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Workflows = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const notify = () => {
    toast.success(`Workflow Copied Successfully`, {
      theme: 'colored'
    })
  }

  const columns = [
    {
      flex: 0.01,
      field: 'name',
      headerName: 'Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'workflow',
      headerName: 'Workflow',
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
      field: 'scope',
      headerName: 'Scope',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'event',
      headerName: 'Event',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'occurence',
      headerName: 'Occurence',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'zones',
      headerName: 'Zones',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'prevents/promotes',
      headerName: 'Prevents/Promotes',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'categories',
      headerName: 'Categories',
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
        return (
          <>
            <ContentCopy onClick={notify} className={styles.icon} />
            <Link href='/siteConfiguration/workflows/editWorkflow'>
              <SquareEditOutline className={styles.icon} />
            </Link>
            <Close className={styles.icon} />
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
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Workflows')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Workflows')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Link href='/siteConfiguration/workflows/addWorkflow'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add A Workflow')}`}
              </Fab>
            </Link>
            <Link href='/siteConfiguration/workflows/workflowZone'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Associate Zones To Workflows')}`}
              </Fab>
            </Link>
            <Link href='/siteConfiguration/workflows/categoryWorkflow'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Category/Workflow Association')}`}
              </Fab>
            </Link>
            <ToastContainer position='bottom-right' closeOnClick autoClose={5000}></ToastContainer>
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

export default Workflows
