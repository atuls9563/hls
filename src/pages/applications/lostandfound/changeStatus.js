import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/changeStatus.module.css'

const ChangeStatus = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Change Item Status')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Current Status')}`}
                  <span className={styles.aster}>*</span>
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value={0}> {`${t('Found')}`}</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Update')}`}
              </Fab>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                type='submit'
                onClick={handleEditClose}
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default ChangeStatus
