import { Checkbox, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from '../../../../styles/createZone.module.css'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import Iframe from 'react-iframe'
import { useTranslation } from 'react-i18next'

const Zones = () => {
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
        <Link href='/siteConfiguration/zones'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Zones')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/zones/createZone'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Create Zones')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12} className={styles.headerRight}>
            <Typography className={styles.link} variant='subtitle'>{`${t('Show Zone Radius')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.map}>
            <Iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1343765121787!2d75.80593331478795!3d26.835677983160778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6076d0ae8d9%3A0xf4d3e10aaf84d262!2sDolphin%20Softwares!5e0!3m2!1sen!2sin!4v1662721802658!5m2!1sen!2sin'
              style='border:0; '
              loading='lazy'
              display='initial'
              position='relative'
              allowFullScreen
              width='100%'
              height='100%'
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Zones
