import {
  Breadcrumbs,
  Checkbox,
  Divider,
  Fab,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '../../../../styles/addStaticTour.module.css'
import { useTranslation } from 'react-i18next'
import { Filter } from 'mdi-material-ui'

const AddStaticTour = () => {
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
        <Link href='/siteConfiguration/staticTours'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Static Tours')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/staticTours/addStaticTour'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add A Static Tour')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add A Static Tour')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.4} className={styles.search}>
            <Typography variant='subtitle2'>{`${t('All Zones Assigned To This Site')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={2.5} className={styles.search}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Search')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Filter />
                    <Divider orientation='vertical' className={styles.divider3} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid item xs={12} md={2.5} className={styles.searchTwo}>
            <Typography variant='subtitle2'>
              {`${t('All Zones Assigned To This Tour')}`}
              <span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.5} className={styles.searchTwo}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Search')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Filter />
                    <Divider orientation='vertical' className={styles.divider3} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle' className={styles.heading}>
              {`${t('Tour Details')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: If the tour crosses the midnight hour, the start time will fall on the day labeled on the column.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Tour Type')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value='select'>Select Officer</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Tour ID')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Tour Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('% Required')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Start Time')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='time' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('End Time')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='time' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Enabled')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Checkbox color='secondary' defaultChecked />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Task Required (A Task will be created when this tour will be Incomplete or Missed)')}`}
            </Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={2} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Active Days')}`}
              <span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={1} className={styles.headerTwo}>
              <b>{`${t('Monday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
            <Grid item xs={12} md={1} className={styles.headerTwo}>
              <b>{`${t('Tuesday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
            <Grid item xs={12} md={1.2} className={styles.headerTwo}>
              <b>{`${t('Wednesday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
            <Grid item xs={12} md={1} className={styles.headerTwo}>
              <b>{`${t('Thursday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
            <Grid item xs={12} md={1} className={styles.headerTwo}>
              <b>{`${t('Friday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
            <Grid item xs={12} md={1} className={styles.headerTwo}>
              <b>{`${t('Saturday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
            <Grid item xs={12} md={1} className={styles.headerTwo}>
              <b>{`${t('Sunday')}`}</b>
              <Checkbox color='secondary' />
            </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save Tour')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddStaticTour
