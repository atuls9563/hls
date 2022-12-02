import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useTranslation } from 'react-i18next'
import { Fab } from '@mui/material'
import styles from '../../../../../../styles/bluetoothPrinter.module.css'

function BluetoothPrinter({ openTwo, setOpenTwo, handleClickOpenTwo, handleCloseTwo }) {
  const { t } = useTranslation()

  return (
    <div>
      <Dialog open={openTwo} onClose={handleCloseTwo}>
        <DialogContent>
          <DialogContentText>
            {`${t(
              "Does your order include a Bluetooth Printer, Bluetooth Scanner, a USB Driver's License Scanner, or an Intrinsically Safe Device?"
            )}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.footer}>
          <Fab
            color='secondary'
            onClick={handleCloseTwo}
            variant='extended'
            size='medium'
            type='submit'
            className={styles.button}
          >
            {`${t('Yes')}`}
          </Fab>
          <Fab
            color='secondary'
            onClick={handleCloseTwo}
            variant='extended'
            size='medium'
            type='submit'
            className={styles.button}
          >
            {`${t('No')}`}
          </Fab>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default BluetoothPrinter
