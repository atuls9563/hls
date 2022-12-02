import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Divider,
  Select,
  MenuItem,
  Button,
  Menu
} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/trailerInspection.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, ChevronDown } from 'mdi-material-ui'

const TrailerInspection = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
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
      flex: 0.01,
      field: 'date&Time',
      headerName: 'Check-In Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'trailerNo',
      headerName: 'Trailer No.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'tractorNo',
      headerName: 'Tractor No.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'carrier',
      headerName: 'Carrier',
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
      field: '',
      headerName: '',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Link href='/applications/vvmDashboard/vvmTrailer/trailersInspection/inspection'>
              <Typography variant='subtitle' className={styles.headingOne}>{`${t('Inspection')}`}</Typography>
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
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('VVM Dashboard')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/vvmTrailer/trailerInspection'>
          <Typography className={styles.link} variant='subtitle'>{`${t('View Trailer Check-In Data')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={6.8}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('View Trailer Check-In Data')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4.8} className={styles.headerOne}>
            <Link href='/applications/vvmDashboard/personCheckIn'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Person Check-In')}`}
              </Fab>
            </Link>
            <Link href='/applications/vvmDashboard/viewTrailerCheckIn'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Trailer Check-In')}`}
              </Fab>
            </Link>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
              onMouseOver={handleClick}
              color='secondary'
              variant='outlined'
              className={styles.button}
            >
              <Typography variant='subtitle2'>{`${t('Switch to')}`}</Typography> <ChevronDown />
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <Link href='/applications/vvmDashboard/assets'>
                <MenuItem onClick={handleClose}>Assets</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/personCheckIn'>
                <MenuItem onClick={handleClose}>Contractor</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/viewClubMemberData'>
                <MenuItem onClick={handleClose}>Club Members</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/customInOutForms'>
                <MenuItem onClick={handleClose}>Custom In/Out Forms</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/customLists'>
                <MenuItem onClick={handleClose}>Custom Lists</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/viewEmployeeData'>
                <MenuItem onClick={handleClose}>Employees</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/keys'>
                <MenuItem onClick={handleClose}>Keys</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/viewPackageCheckInData'>
                <MenuItem onClick={handleClose}>Packages</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/parkingHome'>
                <MenuItem onClick={handleClose}>Parking</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/partiesEvents'>
                <MenuItem onClick={handleClose}>Parties/Events</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/personSearch'>
                <MenuItem onClick={handleClose}>Person Search</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/viewResidentsData'>
                <MenuItem onClick={handleClose}>Residents</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/vvmTrailer'>
                <MenuItem onClick={handleClose}>Trailers</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/vehiclesList'>
                <MenuItem onClick={handleClose}>Vehicles List</MenuItem>
              </Link>
              <Link href='/applications/vvmDashboard/personCheckIn'>
                <MenuItem onClick={handleClose}>Visitor</MenuItem>
              </Link>
            </Menu>
          </Grid>
          <Grid item xs={12} md={4.2} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={3} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={2} className={styles.header}>
            <Select size='small' fullWidth>
              <MenuItem value='site'>Today</MenuItem>
            </Select>
          </Grid>{' '}
          <Grid item xs={12} md={2.3} className={styles.header}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Print')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Export')}`}
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

export default TrailerInspection
