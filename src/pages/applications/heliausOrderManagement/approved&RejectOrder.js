import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import styles from '../../../../styles/approvedRejectOrder.module.css'
import React, { useState } from 'react'
import { Checkbox, Divider, Grid, Paper, Radio } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import { Eye, Close } from 'mdi-material-ui'
import Link from 'next/link'

const ApprovedRejectOrder = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
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
      field: 'orderNumber',
      headerName: 'Order Number',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.02,
      field: 'orderDate',
      headerName: 'Order Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'orderQuantity',
      headerName: 'Order Quantity',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'orderPrice',
      headerName: 'Order Price#',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: '',
      headerName: '',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Link href='/applications/heliausOrderManagement/orderDetails'>
              <Eye  className={styles.icon}/>
            </Link>
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

  const items = [
    {
      id: 1
    }
  ]

  const baseColumnOptions = {
    sortable: false,
    pinnable: false,
    hideable: false
  }

  const rowsTwo = [...items, { id: 'TOTAL', label: 'Total', total: 686.4 }]

  const getCellClassName = ({ row, field }) => {
    if (row.id === 'SUBTOTAL' || row.id === 'TOTAL' || row.id === 'TAX') {
      if (field === 'item') {
        return 'bold'
      }
    }
    
    return ''

  }

  const columnsTwo = [
    {
      flex: 0.01,
      field: 'parts',
      headerName: 'Parts',
      minWidth: 80,
      sortable: isNameSortable,
      colSpan: ({ row }) => {
        if (row.id === 'SUBTOTAL' || row.id === 'TOTAL') {
          return 1
        }
        if (row.id === 'TAX') {
          return 1
        }
        
        return undefined

      },
      valueGetter: ({ value, row }) => {
        if (row.id === 'SUBTOTAL' || row.id === 'TAX' || row.id === 'TOTAL') {
          return row.label
        }

        return value

      }
    },
    {
      flex: 0.01,
      field: 'quantity',
      headerName: 'Quantity',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'clientPrice',
      headerName: 'Client Price',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'totalClientPrice',
      headerName: 'Total Client Price',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'jobCost',
      headerName: 'Job Cost',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'totalJobCost',
      headerName: 'Total Job Cost',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Approve / Reject Order')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
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
              <Typography variant='subtitle2' className={styles.topHeading}>
                {`${t('Accessories Ordered')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={styles.table}>
              <DataGrid
                autoHeight
                columns={columnsTwo}
                rows={rowsTwo}
                pageSize={pageSize}
                rowsPerPageOptions={[7, 10, 25, 50]}
                onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                disableExtendRowFullWidth
                disableColumnFilter
                disableSelectionOnClick
                hideFooter
                showCellRightBorder
                showColumnRightBorder
                getCellClassName={getCellClassName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />
              {`${t('Approve')}`}
              <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
              {`${t('Reject')}`}
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant='subtitle2'>
                <Checkbox color='secondary' />
                {`${t('RP approval was needed and used')}`}
              </Typography>
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

export default ApprovedRejectOrder
