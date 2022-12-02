import Modal from '@mui/material/Modal'
import { Fab, Grid, Paper, Typography, Divider, TextField, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/orderEscalation.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Close } from 'mdi-material-ui'

const OrderEscalation = ({ openEditFour, setOpenEditFour, handleEditClickOpenFour, handleEditCloseFour }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditFour} onClose={handleEditCloseFour}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} justifyContent='space-between'>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Order Escalation (Order # 23727)')}`}
              </Typography>
              <Close onClick={handleEditCloseFour} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Typography variant='h6'>{`${t('Order Details')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Order ID')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('8745823')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Order Type')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('09:46')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Site')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Order Status')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-09-19')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Order Date')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Vinay Pasapala')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Order By')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('SG5')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Contact Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('SG5')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Contact Email')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('SG5')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.headerText}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Contact Phone')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('SG5')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Typography variant='subtitle' className={styles.headingTwo}>
                {`${t('Email Body Template')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle' className={styles.headingOne}>
                {`${t(
                  'I am reaching out to you today requesting your assistance with this HELIAUS order. The order is at risk of delaying our client service delivery date. Please review the information and the "Reason For Escalation" notes below. Your assistance and action is greatly appreciated.'
                )}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Escalation Level')}`}:<span className={styles.aster}>*</span>
              </Typography>
              <Select size='small' fullWidth>
                <MenuItem value='selectCategory'>Select Category</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Note')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' multiline rows={2} fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={`${styles.headerRight} ${styles.block}`}>
              <Fab color='secondary' onClick={handleEditCloseFour} variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Escalate')}`}
              </Fab>

              <Fab color='secondary' onClick={handleEditCloseFour} variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Close')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default OrderEscalation
