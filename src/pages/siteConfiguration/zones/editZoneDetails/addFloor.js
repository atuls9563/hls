import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../../styles/addFloor.module.css'
import React,{useState} from 'react'
import { TextField, Grid, Paper, Select, MenuItem, Radio } from '@mui/material'
import { useTranslation } from 'react-i18next'

const AddFloor = ({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Modal open={openEditTwo} onClose={handleEditCloseTwo}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} justifyContent='space-between'>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Add Floor to')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' >
                {`${t('Name')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField fullWidth size='small' type='text' />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' >
                {`${t('Floor No')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField fullWidth size='small' type='text' />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' >
                {`${t('Use Type')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Select size='small' fullWidth>
                <MenuItem value=''>Select Service Type</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' >
                {`${t('Average Day Occupants.')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField fullWidth size='small' type='text' />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' >
                {`${t('Average Night Occupants.')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField fullWidth size='small' type='text' />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2'>
                {`${t('Secured Access')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
              {`${t('Yes')}`}
              <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
              {`${t('No')}`}
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                onClick={handleEditCloseTwo}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
              >
                {`${t('Close')}`}
              </Fab>
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

export default AddFloor
