import { Grid, Paper, Typography, Fab, TextField, InputAdornment, Select, MenuItem, Button, Menu } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/vvmDashboard.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, Eye, ChevronDown } from 'mdi-material-ui'
import ScanBarcode from './scanBarcode'

const VVMDashboard = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEditThree, setOpenEditThree] = useState(false)
  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditCloseThree = () => setOpenEditThree(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

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
      headerName: 'Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.02,
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
      field: '',
      headerName: '',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Eye className={styles.headingOne} />
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

  const handleClickOne = () => {
    setShowMessage(true)
  }

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
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={7.2}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('VVM Dashboard')}`}
            </Typography>
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
          <Grid item xs={12} md={12} className={styles.header}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleEditClickOpenThree}
              className={styles.button}
            >
              {`${t('Scan Barcode')}`}
            </Fab>
            <ScanBarcode
              openEditThree={openEditThree}
              setOpenEditThree={setOpenEditThree}
              handleEditClickOpenThree={handleEditClickOpenThree}
              handleEditCloseThree={handleEditCloseThree}
            />
            <Select size='small' className={styles.select}>
              <MenuItem value='site'>Today</MenuItem>
            </Select>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleClickOne}
              className={styles.button}
            >
              {`${t('Print')}`}
            </Fab>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleClickOne}
              className={styles.button}
            >
              {`${t('Export')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={8}>
            {showMessage && (
              <Grid container>
                <Typography variant='subtitle2'>{`${t(
                  `The report is being generated. A notification email will be sent to your registered email id when report generation is complete.`
                )}`}</Typography>
                <Typography variant='subtitle2'>{`${t(`Alternatively, you may check the `)}`}</Typography>{' '}
                <Link href='/applications'>
                  <Typography variant='subtitle2' className={styles.link}>{`${t(`"My Reports"`)}`}</Typography>
                </Link>
                <Typography variant='subtitle2'>{`${t(
                  `section in a few minutes and download your report.`
                )}`}</Typography>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={4.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={3.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={3.5} className={styles.textField}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Enter Keywords')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Select size='small' variant='outlined' className={styles.selectOne}>
                      <MenuItem value='site'>Today</MenuItem>
                    </Select>
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

export default VVMDashboard
