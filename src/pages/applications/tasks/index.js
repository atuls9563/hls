import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Divider, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/tasks.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, Eye, SquareEditOutline } from 'mdi-material-ui'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import TaskDetail from './taskDetail'
import ClaimTask from './claimTask'

const Tasks = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  const options = {
    indexAxis: 'y',

    elements: {
      bar: {
        borderWidth: 2
      }
    },

    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Tasks'
      }
    }
  }

  const labels = ['Upcoming Tasks', 'Resolved Tasks', 'Overdue Tasks']

  const data = {
    labels,
    datasets: [
      {
        label: 'Upcoming Tasks',
        data: [1, 0, 0],
        backgroundColor: 'rgb(170, 170, 0)',
        barThickness: 32,
        barPercentage: 1
      },
      {
        label: 'Resolved Tasks',
        data: [0, 1, 0],
        backgroundColor: 'rgb(15, 157, 88)',
        barThickness: 32,
        barPercentage: 1
      },
      {
        label: 'Overdue Tasks',
        data: [0, 0, 2],
        backgroundColor: 'rgb(204, 0, 0)',
        barThickness: 32,
        barPercentage: 1
      }
    ]
  }

  const columns = [
    {
      flex: 0.01,
      field: 'date&Time',
      headerName: 'Created Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'startdate&Time',
      headerName: 'Start Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'enddate&Time',
      headerName: 'End Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'taskId',
      headerName: 'Task ID',
      minWidth: 40,
      sortable: isNameSortable
    },

    {
      flex: 0.005,
      field: 'taskTitle',
      headerName: 'Task Title',
      minWidth: 40,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'status',
      headerName: 'Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'createdBy',
      headerName: 'Created By',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'claimedBy',
      headerName: 'Claimed By',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'resolvedBy',
      headerName: 'Resolved By',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'resolvedDate&Time',
      headerName: 'Resolved Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'scope',
      headerName: 'Scope',
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
            <Eye onClick={handleEditClickOpen} className={styles.headingOne} />
            <TaskDetail
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
            <Link href='/applications/tasks/editTask'>
              <SquareEditOutline className={styles.headingOne} />
            </Link>
            <Typography variant='subtitle' className={styles.headingOne} onClick={handleEditClickOpenTwo}>
              {`${t('Claim')}`}
            </Typography>
            <ClaimTask
              openEditTwo={openEditTwo}
              setOpenEditTwo={setOpenEditTwo}
              handleEditClickOpenTwo={handleEditClickOpenTwo}
              handleEditCloseTwo={handleEditCloseTwo}
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
        <Link href='/applications/tasks'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Tasks')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Tasks')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Link href='/applications/tasks/addTask'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add Task')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={4.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={7} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={3.7} className={styles.textField}>
            <Select size='small' fullWidth>
              <MenuItem value='alltasks'>All tasks</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={3.7} className={styles.textField}>
            <Select size='small' fullWidth>
              <MenuItem value='last24hours'>Last 24 Hours Upcoming</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={3.7} className={styles.textField}>
            <Select size='small' fullWidth>
              <MenuItem value='site'>Site</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={12} className={styles.chart}>
            <Bar options={options} data={data} width={'500px'} height={'170px'} />
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

export default Tasks
