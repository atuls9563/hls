import { Breadcrumbs, Checkbox, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import styles from '../../../../styles/addContact.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import MuiPhoneNumber from 'material-ui-phone-number-2'

const AddContact = () => {
  const { t } = useTranslation()
  function handleOnChange(value) {
    this.setState({
      phone: value
    })
  }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/contacts'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Contacts')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/contacts/addContact'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Add Contact')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Contact')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Title')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Contact Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Contact E-mail')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Contact Phone')}`}</Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Contact Type')}`}
                  <span className={styles.aster}>*</span>
                <Radio color='secondary' /> {`${t('Is Client')}`} <Radio color='secondary' /> {`${t('Is Employee')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Show on Heliaus Mobile App in Contacts Section?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('E-mail Enabled?')}`}</Typography>
                <Checkbox color='secondary' defaultChecked />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('SMS Enabled')}`}</Typography>
                <Checkbox color='secondary' defaultChecked />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Language')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='english'>English</MenuItem>
                  <MenuItem value='spanish'>Spanish</MenuItem>
                  <MenuItem value='french'>French</MenuItem>
                  <MenuItem value='hindi'>Hindi</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Save')}`}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddContact
