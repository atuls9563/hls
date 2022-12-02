import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Divider, Breadcrumbs } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/manageIncidentNotes.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import AddNote from './addNote'

const ManageIncidentNotes = props => {
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
      flex: 0.01,
      field: 'officer',
      headerName: 'Officer',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'notes',
      headerName: 'Notes',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'attachments',
      headerName: 'Attachments#',
      minWidth: 80,
      sortable: isNameSortable
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
        <Link color='inherit' href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/incidents'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Incidents')}`}</Typography>
        </Link>
        <Link color='inherit' href='/applications/incidents/manageIncidentNotes'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Manage Incident Notes')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Manage Incident Notes')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              className={styles.button}
              onClick={handleEditClickOpen}
            >
              {`${t('Add Note')}`}
            </Fab>

            <AddNote
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Link href='/applications/incidents'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Back to Incident List')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={2} className={styles.header}>
            <Typography variant='subtitle2'>{`${t('Incident No')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={2} className={styles.header}>
            <Typography variant='subtitle2'>{`${t('Date Time')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={2} className={styles.header}>
            <Typography variant='subtitle2'>{`${t('Category')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={6} className={styles.header}>
            <Typography variant='subtitle2'>{`${t('Officer')}`}</Typography>
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
        </Grid>
      </Paper>
    </div>
  )
}

export default ManageIncidentNotes
