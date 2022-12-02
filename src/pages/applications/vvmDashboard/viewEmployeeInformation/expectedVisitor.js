import { Grid, Paper } from '@mui/material'
import React,{useState} from 'react'
import styles from'../../../../../styles/expectedVisitor.module.css'
import { DataGrid } from '@mui/x-data-grid'

const ExpectedVisitor = () => {

    const [isNameSortable, setIsNameSortable] = useState(true)
    const [pageSize, setPageSize] = useState(7)


  const columns = [
    {
      flex: 0.01,
      field: 'firstName',
      headerName: 'First Name',
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
      field: 'isPermanent',
      headerName: 'Is Permanent',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'startDate',
      headerName: 'Start Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'endDate',
      headerName: 'End Date',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'headshot',
      headerName: 'Headshot',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'email',
      headerName: 'Email',
      minWidth: 80,
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
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={12} >
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

export default ExpectedVisitor
