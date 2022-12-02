import { Breadcrumbs, Checkbox, Fab, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/addAccessory.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const AddAccessory = () => {
  const { t } = useTranslation()
  const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }])

  const handleinputchange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setinputList(list)
  }

  const handleremove = () => {
    const list = [...inputList]
    list.pop()
    setinputList(list)
  }

  const handleaddclick = () => {
    setinputList([...inputList, { firstName: '', lastName: '' }])
  }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Home')}`}
          </Typography>
        </Link>
        <Link href='/applications'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('HELIAUS Order Management')}`}
          </Typography>
        </Link>
        <Link href='/applications/heliausOrderManagement/manageAccessories/addAccessory'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Add Accessory')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add Accessory')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Product Name')}`}</Typography>
            <TextField type='text' size='small' fullWidth placeholder={`${t('Enter product name')}`} />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Tangoe Item Number (TIN)')}`}</Typography>
            <TextField type='text' size='small' fullWidth placeholder={`${t('Enter TIN')}`} />
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Category')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' fullWidth>
              <MenuItem value='selectCategory'>Select Category</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={7.5} className={styles.blockTwo}>
            <Typography variant='subtitle2' className={styles.headingTwo}>
              <Checkbox color='secondary' />
              {`${t('Client Billable')}`}
              <Checkbox color='secondary' />
              {`${t('Patrol Service')}`}
              <Checkbox color='secondary' />
              {`${t('Show On New Order')}`}
              <Checkbox color='secondary' />
              {`${t('Show On Accessories Order')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={styles.block}>
            <Typography variant='subtitle'>{`${t('Associated Countries')}`}</Typography>
          </Grid>

          <Grid item xs={12} md={3.9} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Country')}`}</Typography>
            <Select size='small' fullWidth onChange={e => handleinputchange(e, i)}>
              <MenuItem value='selectZone'>Select Zone</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={2.9} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Price')}`}</Typography>
            <TextField type='text' onChange={e => handleinputchange(e, i)} size='small' fullWidth />
          </Grid>
          <Grid item xs={12} md={2.9} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Cost')}`}</Typography>
            <TextField type='text' onChange={e => handleinputchange(e, i)} size='small' fullWidth />
          </Grid>
          <Grid item={12} md={1} className={styles.blockTwo}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclick}
              className={styles.button}
            >
              {`${t('+')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    <Grid item xs={12} md={3.9} className={styles.block}>
                      <Typography variant='subtitle2'>{`${t('Country')}`}</Typography>
                      <Select size='small' fullWidth onChange={e => handleinputchange(e, i)}>
                        <MenuItem value='selectZone'>Select Zone</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={2.9} className={styles.block}>
                      <Typography variant='subtitle2'>{`${t('Price')}`}</Typography>
                      <TextField type='text' onChange={e => handleinputchange(e, i)} size='small' fullWidth />
                    </Grid>
                    <Grid item xs={12} md={2.9} className={styles.block}>
                      <Typography variant='subtitle2'>{`${t('Cost')}`}</Typography>
                      <TextField type='text' onChange={e => handleinputchange(e, i)} size='small' fullWidth />
                    </Grid>
                    <Grid item xs={12} md={1} className={styles.blockTwo}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremove()}
                        className={styles.button}
                      >
                        {`${t('-')}`}
                      </Fab>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={12}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Save')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Cancel')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddAccessory
