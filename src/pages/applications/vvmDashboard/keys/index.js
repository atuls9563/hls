import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Button,
  Menu,
  Divider
} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/keys.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import {
  Magnify,
  ChevronDown,
  SquareEditOutline,
  Close,
  NoteTextOutline,
  FileExcelOutline,
  FilePdfBox
} from 'mdi-material-ui'
import KeyCheckIn from './keyCheckIn'
import KeyCheckOut from './keyCheckOut'

const Keys = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)

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
      field: 'keyNumber',
      headerName: 'Key Number',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'description',
      headerName: 'Description',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'location',
      headerName: 'Location',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'office',
      headerName: 'Office/Building/Door',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'keyIdentifier',
      headerName: 'Key Identifier',
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
      flex: 0.015,
      field: '',
      headerName: '',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <SquareEditOutline className={styles.headingOne} />

            <Close />
            <Typography variant='subtitle' className={styles.headingOne} onClick={handleEditClickOpen}>
              {`${t('Check-In')}`}
            </Typography>
            <Typography variant='subtitle' className={styles.headingOne} onClick={handleEditClickOpenTwo}>
              {`${t('Check-Out')}`}
            </Typography>
            <KeyCheckIn
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
            <KeyCheckOut
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
        <Link href='/applications/vvmDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('VVM Dashboard')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/keys'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Keys')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Keys')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4.2}>
            <Link href='/applications/vvmDashboard/keys/keyAudits'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Key Audits')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={4.8}>
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
          <Grid item xs={12} md={4.5} className={styles.header}>
            <Select size='small' variant='outlined'>
              <MenuItem value=''>Select Field</MenuItem>
              <MenuItem value='employeeName'>Employee Name</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={4.5} className={styles.header}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              <FileExcelOutline />
              {`${t('Excel')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              <NoteTextOutline />
              {`${t('CSV')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              <FilePdfBox />
              {`${t('PDF')}`}
            </Fab>
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

export default Keys
