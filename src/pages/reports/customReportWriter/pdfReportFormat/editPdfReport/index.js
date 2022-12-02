import { Breadcrumbs, Box, Grid, Paper, TextField, Typography, Radio } from '@mui/material'
import styles from '../../../../../../styles/editPdfReport.module.css'
import React, { useState } from 'react'
import Link from 'next/link'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Activities from './activities'
import SiteForms from './siteForms'
import { useTranslation } from 'react-i18next'

const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  color: 'gray'
}))

const EditPdfReport = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('activities')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const [value, setValue] = useState('activities')

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
        <Link href='/reports/customReportWriter/editPdfReport'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Edit PDF Report Format')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant="outlined" >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={5}>
                <Grid container className={styles.header}>
                  <Grid item xs={12} md={5}>
                    <Typography variant='subtitle2' className={styles.headingOne}>
                      {`${t('Report Format Title')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size='small' placeholder={`${t('PDF Format')}`} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.header}>
                    <Typography variant='subtitle2' className={styles.headingOne}>
                      {`${t('Report Format')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TabContext value={value}>
                      <TabList
                        variant='scrollable'
                        scrollButtons='auto'
                        onChange={handleChange}
                        textColor='inherit'
                        indicatorColor='secondary'
                      >
                        <Tab
                          value='activities'
                          name='reportFormat'
                          color='secondary'
                          className={styles.transform}
                          label={`${t('Activities')}`}
                          disableFocusRipple={true}
                          disableRipple={true}
                          icon={
                            <Radio
                              color='secondary'
                              checked={selectedValue === 'activities'}
                              onChange={handleChangeTwo}
                              value='activities'
                              name='reportFormat'
                            />
                          }
                        />

                        <Tab
                          disableFocusRipple={true}
                          disableRipple={true}
                          className={styles.transform}
                          name='reportFormat'
                          color='secondary'
                          label={`${t('Site Forms')}`}
                          value='siteForms'
                          icon={
                            <Radio
                              checked={selectedValue === 'siteForms'}
                              onChange={handleChangeTwo}
                              value='siteForms'
                              name='reportFormat'
                              color='secondary'
                            />
                          }
                        />
                      </TabList>
                      <Box>
                        <TabPanel className={styles.panel} value='activities'>
                          <Activities />
                        </TabPanel>
                        <TabPanel className={styles.panel} value='siteForms'>
                          <SiteForms />
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

export default EditPdfReport
