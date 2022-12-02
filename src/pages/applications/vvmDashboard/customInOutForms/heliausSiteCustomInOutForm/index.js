import { Grid, Paper, Typography, Fab, TextField, InputAdornment, MenuItem, Button, Menu, Divider } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/heliausSiteCustomInOutForm.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, Eye, ChevronDown, NoteTextOutline, FilePdfBox } from 'mdi-material-ui'
import HeliausBoundFormDetails from './heliausBoundFormDetails'

const HeliausSiteCustomInOutForm = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const [value, setValue] = useState(false)

  const handleEditClickOpen = () => {
    setOpenEdit(true)
    setValue(true)
  }
  const handleEditClose = () => setOpenEdit(false)

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
      flex: 0.015,
      field: '',
      headerName: '::',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Eye onClick={handleEditClickOpen} className={styles.headingOne} />
            <HeliausBoundFormDetails
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
            <Typography variant='subtitle' className={styles.headingOne}>
              {`${t('Heliaus Outbound Form')}`}
            </Typography>
          </>
        )
      }
    },
    {
      flex: 0.01,
      field: 'date&Time',
      headerName: 'Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'activity',
      headerName: 'Activity',
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
      field: 'driversFirstName',
      headerName: `Driver's Frist Name`,
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'drivingLicense',
      headerName: 'Driving License',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'phoneNo',
      headerName: 'Phone No',
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
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('VVM Dashboard')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/customInOutForms'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Custom In/Out Forms')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/customInOutForms/heliausSiteCustomInOutForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t(
            'Heliaus Site Custom In/Out Form'
          )}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4.2}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Heliaus Site Custom In/Out Form')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4.3}>
            <Link href='/applications/vvmDashboard/customInOutForms/heliausSiteCustomInOutForm/heliausInboundForm'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Heliaus Inbound Form')}`}
              </Fab>
            </Link>
            <Link href='/applications/vvmDashboard/customInOutForms/heliausSiteCustomInOutForm/heliausOutboundForm'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Heliaus Outbound Form')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={3.5}>
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
          </Grid>

          <Grid item xs={12} md={4.2} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={5.3} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={2} className={styles.textField}>
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
          <Grid item xs={12} md={2} className={styles.search}>
            <Link href='/applications/heliausSiteCustomInOutForm/personCheckIn'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                <NoteTextOutline />
                {`${t('CSV')}`}
              </Fab>
            </Link>
            <Link href='/applications/heliausSiteCustomInOutForm/viewTrailerCheckIn'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                <FilePdfBox />
                {`${t('PDF')}`}
              </Fab>
            </Link>
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

export default HeliausSiteCustomInOutForm
