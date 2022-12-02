import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../../../styles/searchLicensePlate.module.css'
import React from 'react'
import { TextField, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

const SearchLicensePlate = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Search License Plate')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography variant='subtitle' className={styles.topHeading}>
                    {`${t('License Plate No.')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    size='small'
                    type='text'
                    placeholder={`${t('Enter License Plate number')}`}
                    className={styles.textArea}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                    {`${t('Search')}`}
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                variant='extended'
                onClick={handleEditClose}
                size='medium'
                type='submit'
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

export default SearchLicensePlate
