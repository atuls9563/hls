import { Breadcrumbs, Card, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import styles from '../../../styles/reports.module.css'
import { useTranslation } from 'react-i18next'
import React from 'react'

const Reports = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/reports'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Reports')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={12}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('Reports Home')}`}
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container className={styles.block}>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Link underline='hover' color='inherit' href='/reports/myReports'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('My Reports')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Link underline='hover' color='inherit' href='/reports/siteReports'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Site Reports')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>

            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Link underline='hover' color='inherit' href='/reports/tier6Reports'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Tier 6 Reports')}`}
                    </Typography>
                  </Grid>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} md={2.9} className={styles.box}>
              <Card variant='outlined' className={styles.contentCard}>
                <Link underline='hover' color='inherit' href='/reports/tier13Reports'>
                  <Grid item xs={12} md={12} className={styles.box}>
                    <Typography variant='subtitles2' className={styles.headingTwo}>
                      {`${t('Tier 13 Reports')}`}
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

export default Reports
