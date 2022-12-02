import { Grid, Paper, Typography, Checkbox, TextField, Divider } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Radio from '@mui/material/Radio'
import styles from '../../../../../../styles/activities.module.css'
import Image from 'next/image' 
import SquareEditOutline from 'mdi-material-ui/SquareEditOutline'
import ImageUploading from 'react-images-uploading'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Fab from '@mui/material/Fab'

const Activities = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('medium')
  const [images, setImages] = useState([])
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const onChange = (imageList, addUpdateIndex) => {
   
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  const rows = [
    {
      id: 1
    }
  ]

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
      flex: 0.01,
      field: 'zone',
      headerName: 'Zone',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'category',
      headerName: 'Category',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'narrative',
      headerName: 'Narrative',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'images',
      headerName: 'Images',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]

  const openPrompt = () => {
    prompt('Please enter the support text you want to show on this report .')
  }

  return (
    <div>
      <Paper elevation={0} >
        <Grid container>
          <Grid item xs={12} md={12} className={styles.background}>
            <Grid container className={styles.navBar}>
              <Grid item xs={6} md={1}>
                <ImageUploading value={images} onChange={onChange} maxNumber={1} dataURLKey='data_url'>
                  {({ imageList, onImageUpload }) => (
                    <div>
                      {images == 0 ? (
                        <Image onClick={onImageUpload} src="/images/pages/Test.jpg" alt='Heli Aus' width='100px' height='100px' />
                      ) : (
                        imageList.map((image, index) => (
                          <div key={index} className='image-item'>
                            <img src={image['data_url']} alt='' width='100' />
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </ImageUploading>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant='subtitle2' className={styles.headingThree}>
                  {`${t('Report Name')}`}
                </Typography>
              </Grid>
              <Grid item xs={6} md={6} className={styles.navHeading}>
                <Typography variant='subtitle2' className={styles.headingThree}>
                  {`${t('Call-9694222379 8AM-8PM EST M-F with any Issues or Questions')}`}
                </Typography>
                <SquareEditOutline className={styles.icon} onClick={openPrompt} />
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Image src="/images/pages/Heliaus.png" alt='Heli Aus' width='120px' height='75px' />
                <Checkbox className={styles.checkOne} defaultChecked color='secondary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} className={styles.content}>
            <Grid container>
              <Grid item xs={12} md={4} className={`${styles.blockOne} ${styles.block}`}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Date & Time')}`} : 09-Oct-2020 08:03:58
                  <Checkbox defaultChecked disabled color='secondary' />
                </Typography>
                <Grid item xs={6} md={2.6}>
                  <TextField size='small' disabled defaultValue={10} />
                </Grid>
              </Grid>
              <Grid item xs={12} md={3} className={styles.block}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Security Professional')}`}
                  <Checkbox defaultChecked color='secondary' />
                </Typography>
                <Grid item xs={3.5} md={4}>
                  <TextField
                    size='small'
                    color='secondary'
                    defaultValue={10}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>%</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={3} className={styles.block}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Activity')}`}
                  <Checkbox defaultChecked color='secondary' />
                </Typography>
                <Grid item xs={6} md={6}>
                  <TextField
                    size='small'
                    color='secondary'
                    defaultValue={10}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>%</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={2} className={styles.block}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Zone')}`}
                  <Checkbox defaultChecked color='secondary' />
                </Typography>
                <Grid item xs={6} md={6}>
                  <TextField
                    size='small'
                    color='secondary'
                    defaultValue={10}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>%</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} className={styles.content}>
            <Grid container>
              <Grid item xs={12} md={4} className={styles.block}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Category')}`}
                  <Checkbox defaultChecked color='secondary' />
                </Typography>
                <Grid item xs={6} md={3}>
                  <TextField
                    size='small'
                    color='secondary'
                    defaultValue={10}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>%</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} md={4} className={styles.block}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Narrative')}`}
                  <Checkbox defaultChecked color='secondary' />
                </Typography>
                <Grid item xs={6} md={3}>
                  <TextField
                    size='small'
                    color='secondary'
                    defaultValue={10}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>%</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} md={4} className={styles.block}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Images')}`}
                  <Checkbox defaultChecked color='secondary' />
                </Typography>
                <Grid item xs={6} md={4}>
                  <TextField
                    size='small'
                    color='secondary'
                    defaultValue={10}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>%</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider className={styles.spaceOne} />
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container className={styles.blockTwo}>
              <Grid item xs={12} md={1}>
                <Typography variant='caption' className={styles.headingFour}>
                  {`${t('Font Size')}`}:
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='caption' className={styles.headingFive}>
                  <Radio
                    color='secondary'
                    value='small'
                    checked={selectedValue === 'small'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Small')}`}
                </Typography>
                <Typography variant='caption' className={styles.headingFive}>
                  <Radio
                    color='secondary'
                    value='medium'
                    checked={selectedValue === 'medium'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Medium')}`}
                </Typography>
                <Typography variant='caption' className={styles.headingFive}>
                  <Radio
                    color='secondary'
                    value='large'
                    checked={selectedValue === 'large'}
                    onChange={handleChangeTwo}
                  />
                  {`${t('Large')}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider className={styles.spaceOne} />
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
          <Grid item xs={12} md={12} className={styles.spaceTwo}>
            <Divider />
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12} >
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Save Report')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button2}>
                {`${t('Cancel')}`}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Activities
