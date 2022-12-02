import { Grid, Paper, Typography, Fab, TextField, Divider } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addEmployeeSafetyOrientation.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddEmployeeSafetyOrientation = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/forms'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Forms')}`}</Typography>
        </Link>
        <Link href='/applications/forms/employeeSafetyOrientation'>
          <Typography className={styles.link} variant='subtitle'>{`${t(
            'Employee Safety Orientation Checklist'
          )}`}</Typography>
        </Link>
        <Link href='/applications/forms/employeeSafetyOrientation/addEmployeeSafetyOrientation'>
          <Typography className={styles.link} variant='subtitle'>{`${t(
            'Add Employee Safety Orientation Checklist'
          )}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Employee Safety Orientation')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Employee Safety Orientation Checklist.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Employee ID')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Jobs')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Review in detail the current Job Safety Analysis for each assigned job post.')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Review the Injury Illness Prevention Plan.')}`}</Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t(
                'Review, understand and observe all safety rules as written in the post orders, the Allied Universal Safety Manual, and client requirements.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Complete safety trainings as required for Defensive Driving')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Complete safety trainings as required for Specialized Patrol Vehicles')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Complete safety trainings as required for Chemical Hazard Communication')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Complete safety trainings as required for Personal Protective Equipment')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Complete safety trainings as required for Bloodborne Pathogens')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Complete safety trainings as required for Heat Illness')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Review how to report any unsafe condition or safety concern to your supervisor/manager')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t(
                'All/any injury, near miss or vehicle accident must be reported immediately (during the shift in which it occurred) to the supervisor/manager. Review how to report incidents and how to get First Aid or medical care when needed.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Initials')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t(
                "Any person who makes or causes to be made and knowingly false or fraudulent material statement or material representation for the purpose of obtaining or denying workers' compensation benefits or payments will be discharged and reported to the Workers' Compensation Insurance Commission. I understand that it is my responsibility to review and adhere to these policies. Any questions will be discussed with the supervisor."
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Employee Signature')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Supervisor Signature')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Supervisor Name')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={7} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save Only')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save & Send Email')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}


export default AddEmployeeSafetyOrientation
