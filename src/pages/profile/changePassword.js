import { Grid, TextField, Paper, Alert, AlertTitle, Fab, Typography } from '@mui/material'
import styles from '../../../styles/changePassword.module.css'
import { useTranslation } from 'react-i18next'

const ChangePassword = () => {
  const { t } = useTranslation()

  return (
    <>
      <Paper className={styles.container}variant="outlined" >
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant='subtitle2' className={styles.aster}>
              <span className={styles.aster}>*</span>
              {`${t('Mandatory Fields')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Alert icon={false} severity='warning'>
                  <AlertTitle>
                    <strong> {`${t('Password Rules')}`}</strong>
                  </AlertTitle>
                  {`${t('You cannot re-use a previous password.')}`} <br />
                  {`${t('Password must be 8 characters long and has at least')}`} <br />
                  {`${t(
                    'one capital letter, one number, one special character (allowed special characters (!@#$%^&*()_+-)'
                  )}`}{' '}
                  <br />
                  {`${t('and must be at least 8 characters long.')}`} <br />
                  <br />
                </Alert>
              </Grid>
              <Grid item xs={12} md={12} className={styles.blockOne}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' className={styles.heading}>
                      {`${t('Current Password')}`} <span className={styles.aster}>*</span>
                    </Typography>

                    <TextField
                      placeholder={`${t('Current Password')}`}
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
                    <Typography variant='subtitle2' className={styles.heading}>
                      {`${t('New Password')}`} <span className={styles.aster}>*</span>
                    </Typography>

                    <TextField
                      placeholder={`${t('New Password')}`}
                      variant='outlined'
                      name='newPassword'
                      fullWidth
                      size='small'
                      type='text'
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className={styles.blockTwo}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.heading}>
                      {`${t('Confirm New Password')}`} <span className={styles.aster}>*</span>
                    </Typography>
                    <TextField
                      placeholder={`${t('Confirm New Password')}`}
                      variant='outlined'
                      fullWidth
                      name='confirmPassword'
                      size='small'
                      type='email'
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} >
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
              {`${t('Submit')}`}
            </Fab>

            <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button2}>
              {`${t('Cancel')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ChangePassword
