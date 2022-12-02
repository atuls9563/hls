import React from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Checkbox, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/secureTrax.module.css'
import { useTranslation } from 'react-i18next'

const SecureTrax = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('SecureTrax Configuration')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField}>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Is SecureTrax Site ?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('ICE switch')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={styles.footer}>
              <Grid item xs={6} md={2}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save')}`}
                </Fab>
              </Grid>
              <Grid item xs={6} md={1}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Cancel')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default SecureTrax
