import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, MenuItem, Button, Menu, Breadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../../styles/heliausOutboundForm.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { ChevronDown } from 'mdi-material-ui'
import Scan from '../../scan'

const HeliausOutboundForm = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openEditThree, setOpenEditThree] = useState(false)
  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditCloseThree = () => setOpenEditThree(false)

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
        <Link href='/applications/vvmDashboard/customInOutForms'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Custom In/Out Forms')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/customInOutForms/heliausSiteCustomInOutForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t(
            'Heliaus Site Custom In/Out Form'
          )}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/customInOutForms/heliausSiteCustomInOutForm/heliausOutboundForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Heliaus Outbound Form')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('Heliaus Outbound Form')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerOne}>
                <Scan
                  openEditThree={openEditThree}
                  setOpenEditThree={setOpenEditThree}
                  handleEditClickOpenThree={handleEditClickOpenThree}
                  handleEditCloseThree={handleEditCloseThree}
                />
                <Fab
                  color='secondary'
                  variant='extended'
                  onClick={handleEditClickOpenThree}
                  size='medium'
                  type='submit'
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
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.asterTwo}>
                  {`${t(
                    'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Heliaus Outbound Form.'
                  )}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container className={styles.textField} justifyContent='space-between'>
                  <Grid item xs={12} md={5.5}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>
                          {`${t("Driver's First Name")}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
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
                          {`${t("Driver's Middle Name")}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
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
                        <Typography variant='subtitle2'>
                          {`${t("Driver's Last Name")}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
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
                          {`${t('Head Shot')}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='file' fullWidth size='small' />
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
                        <Typography variant='subtitle2'>
                          {`${t('Driving License')}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
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
                          {`${t('Phone No')}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
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
                        <Typography variant='subtitle2'>{`${t('Check-in/out date & time')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='datetime-local' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Grid container>
                <Grid item xs={12} md={1}>
                  <Grid item xs={12} md={12}>
                    <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                      {`${t('Save')}`}
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

export default HeliausOutboundForm
