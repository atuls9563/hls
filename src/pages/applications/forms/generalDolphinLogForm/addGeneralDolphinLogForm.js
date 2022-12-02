import { Grid, Paper, Typography, Fab, TextField, Divider, Select, MenuItem } from '@mui/material'
import React from 'react'
import styles from '../../../../../styles/addGeneralDolphinLogForm.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AddGeneralDolphinLogForm = () => {
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
        <Link href='/applications/forms/generalDolphinLogForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t('General Dolphin Log Form')}`}</Typography>
        </Link>
        <Link href='/applications/forms/generalDolphinLogForm/addGeneralDolphinLogForm'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add General Dolphin Log Form')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add General Dolphin Log Form')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle2' className={styles.asterTwo}>
              {`${t(
                'Note: Current global site(Heliaus Test Site V2 (1106661) - #1106661) is used for the General Dolphin Log Form.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} className={styles.header}>
            <Typography variant='subtitle'>{`${t('Officer Section')}`}</Typography>
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
              {`${t('Officer')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectOfficer'>Select Officer</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='subtitle' className={styles.topHeading}>
              {`${t('Attachment')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Photo')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Video')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Audio')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('File')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='file' />
          </Grid>
          <Grid item xs={12} md={12} className={styles.divider}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Area')}`}</Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectArea'>Select Area</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Notes')}`}</Typography>
            <TextField required rows={2} fullWidth size='small' type='text' multiline />
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

export default AddGeneralDolphinLogForm
