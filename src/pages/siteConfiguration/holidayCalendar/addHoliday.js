import { Breadcrumbs, Fab, Grid, Paper, Radio, TextField, Typography } from '@mui/material'
import styles from '../../../../styles/addHoliday.module.css'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const AddHoliday = () => {
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
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('ADD HOLIDAY CALENDAR')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={styles.radio}>
            <Typography variant='subtitle2' className={styles.headingFive}>
              <Radio
                color='secondary'
                value='globalSite'
                checked={selectedValue === 'globalSite'}
                onChange={handleChangeTwo}
              />
              <br />
              {`${t('Global Selected Site')}`}
              <br />
              {`${t('(Heliaus Test Site V2 (1106661) - #1106661)')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={styles.radio}>
            <Typography variant='subtitle2' className={styles.headingFive}>
              <Radio color='secondary' value='tier6' checked={selectedValue === 'tier6'} onChange={handleChangeTwo} />
              {`${t('For Tier 6')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={styles.radio}>
            <Typography variant='subtitle2' className={styles.headingFive}>
              <Radio color='secondary' value='tier13' checked={selectedValue === 'tier13'} onChange={handleChangeTwo} />
              {`${t('For Tier 13')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.textField}>
            <Typography variant='subtitle2'>
              {`${t('Title')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField type='text' fullWidth size='small' />
          </Grid>
          {selectedValue === 'tier6' ? (
            <Grid item xs={12} md={5.5} className={styles.textFieldTwo}>
              <TextField type='text' fullWidth size='small' placeholder={`${t('Search a Tier6')}`} />
            </Grid>
          ) : selectedValue === 'tier13' ? (
            <Grid item xs={12} md={5.5} className={styles.textFieldTwo}>
              <TextField type='text' fullWidth size='small' placeholder={`${t('Search a Tier13')}`} />
            </Grid>
          ) : (
            <Grid item xs={12} md={5.5}></Grid>
          )}

          <Grid item xs={12} md={5.5} className={styles.textField}>
            <Typography variant='subtitle2'>
              {`${t('Description')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField type='text' fullWidth size='small' rows={2} multiline />
          </Grid>
          <Grid item xs={12} md={5.5}></Grid>
          <Grid item xs={12} md={3} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Date From')}`}
            </Typography>
            <TextField type='date' fullWidth size='small' />
          </Grid>
          <Grid item xs={12} md={3} className={styles.textField}>
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
              {`${t('Save Holiday Calendar')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddHoliday
