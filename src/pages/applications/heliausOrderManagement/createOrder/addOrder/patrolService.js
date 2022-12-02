import {  Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/patrolService.module.css'
import { useTranslation } from 'react-i18next'
import MuiPhoneNumber from 'material-ui-phone-number'
import Alert from '@mui/material/Alert'

const PatrolService = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')
  const [inputValue, setInputValue] = useState('')

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
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Select a Site')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField
                  autoFocus
                  type='text'
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  size='small'
                  fullWidth
                />
                {inputValue && inputValue.length <= '4' ? (
                  <Alert icon={false} color='info' className={styles.alert}>
                    {`${t('Please enter 5 or more characters to start searching.')}`}
                  </Alert>
                ) : !inputValue ? null : (
                  <Alert icon={false} color='info' className={styles.alert}>
                    {`${t('No Sites Found')}`}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Replacing other patrol system?')}`}
                  <span className={styles.aster}>*</span>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Yes')}`}
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('No')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Replacing?')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Cycop')}`}
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Secure Trax')}`}
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('None')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('New Site Startup?')}`}
                  <span className={styles.aster}>*</span>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Yes')}`}
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('No')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                {!selectedValue ? (
                  <Typography variant='subtitle2'>{`${t('Please upload the contract or order form')}`}</Typography>
                ) : selectedValue == 'newClient' ? (
                  <Typography variant='subtitle2'>{`${t('Please upload the executed contract')}`}</Typography>
                ) : (
                  <Typography variant='subtitle2'>{`${t('Please upload the signed order form')}`}</Typography>
                )}
                <Typography variant='caption'>
                  {`${t(
                    '(You can upload upto 3 files by Holding Down the Ctrl Key while Clicking on the file names in the file open window)'
                  )}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    color='secondary'
                    value='newClient'
                    checked={selectedValue === 'newClient'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('New client (I have a signed contract)')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio
                    value='existingClient'
                    checked={selectedValue === 'existingClient'}
                    onChange={handleChangeTwo}
                    color='secondary'
                  />
                  {`${t('Existing Client (I have a signed order form)')}`}
                </Typography>
                {selectedValue == 'newClient' || selectedValue == 'existingClient' ? (
                  <TextField type='file' size='small' fullWidth />
                ) : null}
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t("Commission Recipient's Name")}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Zone</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Paid or Non-Paid patrol service?')}`}
                  <span className={styles.aster}>*</span>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Non-Paid HELIAUS Patrol')}`}
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Paid HELIAUS Patrol')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Comments')}`}</Typography>
                <TextField type='text' multiline rows={2} size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Upload Sitemaps')}`}</Typography>
                <TextField type='file' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={12} className={styles.block}>
                <Typography variant='subtitle'>{`${t('Site Champion')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
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
                <Typography variant='subtitle'>{`${t('Client Contacts')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={1} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Title')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Zone</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
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
              <Grid item xs={12} md={1} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Title')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Zone</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
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
              <Grid item xs={12} md={1} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Title')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='selectZone'>Select Zone</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={3.5} className={styles.block}>
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
                <Typography variant='subtitle'>{`${t('Order Entry Contact')}`}</Typography>
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

export default PatrolService
