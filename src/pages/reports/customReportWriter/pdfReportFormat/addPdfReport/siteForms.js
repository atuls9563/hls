import { Grid, Paper, Radio, Typography, Checkbox, Button, Divider } from '@mui/material'
import styles from '../../../../../../styles/siteForms.module.css'
import React, { useState } from 'react'
import Image from 'next/image' 
import SquareEditOutline from 'mdi-material-ui/SquareEditOutline'
import ImageUploading from 'react-images-uploading'
import { useTranslation } from 'react-i18next'
import Fab from '@mui/material/Fab'

const SiteForms = () => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('medium')
  const [images, setImages] = useState([])

  const onChange = (imageList, addUpdateIndex) => {
  
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

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
          <Grid item xs={12} md={12}>
            <Grid container className={styles.block}>
              <Grid item xs={12} md={1.2}>
                <Typography variant='caption' className={styles.headingOne}>
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
          <Grid item xs={12} md={12} className={styles.block}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingOne}>
                  {`${t('Date & Time')}`} : 09-Oct-2020 08:03:58
                </Typography>
                <Divider className={styles.divider} />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingFive}>
                  {`${t('Security Professional')}`}
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingFive}>
                  {`${t('Camera')}`}
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingFive}>
                  {`${t('Location Description')}`}
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingFive}>
                  {`${t('Detailed Description')}`}
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.headingFive}>
                  {`${t('Issue ScreenShot')}`}
                </Typography>
                <Divider />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} >
            <Fab color='secondary' variant='extended' type='submit' size='medium' className={styles.button2}>
              {`${t('Save Report')}`}
            </Fab>
            <Fab color='secondary' variant='extended' type='reset' size='medium' className={styles.button2}>
              {`${t('Cancel')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default SiteForms
