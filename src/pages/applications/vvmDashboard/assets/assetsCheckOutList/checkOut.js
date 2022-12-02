import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Fab, Grid, Paper, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../../styles/checkOut.module.css'

const CheckOut = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('CheckOut')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container className={styles.textField} justifyContent='space-between'>
                <Grid item xs={12} md={5.5}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Typography variant='subtitle2'>
                        {`${t('Signature')}`}
                        <span className={styles.aster}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField type='file' fullWidth size='small' />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Typography variant='subtitle2'>{`${t('Officer')}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField type='text' fullWidth size='small' />
                    </Grid>
                  </Grid>
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

export default CheckOut
