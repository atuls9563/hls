import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import {
  Grid,
  Fab,
  TextField,
  Divider,
  Button,
  Menu,
  MenuItem,
  InputAdornment,
  Breadcrumbs,
  Select
} from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/personCheckIn.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Magnify, ChevronDown } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Scan from './scan'

const PersonCheckIn = () => {
  const { t } = useTranslation()
  const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }])
  const [openEditThree, setOpenEditThree] = useState(false)
  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditCloseThree = () => setOpenEditThree(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const handleinputchange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setinputList(list)
  }

  const handleremove = () => {
    const list = [...inputList]
    list.pop()
    setinputList(list)
  }

  const handleaddclick = () => {
    setinputList([...inputList, { firstName: '', lastName: '' }])
  }

  const columns = [
    {
      flex: 0.01,
      field: 'firstName',
      headerName: 'First Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'lastName',
      headerName: 'Last Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'license',
      headerName: "Driver's License No.",
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'scanDate&Time',
      headerName: 'Scan Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'image',
      headerName: 'Image',
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
        <Link href='/applications/vvmDashboard/personCheckIn'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Person Check In')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={6.3}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Person Check In')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.7}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleEditClickOpenThree}
              className={styles.button}
            >
              {`${t('Scan')}`}
            </Fab>
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
            <Scan
              openEditThree={openEditThree}
              setOpenEditThree={setOpenEditThree}
              handleEditClickOpenThree={handleEditClickOpenThree}
              handleEditCloseThree={handleEditCloseThree}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={5.5}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Select Field')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Select size='small' fullWidth variant='outlined'>
                                <MenuItem value='residentEmployeeName'>Resident/Employee Name</MenuItem>
                              </Select>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={5.5}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Search Keywords')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='text'
                                fullWidth
                                size='small'
                                onChange={e => handleinputchange(e, i)}
                                placeholder={`${t('Search Keywords')}`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item={12} xs={12}>
                      <Divider className={styles.divider} />
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            <Grid container justifyContent='flex-end'>
              <Grid item xs={12} md={1}>
                {inputList.length == 1 ? null : (
                  <Grid item xs={12} md={12}>
                    <Fab
                      color='secondary'
                      variant='extended'
                      size='medium'
                      type='submit'
                      onClick={() => handleremove()}
                      className={styles.button}
                    >
                      {`${t('-')}`}
                    </Fab>
                  </Grid>
                )}
              </Grid>
              <Grid item={12} md={1}>
                <Fab
                  color='secondary'
                  variant='extended'
                  size='medium'
                  type='submit'
                  onClick={handleaddclick}
                  className={styles.button}
                >
                  {`${t('+')}`}
                </Fab>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Grid container justifyContent='flex-end'>
                <Grid item={12} md={1}>
                  <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                    {`${t('Search')}`}
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item={12} xs={12}>
            <Divider className={styles.divider} />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <Typography variant='subtitle2'>{`${t('DL Scan Records')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Refresh')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className={styles.asterTwo} variant='subtitle2'>{`${t(
              'Click on refresh to reload the DL Scan Records'
            )}`}</Typography>
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

export default PersonCheckIn
