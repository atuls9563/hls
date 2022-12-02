import { Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/workflowZone.module.css'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

const WorkflowZone = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Workflows')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows/workflowZone'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Workflow-Zone Association')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('WorkFlow/Zone Association')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.aster}>
              {`${t(
                'You can either choose Workflow and associate it with multiple Zones OR you can choose a Zone and associate multiple Workflows with it.'
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.aster}>
              {`${t('Select a Workflow OR Zone')}`}
            </Typography>
            <Radio
              color='secondary'              
              value='workflow'
              checked={selectedValue === 'workflow'}
              onChange={handleChangeTwo}
            />
            {`${t('Workflows')}`}
            <Radio value='zone' checked={selectedValue === 'zone'} onChange={handleChangeTwo} color='secondary' />
            {`${t('Zones')}`}
          </Grid>
          {
            !selectedValue?null:(selectedValue == 'workflow' ? (
              <Grid item xs={12} md={3.9} className={styles.textField}>
                <Typography variant='subtitle2'>{`${t('WorkFlows')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service a Workflow</MenuItem>
                </Select>
              </Grid>
            )  : (
              <Grid item xs={12} md={3.9} className={styles.textField}>
                <Typography variant='subtitle2'>{`${t('Zones')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Zone</MenuItem>
                </Select>
              </Grid>
            ))
          }

          <Grid item xs={6} md={12} className={styles.textField}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default WorkflowZone
