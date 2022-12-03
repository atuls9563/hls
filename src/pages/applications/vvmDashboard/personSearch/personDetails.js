import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Checkbox, Grid, Paper, Radio, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from '../../../../../styles/personDetails.module.css'
import MuiPhoneNumber from 'material-ui-phone-number-2'
import Image from 'next/image'
import ImageUploading from 'react-images-uploading'

const PersonDetails = ({ openEdit, setOpenEdit, handleEditClickOpen, handleEditClose }) => {
  const { t } = useTranslation()
  const [images, setImages] = useState([])

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  function handleOnChange(value) {
    this.setState({
      phone: value
    })
  }

  return (
    <div>
      <Modal open={openEdit} onClose={handleEditClose}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container} columnGap={2}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h6' className={styles.heading}>
                {`${t('Person Detail')}`}
              </Typography>
              <Close onClick={handleEditClose} className={styles.icon} />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('First Name')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Last Name')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Unit')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Building')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Address Line 1')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Address Line 2')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('City')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Country')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('State')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Zip')}`}
                <span className={styles.aster}>*</span>
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Cell Phone No.')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
               <Typography variant='caption' className={styles.asterTwo}>
                {`${t('Note: SMS alerts will be sent to cell phone no.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Cell Phone No. -2')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
               <Typography variant='caption' className={styles.asterTwo}>
                {`${t('Note: SMS alerts will be sent to cell phone no.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Private No')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Office Phone')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Alt No.')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Home No.')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Fax No.')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Primary E-mail Id')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
              <Typography variant='caption' className={styles.asterTwo}>
                {`${t('Note: SMS alerts will be sent to primary email address.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Primary E-mail Id - 2')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
              <Typography variant='caption' className={styles.asterTwo}>
                {`${t('Note: SMS alerts will be sent to primary email address.')}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Secondary E-mail Id')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t("Driver's License")}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Pin Number')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Driving Directions')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' rows={2} multiline />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Storage Unit')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Parking Space 1')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Parking Space 2')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Emergency Contact First Name')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Emergency Contact Last Name')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Emergency Contact Cell No.')}`}
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'in'}
                onChange={handleOnChange}
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Headshot')}`}
              </Typography>
              <ImageUploading value={images} onChange={onChange} maxNumber={1} dataURLKey='data_url'>
                {({ imageList, onImageUpload }) => (
                  <div className={styles.imageHeader}>
                    {images == 0 ? (
                      <Image
                        className={styles.icon}
                        onClick={onImageUpload}
                        src='/images/cam.png'
                        alt='Heli Aus'
                        width='50px'
                        height='50px'
                      />
                    ) : (
                      imageList.map((image, index) => (
                        <div key={index} className='image-item'>
                          <img src={image['data_url']} alt='' width='50' height='50' />
                        </div>
                      ))
                    )}
                    <Typography variant='caption' className={styles.headingTwo}>
                      {`${t(' Click here to take Image From Webcam or Browse File')}`}
                    </Typography>
                  </div>
                )}
              </ImageUploading>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Badge Keytag Barcode')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Enable 2 Step')}`}
              </Typography>
              <Typography variant='subtitle2'>
              <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
            </Typography>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Enabled (Disabled people are hidden)?')}`}
              </Typography>
             <Checkbox  color='secondary' defaultChecked/>
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Unique ID (External Synchronization)')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' />
            </Grid>
            <Grid item xs={12} md={3.9}>
              <Typography variant='subtitle2' className={styles.headingTwo}>
                {`${t('Notes')}`}
              </Typography>
              <TextField type='text' fullWidth size='small' rows={2} multiline placeholder={`${t('This is for test purpose, please ignore')}`}/>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default PersonDetails
