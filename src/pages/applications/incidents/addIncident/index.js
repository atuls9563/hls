import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/addIncident.module.css'
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { useTranslation } from 'react-i18next'
import Basic from './basic'
import HelpCircle from 'mdi-material-ui/HelpCircle'
import Tooltip from '@mui/material/Tooltip'
import Address from './address'
import Property from './property'
import Vehicle from './vehicle'
import Subject from './subject'
import OutsideServices from './outsideServices'
import MappedData from './mappedData'
import ClientInformation from './clientInformation'
import CustomFields from './customFields'
import BodyInjuryDiagram from './bodyInjuryDiagram'
import GpsLocation from './gpsLocation'

const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  color: 'gray'
}))

const AddIncident = () => {
  const [value, setValue] = useState('basic')
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
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/incidents'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Incidents')}`}</Typography>
        </Link>
        <Link href='/reports/addIncident'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Add Incident')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('CLIENT : HELIAUS TEST SITE V2 / OFFICE-CLIENT-SUB-WINTEAM : 911-2601-0-1106661')}`}
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
                <Tab value='basic' label={`${t('Basic')}`} className={styles.transform} />
                <Tab value='Address' label={`${t('Address/Location')}`} className={styles.transform} />
                <Tab value='Property' label={`${t('Property')}`} className={styles.transform} />
                <Tab value='Vehicle' label={`${t('Vehicle')}`} className={styles.transform} />
                <Tab value='Subject' label={`${t('Subject')}`} className={styles.transform} />
                <Tab value='OutsideServices' label={`${t('OutsideServices')}`} className={styles.transform} />
                <Tab value='Mapped Data' label={`${t('Mapped Data')}`} className={styles.transform} />
                <Tab value='Client Information' label={`${t('Client Information')}`} className={styles.transform} />
                <Tab value='Custom Fields' label={`${t('Custom Fields')}`} className={styles.transform} />
                <Tab value='Body Injury Diagram' label={`${t('Body Injury Diagram')}`} className={styles.transform} />
                <Tab value='GPS Location' label={`${t('GPS Location')}`} className={styles.transform} />
              </TabList>
              <Box>
                <TabPanel value='basic'>
                  <Basic />
                </TabPanel>
                <TabPanel value='Address'>
                  <Address />
                </TabPanel>
                <TabPanel value='Property'>
                  <Property />
                </TabPanel>
                <TabPanel value='Vehicle'>
                  <Vehicle />
                </TabPanel>
                <TabPanel value='Subject'>
                  <Subject />
                </TabPanel>
                <TabPanel value='OutsideServices'>
                  <OutsideServices />
                </TabPanel>
                <TabPanel value='Mapped Data'>
                  <MappedData />
                </TabPanel>
                <TabPanel value='Client Information'>
                  <ClientInformation />
                </TabPanel>
                <TabPanel value='Custom Fields'>
                  <CustomFields />
                </TabPanel>
                <TabPanel value='Body Injury Diagram'>
                  <BodyInjuryDiagram />
                </TabPanel>
                <TabPanel value='GPS Location'>
                  <GpsLocation />
                </TabPanel>
              </Box>
            </TabContext>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={styles.footer}>
              <Grid item xs={6} md={4}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save As Open/Draft')}`}
                </Fab>
              </Grid>
              <Grid item xs={1} md={1}>
                <Tooltip title='Saving incident report as open/draft will save incident as draft and will send notifications/emails accordingly.'>
                  <HelpCircle className={styles.icon} />
                </Tooltip>
              </Grid>
              <Grid item xs={6} md={4}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save As Pre-Draft')}`}
                </Fab>
              </Grid>
              <Grid item xs={1} md={1}>
                <Tooltip title='Saving incident report as pre-draft will not send any notifications/email and you will be able to edit the report later.'>
                  <HelpCircle className={styles.icon} />
                </Tooltip>
              </Grid>
              <Grid item xs={6} md={1}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Cancel')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default AddIncident
