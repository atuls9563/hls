import { Grid, Paper, Typography, Radio, Fab, TextField } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addDailyVehicleInspection.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddDailyVehicleInspection = () => {
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
        <Link href='/applications/forms/dailyVehicleInspection'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Daily Vehicle Inspection')}`}</Typography>
        </Link>
        <Link href='/applications/forms/dailyVehicleInspection/addDailyVehicleInspection'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Daily Vehicle Inspection')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Daily Vehicle Inspection')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Daily Vehicle Inspection.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Mileage')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Driver')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Make')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Year')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Tag Number')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Vehicle Clean Inside?')}`}</Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Images (Vehicle Clean Inside?)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Comments (Vehicle Clean Inside?)')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Vehicle Clean Outside?')}`}</Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Images (Vehicle Clean Outside?)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Comments (Vehicle Clean Outside?)')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Head Lights')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Tail Lights')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Break Lights')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Break Up Lights')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Turn Signals')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Dash Lights and Interior Lights')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Tag Light')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Heater / Defroster')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Air Conditioner')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Windshield Wipers')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Horn')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Engine Idle')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Engine Starts Easily')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Foot Brake')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Emergency Brake')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Rear Tires')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Front Tires')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Windshield Glass')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Mirrors')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Body Condition (Seats, etc.)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Good')}`} <Radio color='secondary' /> {`${t('Poor')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Images (Body Condition (Seats, etc.))')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Comments (Body Condition (Seats, etc.))')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Body Condition (Exterior Damage, Rust, etc.)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Good')}`} <Radio color='secondary' /> {`${t('Damaged')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Images (Body Condition (Exterior Damage, Rust, etc.))')}`}
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Comments (Body Condition (Exterior Damage, Rust, etc.))')}`}
            </Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Windows')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Doors (Locks and Windows)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Fuel Level')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Engine Hose Belt Visual Inspection')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Emergency Flashers')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Light Bar')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Spare Tire Kit (Tire and Tools)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('OK')}`} <Radio color='secondary' /> {`${t('Needs Attention')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('FlashLight')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('First Aid Kit')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Insuarance Card')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Traffic Cones')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Spare Tire')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Caution Tape')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Jack')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Registration Card')}`}:<span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}{' '}
              <Radio color='secondary' /> {`${t('N/A')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Picture of Body (If Damaged)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('List any additional details not addressed previously')}`}
            </Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Gas Card')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Is there Disinfectant Spray in the Vehicle?')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Are there Disinfectant wipes in the vehicle?')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Are there gloves in the vehicle?')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Driver"s Signature')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Supervisor"s Signature')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
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


export default AddDailyVehicleInspection
