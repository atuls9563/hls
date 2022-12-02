import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import styles from '../../../../../styles/deviceDetails.module.css'
import React, { useState } from 'react'
import { Divider, Grid, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'

const DeviceDetails = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

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
      field: 'macAddress',
      headerName: 'Mac Address',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'serial',
      headerName: 'Serial#',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
        flex: 0.01,
        field: 'model',
        headerName: 'Model#',
        minWidth: 80,
        sortable: isNameSortable
      },

    
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
              <Typography variant='h5'>{`${t('Details')}`}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle2' className={styles.topHeading}>
                    {`${t('Total Device')}`}
                  </Typography>
                </Grid>
              </Grid>
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
                {`${t('Close')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default DeviceDetails
