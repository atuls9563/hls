import { Grid, Paper, Typography,Fab } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/editProvisioningManagers.module.css'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import SelectOne from 'react-select'
import makeAnimated from 'react-select/animated'

const EditProvisioningManagers = () => {
  const { t } = useTranslation()

  const animatedComponents = makeAnimated()

  const names = [{ id: 2, value: 'red', label: 'Red' }]

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('HELIAUS Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/provisioningManagers/editProvisioningManagers'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Edit Provisioning Managers')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Edit Provisioning Managers')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Name')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('Vinay Pasapala')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Email Address')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('SG5')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Email Address')}`}
            </Typography>
            <SelectOne
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={names}
              isSearchable={true}
              defaultValue={[names[0]]}
            />
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
              {`${t('Save')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditProvisioningManagers
