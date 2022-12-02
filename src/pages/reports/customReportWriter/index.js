import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/customReport.module.css'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import GlobalSelectedSite from '../globalSelectedSite'

import { useTranslation } from 'react-i18next'
import Fab from '@mui/material/Fab'
import PdfReportFormat from './pdfReportFormat'

const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  color: 'gray'
}))

const CustomReport = () => {
  const [value, setValue] = useState('globalSelectedSite')
  const { t } = useTranslation()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>

        <Link href='/reports/customReportWriter'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Custom Report Writer')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.headerDistance}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('CUSTOM REPORT WRITER')}`}
                </Typography>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Create Activities Report')}`}
                </Fab>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Create Site Form Report')}`}
                </Fab>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Create Patrol Report')}`}
                </Fab>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                  {`${t('Create Unified Activity Report')}`}
                </Fab>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container className={styles.header}>
                  <Grid item xs={12} md={12}>
                    <TabContext value={value}>
                      <TabList
                        variant='scrollable'
                        scrollButtons='auto'
                        onChange={handleChange}
                        textColor='inherit'
                        indicatorColor='secondary'
                        className={styles.buttonGroup}
                      >
                        <Tab
                          value='globalSelectedSite'
                          label={`${t('Global Selected Site Reports')}`}
                          className={styles.transform}
                        />
                        <Tab value='pdfReportFormat' label={`${t('PDF Report Format')}`} className={styles.transform} />
                      </TabList>
                      <Box>
                        <TabPanel value='globalSelectedSite'>
                          <GlobalSelectedSite />
                        </TabPanel>
                        <TabPanel value='pdfReportFormat'>
                          <PdfReportFormat />
                        </TabPanel>
                      </Box>
                    </TabContext>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default CustomReport
