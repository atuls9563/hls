import { Breadcrumbs, Card, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import styles from '../../../../styles/forms.module.css'
import { useTranslation } from 'react-i18next'
import React from 'react'

const Forms = () => {
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
        <Link href='/applications/forms'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Forms')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={12} className={styles.headerCard}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('Forms')}`}
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/hindiTestForm'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('हिंदी टेस्ट फॉर्म')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/auxGateVehicle'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Aux Gate Vehicle Check')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/buildingCInspection'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Building C Inspection')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/cameraDisableTestForm'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Camera Disable Test Form')}`}
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
                <Link href='/applications/forms/clientMeeting'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Client Meeting')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/communicationNotificationForm'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Communication Notification Form')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/customerPerformanceReview'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Customer Performance Review / KPI / QBR')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/dailyVehicleInspection'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Daily Vehicle Inspection')}`}
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
                <Link href='/applications/forms/employeeSafetyOrientation'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Employee Safety Orientation Checklist')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/generalDolphinLogForm'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('General Dolphin Log Form')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/heliausTestSite2Form'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Heliaus Test Site Form')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/jsaAcknowledgement'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('JSA Acknowledgement')}`}
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
                <Link href='/applications/forms/mayankFormTestNew'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Mayank Form Test New')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/mayankSIFormTest'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Mayank SI Form Test')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/memo'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Memo')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/ojt'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('OJT')}`}
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
                <Link href='/applications/forms/penetratTest'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Penetration Test')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/trainingTracker'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Training Tracker')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/vinodTest'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Vinod Test')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card className={styles.contentCard} variant='outlined'>
                <Link href='/applications/forms/wheelchair'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Wheelchair')}`}
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
                <Link href='/applications/postOrders'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Accident Investigation')}`}
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

export default Forms
