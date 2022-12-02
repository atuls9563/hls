import React, { useState } from 'react'
// ** React Imports

// ** MUI Imports
import { Close } from 'mdi-material-ui/'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import styles from '../../../../../../styles/dialog.module.css'
import { useTranslation } from 'react-i18next'

import { Divider } from '@mui/material'
import Alert from '@mui/material/Alert'

const DialogBox = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const [inputValue, setInputValue] = useState('')
  const { t } = useTranslation()

  return (
    <div>
      <Dialog open={openEdit} onClose={handleEditClose} fullWidth className={styles.header} direction='down'>
        <DialogTitle id='user-view-edit' className={styles.title}>
          {`${t('Change Global Site')}`}
          <Close onClick={handleEditClose} className={styles.icon} />
        </DialogTitle>
        <Divider />

        <DialogContent>
          <DialogContentText variant='body2' className={styles.subHeading}>
            {`${t('Select A Site')}`}
          </DialogContentText>
          <form>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  placeholder={`${t('Search a Site')}`}
                  size='small'
                  name='site'
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                />
                {inputValue && inputValue.length <= '4' ? (
                  <Alert icon={false} color='info' className={styles.alert}>
                    {`${t('Please enter 4 or more characters to start searching.')}`}
                  </Alert>
                ) : !inputValue ? null : (
                  <Alert icon={false} color='info' className={styles.alert}>
                    {`${t('No Sites Found')}`}
                  </Alert>
                )}
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <Divider />
      </Dialog>
    </div>
  )
}

export default DialogBox
