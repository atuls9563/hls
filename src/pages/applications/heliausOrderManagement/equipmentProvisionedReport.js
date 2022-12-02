import React from 'react'
import { Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Paper from '@mui/material/Paper'
import styles from '../../../../styles/equipmentProvisionedReport.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Fab from '@mui/material/Fab'

const EquipmentProvisionedReport = () => {
  const { t } = useTranslation()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(content)
  }

  return (
    <>
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
        <Link href='/applications/heliausOrderManagement/equipmentProvisionedReport'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Equipment Provisioned Report')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography variant='h6' className={styles.topHeading}>
                {`${t('Equipment Provisioned Report')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={styles.textField}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('From')}`}
              </Typography>
              <TextField type='datetime-local' size='small' />
            </Grid>
            <Grid item xs={12} md={5} className={styles.textField}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('To')}`}
              </Typography>
              <TextField type='datetime-local' size='small' />
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Generate Report')}`}
              </Fab>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  )
}

export default EquipmentProvisionedReport
