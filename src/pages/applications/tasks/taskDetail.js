import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React,{useState} from 'react'
import { Grid, Paper, TextField, InputAdornment, Divider } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../styles/taskDetail.module.css'
import { Magnify } from 'mdi-material-ui'
import { DataGrid } from '@mui/x-data-grid'

const TaskDetail = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

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
      field: 'securityProfessional',
      headerName: 'Security Professional',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'activity',
      headerName: 'Activity',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.005,
      field: 'narrative',
      headerName: 'Narrative',
      minWidth: 40,
      sortable: isNameSortable
    },

    {
      flex: 0.005,
      field: 'image/Pdf',
      headerName: 'Image/PDF',
      minWidth: 40,
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
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Task Detail')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Created Date & Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-03 23:45:11')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Task Title')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Test Recurring Task 2')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Start Date & Time')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('2022-10-04 19:36:00')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Task Description')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Test Recurring Task 2')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Created By')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Prafull Gupta')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Scope')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('Site')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Attachments')}`}
              </Typography>
              <Typography variant='subtitle2' className={styles.headingOne}>
                {`${t('--')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={styles.search}>
              <TextField
                size='small'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Typography variant='subtitle2' className={styles.heading2}>
                        {`${t('Search')}`}
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
      </Modal>
    </div>
  )
}

export default TaskDetail
