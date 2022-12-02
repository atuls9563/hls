import { Breadcrumbs, Divider, Grid, InputAdornment, Paper, TextField, Typography, Fab } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/contacts.module.css'
import { DataGrid } from '@mui/x-data-grid'
import { Close, Magnify, SquareEditOutline } from 'mdi-material-ui/'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const columns = [
    {
      flex: 0.01,
      field: 'title',
      headerName: 'Title',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'contactName',
      headerName: 'Contact Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'contactEmail',
      headerName: 'Contact Email',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'contactPhoneNo',
      headerName: 'Contact Phone No.',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'employee/client',
      headerName: 'Employee/Client',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'updatedOn',
      headerName: 'Updated On',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'updatedBy',
      headerName: 'Updated By',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'email',
      headerName: 'E-mail Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'sms',
      headerName: 'Sms Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.015,
      field: 'action',
      headerName: 'Action',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Link href='/siteConfiguration/contacts/distribution'>
              <Typography variant='subtitle' className={styles.headingOne}>
                {`${t('Distribution')}`}
              </Typography>
            </Link>
            <Link href='/siteConfiguration/contacts/editContact'>
              <SquareEditOutline className={styles.headingOne} />
            </Link>
            <Close className={styles.headingOne} />
          </>
        )
      }
    }
  ]

  const columnsOne = [
    {
      flex: 0.01,
      field: 'type',
      headerName: 'Type',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'Name',
      headerName: 'Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'contactName',
      headerName: 'Contact Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'contactEmail',
      headerName: 'Contact Email',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]

  const rows = [
    {
      id: 1
    }
  ]

  const rowsOne = [
    {
      id: 2
    }
  ]

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='siteConfiguration/contacts'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Contacts')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2} className={styles.textField}>
            <Typography variant='h6' className={styles.heading}>
              {`${t('Contacts')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4.8}>
            <Link href='/siteConfiguration/contacts/addContact'>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Add Contact')}`}
              </Fab>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textFieldOne}>
            <Typography variant='h6' className={styles.heading}>
              {`${t('Tier Details')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.table}>
            <DataGrid
              autoHeight
              columns={columnsOne}
              rows={rowsOne}
              pageSize={pageSize}
              rowsPerPageOptions={[7, 10, 25, 50]}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider/>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textField}>
            <Typography variant='h6' className={styles.heading}>
              {`${t('Contacts Details')}`}
            </Typography>
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

export default Contacts
