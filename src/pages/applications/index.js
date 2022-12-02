import { Breadcrumbs, Card, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import styles from '../../../styles/applications.module.css'
import { useTranslation } from 'react-i18next'
import React from 'react'

const Applications = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={12}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('Applications')}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/activityReport'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Activity Report')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/barredPersons'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Barred Persons')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/documents'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Documents')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/events'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Events')}`}
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
                <Link underline='hover' href='/applications/forms'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Forms')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/incidents'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Incidents')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/lostandfound'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Lost & Found')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/messages'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Messages')}`}
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
                <Link underline='hover' href='/applications/postOrders'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Post Orders')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/siteInspections'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Site Inspections')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/tasks'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Tasks')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/vvmDashboard'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('VVM')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className={styles.blockOne} columnGap={3}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/visitorOccupancy'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Visitor Occupancy')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/visitorScreening'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Visitor Screening')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link underline='hover' href='/applications/heliausOrderManagement'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('HELIAUS Order Management')}`}
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

export default Applications
