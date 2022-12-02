import { Breadcrumbs, Divider, Fab, Grid,  Paper,  Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/orderDetails.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { DataGrid } from '@mui/x-data-grid'

const OrderDetails = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const items = [
    {
      id: 1
    }
  ]

 

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
      field: 'accessoryItem',
      headerName: 'Accessory Item',
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
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Heliaus Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/orderDetails'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Order Details')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={2} className={styles.header}>
            <Typography variant='h5' className={styles.heading}>
              {`${t('Order Details')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={styles.headerRight}>
            <Link href='/applications/heliausOrderManagement/editAccessoriesOrder'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Edit')}`}
              </Fab>
            </Link>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Print')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Order ID')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('8745823')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Site')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('2022-10-03')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Order Type')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('09:46')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Order Status')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('2022-09-19')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Order Date')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('Vinay Pasapala')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Order By')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('SG5')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={`${styles.topTen} ${styles.headerText}`}>
            <Typography variant='subtitle' className={styles.headingTwo}>
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
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.topTen} ${styles.headerText}`}>
            <Typography variant='subtitle' className={styles.headingTwo}>
              {`${t('Comments')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.topTen} ${styles.headerText}`}>
            <Typography variant='subtitle' className={styles.headingTwo}>
              {`${t('Order Entry Contact')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Name')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('8745823')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Email')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('2022-10-03')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Phone Number')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('09:46')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} className={`${styles.topTen} ${styles.headerText}`}>
            <Typography variant='subtitle' className={styles.headingTwo}>
              {`${t('Shipping Information')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Option')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('8745823')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Name')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('2022-10-03')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Phone Number')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('09:46')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Street Address')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('2022-09-19')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Address Suite, Apt, other')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('Vinay Pasapala')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping State')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('SG5')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping City')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('09:46')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Zip')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('2022-09-19')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Country')}`}:
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('Vinay Pasapala')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.headerText}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              {`${t('Shipping Comments')}`}
            </Typography>
            <Typography variant='subtitle2' className={styles.headingOne}>
              {`${t('SG5')}`}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default OrderDetails
