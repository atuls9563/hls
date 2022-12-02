import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Select, MenuItem, Button, Menu, Breadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/trailerCheckIn.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { ChevronDown } from 'mdi-material-ui'
import Scan from '../scan'

const TrailerCheckIn = () => {
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
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('VVM Dashboard')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/viewTrailerCheckIn'>
          <Typography className={styles.link} variant='subtitle'>{`${t('View Trailer CheckIn Data')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/viewTrailerCheckIn/trailerCheckIn'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Trailer CheckIn')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={5.5}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('Trailer Check-In')}`}
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
                <Grid container className={styles.textField} justifyContent='space-between'>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>
                          {`${t('Trailer No.')}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>
                          {`${t('Trailer Image')}`}
                          <span className={styles.aster}>*</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='file' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>
                          {`${t('Tractor No')}`}
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
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Trailer Image')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='file' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Carrier')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Select size='small' fullWidth>
                          <MenuItem value='selectCarrier'>Select Carrier</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Seal Pic')}`}</Typography>
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
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Notes')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' rows={2} multiline />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Driver First Name')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Driver Last Name')}`}</Typography>
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
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Headshot')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='file' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t("Driver's License #")}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('License Expires')}`}</Typography>
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
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Address')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='date' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('City')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('State')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container className={styles.textFieldOne} justifyContent='space-between'>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Country')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Zip')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('DOB')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='date' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container className={styles.textFieldOne} justifyContent='space-between'>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Gender')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Eye Color')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Height')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container className={styles.textFieldOne} justifyContent='space-between'>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Hair Color')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('DL Type')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='text' fullWidth size='small' />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3.9}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Typography variant='subtitle2'>{`${t('Driver Middle Name')}`}</Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField type='date' fullWidth size='small' />
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
                <Grid item={12} md={2.5}>
                  <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button}>
                    {`${t('Cancel')}`}
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default TrailerCheckIn
