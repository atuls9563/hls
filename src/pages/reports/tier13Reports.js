import React from 'react'
import { Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Paper from '@mui/material/Paper'
import styles from '../../../styles/tier13Reports.module.css'
import Link from 'next/link'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import { useTranslation } from 'react-i18next'
import Fab from '@mui/material/Fab'

const Tier13Reports = () => {
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
        <Link href='/reports'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Reports')}`}</Typography>
        </Link>
        <Link href='/reports/tier13Reports'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Tier 13 Reports')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container}variant="outlined" >
        <form onSubmit={handleSubmit}>
          <Typography variant='h6' className={styles.topHeading}>
            {`${t('TIER 13 REPORTS')}`}
          </Typography>
          <Grid container className={styles.header}>
            <Grid item xs={12} md={6}>
              <Grid container>
                <Grid item xs={12} md={5.5} className={styles.block}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Select report')}`} <span className={styles.aster}>*</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} className={styles.block}>
                  <Select fullWidth size='small'>
                    <MenuItem value={0}> {`${t('Select report')}`} </MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} md={5} className={styles.textField}>
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
                </Grid>
              </Grid>
            </Grid>

            <Divider orientation='vertical' className={styles.divider} />

            <Grid item xs={12} md={3} className={styles.heading3}>
              <Typography variant='subtitle2' className={styles.heading}>
                {`${t('Select Client Tier 13')}`} <span className={styles.aster}>*</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Select fullWidth size='small'>
                <MenuItem value={0}> {`${t('Select Tiers')}`} </MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Fab color='secondary' variant='extended' size='medium' className={styles.button2}>
            {`${t('Generate CSV')}`}
          </Fab>
          <Fab color='secondary' variant='extended' size='medium' className={styles.button2}>
            {`${t('Generate PDF')}`}
          </Fab>
        </form>
      </Paper>
    </>
  )
}

export default Tier13Reports
