import { Breadcrumbs, Fab, Grid, Paper, Radio, TextField, Typography } from '@mui/material'
import styles from '../../../../styles/editHoliday.module.css'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const EditHoliday = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('globalSite')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }
  
  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/holidayCalendar'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Holiday Calendar')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/holidayCalendar/editHoliday'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Edit Holiday Calendar')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Edit Holiday Calendar')}`}
            </Typography>
          </Grid>
        
          <Grid item xs={12} md={5.5} className={styles.textField}>
            <Typography variant='subtitle2'>
              {`${t('Title')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField type='text' fullWidth size='small' />
          </Grid>
      

          <Grid item xs={12} md={5.5} className={styles.textField}>
            <Typography variant='subtitle2'>
              {`${t('Description')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField type='text' fullWidth size='small' rows={2} multiline />
          </Grid>
         
          <Grid item xs={12} md={5.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Date From')}`}
            </Typography>
            <TextField type='date' fullWidth size='small' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Date To')}`}
            </Typography>
            <TextField type='date' fullWidth size='small' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
          <Typography variant='subtitle2' className={styles.asterThree}>
              {`${t('Note: Changes must be made prior to 11 PM EST to reflect on the next day')}`}
            </Typography>
            <Fab color='secondary' variant='extended' type='submit' size='small' className={styles.button2}>
              {`${t('Update Holiday Calendar')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditHoliday
