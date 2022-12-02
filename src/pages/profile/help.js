import React from 'react'
import { Breadcrumbs, Card, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styles from '../../../styles/help.module.css'
import Video from 'mdi-material-ui/Video'
import FilePdfBox from 'mdi-material-ui/FilePdfBox'
import Fab from '@mui/material/Fab'

const Help = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/profile'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Profile')}`}
          </Typography>
        </Link>
        <Link href='/profile/help'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Help')}`}</Typography>
        </Link>
      </Breadcrumbs>

      <Grid container className={styles.container}>
        <Card variant='outlined' className={styles.headerCard}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.heading}>
              {`${t('HELP')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.headingOne}>
              {`${t('Contact Support: 770-625-1467')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Submit')}`}
            </Fab>
          </Grid>
        </Card>

        <Grid item xs={12} md={12}>
          <Typography variant='h6' className={styles.headingTwo}>
            {`${t('HELIAUS Portal Videos')}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Adding and Editing Tours - HELIAUS Portal Videos')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Adding Contacts and Distribution - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Creating and Configuring a Dashboard - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('DHS SAFETY ACT')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Entering an Activity Report - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Entering an Event - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Entering an Incident - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS Portal Overview')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Logging in and out - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Trailer Check In - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('Trailer Check Out - HELIAUS Portal')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9}></Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.headingTwo}>
              {`${t("HELIAUS Portal PDF's")}`}
            </Typography>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <FilePdfBox className={styles.icon} />
                  {`${t('HELIAUS - How to setup Barcode Scanner (WDI4600)')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.headingTwo}>
              {`${t('HELIAUS Mobile Videos')}`}
            </Typography>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Activity Report')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Assigning NFC Tags to Zones')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Create Events')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Create Incidents')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Dynamic Tours')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Installing Beacons')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Installing NFCs')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Leaderboard')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Logging In')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS log Out')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS Message')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS Performing Tasks')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Replacing Beacons ')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Replacing NFC Tags')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - SOS')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Tours')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Tours Activating Beacon Zones')}`}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS Tours Activating GPS Zones')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <Video className={styles.icon} />
                  {`${t('HELIAUS - Tours Scanning NFC Tag Zones')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.headingTwo}>
              {`${t("HELIAUS Mobile PDF's")}`}
            </Typography>
          </Grid>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={3.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Typography variant='subtitle' className={styles.headingThree}>
                  <FilePdfBox className={styles.icon} />
                  {`${t('Login - HELIAUS Mobile')}`}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Help
