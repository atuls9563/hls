import React, { useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Paper from '@mui/material/Paper'
import styles from '../../../styles/siteCoverage.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const SiteCoverage = () => {
  const [content, setContent] = useState({ northWest: '', southEast: '' })
  const { t } = useTranslation()

  const handleChange = e => {
    setContent({ ...content, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(content)
  }

  const handleReset = e => {
    e.preventDefault()
    setContent({ northWest: '', southEast: '' })
  }

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/siteCoverage'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Manage Site Coverage Map')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <form onSubmit={handleSubmit}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('MANAGE SITE COVERAGE MAP')}`}
          </Typography>
          <Grid container className={styles.header}>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t(`You can select your desired area,by zooming in or out on the map for the report.`)}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('North West Cordinates(Latitude,Longitude)')}`}
              </Typography>

              <TextField
                value={content.northWest}
                onChange={handleChange}
                name='northWest'
                autoFocus
                required
                variant='outlined'
                fullWidth
                size='small'
                type='text'
                className={styles.section}
              />
            </Grid>
            <Grid item xs={12} md={8}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('South East Cordinates(Latitude,Longitude)')}`}
              </Typography>

              <TextField
                name='southEast'
                value={content.southEast}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                size='small'
                type='text'
                className={styles.section}
              />
            </Grid>
            <Grid item xs={12} md={8}></Grid>
            <Grid item xs={12} md={2} className={styles.textField}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Satellite View')}`} <br /> {`${t('Image Not Available')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('RoadMap View')}`}
                <br /> {`${t('Image Not Available')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}></Grid>
            <Grid item xs={12} md={4} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Submit')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button2}>
                {`${t('Clear Map')}`}
              </Fab>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  )
}

export default SiteCoverage
