import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Breadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/addCheckList.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const AddCheckList = () => {
  const { t } = useTranslation()
  const [inputList, setinputList] = useState([])

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
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/checkLists'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Check Lists')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/checkLists/addChecklist'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Add A Check List')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Add A Check List')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className={styles.textField}>
            <Typography variant='subtitle2'>{`${t('Check List Name')}`}</Typography>
            <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={5} className={styles.textField}>
            <Typography variant='subtitle2'>{`${t('Check List Item')}`}</Typography>
            <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
          </Grid>
          <Grid item={12} md={1} className={`${styles.textField} ${styles.headerRight}`}>
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
          <Grid item xs={12} md={6}></Grid>

          <Grid item xs={12} md={6} className={styles.textField}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={10}>
                      <Typography variant='subtitle2'>{`${t('Check List Item')}`}</Typography>
                      <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
                    </Grid>
                    <Grid item xs={12} md={1} className={styles.textField}>
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
          <Grid item={12} md={12} className={styles.textField}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclick}
              className={styles.button}
            >
              {`${t('Save')}`}
            </Fab>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclick}
              className={styles.button}
            >
              {`${t('Cancel')}`}
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddCheckList
