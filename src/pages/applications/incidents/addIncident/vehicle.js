import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Select, MenuItem, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/vehicle.module.css'
import { useTranslation } from 'react-i18next'

const Vehicle = () => {
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
                <div  key={i}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Typography variant='h6' className={styles.topHeading}>
                        {`${t('Vehicle')}`}&nbsp;
                        {i + 1}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Vehicle Year')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Vehicle Year')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Plate')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Plate')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Make')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Make')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Model')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Model')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Color')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Color')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Body Type')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Body Type')}`} />
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
                              <Typography variant='subtitle2'>{`${t('State')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Select size='small' fullWidth>
                                <MenuItem value=''>Not Selected</MenuItem>
                              </Select>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Registration Year')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Registration Year')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Registration Expires')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='date'
                                fullWidth
                                size='small'
                                placeholder={`${t('Registration Expires')}`}
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
                              <Typography variant='subtitle2'>{`${t('Sticker Issued By')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Sticker Issued By')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Sticker Color')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Sticker Color')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Sticker Number')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Sticker Number')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Sticker Expires')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Sticker Expires')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Identifying Marks')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Identifying Marks')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Owner Name')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Owner Name')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Phone')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Phone')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Vehicle Address')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Vehicle Address')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('City')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('City')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} columnGap={4}>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('State')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Select size='small' fullWidth>
                                <MenuItem value=''>Not Selected</MenuItem>
                              </Select>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Zip')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Zip')}`} />
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
              <Grid item xs={12} md={2.5}>
                {inputList.length == 1 ? null : (
                  <Grid item xs={12} md={12}>
                    <Fab
                      color='secondary'
                      variant='extended'
                      size='medium'
                      type='submit'
                      onClick={() => handleremove()}
                      className={styles.button}
                    >
                      {`${t('Remove this Vehicle')}`}
                    </Fab>
                  </Grid>
                )}
              </Grid>
              <Grid item={12} md={2.5}>
                <Fab
                  color='secondary'
                  variant='extended'
                  size='medium'
                  type='submit'
                  onClick={handleaddclick}
                  className={styles.button}
                >
                  {`${t('Add More Vehicle')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Vehicle
