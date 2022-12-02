import Modal from '@mui/material/Modal'
import { Close, EmailOutline, MessageText } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Divider, Fab, Grid, Paper, Radio, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/addDistribution.module.css'

const AddDistribution = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [images, setImages] = useState([])
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
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} columnGap={2}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Add Distribution for')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
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
                {`${t('Custom Client Reports')}`}
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
                {`${t('Unified Activity By Zone')}`}
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
                {`${t('VVM Check-Out Form')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Custom Schedule Reports')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Custom Scheduled Reports')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Custom Schedule Reports(Tierwise)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                <EmailOutline className={toggle ? styles.icon : styles.iconTwo} onClick={e => toggleIt(e)} />
                {`${t('Custom Schedule Reports(Tierwise)')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Click on Mail icon, SMS Icon Or Phone Icon to avail the feature and Click Save')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.5} className={styles.footer}>
              <Fab
                color='secondary'
                variant='extended'
                size='medium'
                type='submit'
                onClick={handleEditClose}
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

export default AddDistribution
