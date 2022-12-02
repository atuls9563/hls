import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import styles from '../../../../styles/approveCancel.module.css'
import React, { useState } from 'react'
import { Divider, Grid, Paper, Radio } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Close } from 'mdi-material-ui'
import Link from 'next/link'

const ApproveCancel = ({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) => {
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
              <Typography variant='h5' className={styles.heading}>
                {`${t('Approve Cancel (Without Replacement)')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={`${styles.block} ${styles.headerCenter}`}>
              <Link href='/applications/heliausOrderManagement/orderDetails'>
                <Typography variant='subtitle' className={styles.link}>
                  {`${t('Click Here to view the order details')}`}
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} className={styles.block}>
              <Typography variant='subtitle2'>
                {`${t('Approve/Reject Order')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
              {`${t('Approve')}`}
              <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
              {`${t('Reject')}`}
            </Grid>
            <Grid item xs={12} md={12} className={`${styles.block} ${styles.footer}`} >
              <Fab
                color='secondary'
                onClick={handleEditCloseTwo}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
              <Fab
                color='secondary'
                onClick={handleEditCloseTwo}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
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

export default ApproveCancel
