import { Grid, Paper, Typography, Fab, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/shiftsAttributes.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import { Close, SquareEditOutline } from 'mdi-material-ui'
import AddShiftAttributes from './addShiftAttributes'
import EditShiftAttributes from './editShiftAttributes'

const ShiftsAttributes = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)

  const handleEditCloseTwo = () => setOpenEditTwo(false)

  const handleEditClickOpen = () => setOpenEdit(true)

  const handleEditClose = () => setOpenEdit(false)

  const columns = [
    {
      flex: 0.01,
      field: 'sNo',
      headerName: ' S. No.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'shiftName',
      headerName: 'Shift Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'enable/disable',
      headerName: 'Enable/Disable',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return <Checkbox color='secondary' />
      }
    },
    {
      flex: 0.01,
      field: 'signature',
      headerName: 'Signature',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <SquareEditOutline onClick={handleEditClickOpenTwo} className={styles.icon} />

            <Close className={styles.icon} />
            <EditShiftAttributes
              openEditTwo={openEditTwo}
              setOpenEditTwo={setOpenEditTwo}
              handleEditClickOpenTwo={handleEditClickOpenTwo}
              handleEditCloseTwo={handleEditCloseTwo}
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
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Shifts')}`}
            </Typography>
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
          <Grid item xs={12} md={3}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleEditClickOpen}
              className={styles.button}
            >
              {`${t('Add Shift')}`}
            </Fab>
            <AddShiftAttributes
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.footerDown}>
              <Grid item xs={6} md={1}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save')}`}
                </Fab>
              </Grid>
              <Grid item xs={6} md={1}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Cancel')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default ShiftsAttributes
