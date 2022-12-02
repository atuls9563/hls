import { Breadcrumbs, Divider, Fab, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/orderStatus.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'mdi-material-ui'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import AddNoteOrder from './addNoteOrder'
import OrderDetailsModal from './orderDetailsModal'
import SendOrderUpdate from './sendOrderUpdated'
import OrderEscalation from './orderEscalation'

const OrderStatus = () => {
  const { t } = useTranslation()
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const [openEditThree, setOpenEditThree] = useState(false)
  const [openEditFour, setOpenEditFour] = useState(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditCloseThree = () => setOpenEditThree(false)

  const handleEditClickOpenFour = () => setOpenEditFour(true)
  const handleEditCloseFour = () => setOpenEditFour(false)

  const steps = ['Order Placed', 'Order Approved', 'Equipment Prov. In Progress', 'Completed']

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Heliaus Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/orderStatus'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Order Status')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={2} className={styles.header}>
            <Typography variant='h5' className={styles.heading}>
              {`${t('Order Status')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} className={styles.headerRight}>
            <Link href='/applications/heliausOrderManagement/editAccessoriesOrder'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Edit')}`}
              </Fab>
            </Link>
            <Fab
              color='secondary'
              onClick={handleEditClickOpenThree}
              variant='extended'
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('Send Update')}`}
            </Fab>

            <Fab
              color='secondary'
              onClick={handleEditClickOpenFour}
              variant='extended'
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('Escalate')}`}
            </Fab>
            <Link href='/applications/heliausOrderManagement'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('< Back To Order Listing ')}`}
              </Fab>
            </Link>
            <SendOrderUpdate
              openEditThree={openEditThree}
              setOpenEditThree={setOpenEditThree}
              handleEditClickOpenThree={handleEditClickOpenThree}
              handleEditCloseThree={handleEditCloseThree}
            />
            <OrderEscalation
              openEditFour={openEditFour}
              setOpenEditFour={setOpenEditFour}
              handleEditClickOpenFour={handleEditClickOpenFour}
              handleEditCloseFour={handleEditCloseFour}
            />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textFieldTwo}>
            <Grid container>
              <Grid item xs={4} md={1}>
                <Typography variant='subtitle' className={styles.headingTwo}>
                  {`${t('Start Order Not Approved')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Stepper activeStep={1} alternativeLabel>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid item xs={4} md={1}>
                <Typography variant='subtitle' className={styles.headingTwo}>
                  {`${t('Finish Order Not Approved')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.stepCenter}>
            <Typography variant='subtitle' className={styles.headingTwo}>
              {`${t('In Progress - Status Updated : 11/02/2022 19:45:29')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Grid container>
              <Grid item xs={12} md={2}>
                <Typography variant='h6'>{`${t('Shipping Status')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={1} className={styles.headerImage}>
                <Image src='/images/not-shipped.png' alt='notshipped' width='50px' height='50px' />
              </Grid>
              <Grid item xs={12} md={2} className={styles.headerText}>
                <Typography variant='subtitle2'>{`${t('Not Yet Shipped')}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Order ID')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('8745823')}`}&nbsp;
                </Typography>
                <Eye className={styles.icon} onClick={handleEditClickOpenTwo} />
                <OrderDetailsModal
                  openEditTwo={openEditTwo}
                  setOpenEditTwo={setOpenEditTwo}
                  handleEditClickOpenTwo={handleEditClickOpenTwo}
                  handleEditCloseTwo={handleEditCloseTwo}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Order Type')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Accessories')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container className={styles.headerCenter}>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Site')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Century Park ')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Order Status')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('8745823')}`}&nbsp;
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Order Date')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Accessories')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container className={styles.headerCenter}>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Order By')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Century Park ')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Contact Name')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('8745823')}`}&nbsp;
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Contact Email')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Accessories')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container className={styles.headerCenter}>
              <Grid item xs={12} md={6}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Contact Phone')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Century Park')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} className={styles.headerText}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={3}>
                <Typography variant='h6'>{`${t('Order Update History')}`}</Typography>
              </Grid>
              <Grid item xs={12} md={2} className={styles.icon}>
                <Typography variant='subtitle2' onClick={handleEditClickOpen} className={styles.headingTwo}>{`${t(
                  'Add A Note'
                )}`}</Typography>
                <AddNoteOrder
                  openEdit={openEdit}
                  setOpenEdit={setOpenEdit}
                  handleEditClickOpen={handleEditClickOpen}
                  handleEditClose={handleEditClose}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.headerText}>
            <Grid container className={styles.headerCenter}>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('11/02/2022 19:45:29: Quarker, Derrick')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={styles.headerCenter}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Order Placed')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default OrderStatus
