import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/siteAttributes.module.css'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { useTranslation } from 'react-i18next'
import CoreAttributes from './coreAttributes'
import CrmAttributes from './crmAttributes'
import VVMAttributes from './vvmAttributes'
import IncidentARAttributes from './incidentARAtrributes'
import SiteSupervisor from './siteSupervisor'
import DerivedAttributes from './derivedAttributes'
import OfficeMonitoring from './officeMonitoring'
import Cruise from './cruise'
import ShiftsAttributes from './shiftsAttributes'
import TiersAttributes from './tiersAttributes'
import SOSConfiguration from './sosConfiguration'
import PatrolConfiguration from './patrolConfiguration'
import Dispatch from './dispatch'
import SecureTrax from './secureTrax'

const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  color: 'gray'
}))

const SiteAttributes = () => {
  const [value, setValue] = useState('core')
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
        <Link href='/siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/siteAttributes'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Site Attributes')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={6} md={2}>
            <Link href='/siteConfiguration/siteAttributes/searchSite'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('SEARCH SITE')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('CLIENT : CTEPL VINAY 1106661:1106661')}`}
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <TabContext value={value}>
              <TabList
                variant='scrollable'
                scrollButtons='auto'
                onChange={handleChange}
                textColor='inherit'
                indicatorColor='secondary'
                className={styles.buttonGroup}
              >
                <Tab value='core' label={`${t('Core')}`} className={styles.transform} />
                <Tab value='crm' label={`${t('CRM')}`} className={styles.transform} />
                <Tab value='vvm' label={`${t('VVM')}`} className={styles.transform} />
                <Tab value='incidents' label={`${t('Incidents/AR')}`} className={styles.transform} />
                <Tab value='siteSupervisor' label={`${t('Site Supervisor')}`} className={styles.transform} />
                <Tab value='derived' label={`${t('Derived')}`} className={styles.transform} />
                <Tab value='office' label={`${t('Officer Monitoring')}`} className={styles.transform} />
                <Tab value='cruise' label={`${t('Cruise')}`} className={styles.transform} />
                <Tab value='shifts' label={`${t('Shifts')}`} className={styles.transform} />
                <Tab value='tiers' label={`${t('Tiers')}`} className={styles.transform} />
                <Tab value='sos' label={`${t('SOS')}`} className={styles.transform} />
                <Tab value='patrol' label={`${t('Patrol')}`} className={styles.transform} />
                <Tab value='dispatch' label={`${t('Dispatch')}`} className={styles.transform} />
                <Tab value='secureTrax' label={`${t('SecureTrax')}`} className={styles.transform} />
              </TabList>
              <Box>
                <TabPanel value='core'>
                  <CoreAttributes />
                </TabPanel>
                <TabPanel value='crm'>
                  <CrmAttributes />
                </TabPanel>
                <TabPanel value='vvm'>
                  <VVMAttributes />
                </TabPanel>
                <TabPanel value='incidents'>
                  <IncidentARAttributes />
                </TabPanel>
                <TabPanel value='siteSupervisor'>
                  <SiteSupervisor />
                </TabPanel>
                <TabPanel value='derived'>
                  <DerivedAttributes />
                </TabPanel>
                <TabPanel value='office'>
                  <OfficeMonitoring />
                </TabPanel>
                <TabPanel value='cruise'>
                  <Cruise />
                </TabPanel>
                <TabPanel value='shifts'>
                  <ShiftsAttributes />
                </TabPanel>
                <TabPanel value='tiers'>
                  <TiersAttributes />
                </TabPanel>
                <TabPanel value='sos'>
                  <SOSConfiguration />
                </TabPanel>
                <TabPanel value='patrol'>
                  <PatrolConfiguration />
                </TabPanel>
                <TabPanel value='dispatch'>
                  <Dispatch />
                </TabPanel>
                <TabPanel value='secureTrax'>
                  <SecureTrax />
                </TabPanel>
              </Box>
            </TabContext>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default SiteAttributes
