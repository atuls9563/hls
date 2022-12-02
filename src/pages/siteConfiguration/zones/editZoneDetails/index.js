import { Breadcrumbs, Fab, Grid, MenuItem, Paper, Radio, Select, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import styles from '../../../../../styles/editZoneDetails.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import AddBasement from './addBasement'
import AddFloor from './addFloor'


const EditZoneDetails = () => {
  const { t } = useTranslation()
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)

  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditCloseTwo = () => setOpenEditTwo(false)

  
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)



  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/zones'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Zones')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/contacts/editZoneDetails'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Edit Zone Details')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Edit Zone Details')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={styles.headerRight}>
            <Fab color='secondary' onClick={handleEditClickOpen} variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Add Basement')}`}
            </Fab>
            <Fab color='secondary' onClick={handleEditClickOpenTwo}  variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Add A Floor')}`}
            </Fab>
            <AddBasement
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}/>
              <AddFloor
               openEditTwo={openEditTwo}
               setOpenEditTwo={setOpenEditTwo}
               handleEditClickOpenTwo={handleEditClickOpenTwo}
               handleEditCloseTwo={handleEditCloseTwo}/>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Zone Category')}`}:</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='select'>Select</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Name')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Type')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='select'>Select</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Square Feet')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Secured Access?')}`}
                  <span className={styles.aster}>*</span>:
                  <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Average Day Occupants')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Average Night Occupants')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Controlled Access?')}`}
                  <span className={styles.aster}>*</span>:
                  <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Number Of Elevators')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Number Of Stairwells')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Number Of Floors')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Number Of Entrances')}`}
                  <span className={styles.aster}>*</span>:
                </Typography>
                <TextField type='text' size='small' fullWidth />
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.blockTwo}>
                <Typography variant='subtitle2'>
                  {`${t('Roof Access?')}`}
                  <span className={styles.aster}>*</span>:
                  <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                </Typography>&nbsp;&nbsp;
                <Typography variant='caption' className={styles.aster}>
                  <span className={styles.aster}>*</span>
                  {`${t('Changing this value has no effect')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.blockTwo}>
                <Typography variant='subtitle2'>
                  {`${t('Basement')}`}
                  <span className={styles.aster}>*</span>:
                  <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                </Typography>
                <Typography variant='caption' className={styles.aster}>
                &nbsp; &nbsp;<span className={styles.aster}>*</span>
                  {`${t('Changing this value has no effect')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('HazMat Present?')}`}
                  <span className={styles.aster}>*</span>:
                  <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>
                  {`${t('Multi Tennant?')}`}
                  <span className={styles.aster}>*</span>:
                  <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} className={styles.block}>
                <Typography variant='subtitle2'>{`${t('Transport Type (if Type is Transport)')}`}:</Typography>
                <Select size='small' fullWidth>
                  <MenuItem value='select'>Select A Zone Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} className={styles.block} >
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Update Zone')}`}
              </Fab>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                {`${t('Cancel')}`}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditZoneDetails
