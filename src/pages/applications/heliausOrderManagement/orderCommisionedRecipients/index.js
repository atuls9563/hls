import { Grid, Paper, Typography, TextField, InputAdornment, Divider, Fab } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/orderCommisionedRecipients.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import AddCommisionedRecipientsTitle from './addCommisionedRecipientsTitle'
import RemoveCommisionedRecipientsTitle from './removeCommisionedRecipientsTitle'

const OrderCommisionedRecipients = () => {
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
      field: 'emp',
      headerName: 'Emp #',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'firstName',
      headerName: 'First Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'middleName',
      headerName: 'Middle Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'lastName',
      headerName: 'Last Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'email',
      headerName: 'Email',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'title',
      headerName: 'Title',
      minWidth: 120,
      sortable: isNameSortable
    }
  ]

  const rows = [
    {
      id: 1
    }
  ]

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('HELIAUS Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/OrderCommisionedRecipients'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Order Commisioned Recipients')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Order Commisioned Recipients')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} className={styles.headerRight}>
            <Fab color='secondary' variant='extended' size='medium' onClick={handleEditClickOpen} type='submit' className={styles.button}>
              {`${t('Add Commisioned Recipients Title')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' onClick={handleEditClickOpenTwo} type='submit' className={styles.button}>
              {`${t('Remove Commisioned Recipients Title')}`}
            </Fab>
            <AddCommisionedRecipientsTitle
             openEdit={openEdit}
             setOpenEdit={setOpenEdit}
             handleEditClickOpen={handleEditClickOpen}
             handleEditClose={handleEditClose}/>
             <RemoveCommisionedRecipientsTitle
               openEditTwo={openEditTwo}
               setOpenEditTwo={setOpenEditTwo}
               handleEditClickOpenTwo={handleEditClickOpenTwo}
               handleEditCloseTwo={handleEditCloseTwo}/>
          </Grid>
          <Grid item xs={12} md={3} className={styles.search}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Enter Keywords')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Typography variant='subtitle2' className={styles.heading2}>
                      {`${t('Filter by')}`}
                    </Typography>
                    <Divider orientation='vertical' className={styles.divider3} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Magnify />
                  </InputAdornment>
                )
              }}
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
        </Grid>
      </Paper>
    </div>
  )
}

export default OrderCommisionedRecipients
