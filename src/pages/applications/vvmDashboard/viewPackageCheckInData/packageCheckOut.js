import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, MenuItem, Button, Menu, Breadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/packageCheckOut.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { ChevronDown } from 'mdi-material-ui'

const PackageCheckOut = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('VVM Dashboard')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/viewPackageCheckOutData'>
          <Typography className={styles.link} variant='subtitle'>{`${t('View Package CheckIn Data')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/viewPackageCheckOutData/packageCheckOut'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Package Check Out')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('Package Check Out')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerOne}>
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
              <Grid item xs={12} md={12}>
                <Grid container className={styles.textField} justifyContent='space-between'>
                  <Grid item xs={12} md={5.5}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Person Name')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>
                          {`${t('Date')}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='date' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container className={styles.textField} justifyContent='space-between'>
                  <Grid item xs={12} md={5.5}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Time')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='time' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Signature')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='file' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Grid container>
                <Grid item xs={12} md={3}>
                  <Grid item xs={12} md={12}>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Save')}`}
                    </Fab>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Cancel')}`}
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default PackageCheckOut
