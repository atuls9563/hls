import { Breadcrumbs, Button, Card, Fab, Grid, Menu, MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
import styles from '../../../../../styles/customLists.module.css'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { ChevronDown } from 'mdi-material-ui'

const CustomLists = () => {
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
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard'>
          <Typography className={styles.link} variant='subtitle'>{`${t('VVM Dashboard')}`}</Typography>
        </Link>
        <Link href='/applications/vvmDashboard/customLists'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Custom Lists')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={7}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('Custom Lists')}`}
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
        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Link href='/applications/vvmDashboard/customLists/customTest'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Test')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CustomLists
