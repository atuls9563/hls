import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import styles from '../../../styles/activityColor.module.css'
import Magnify from 'mdi-material-ui/Magnify'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'

const initialValues = {
  activityReport: '#000',
  assetCheckIn: '#000',
  assetCheckOut: '#000',
  bobtailIn: '#000',
  bobTailOut: '#000',
  ClubIn: '#000',
  ClubOut: '#000',
  tour: '#000',
  checkIn: '#000',
  checkOut: '#000',
  verify: '#000',
  custom: '#000',
  degree: '#000'
}

const ActivityColor = () => {
  const { t } = useTranslation()
  const [color, setColor] = useState(initialValues)

  const handleChange = e => {
    setColor({ ...color, [e.target.name]: e.target.value })
    console.log(color)
  }

  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const rows = [
    { id: 1, activity: 'Activity Report', color: 'activityReport' },
    { id: 2, activity: 'Asset Check-In', color: 'assetCheckIn' },
    { id: 3, activity: 'Asset Check-Out', color: 'assetCheckOut' },
    { id: 4, activity: 'Bobtail Tractor Check-In', color: 'bobtailIn' },
    { id: 5, activity: 'Bobtail Tractor Check-Out	', color: 'bobTailOut' },
    { id: 6, activity: 'Club Member Check-In', color: 'ClubIn' },
    { id: 7, activity: 'Club Member Check-Out', color: 'ClubOut' },
    { id: 8, activity: 'Complete Tour', color: 'tour' },
    { id: 9, activity: 'Contractor Check-In', color: 'checkIn' },
    { id: 10, activity: 'Contractor Check-Out', color: 'checkOut' },
    { id: 11, activity: 'Contractor Verify', color: 'verify' },
    { id: 12, activity: 'Custom In-Out Forms', color: 'custom' },
    { id: 13, activity: 'Degrees Celsius', color: 'degree' }
  ]

  const columns = [
    {
      flex: 0.1,
      field: 'activity',
      minWidth: 80,
      headerName: 'Activity',
      sortable: isNameSortable
    },
    {
      flex: 0.1,
      field: 'color',
      minWidth: 80,
      headerName: 'Color',
      sortable: isNameSortable,
      renderCell: () => (
        <TextField
          size='small'
          className={styles.colorPicker}
          type='color'
          value={color[rows.color]}
          name={rows.activity}
          onChange={e => handleChange(e)}
        />
      )
    }
  ]

  return (
    <>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/activityColor'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Activity Color Codes')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant="outlined" >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Typography variant='h6' className={styles.topHeading}>
                  {`${t('ACTIVITY COLOR CODES')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='caption' className={styles.heading}>
                  {`${t(`Showing color list for the selected site`)}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={styles.space}>
                <TextField
                  size='small'
                  fullWidth
                  placeholder={`${t('Enter Keywords')}`}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Typography variant='subtitle2' className={styles.heading2}>
                          {`${t('Filter by')}`}
                        </Typography>{' '}
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
            </Grid>
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
    </>
  )
}

export default ActivityColor
