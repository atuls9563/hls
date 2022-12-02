import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../../styles/addNote.module.css'
import React from 'react'
import { TextField, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

const AddNote = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Add Note ')}`}
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
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle' className={styles.topHeading}>
                    {`${t('Note')}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField multiline type='text' minRows={2} />
                </Grid>
                <Grid item xs={12} md={12} className={styles.block}>
                  <Typography variant='subtitle2'>{`${t('Images')}`}</Typography>
                  <TextField type='file' fullWidth />
                  <Typography variant='subtitle2'>{`${t('( You can select multiple files here )')}`}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Submit')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default AddNote
