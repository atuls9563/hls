import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Button, Fab, Grid, Menu, MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/viewEmployeeInformation.module.css'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { useTranslation } from 'react-i18next'
import Employee from './employee'
import VehicleInformation from './vehicleInformation'
import BarredPersonInformation from './barredPersonInformation'
import ExpectedVisitor from './expectedVisitor'
import ExpectedContractor from './expectedContractor'
import VisitorHistory from './visitorHistory'
import { ChevronDown } from 'mdi-material-ui'

const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  color: 'gray'
}))

const ViewEmployeeInformation = () => {
  const [value, setValue] = useState('employee')
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
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
        <Link href='/applications/vvmDashboard/viewEmployeeInformation'>
          <Typography className={styles.link} variant='subtitle'>{`${t('View Employee Information')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('View Employee Information')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
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
              <Grid item md={12} xs={12}>
                <Grid container className={styles.header}>
                  <Grid item xs={12} md={12}>
                    <TabContext value={value}>
                      <TabList
                        variant='scrollable'
                        scrollButtons='auto'
                        onChange={handleChange}
                        textColor='inherit'
                        indicatorColor='secondary'
                        className={styles.buttonGroup}
                      >
                        <Tab value='employee' label={`${t('Employee')}`} className={styles.transform} />
                        <Tab value='vehicleInformation' label={`${t('Vehicle')}`} className={styles.transform} />
                        <Tab
                          value='barredPersonInformation'
                          label={`${t('Barred Person Information')}`}
                          className={styles.transform}
                        />
                        <Tab value='expectedVisitor' label={`${t('Expected Visitor')}`} className={styles.transform} />
                        <Tab
                          value='expectedContractor'
                          label={`${t('Expected Contractor')}`}
                          className={styles.transform}
                        />
                        <Tab value='visitorHistory' label={`${t('Visitor History')}`} className={styles.transform} />
                      </TabList>
                      <Box>
                        <TabPanel value='employee'>
                          <Employee />
                        </TabPanel>
                        <TabPanel value='vehicleInformation'>
                          <VehicleInformation />
                        </TabPanel>
                        <TabPanel value='barredPersonInformation'>
                          <BarredPersonInformation />
                        </TabPanel>
                        <TabPanel value='expectedVisitor'>
                          <ExpectedVisitor />
                        </TabPanel>
                        <TabPanel value='expectedContractor'>
                          <ExpectedContractor />
                        </TabPanel>
                        <TabPanel value='visitorHistory'>
                          <VisitorHistory />
                        </TabPanel>
                      </Box>
                    </TabContext>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ViewEmployeeInformation
