import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import styles from '../../../../../styles/changeReturnRMA.module.css'
import React, { useState } from 'react'
import { Checkbox, Divider, Grid, MenuItem, Paper, TextField, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import { Close } from 'mdi-material-ui'

const ChangeReturnRMA = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const columns = [
    {
      flex: 0.01,
      field: 'imei',
      headerName: 'IMEI',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.02,
      field: 'phone',
      headerName: 'Phone #',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'model',
      headerName: 'Model',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'received',
      headerName: 'Received',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return <Checkbox color='secondary' />
      }
    },
    {
      flex: 0.015,
      field: 'remarks',
      headerName: 'Remarks',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <TextField multiline size='small' fullWidth type='text' minRows={1} />
          </>
        )
      }
    }
  ]

  const rows = [
    {
      id: 1
    }
  ]





  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Change Return/RMA Status')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5} className={styles.block}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Current Return/RMA Status')}`}:<span className={styles.aster}>*</span>
              </Typography>
              <Select size='small' fullWidth>
                <MenuItem value='pendingLineService'>Pending Line Of Service/MDM Cancel</MenuItem>
                <MenuItem value='pendingDeviceReturn'>Pending Device Return</MenuItem>
                <MenuItem value='deviceReturn'>Device Return</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.block}>
                {`${t('Return/Shipping Label')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField fullWidth type='file' />
            </Grid>
            <Grid item xs={12} md={12} className={styles.block}>
              <Typography variant='subtitle2'>{`${t('Select the devices')}`}</Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.table}>
              <DataGrid
                autoHeight
                columns={columns}
                rows={rows}
                pageSize={pageSize}
                rowsPerPageOptions={[7, 10, 25, 50]}
                onPageSizeChange={newPageSize => setPageSize(newPageSize)}
              />
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab
                color='secondary'
                onClick={handleEditClose}
                variant='extended'
                size='medium'
                type='submit'
                className={styles.button2}
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

export default ChangeReturnRMA
