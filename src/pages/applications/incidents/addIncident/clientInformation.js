import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Checkbox, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/clientInformation.module.css'
import { useTranslation } from 'react-i18next'

const ClientInformation = () => {
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
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Typography variant='h6' className={styles.topHeading}>
                        {`${t('Client Information')}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Client Title')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Client Title')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Client Representative')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='text'
                                fullWidth
                                size='small'
                                placeholder={`${t('Client Representative')}`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Verbally Notified to')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='text'
                                fullWidth
                                size='small'
                                placeholder={`${t('Verbally Notified to')}`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Follow Up')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Checkbox color='secondary' />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Date Notified')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Date Notified')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Time Notified')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item={12} xs={12}>
                      <Divider className={styles.divider} />
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            <Grid container columnGap={4} justifyContent='right'>
              <Grid item xs={12} md={1}>
                {inputList.length == 1 ? null : (
                  <Fab
                    color='secondary'
                    variant='extended'
                    size='medium'
                    type='submit'
                    onClick={() => handleremove()}
                    className={styles.button}
                  >
                    {`${t('Remove')}`}
                  </Fab>
                )}
              </Grid>
              <Grid item={12} md={1.5}>
                <Fab
                  color='secondary'
                  variant='extended'
                  size='medium'
                  type='submit'
                  onClick={handleaddclick}
                  className={styles.button}
                >
                  {`${t('Add More')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default ClientInformation
