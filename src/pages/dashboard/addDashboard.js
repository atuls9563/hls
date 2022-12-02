import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Button, Grid, Menu } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import styles from '../../../styles/addDashboard.module.css'
import Fab from '@mui/material/Fab'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import { ChevronDown } from 'mdi-material-ui'

const rows = [{ id: 1, dashboard: 'Home', action: 'Edit' }]

const AddDashboard = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(5)
  const [anchorEl, setAnchorEl] = useState(null)

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }
  function handleClose() {
    setAnchorEl(null)
  }

  const columns = [
    {
      flex: 0.1,
      field: 'dashboard',
      minWidth: 80,
      headerName: 'Dashboard',
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'action',
      minWidth: 80,
      headerName: 'Action',
      sortable: isNameSortable,

      renderCell: props => {
        return (
          <>
            <Link underline='hover' color='inherit' href='/dashboard/editDashboard'>
              <Typography className={styles.tbodyTwo}>Edit</Typography>
            </Link>
          </>
        )
      }
    },
    {
      flex: 0.1,
      field: 'remove',
      minWidth: 80,
      headerName: 'Remove',
      sortable: isNameSortable
    }
  ]

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/dashboard/addDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Dashboard')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={6} md={4}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('Add/Edit Dashboards')}`}
                </Typography>
              </Grid>
              <Grid item xs={6} md={5}>
                <Fab color='secondary' variant='extended' size='medium' className={styles.button}>
                  {`${t('Add New Dashboard')}`}
                </Fab>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup='true'
                  onClick={handleClick}
                  onMouseOver={handleClick}
                  color='secondary'
                  variant='outlined'
                  className={styles.buttonTwo}
                >
                  <Typography variant='subtitle2'>{`${t('Select Dashboard Type')}`}</Typography> <ChevronDown />
                </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <Link href=''>
                    <MenuItem onClick={handleClose}> Dashboard Type</MenuItem>
                  </Link>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.table}>
            <DataGrid
              autoHeight
              columns={columns}
              rows={rows}
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10]}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default AddDashboard
