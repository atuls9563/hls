import { Paper, MenuItem } from '@mui/material'
import React from 'react'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { useTranslation } from 'react-i18next'
import styles from '../../../styles/editProfile.module.css'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'

const EditProfile = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper variant="outlined" >
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography id='user-view-edit' variant='h6' className={styles.heading}>
              {`${t('Edit User Information')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Updating user details will receive a privacy audit.')}`}
            </Typography>
          </Grid>
          <form>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2'>
                  {`${t('Username')}`} <span className={styles.aster}>*</span>
                </Typography>

                <TextField
                  placeholder={`${t('Username')}`}
                  autoFocus
                  required
                  variant='outlined'
                  name='currentPassword'
                  fullWidth
                  size='small'
                  type='text'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2'>
                  {`${t('Email')}`} <span className={styles.aster}>*</span>
                </Typography>

                <TextField
                  placeholder={`${t('Email')}`}
                  variant='outlined'
                  name='newPassword'
                  fullWidth
                  size='small'
                  type='text'
                  InputProps={{ startAdornment: <InputAdornment position='start'>@</InputAdornment> }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant='subtitle2'>
                  {`${t('Status')}`} <span className={styles.aster}>*</span>
                </Typography>

                <Select fullWidth size='small'>
                  <MenuItem value='pending'>Pending</MenuItem>
                  <MenuItem value='active'>Active</MenuItem>
                  <MenuItem value='inactive'>Inactive</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant='subtitle2'>
                  {`${t('Contact')}`} <span className={styles.aster}>*</span>
                </Typography>
                <TextField fullWidth variant='outlined' size='small' />
              </Grid>
            </Grid>
          </form>

          <Grid item xs={12} md={12} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
              {`${t('Submit')}`}
            </Fab>

            <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button2}>
              {`${t('Discard')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditProfile
