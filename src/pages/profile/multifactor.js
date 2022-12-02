import React from 'react'
import { Box, Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Paper from '@mui/material/Paper'
import styles from '../../../styles/multifactor.module.css'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useTranslation } from 'react-i18next'

const Multifactor = () => {
  const { t } = useTranslation()

  return (
    <>
      <Paper className={styles.container} variant="outlined" >
        <Grid container>
          <Grid item xs={12} md={10} className={styles.header}>
            <Typography variant='h6' className={styles.heading}>
              {`${t('My Account - Change Multifactor Authentication')}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant='subtitle2' className={styles.heading2}>
              <span className={styles.aster}>*</span> {`${t('Mandatory Fields')}`}
            </Typography>
          </Grid>
          <Box className={styles.box}>
            <FormControl fullWidth size='small'>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Account Information')}`}
              </Typography>

              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography variant='subtitle2' className={styles.headingTwo}>
                    {`${t('Cell No')}`}
                  </Typography>

                  <TextField
                    className={styles.text}
                    name='cellNo'
                    fullWidth
                    variant='outlined'
                    size='small'
                    type='number'
                  />

                  <FormLabel className={styles.heading3}>{`${t('Choose Multifactor Authentication')}`}</FormLabel>
                  <RadioGroup>
                    <FormControlLabel
                      className={styles.radio}
                      value='textMessage'
                      control={<Radio />}
                      label={`${t('A Text Message')}`}
                    />
                    <FormControlLabel
                      className={styles.radio}
                      value='phoneCall'
                      control={<Radio />}
                      label={`${t('A Phone Call')}`}
                    />
                    <FormControlLabel
                      className={styles.radio}
                      value='other'
                      control={<Radio />}
                      label={`${t('Google Authenticator')}`}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </FormControl>

            <Fab color='secondary' variant='extended' size='medium' className={styles.button}>
              {`${t('Update')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' className={styles.button}>
              {`${t('Cancel')}`}
            </Fab>
          </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default Multifactor
