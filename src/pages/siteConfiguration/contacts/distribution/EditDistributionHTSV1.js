import Modal from '@mui/material/Modal'
import { Close, EmailOutline, MessageText } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Divider, Fab, Grid, Paper, Radio, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/editDistributionHTSV1.module.css'

const EditDistributionHTSV1 = ({ openEditSeven, setOpenEditSeven, handleEditClickOpenSeven, handleEditCloseSeven }) => {
  const { t } = useTranslation()

  const [selectedValue, setSelectedValue] = useState('yes')
  const [toggle, setToggle] = useState(false)

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const toggleIt = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <Modal open={openEditSeven} onClose={handleEditCloseSeven}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} columnGap={2}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Edit Distribution')}`}
              </Typography>
              <Close onClick={handleEditCloseSeven} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Search')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' placeholder={`${t('Search A Job/Tier')}`} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Functions')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline
                  className={toggle ? styles.icon : styles.iconTwo}
                  name='activityClosure'
                  onChange={e => handleChangeTwo()}
                  onClick={e => toggleIt(e)}
                />
                {`${t('Activity Closure')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline
                  className={toggle ? styles.icon : styles.iconTwo}
                  name='activityClosureException'
                  onClick={e => toggleIt(e)}
                />
                {`${t('Activity Closure Exception')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Daily Summary')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Added Draft Incident')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Added Draft Serious Incident')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Barred Person Addition Notification')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Barred Person Denied Access')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Bounced Email')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Complete Tour')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Corrective Plan Weekly Reminder(CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Site Coverage Report')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Event Report Daily Summary')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Event Report Daily Summary (with Images)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Events')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Events Modified')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Expiration Date Alert - Barred Person')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Facility Safety Survey Checklist')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Finalized Approved Incident')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Finalized Serious Incident')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Free to Tow')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Incident Approval Reminder (72 Hours)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Incident Approval Reminder(> 7 days)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Incident Approval Reminder(All Time)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Incident Report (Daily)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Incomplete Tour')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Inspection Points Report(Daily)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Late Key Return')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('LiveSafe Event')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Lost & Found')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Missed Tour')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Negative Answer to Point Scan')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Officer Log In/Out')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Out of Geofence Alerts')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Out of Tolerance Inspection Point')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Parking Violation')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Parking Violations Daily Summary')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Scheduled Tours Summary (Daily)- CSV')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Scheduled Tours Summary (Daily)- PDF')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Scheduled Tours Summary (Weekly)- CSV')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Scheduled Tours Summary (Weekly)- PDF')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Site Inspections')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('SOS/ALL CLEAR Alert')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Speed Limit Alert')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Support Ticket Cc')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Task Resolved (10.5 only)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Tours Exception Report')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity By Device Report')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images(Color Coded)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Exception Report')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified VVM Report (Daily)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified VVM Report (Daily) - CSV')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified VVM Report (Hourly)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Visitors/Contractors Checked-In But not Checked-Out (Hourly)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Visitor Screening - Declined')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Visitor Screening - Green')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Visitor Screening - Red')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('VVM Report CSV (Hourly)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('VVM Report PDF (Hourly)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Workflow Facility')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Workflows 24 hours -pdf')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Workflow Safety')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Workflow Security')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Yard Inventory (Daily)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={styles.content}>
              <Typography variant='subtitle2'>{`${t('Category Based Distribution (Incident/Event/ARs)')}`}:</Typography>
              <Typography variant='subtitle2' className={styles.headingSeven}>
                <Radio color='secondary' value='small' onChange={handleChangeTwo} />
                {`${t('All Categories')}`}
                <Radio color='secondary' value='small' onChange={handleChangeTwo} />
                {`${t('Specific Categories')}`}
                <Radio color='secondary' value='small' onChange={handleChangeTwo} />
                {`${t('Site Specific Categories')}`}
                <Radio color='secondary' value='small' defaultChecked onChange={handleChangeTwo} />
                {`${t('No Category based distribution')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Patrol')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Complete Route')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('InComplete Route')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Missed Route')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Complete Stop')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Incomplete Stop')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('Missed Stop')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('VVM Custom In/Out Form Alert')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('VVM Check-In Form')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                <MessageText onClick={e => toggleIt(e)} className={toggle ? styles.icon : styles.iconTwo} />
                {`${t('VVM Check-Out Form')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Custom Site Forms')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Abandoned Vehicle Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Abandoned Vehicle Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Client Meeting (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Client Meeting (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Communication Notification Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Communication Notification Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Confidential form 8442 (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Confidential form 8442 (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Customer Performance Review / KPI / QBR (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Customer Performance Review / KPI / QBR (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Vehicle Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Vehicle Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Employee Safety Orientation Checklist (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Employee Safety Orientation Checklist (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Greyhound OT Explanation (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Greyhound OT Explanation (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Home Depot Product Recovery (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Home Depot Product Recovery (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('JSA Acknowledgement (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('JSA Acknowledgement (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>

            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('JSA Acknowledgement (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('JSA Acknowledgement (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Memo (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Memo (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('OJT (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('OJT (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Penetration Test (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Penetration Test (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Pier Inspection Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Pier Inspection Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Check (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Check (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>

            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Second form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Second form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Student Tour Inspection/Guard Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Student Tour Inspection/Guard Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('test loader (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('test loader (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('test loader (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('testNovoform (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('THD Site Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('THD Site Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Uniform/Site Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Uniform/Site Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Vehicle Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Vehicle Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Vinod Test (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Vinod Test (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Unified Activity Report By Zone')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity By Zone')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Custom Schedule Reports')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='caption' className={styles.headingTwo}>
                {`${t('You dont have any Scheduled Report on Custom Report Writer currently.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Custom Schedule Reports(Tierwise)')}`}
              </Typography>
              <Typography variant='caption' className={styles.headingTwo}>
                {`${t('You dont have any Scheduled Report for Tier in Custom Report Writer currently.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Custom Shift Reports')}`}
              </Typography>
              <Typography variant='caption' className={styles.headingTwo}>
                {`${t('In order to access this feature you must enable the shifts.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={3}>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                type='submit'
                onClick={handleEditCloseSeven}
                className={styles.button}
              >
                {`${t('Save')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default EditDistributionHTSV1
