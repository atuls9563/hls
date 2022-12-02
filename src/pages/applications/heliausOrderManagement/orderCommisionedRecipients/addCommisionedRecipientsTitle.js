import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../../styles/addCommisionedRecipientsTitle.module.css'
import React from 'react'
import { TextField, Grid, Paper, Select, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

const AddCommisionedRecipientsTitle = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Select the Commission Recipient Title')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={styles.headingTwo}>
              <Typography variant='subtitle2' >
                {`${t(
                  'To add a Commission Recipient , you must add a title - you can do it by doing one of the following way. Use employee search if you are not sure of the title.'
                )}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2'  className={`${styles.block} ${styles.headingTwo}`}>
                {`${t('Search Title By Employee Id/Name')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField multiline fullWidth type='text' minRows={2} />
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Or Select A Title')}`}:<span className={styles.aster}>*</span>
              </Typography>
              <Select size='small' fullWidth>
                <MenuItem value='selectCategory'>Select Category</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={12} className={styles.block} >
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Save')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default AddCommisionedRecipientsTitle
