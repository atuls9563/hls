import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Grid, Paper, Divider } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/beaconDetails.module.css'
import { SquareEditOutline } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import AddBeaconCaliberation from './addBeaconCaliberation'
import EditBeaconCaliberation from './editBeaconCaliberation'

const BeaconDetails = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const [openEditThree, setOpenEditThree] = useState(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)
  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditCloseThree = () => setOpenEditThree(false)

  const columns = [
    {
      flex: 0.01,
      field: 'deviceId',
      headerName: 'Device ID',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'rssi',
      headerName: 'RSSI',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'meterDistance',
      headerName: 'Meter Distance',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'dateUpdated',
      headerName: 'Date Updated',
      minWidth: 40,
      sortable: isNameSortable
    },

    {
      flex: 0.015,
      field: 'action',
      headerName: 'Action',
      minWidth: 40,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <SquareEditOutline className={styles.headingOne} onClick={handleEditClickOpenThree} />

            <Close className={styles.headingOne} />
            <EditBeaconCaliberation
              openEditThree={openEditThree}
              setOpenEditThree={setOpenEditThree}
              handleEditClickOpenThree={handleEditClickOpenThree}
              handleEditCloseThree={handleEditCloseThree}
            />
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
          <Grid container className={styles.containerModal}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Beacon Details')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Beacon Name')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Stay Zone')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('ID')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('55:46:4F:C5:18:DF')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Coefficient')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Zone ID')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('22562')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Current Calibrations')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingThree} onClick={handleEditClickOpenTwo}>
                {`${t('Add New Calibration')}`}
              </Typography>
              <AddBeaconCaliberation
                openEditTwo={openEditTwo}
                setOpenEditTwo={setOpenEditTwo}
                handleEditClickOpenTwo={handleEditClickOpenTwo}
                handleEditCloseTwo={handleEditCloseTwo}
              />
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
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default BeaconDetails
