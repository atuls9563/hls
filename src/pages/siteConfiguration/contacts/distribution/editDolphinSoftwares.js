import Modal from '@mui/material/Modal'
import { Close, EmailOutline, MessageText } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Divider, Fab, Grid, Paper, Radio, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/editDolphinSoftwares.module.css'

const EditDolphinSoftwares = ({ openEditFour, setOpenEditFour, handleEditClickOpenFour, handleEditCloseFour }) => {
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
      <Modal open={openEditFour} onClose={handleEditCloseFour}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} columnGap={2}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Edit Distribution')}`}
              </Typography>
              <Close onClick={handleEditCloseFour} className={styles.icon} />
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
                {`${t('Activity Report Summary (Afternoon Shift 05:30 to 06:30)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Summary (First Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Summary (MG Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />{' '}
                {`${t('Activity Report Summary (second shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Summary (Test Evening Shift 2021)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Activity Report Summary (Test Night Shift 2021)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Afternoon Shift 05:30 to 06:30)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (First Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (MG Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (second shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Test Evening Shift 2021)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report (Test Night Shift 2021)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Afternoon Shift 05:30 to 06:30)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (First Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (MG Shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (second shift)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Test Evening Shift 2021)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Unified Activity Report with Images (Test Night Shift 2021)')}`}
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
                {`${t('Formulaire de test de français (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Formulaire de test de français (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Prueba de forma española (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Prueba de forma española (Last 24 Hours CSV)')}`}
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
                {`${t('Access Control Door Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Access Control Door Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('a dolphin Meeting form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('a dolphin Meeting form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('AED Audit Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('AED Audit Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('AHWM Security Professional Personal Inspection Report (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('AHWM Security Professional Personal Inspection Report (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Amit Test Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Amit Test Form (Last 24 Hours CSV)')}`}
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
                {`${t('Badge Violation (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Badge Violation (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Baggage Inspections - Dolphin (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Baggage Inspections - Dolphin (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('BASF Client Contact Meeting (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('BASF Client Contact Meeting (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('BASF Site Inspections (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('BASF Site Inspections (Last 24 Hours CSV)')}`}
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
                {`${t('Call Off Log (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Call Off Log (Last 24 Hours CSV)')}`}
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
                {`${t('Count People (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Count People (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Covid-19 Access Check-in Questionnaire (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Covid-19 Access Check-in Questionnaire (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('CTPAT Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('CTPAT Inspection (Last 24 Hours CSV)')}`}
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
                {`${t('Daily Activity Log - 167035 (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Activity Log - 167035 (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Activity Report - Burns & McDonnell (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Activity Report - Burns & McDonnell (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily COVID-19 Screening Questionnaire (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily COVID-19 Screening Questionnaire (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Journal & Operations Log (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Daily Journal & Operations Log (Last 24 Hours CSV)')}`}
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
                {`${t('Disposition Test 2 (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Disposition Test 2 (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Dolphin Meeting Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Dolphin Meeting Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Emergency Call Box Daily Inspection Report (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Emergency Call Box Daily Inspection Report (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Emergency Call Box Daily Inspection Report - Mission Valley (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Emergency Call Box Daily Inspection Report - Mission Valley (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Employee Recognition - HCA (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Employee Recognition - HCA (Last 24 Hours CSV)')}`}
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
                {`${t('Fire Extinguisher Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Fire Extinguisher Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Formulaire ML français (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Formulaire ML français (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Formulario ML en español (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Formulario ML en español (Last 24 Hours CSV)')}`}
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
                {`${t('Golf Cart inspection Form - 174936 (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Golf Cart inspection Form - 174936 (Last 24 Hours CSV)')}`}
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
                {`${t('Home Check (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Home Check (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('In-Patient Belongings (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('In-Patient Belongings (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Integrated Security System Maintenance Request (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Integrated Security System Maintenance Request (Last 24 Hours CSV)')}`}
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
                {`${t('Key Issue & Return Log (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Key Issue & Return Log (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('KeyTrak Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('KeyTrak Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Leadership Pass Down (Day Shift) (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Leadership Pass Down (Day Shift) (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Leadership Pass Down (Grave Shift) (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Leadership Pass Down (Grave Shift) (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Leadership Pass Down (Swing Shift) (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Leadership Pass Down (Swing Shift) (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Lease Violations (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Lease Violations (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Client Meeting Test Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Client Meeting Test Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Counter Form Test (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Counter Form Test (Last 24 Hours CSV)')}`}
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
                {`${t('Mayank Incident Form Test (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Incident Form Test (Last 24 Hours CSV)')}`}
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
                {`${t('Mayank Test Form 1 (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Mayank Test Form 1 (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Missing Merchandise (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Missing Merchandise (Last 24 Hours CSV)')}`}
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
                {`${t('ODR Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('ODR Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Officer Inspection Checklist (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Officer Inspection Checklist (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Officer Inspection Form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Officer Inspection Form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Officer Survey (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Officer Survey (Last 24 Hours CSV)')}`}
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
                {`${t('Opening and Closing Violation (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Opening and Closing Violation (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('PATROL LOG (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('PATROL LOG (Last 24 Hours CSV)')}`}
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
                {`${t('Perimeter Tracking Sheet (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Perimeter Tracking Sheet (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Personal Information (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Personal Information (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('POI Tracker (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('POI Tracker (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Public Safety Daily Shift (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Public Safety Daily Shift (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Radios Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Radios Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Reese Gate Activity Log (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Reese Gate Activity Log (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Committee Gemba Walk Checklist (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Committee Gemba Walk Checklist (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Pledge (Form submission))')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Pledge (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Tour - Building Interior - Floor 2 (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Safety Tour - Building Interior - Floor 2 (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Security Communications Report (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Security Communications Report (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('ServiceNow Request (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('ServiceNow Request (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Shift Supervisor Report (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Shift Supervisor Report (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Signature test (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Signature test (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Site Inspection Report (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Site Inspection Report (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Site Inspections- Copy (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Site Inspections- Copy (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Smoking Odor Complaint Inspection Verification Report (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Smoking Odor Complaint Inspection Verification Report (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Software Inspection (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Software Inspection (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('SOPs (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('SOPs (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Supervisor SOR (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Supervisor SOR (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Temporary Badge In / Out (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Temporary Badge In / Out (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Temp - Visitor - Contractor ID Log (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Temp - Visitor - Contractor ID Log (Last 24 Hours CSV)')}`}
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
                {`${t('Test Counter form (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Test Counter form (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Test french (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Test french (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Time Off Request Form - HCA (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Time Off Request Form - HCA (Last 24 Hours CSV)')}`}
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
                {`${t('Train Log (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Train Log (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Uniform Request Form - HCA (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Uniform Request Form - HCA (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Vehicle OJT Checklist (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Vehicle OJT Checklist (Last 24 Hours CSV)')}`}
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
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Work Order (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Work Order (Last 24 Hours CSV)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('हिंदी एमएल फॉर्म (Form submission)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('हिंदी एमएल फॉर्म (Last 24 Hours CSV)')}`}
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
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Client Custom Reports')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <b>{`${t(
                  'Monthly,Weekly Report,Daily Report,12 Hour Report,Hourly Report,HCA All Sites Zip,HCA Monthly ER Tier Report,HCA Monthly Site Report'
                )}`}</b>
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
                onClick={handleEditCloseFour}
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

export default EditDolphinSoftwares
