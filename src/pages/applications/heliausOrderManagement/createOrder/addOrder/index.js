import { Grid, Paper, Typography, Radio } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../../styles/newOrder.module.css'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import ImportantInfo from './importantInfo'
import BluetoothPrinter from './bluetoothPrinter'

const NewOrder = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpenTwo = () => {
    setOpenTwo(true)
  }

  const handleCloseTwo = () => {
    setOpenTwo(false)
  }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('HELIAUS Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/newOrder'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('New Order')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('NEW ORDER')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Add Order')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.block} ${styles.headingText}`}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Please choose an order type to proceed')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.block} ${styles.headingText}`}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Order Type')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Radio
              onClick={handleClickOpen}
              value='newDevice'
              checked={selectedValue === 'newDevice'}
              onChange={handleChangeTwo}
              color='secondary'
            />
            {`${t('New Device')}`}
            <Radio
              onClick={handleClickOpenTwo}
              value='accesoriesAndSupply'
              checked={selectedValue === 'accesoriesAndSupply'}
              onChange={handleChangeTwo}
              color='secondary'
            />
            {`${t('Accessories and Supplies')}`}
            <Radio
              value='portalService'
              checked={selectedValue === 'portalService'}
              onChange={handleChangeTwo}
              color='secondary'
            />
            {`${t('Portal Service')}`}
            <Radio
              color='secondary'
              value='patrolService'
              checked={selectedValue === 'patrolService'}
              onChange={handleChangeTwo}
            />
            {`${t('Patrol Service')}`}
          </Grid>
          {selectedValue == 'newDevice' || 'portalService' || 'patrolService' ? (
            <ImportantInfo
              open={open}
              setOpen={setOpen}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              selectedValue={selectedValue}
            />
          ) : selectedValue == 'accesoriesAndSupply' ? (
            <BluetoothPrinter
              openTwo={openTwo}
              setOpenTwo={setOpenTwo}
              handleClickOpenTwo={handleClickOpenTwo}
              handleCloseTwo={handleCloseTwo}
            />
          ) : null}

          {/* <NewDevice />
           ) : selectedValue == ? ( // <AddAccessoriesOrder />
           ) : selectedValue == ? ( // <PortalService />
           ) : selectedValue == ? ( // <PatrolService />
           ) : !selectedValue ? null : null} */}
        </Grid>
      </Paper>
    </div>
  )
}

export default NewOrder
