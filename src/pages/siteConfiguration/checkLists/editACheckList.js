import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Breadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/editACheckList.module.css'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const EditACheckList = () => {
  const { t } = useTranslation()
  const [inputList, setinputList] = useState([])
  const [inputListTwo, setinputListTwo] = useState([{ firstName: '', lastName: '' }])
  const [inputListThree, setinputListThree] = useState([{ firstName: '', lastName: '' }])
  const [inputListFour, setinputListFour] = useState([{ firstName: '', lastName: '' }])

  const handleinputchange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setinputList(list)
  }

  const handleinputchangeTwo = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListTwo]
    list[index][name] = value
    setinputListTwo(list)
  }

  const handleinputchangeThree = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListThree]
    list[index][name] = value
    setinputListThree(list)
  }

  const handleinputchangeFour = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListFour]
    list[index][name] = value
    setinputListFour(list)
  }

  const handleremove = () => {
    const list = [...inputList]
    list.pop()
    setinputList(list)
  }

  const handleremoveTwo = () => {
    const list = [...inputListTwo]
    list.pop()
    setinputListTwo(list)
  }

  const handleremoveThree = () => {
    const list = [...inputListThree]
    list.pop()
    setinputListThree(list)
  }

  const handleremoveFour = () => {
    const list = [...inputListFour]
    list.pop()
    setinputListFour(list)
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
        <Link href='/siteConfiguration/checkLists/editAChecklist'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Edit A Check List')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Edit A Check List')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className={styles.textField}>
            <Typography variant='subtitle2'>{`${t('Check List Name')}`}</Typography>
            <TextField
              type='text'
              fullWidth
              size='small'
              placeholder={`${t('Fire Hazard - Major (immediate attention)')}`}
            />
          </Grid>
          <Grid item xs={12} md={12}></Grid>
          <Grid item xs={12} md={5} className={styles.textField}>
            <Typography variant='subtitle2'>{`${t('Check List Item')}`}</Typography>
            <TextField
              type='text'
              fullWidth
              size='small'
              onChange={e => handleinputchange(e, i)}
              placeholder={`${t('Notify GSOC via radio')}`}
            />
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

          <Grid item xs={12} md={12}></Grid>
          <Grid item xs={12} md={6} className={styles.textField}>
            {inputListTwo.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={10}>
                      <TextField
                        type='text'
                        fullWidth
                        size='small'
                        placeholder={`${t(
                          'Remind officer to take photos and edit the event and add photos if they did not'
                        )}`}
                        onChange={e => handleinputchangeTwo(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremoveTwo()}
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
          <Grid item xs={12} md={12}></Grid>
          <Grid item xs={12} md={6} className={styles.textField}>
            {inputListThree.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={10}>
                      <TextField
                        type='text'
                        fullWidth
                        size='small'
                        placeholder={`${t('Contain affected area')}`}
                        onChange={e => handleinputchangeThree(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremoveThree()}
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
          <Grid item xs={12} md={12}></Grid>
          <Grid item xs={12} md={6} className={styles.textField}>
            {inputListFour.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={10}>
                      <TextField
                        type='text'
                        fullWidth
                        size='small'
                        placeholder={`${t('Standby and wait for SPE Fire to respond')}`}
                        onChange={e => handleinputchangeFour(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremoveFour()}
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
          <Grid item xs={12} md={12}></Grid>

          <Grid item xs={12} md={6}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container className={styles.textField}>
                    <Grid item xs={12} md={10}>
                      <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
                    </Grid>
                    <Grid item xs={12} md={1}>
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

export default EditACheckList
