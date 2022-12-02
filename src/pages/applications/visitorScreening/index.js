import {
  Grid,
  Paper,
  Typography,
  Fab,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Divider,
  Modal
} from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../styles/visitorScreening.module.css'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Magnify, Eye } from 'mdi-material-ui'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import VisitorScreeningDetail from './visitorScreeningDetail'

const VisitorScreening = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const [openEditThree, setOpenEditThree] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)

  const handleEditClose = () => setOpenEdit(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)

  const handleEditCloseTwo = () => setOpenEditTwo(false)

  const handleEditClickOpenThree = () => setOpenEditThree(true)

  const handleEditCloseThree = () => setOpenEditThree(false)

  function createData(one, two, three,four,five) {
    return { one,two,three,four,five }
  }

  const rowsOne = [createData('LastHour', 0, 0, 0, 0), createData('Since Login', 0, 0, 0, 0)]

  const columns = [
    {
      flex: 0.01,
      field: 'date&Time',
      headerName: 'Date & Time',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'officer',
      headerName: 'Officer',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'status',
      headerName: 'Status',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'screeningDuration',
      headerName: 'Screening Duration',
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
            <Eye onClick={handleEditClickOpenThree} />
            <VisitorScreeningDetail
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
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/visitorScreening'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Visitor Screening ')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={7.8}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Visitor Screening ')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4.2}>
            <TableContainer component={Paper}>
              <Table size='small' className={styles.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.cell}></TableCell>
                    <TableCell className={styles.cell} align='right'>
                      Total
                    </TableCell>
                    <TableCell className={styles.cell} align='right'>
                      Red
                    </TableCell>
                    <TableCell className={styles.cell} align='right'>
                      Green
                    </TableCell>
                    <TableCell className={styles.cell} align='right'>
                      Declined
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsOne.map(row => (
                    <TableRow key={row.name} >
                      
                      <TableCell align='right'>{row.one}</TableCell>
                      <TableCell align='right'>{row.two}</TableCell>
                      <TableCell align='right'>{row.three}</TableCell>
                      <TableCell align='right'>{row.four}</TableCell>
                      <TableCell align='right'>{row.five}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4} className={styles.headerOne}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Add Visitor Screening')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.5} className={styles.headerOne}>
            <Typography variant='subtitle2' className={styles.heading}>
              <b>{`${t('ZONE')}`}</b>
            </Typography>
            <Select size='small' fullWidth variant='outlined'>
              <MenuItem value=''>Select Zone</MenuItem>
              <MenuItem value='Zone' onClick={handleEditClickOpenTwo}>
                CB Site Zone1 {'>'} Floor-1
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={12}>
            {!openEditTwo ? (
              <Typography variant='h6' className={styles.headingFour}>
                {`${t('Please select zone from above to continue screening')}`}
              </Typography>
            ) : (
              <Grid item xs={12} md={12} className={styles.headerTwo}>
                <Fab color='success' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Entry')}`}
                </Fab>
                <Fab color='error' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Exit')}`}
                </Fab>
                <Fab
                  color='secondary'
                  onClick={handleEditClickOpen}
                  variant='extended'
                  size='medium'
                  type='reset'
                  className={styles.button}
                >
                  {`${t('Reset')}`}
                </Fab>
                <Modal open={openEdit} onClose={handleEditClose}>
                  <Paper className={styles.modal} variant='outlined'>
                    <Grid container className={styles.container}>
                      <Grid item xs={12} md={12}>
                        <Grid item xs={12} md={12}>
                          <Typography variant='h6' className={styles.headingTwo}>
                            {`${t('Are you sure you want to reset the current occupancy')}`}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={12} className={styles.headerTwo}>
                        <Fab color='success' variant='extended' size='medium' type='submit' className={styles.button}>
                          {`${t('Yes, Continue with Reset')}`}
                        </Fab>
                        <Fab
                          color='error'
                          variant='extended'
                          size='medium'
                          onClick={handleEditClose}
                          type='submit'
                          className={styles.button}
                        >
                          {`${t('No do not reset current occupancy')}`}
                        </Fab>
                      </Grid>
                    </Grid>
                  </Paper>
                </Modal>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={12} className={styles.textFieldTwo}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              <b>{`${t('Max')}`}</b>
            </Typography>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              <b> {`${t('Current')}`}</b>
            </Typography>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              <b> {`${t('Available')}`}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.textFieldTwo}>
            <Typography variant='subtitle2' color='red' className={styles.headingThree}>
              <b>{`${t('500')}`}</b>
            </Typography>
            <Typography variant='subtitle2' className={styles.headingThree}>
              <b>{`${t('0')}`}</b>
            </Typography>
            <Typography variant='subtitle2' color='green' className={styles.headingThree}>
              <b>{`${t('500')}`}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('Showing Results From')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
          </Grid>
          <Grid item xs={12} md={3.5} className={styles.textField}>
            <Typography variant='subtitle2' className={styles.heading}>
              {`${t('To')}`}
            </Typography>
            <TextField type='datetime-local' size='small' />
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Go')}`}
            </Fab>
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

export default VisitorScreening
