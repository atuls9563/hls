import { Breadcrumbs, Card, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import styles from '../../../styles/siteConfiguration.module.css'
import { useTranslation } from 'react-i18next'
import React from 'react'

const SiteConfiguration = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={12} className={styles.headerCard}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('Site Configuration')}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/activityColor'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Activity Color Codes')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/cameras'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Cameras')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/checkLists'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('CheckLists')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/contacts'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Contacts')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/dynamicTours'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Dynamic AI Tours')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/heliausRemoteEvents'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Heliaus Remote Events')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/holidayCalendar'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Holiday Calendar')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/locationIdentifiers'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Location Identifiers')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/officerMonitoring'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Office Monitoring')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/patrolRoutes'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Patrol Routes')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/siteAttributes'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Site Attributes')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/siteCoverage'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Site Coverage Map')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} >
          <Grid container columnGap={3} >
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/staticTours'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Static Tours')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/siteConfiguration/workflows'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Workflows')}`}
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

export default SiteConfiguration
