import { Grid, Modal, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Close } from 'mdi-material-ui/'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import styles from '../../../../styles/dynamicAITour.module.css'
import Iframe from 'react-iframe'
import Fab from '@mui/material/Fab'

const DynamicAITour = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const rows = [
    { id: 1, stop: 'A', locationAndZone: 'Entry Point', dist: 0, aiWorkflow: 'starting point' },
    {
      id: 2,
      stop: 'B',
      locationAndZone: 'Barcode Zone1',
      dist: 554,
      aiWorkflow: `Do see any hazards or safety violations that might cause an accident?(Accidents > Other)
    Do you see anything that might lead to an accident?(Accidents > Other)`
    }
  ]

  const columns = [
    {
      flex: 0.01,
      field: 'stop',
      minWidth: 80,
      headerName: 'Stop #',
      sortable: isNameSortable
    },
    {
      flex: 0.06,
      field: 'locationAndZone',
      minWidth: 80,
      headerName: 'Location/Zone',
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'dist',
      minWidth: 80,
      headerName: 'Dist.(m)',
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'aiWorkflow',
      minWidth: 80,
      headerName: 'AI Workflow',
      sortable: isNameSortable
    }
  ]

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant="outlined" >
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Dynamic AI Tour (Early Morning Tour(3am - 7am)')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography variant='subtitle2'> {`${t('Stops (7)')}`}</Typography>
            </Grid>

            <Grid item xs={12} md={12} className={styles.block}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <DataGrid
                    autoHeight
                    getRowHeight={() => 100}
                    getEstimatedRowHeight={() => 200}
                    columns={columns}
                    rows={rows}
                    pageSize={pageSize}
                    rowsPerPageOptions={[7, 10, 25, 50]}
                    onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1343765121787!2d75.80593331478795!3d26.835677983160778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6076d0ae8d9%3A0xf4d3e10aaf84d262!2sDolphin%20Softwares!5e0!3m2!1sen!2sin!4v1662721802658!5m2!1sen!2sin'
                    style='border:0;'
                    loading='lazy'
                    width='100%'
                    height='450px'
                    id='myId'
                    display='initial'
                    position='relative'
                  />
                </Grid>

                <Grid item xs={12} md={12} className={styles.footer}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('* No Location Identifier is associated with the zone)')}`}
                  </Typography>
                  <Fab
                    color='secondary'
                    variant='extended'
                    size='medium'
                    className={styles.button}
                    onClick={handleEditClose}
                  >
                    {`${t('Close')}`}
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default DynamicAITour
