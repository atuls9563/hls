import React from 'react'
import { Close } from 'mdi-material-ui/'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import PhoneInTalk from 'mdi-material-ui/PhoneInTalk'
import { Divider } from '@mui/material'
import styles from '../../../../../../styles/contactSupport.module.css'
import { useTranslation } from 'react-i18next'

const ContactSupport = ({ openEdit1, setOpenEdit1, handleEditClickOpen1, handleEditClose1 }) => {
const { t } = useTranslation()

return (
  <div>
    <Dialog
      open={openEdit1}
      onClose={handleEditClose1}
      fullWidth
      className={styles.header}
      disableEscapeKeyDown={false}
    >
      <div className={styles.heading}>
        <PhoneInTalk className={styles.icon2} />
        <DialogTitle className={styles.title}>{`${t('Contact Support')}`}</DialogTitle>
        <Close onClick={handleEditClose1} className={styles.icon} />
      </div>
      <Divider />
      <DialogContent>
        <DialogContentText variant='body2' className={styles.subHeading}>
          {`${t('Support can be reached')}`}8 AM to 8 PM EST M-F at +1 770-625-1467
        </DialogContentText>
      </DialogContent>
    </Dialog>
  </div>
)
}

export default ContactSupport
