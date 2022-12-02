import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Fab, Grid, Paper, TextField, Radio, Divider, Checkbox } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/editShiftAttributes.module.css'

const EditShiftAttributes = ({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')
  

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Modal open={openEditTwo} onClose={handleEditCloseTwo}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Update Shift')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.asterTwo}>
                {`${t(
                  'Note: If the shift crosses the midnight hour, the start time will fall on the day labeled on the column.'
                )}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container className={styles.textField} justifyContent='space-between'>
                <Grid item xs={12} md={5.5}>
                  <Typography variant='subtitle2'>
                    {`${t('Shift Name')}`}
                    <span className={styles.aster}>*</span>
                  </Typography>
                  <TextField type='text' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Typography variant='subtitle2'>
                    {`${t('Do you want to enable or disable shift?')}`}
                    <span className={styles.aster}>*</span>
                  </Typography>
                  <Radio value='no' defaultChecked checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Enable')}`}
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Disable')}`}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Typography variant='h6'>{`${t('Shift Schedule')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={3} className={styles.textField}>
              <Typography variant='subtitle2'>{`${t('Days')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={3} className={styles.textField}>
              <Typography variant='subtitle2'>{`${t('Start Time')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={styles.textField}>
              <Typography variant='subtitle2'>{`${t('End Time')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Monday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Tuesday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Wednesday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Thursday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Friday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Saturday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.textField}>
              <Grid container columnGap={3}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle2'>
                    <Checkbox color='secondary' /> {`${t('Sunday')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField type='time' fullWidth size='small' />
                </Grid>
              </Grid>
            </Grid>           
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={1}>
                  <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                    {`${t('Save')}`}
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default EditShiftAttributes
