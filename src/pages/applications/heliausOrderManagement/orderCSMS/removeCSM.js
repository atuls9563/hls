import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../../styles/removeCSM.module.css'
import React from 'react'
import { Checkbox, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

const RemoveCSM = ({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditTwo} onClose={handleEditCloseTwo}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Select the CSM Title')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={`${styles.block} ${styles.headingTwo}`}>
                <Checkbox color='secondary' />
                {`${t('IT-Client-Success-Manager---Heliaus-Technology')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <Checkbox color='secondary' />
                {`${t('IT-Client-Success-Manager---Heliaus-Technology')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={`${styles.block} ${styles.footer}`}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Remove')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default RemoveCSM
