import { Checkbox, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/addAccessoriesOrder.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number-2'

const AddAccessoriesOrder = () => {
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
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle2'>
                  <Checkbox color='secondary' />
                  {`${t(
                    "My order includes a Bluetooth Printer, Bluetooth Scanner, a USB Driver's License Scanner, or an Intrinsically Safe Case"
                  )}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Select A Site')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Comments')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' multiline rows={2} size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>{`${t('Contact Information')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.9} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Phone Number')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>{`${t('Shipping Information')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Option')}`}
                  <span className={styles.aster}>*</span>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('2 Day Shipping')}`}
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Overnight')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Street Address')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Shipping Address Suite, Apt, other')}`}</Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping City')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping State (Select a site to get the State names listed)')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Zone</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Zip')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Country (Select a site to get the country name)')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Zone</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Shipping Phone Number')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  onChange={handleOnChange}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Shipping Comments')}`}</Typography>
                <TextField type='text' multiline rows={2} size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Place Order')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddAccessoriesOrder
