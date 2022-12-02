import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Divider,
  Breadcrumbs,
  Select,
  MenuItem
} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/incidents.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify, Eye } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import FileEditOutline from 'mdi-material-ui/FileEditOutline'

const Incidents = props => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [personName, setPersonName] = React.useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }

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
      field: 'status',
      headerName: 'Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'incident',
      headerName: 'Incident#',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'subsite',
      headerName: 'Sub Site',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'category',
      headerName: 'Category',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'additionalCategories',
      headerName: 'Additional Categories',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'incidentSeverity',
      headerName: '	Incident Severity',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'images',
      headerName: 'Images',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'view',
      headerName: 'Icon',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Eye />

            <Link href='/applications/incidents/manageIncidentNotes'>
              <FileEditOutline className={styles.icon} />
            </Link>
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
        <Link color='inherit' href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link color='inherit' href='/applications/incidents'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Incidents')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Incidents')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link href='/applications/incidents/addIncident'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add an Incident')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={7}>
            <Link href='/applications/incidents/allOpenIncidents'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('All Open Incidents')}`}
              </Fab>
            </Link>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={2.3}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('From')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField fullWidth type='datetime-local' size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2.3}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('To')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <TextField fullWidth type='datetime-local' size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2.3}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('Date Range')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='last30Days'>Last 30 days</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2.3}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('Status')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2.3}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('Incident Severity')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={4}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2'>{`${t('Incident Category')}`}</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select
                      size='small'
                      className={styles.select}
                      fullWidth
                      displayEmpty
                      value={personName}
                      onChange={handleChange}
                      renderValue={selected => {
                        if (selected.length === 0) {
                          return <span>{`${t('You Can Select Multiple Categories Here.')}`}</span>
                        }

                        return selected.join(', ')
                      }}
                    >
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('Advance Search Keyword(In Narrative)')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <TextField fullWidth type='text' size='small' />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2.5}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('Sub Site')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2.3}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <Typography variant='subtitle2'>{`${t('Click Go to Search')}`}</Typography>
                  </Grid>
                  <Grid item xs={2} md={12}>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Go')}`}
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t('Note : Open/Unapproved Incidents are shown on top.')}`}
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

export default Incidents
