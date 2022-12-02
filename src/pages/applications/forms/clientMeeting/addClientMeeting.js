import { Grid, Paper, Typography, Fab, TextField, Checkbox, Radio, Select, MenuItem } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addClientMeeting.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddClientMeeting = () => {
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
        <Link href='/applications/forms/clientMeeting'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Client Meeting')}`}</Typography>
        </Link>
        <Link href='/applications/forms/clientMeeting/addClientMeeting'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Client Meeting')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Client Meeting')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Client Meeting.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Date of Meeting')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField autoFocus required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Name of employee that met with the client')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectNameOfEmployeeThatMetWithTheClient'>
                Select Name of employee that met with the client
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Name and title of client attendee 1')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField autoFocus required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Name and title of client attendee 2')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField autoFocus required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Area of Concern')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField autoFocus required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Intel')}`}</Typography>
            <TextField autoFocus required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Issue 1')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Action 1')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Issue 2')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Action 2')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Issue 3')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Action 3')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Notes')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={7} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save Only')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save & Send Email')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddClientMeeting
