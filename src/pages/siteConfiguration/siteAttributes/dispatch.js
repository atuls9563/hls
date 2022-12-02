import React,{useState} from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField,Checkbox,Fab,Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/dispatch.module.css'
import { useTranslation } from 'react-i18next'

const Dispatch = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Dispatch Configuration')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Patrol Mode enabled')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Can a security professional change dispatch status on device?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Security professional can mark himself as "Out of service" on device?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Security professional can mark himself as "In service" on device?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('In-Progress/Arrived On-Site Allowed Time')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Warning/Completed Time')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Officer can see future dispatch on device?')}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Reasons for "Out of service" request?')}`}</Typography>
                <TextField type='text' multiline rows={2} fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('On dispatch completion narration and images mandatory?')}`}</Typography>
                <Typography variant='subtitle2'>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Not Required')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Only Narrative')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Narrative & Images')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('On dispatch completion narration and images mandatory?')}`}</Typography>
                <Typography variant='subtitle2'>
                  <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
                  {`${t('Only Assigned')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('Assigned & Pending')}`}
                </Typography>
                <Typography variant='subtitle2'>
                  <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
                  {`${t('All')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Login will be marked as "In service" on device ?')}`}</Typography>
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

export default Dispatch
