import React,{useState} from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Fab, Select, MenuItem, InputAdornment, Divider, Breadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/searchSite.module.css'
import { useTranslation } from 'react-i18next'
import { Magnify,Cellphone } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import DeviceDetails from './deviceDetails'

const SearchSite = () => {

    
  const columns = [
    {
      flex: 0.01,
      field: 'nameWinteam',
      headerName: 'Name-Winteam',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.02,
      field: 'officeClientSub',
      headerName: 'Office-Client-Sub',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'hpw',
      headerName: 'HPW',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
        flex: 0.01,
        field: 'active',
        headerName: 'Active?',
        minWidth: 80,
        sortable: isNameSortable
      },
      {
        flex: 0.01,
        field: 'attributes%',
        headerName: 'Attributes % Completed',
        minWidth: 80,
        sortable: isNameSortable
      },
     
    {
      flex: 0.01,
      field: 'action',
      headerName: 'Action',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <Cellphone className={styles.headingOne} onClick={handleEditClickOpen} />
            <DeviceDetails
             openEdit={openEdit}
             setOpenEdit={setOpenEdit}
             handleEditClickOpen={handleEditClickOpen}
             handleEditClose={handleEditClose}/>
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

  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  return (
    <div>
         <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/siteAttributes/searchSite'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Site Attributes(search a site)')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('SEARCH YOUR SITE')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Regions')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t(
                  'Search(site, site#, office, office#, enterprise#)'
                )}`}</Typography>
                <TextField type='text' fullWidth size='small' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Search IN')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Choose Status')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Choose an Order')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Attributes Status')}`}</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value=''>Select Service Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={styles.footer}>
              <Grid item xs={6} md={2}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Search')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={2} className={styles.footerRight}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Export to CSV')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
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

export default SearchSite
