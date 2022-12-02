import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Checkbox, Divider, Fab, Grid, MenuItem, Paper, Radio, Select, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/addDevice.module.css'

const AddDevice = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} columnGap={2}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Add Device to Monitor')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Device IMEI to Monitor')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Select size='small' variant='outlined' fullWidth>
                <MenuItem value='firstName'>First Name</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Site Phone No.')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Post Name')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Supervisor Name')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Supervisor E-Mail')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Supervisor Phone No.')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t(
                  'Do you want to call or email the supervisor if the security professional is inactive/sitting?'
                )}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Typography variant='subtitle2'>
                <Radio color='secondary' /> {`${t('Call')}`} <Radio color='secondary' /> {`${t('Email')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Officer Monitoring Alert Level')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Typography variant='subtitle2'>
                <Radio color='secondary' /> {`${t('Inactive')}`} <Radio color='secondary' /> {`${t('Sitting')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Do you want to enable or disable OM for device?')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Typography variant='subtitle2'>
                <Radio color='secondary' /> {`${t('Enable')}`} <Radio color='secondary' /> {`${t('Disable')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Do you want the call to be acknowledged or answered?')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Typography variant='subtitle2'>
                <Radio color='secondary' /> {`${t('Acknowledged')}`} <Radio color='secondary' /> {`${t('Answered')}`}
              </Typography>
              <Typography variant='subtitle2'>
                <span className={`${styles.aster} ${styles.headingTwo}`}>{`${t(
                  'Answered call simply needs to be answererd. Acknowledged calls require that the user press a number generated at a random by the system.'
                )}`}</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.top}>
              <Typography variant='h6'>{`${t('Device Schedule')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={1.5} className={styles.headerTwo}>
              <Typography variant='subtitle2'>{`${t('Days')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={1.2} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Monday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.2} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Tuesday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.6} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Wednesday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.4} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Thursday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.2} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Friday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.4} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Saturday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.2} className={styles.headerTwo}>
              <Checkbox color='secondary' />
              <b>{`${t('Sunday')}`}</b>
            </Grid>
            <Grid item xs={12} md={1.5} className={styles.headerTwo}>
              <Typography variant='subtitle2'>{`${t('Start Time')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.5} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.5} className={styles.headerTwo}>
              <Typography variant='subtitle2'>{`${t('End Time')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.5} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={1.3} className={styles.headerTwo}>
              <TextField type='time' size='small' color='secondary' className={styles.time} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={9} className={styles.textField}>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                onClick={handleEditClickOpen}
                className={styles.button}
              >
                {`${t('Save')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default AddDevice
