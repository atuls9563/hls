import {
  Breadcrumbs,
  Checkbox,
  Divider,
  Fab,
  Grid,
  MenuItem,
  Paper,
  Radio,
  Select,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../../../styles/editContact.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'

const EditContact = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

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
        <Link href='/siteConfiguration/contacts/editContact'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Edit Contact')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Edit Contact')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Typography variant='subtitle'>{`${t('Contact Details')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Title')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Contact Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Contact E-Mail')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Contact Phone')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange} variant='outlined' size='small' fullWidth />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Contact Type')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2'>
                <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />{' '}
                {`${t('Is Client')}`}
                <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                {`${t('Is Employee')}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Show on Heliaus Mobile App in Contacts Section?')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('E-Mail Enabled?')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('SMS Enabled?')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Language')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditContact
