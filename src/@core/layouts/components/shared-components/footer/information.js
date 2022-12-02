import React from 'react'
import { Close } from 'mdi-material-ui/'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import { Divider } from '@mui/material'
import styles from '../../../../../../styles/information.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Information = ({ openEdit2, setOpenEdit2, handleEditClickOpen2, handleEditClose2 }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Dialog open={openEdit2} onClose={handleEditClose2} fullWidth className={styles.header}>
        <div className={styles.heading}>
          <InformationOutline className={styles.icon2} />
          <DialogTitle className={styles.title}> {`${t('INFORMATION')}`}</DialogTitle>
          <Close onClick={handleEditClose2} className={styles.icon} />
        </div>
        <Divider />
        <DialogContent>
          <DialogContentText variant='body2' className={styles.subHeading}>
            {`${t('©Allied Universal. All rights reserved')}`}
            <br />
            {`${t('We take privacy seriously!')}`}
            <Link href='/privacyPolicy'>
              <a>{`${t('Read our privacy policy')}`}</a>
            </Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Information
