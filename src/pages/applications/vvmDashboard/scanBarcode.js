import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/scanBarcode.module.css'

const ScanBarcode = ({ openEditThree, setOpenEditThree, handleEditClickOpenThree, handleEditCloseThree }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditThree} onClose={handleEditCloseThree}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('ScanBarcode')}`}
              </Typography>
              <Close onClick={handleEditCloseThree} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle' className={styles.headingTwo}>
                {`${t('Waiting for Scan Barcode')}`}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default ScanBarcode
