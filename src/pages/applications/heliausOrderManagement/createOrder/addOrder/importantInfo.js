import React, { useState } from 'react'
import styles from '../../../../../../styles/importantInfo.module.css'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useTranslation } from 'react-i18next'
import { Close } from 'mdi-material-ui'
import { Fab, Grid, Paper } from '@mui/material'
import NewDevice from './newDevice'
import PortalService from './portalService'
import PatrolService from './patrolService'
import Link from 'next/link'
import SupportTicket from 'src/@core/layouts/components/shared-components/footer/supportTicket'

const ImportantInfo = ({ open, setOpen, handleClickOpen, handleClose, selectedValue }) => {
  const { t } = useTranslation()
  const [agree, setAgree] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)


  const Display = selectedValue => {
    selectedValue == 'newDevice' && agree ? (
      <NewDevice />
    ) : selectedValue == 'portalService' ? (
      <PortalService />
    ) : selectedValue == 'patrolService' ? (
      <PatrolService />
    ) : null
  }

  return (
    <div>
      <Dialog open={open} className={styles.modal} onClose={handleClose}>
        <Paper className={styles.modalContent} variant='outlined'>
          <Grid container>
            <Grid item xs={12} md={12} className={styles.header}>
              <DialogTitle className={styles.heading}>{`${t('Select the CSM Title')}`}</DialogTitle>
              <Close onClick={handleClose} className={styles.icon} />
            </Grid>
          </Grid>
          <DialogContent>
            <DialogContentText>
              {`${t(
                'All new Heliaus device orders require a signed order form or a signed contract. If you need help creating an order or completing an order form click help to open a support ticket. You can also '
              )}`}
              <b>{`${t('call 770-625-1467 ')}`}</b>
              {`${t('and ask for help ordering a Heliaus Mobile device.')}`}
            </DialogContentText>
            <DialogContentText className={styles.block}>{`${t(
              'Signed order forms and contracts are not required for accessory orders.'
            )}`}</DialogContentText>
          </DialogContent>
          <DialogActions className={styles.footer}>
            <Fab
              color='secondary'
              variant='extended'
              onClick={selectedValue => Display(selectedValue)}
              size='medium'
              type='submit'
              className={styles.button}
            >
              {`${t('I have a completed order form or contract')}`}
            </Fab>

            <Link href='https://allieduniversalservices.sharepoint.com/sites/MktSale/Implementing%20HELIAUS/Forms/AllItems.aspx?viewid=3de33c20%2Df998%2D4db3%2Dac5f%2Df12374429931&id=%2Fsites%2FMktSale%2FImplementing%20HELIAUS%2FOrder%20Forms'>
              <a target='_blank'>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('I need an order form')}`}
                </Fab>
              </a>
            </Link>

            <Fab onClick={handleEditClickOpen} color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Help')}`}
            </Fab>
            <SupportTicket
             openEdit={openEdit}
             setOpenEdit={setOpenEdit}
             handleEditClickOpen={handleEditClickOpen}
             handleEditClose={handleEditClose}/>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  )
}

export default ImportantInfo
