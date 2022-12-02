import { Breadcrumbs, Fab, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '../../../../../styles/addAuxGateVehicle.module.css'
import { useTranslation } from 'react-i18next'

const AddAuxGateVehicle = () => {
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
        <Link href='/applications/forms/auxGateVehicle'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Aux Gate Vehicle Check')}`}</Typography>
        </Link>
        <Link href='/applications/forms/auxGateVehicle/addAuxGateVehicle'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add Aux Gate Vehicle Check')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Aux Gate Vehicle Check')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the Aux Gate Vehicle Check.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Date / Time')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='date' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Officer')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value='select'>Select Officer</MenuItem>
              <MenuItem value='none'>Select Officer</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Company Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Drivers Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Drivers License #')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Drivers License State')}`} <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectDriversLicenseState'>Select Divers License State</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('License Plate #')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Type of Truck')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Truck Tonnage')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Axel size of Truck')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectAxelSize'>Select Axel Size of Truck</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Truck Destination (Lot #)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Bill of Lading')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectBillOfLading'>Select Bill of Lading</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Photo of BOL')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Photo #1 of Truck (Front)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Photo #2 of Truck (Lic Plate)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Photo #3 of Truck (Side)')}`} <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Photo #4 of Truck (Rear)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Photo #5 of Truck (Additional)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Photo #6 of Truck (Additional)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Time In')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='time' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Time Out')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='time' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Officer Signature')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={4} className={styles.footer}>
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

export default AddAuxGateVehicle
