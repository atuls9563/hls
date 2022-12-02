import { Breadcrumbs, Checkbox, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '../../../../styles/addTask.module.css'
import { useTranslation } from 'react-i18next'

const AddTask = () => {
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
        <Link href='/applications/tasks'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Tasks')}`}</Typography>
        </Link>
        <Link href='/applications/tasks/AddTask'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Task')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Task')}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Scope')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='select'>Select Scope</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Task Title')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Task Description')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' rows={2} multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Start Date & Time')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='datetime-local' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Task Type')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='select'>Single</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Typography variant='h6'>
              {`${t('Notification')}`}
              <span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Email')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Phone Number')}`} <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddTask
