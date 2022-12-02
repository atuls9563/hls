import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import styles from '../../../../styles/option.module.css'
import React,{useState} from 'react'
import { TextField, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Option = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [state, setState] = useState(false)

  const positive = () => {
    setState(true)
  }
  
  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5'>{`${t('Option!')}`}</Typography>
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle2' className={styles.topHeading}>
                    {`${t('Enter the Option')}`}
                  </Typography>
                  <TextField type='text' fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                onClick={() => {
                  handleEditClose()
                  positive()
                }}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
              >
                {`${t('Submit')}`}
              </Fab>
              <Fab
                color='secondary'
                onClick={handleEditClose}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
              >
                {`${t('Cancel')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default Option
