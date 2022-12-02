import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../styles/associateTourPoints.module.css'
import React from 'react'
import {  Grid, Paper, Select, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

const AssociateTourPoints = ({ openEditFour, setOpenEditFour, handleEditClickOpenFour, handleEditCloseFour }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Modal open={openEditFour} onClose={handleEditCloseFour}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} justifyContent='space-between'>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Associate Tour Points to Zone')}`}
              </Typography>
              <Close onClick={handleEditCloseFour} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Typography variant='subtitle2' className={styles.aster}>
                {`${t('Please note that setting Location Identifer Type to')}`}
                <b>{`${t('"None"')}`}</b>
                {`${t(
                  "will remove this Zone from any tours that it is part of. This will be effective from the next day's tours"
                )}`}
                <b>{`${t('(Warning')}`}</b>:
                {`${t(
                  'Please do not set the Location Identifier Type to None if this tour is in progress as it can cause incomplete tour)'
                )}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={`${styles.block} ${styles.header}`}>
              <Typography variant='subtitle2'>{`${t('Zone Name')}`}</Typography>
              <Typography variant='subtitle2'>{`${t('Aug AED Zone')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2'>{`${t('Location Identifier Type')}`}</Typography>
              <Select size='small' fullWidth>
                <MenuItem value='select'>Select</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2'>{`${t('Location Identifier')}`}</Typography>
              <Select size='small' fullWidth>
                <MenuItem value='select'>Select</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                onClick={handleEditCloseFour}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Associate')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default AssociateTourPoints
