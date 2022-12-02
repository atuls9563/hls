import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/claimTask.module.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ClaimTask = ({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) => {
  const { t } = useTranslation()

  const notify = () => {
    toast.success(`Task Claimed Successfully`, {
      theme: 'colored'
    })
  }

  return (
    <div>
      <Modal open={openEditTwo} onClose={handleEditCloseTwo}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Claim Task')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Officer Name')}`}
                </Typography>
                <Select size='small' required fullWidth>
                  <MenuItem value={0}>Select Officer</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
                onClick={notify}
              >
                {`${t('Claim')}`}
              </Fab>
              <ToastContainer position='top-center' closeOnClick autoClose={5000}></ToastContainer>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default ClaimTask
