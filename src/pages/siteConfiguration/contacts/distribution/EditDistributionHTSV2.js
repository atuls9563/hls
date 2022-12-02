import Modal from '@mui/material/Modal'
import { Close, EmailOutline, MessageText } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Divider, Fab, Grid, Paper, Radio, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/editDistributionHTSV2.module.css'

const EditDistributionHTSV2 = ({ openEditEight, setOpenEditEight, handleEditClickOpenEight, handleEditCloseEight }) => {
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
      <Modal open={openEditEight} onClose={handleEditCloseEight}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} columnGap={2}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Edit Distribution')}`}
              </Typography>
              <Close onClick={handleEditCloseEight} className={styles.icon} />
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
                <EmailOutline className={toggle ? styles.iconTwo : styles.icon} onClick={e => toggleIt(e)} />
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
                {`${t('Workflow Administrative')}`}
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
              <Typography variant='subtitle2' className={styles.headingFive}>
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
                {`${t('Shift Based Distribution')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Summary (Dev Test Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Summary (Test Shift1)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t(' Activity Report Summary (Test Shift2)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />{' '}
                {`${t('Activity Report Summary (Test Shift3)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Dev Test Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Test Shift1)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Test Shift2)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Test Shift3)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Dev Test Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Test Shift1)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Test Shift2)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Test Shift3)')}`}
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
                {`${t('हिंदी टेस्ट फॉर्म (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('हिंदी टेस्ट फॉर्म (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Aux Gate Vehicle Check (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Aux Gate Vehicle Check (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Building C Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Building C Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Camera Disable Test Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Camera Disable Test Form (Last 24 Hours CSV)')}`}
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
                {`${t('General Dolphin Log Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('General Dolphin Log Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Heliaus Test Site 2 Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Heliaus Test Site 2 Form (Last 24 Hours CSV)')}`}
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
                {`${t('Mayank Form Test New (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Form Test New (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank SI Form Test (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank SI Form Test (Last 24 Hours CSV))')}`}
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
                {`${t('New Site Inspection Test Without Action Date (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('New Site Inspection Test Without Action Date (Last 24 Hours CSV)')}`}
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
                {`${t('Test Action Date Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Test Action Date Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Test Action DateTime Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Test Action DateTime Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Training Tracker (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Training Tracker (Last 24 Hours CSV)')}`}
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
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Wheelchair (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Wheelchair (Last 24 Hours CSV)')}`}
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
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Custom Shift Reports')}`}
              </Typography>
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
                onClick={handleEditCloseEight}
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

export default EditDistributionHTSV2
