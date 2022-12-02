import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../styles/scheduler.module.css'
import React, { useState } from 'react'
import { Checkbox, Grid, Paper } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'

const Scheduler = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const rows = [
    {
      id: 1,
      contactName: 'Amit Banerjee',
      contactEmail: 'a@gmail.com',
      employeeorclient: 'Employee',
      selectDistribution: 'Random'
    },
    {
      id: 2,
      contactName: 'Bhomik',
      contactEmail: 'a@gmail.com',
      employeeorclient: 'Employee',
      selectDistribution: 'Random'
    },
    {
      id: 3,
      contactName: 'Hemant',
      contactEmail: 'a@gmail.com',
      employeeorclient: 'Employee',
      selectDistribution: 'Random'
    },
    {
      id: 4,
      contactName: 'Mayank',
      contactEmail: 'a@gmail.com',
      employeeorclient: 'Employee',
      selectDistribution: 'Random'
    },
    {
      id: 5,
      contactName: 'Mohneesh',
      contactEmail: 'a@gmail.com',
      employeeorclient: 'Employee',
      selectDistribution: 'Random'
    }
  ]

  const columns = [
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
      field: 'employeeorclient',
      headerName: 'Employee/Client',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'selectDistribution',
      headerName: 'Select Distribution',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return <Checkbox color='secondary' />
      }
    }
  ]

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Scheduler - Random Test Report')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle' className={styles.topHeading}>
                    {`${t('Options')}`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={styles.boxOneArea}>
                <Grid item xs={12} md={12}>
                  <Grid container className={styles.spaceTwo}>
                    <Grid item xs={12} md={5}>
                      <Typography variant='subtitle2' className={styles.headingTwo}>
                        {`${t('Select Schedule')}`}
                        <span className={styles.aster}>*</span>
                      </Typography>
                      <Select size='small' fullWidth>
                        <MenuItem value=''>Select Type</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Typography variant='subtitle2' className={styles.headingTwo}>
                        {`${t('Choose Report Format')}`} <span className={styles.aster}>*</span>
                      </Typography>
                      <Select size='small' fullWidth>
                        <MenuItem value=''>Select Type</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={12} className={styles.space}>
                  <Typography variant='subtitle' className={styles.topHeading}>
                    {`${t('Set Distribution')}`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={12} className={styles.spaceThree}>
                  <Typography variant='subtitle2' className={styles.headingThree}>
                    {`${t('You can also add contacts to distribution from contacts section.')}`}
                    <Link href='#'>
                      <a className={styles.link}>{`${t('Please click here to view contacts')}`} </a>
                    </Link>
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
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Save Schedule')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Remove Schedule')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button2}>
                {`${t('Cancel')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default Scheduler
