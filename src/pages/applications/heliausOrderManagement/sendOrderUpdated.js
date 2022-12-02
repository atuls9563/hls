import Modal from '@mui/material/Modal'
import { Fab, Grid, Paper, Typography, Divider, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/sendOrderUpdate.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Close } from 'mdi-material-ui'

const SendOrderUpdate = ({ openEditThree, setOpenEditThree, handleEditClickOpenThree, handleEditCloseThree }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditThree} onClose={handleEditCloseThree}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} justifyContent='space-between'>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Send Order Update (Order # 23727)')}`}
              </Typography>
              <Close onClick={handleEditCloseThree} className={styles.icon} />
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
            <Grid item xs={12} md={5.5} className={`${styles.topTen} ${styles.headerText}`}>
              <Typography variant='subtitle' className={styles.headingTwo}>
                {`${t('Order Update will be sent to')}`}
              </Typography>
              <Typography variant='subtitle' className={styles.headingOne}>
                {`${t('Derrick Quarker (Order Contact) - derrick.quarker@aus.com')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Additional Recipients Email addresses (enter email ids separated by Comma (,))')}`}:
              </Typography>
              <TextField type='text' multiline rows={2} fullWidth size='small' />
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
              <Link href='/applications/heliausOrderManagement/editAccessoriesOrder'>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Send Order Update')}`}
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default SendOrderUpdate
