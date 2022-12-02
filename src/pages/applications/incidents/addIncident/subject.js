import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Select, MenuItem, Checkbox, Divider, Radio } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/subject.module.css'
import { useTranslation } from 'react-i18next'

const Subject = () => {
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
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12} className={styles.textFieldOne}>
                              <Typography variant='h6'>
                                {`${t('Subject')}`}&nbsp;
                                {i + 1}
                              </Typography>
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
                              <Typography variant='subtitle2'>{`${t('Last Name')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Last Name')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('First Name')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('First Name')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Email')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Email')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Alias')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Alias')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Action Taken')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Action Taken')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Status')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Status')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Work Phone')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Work Phone')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Ext')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Ext')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Home Phone')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Home Phone')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Home Address')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Home Address')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('City')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('City')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Zip')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('Zip')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('ID #')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('ID #')}`} />
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
                              <Typography variant='subtitle2'>{`${t('ID Type')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' placeholder={`${t('ID Type')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Date of Birth')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='date' fullWidth size='small' placeholder={`${t('Date of Birth')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('J/A')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('J/A')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Race')}`}</Typography>
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
                              <Typography variant='subtitle2'>{`${t('Complexion')}`}</Typography>
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
                              <Typography variant='subtitle2'>{`${t('Sex')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Select size='small' fullWidth>
                                <MenuItem value=''>Not Selected</MenuItem>
                              </Select>
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
                              <Typography variant='subtitle2'>{`${t('Age')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Age')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Height Ft')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Height Ft')}`} />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Height Inches')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' placeholder={`${t('Height Inches')}`} />
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
                              <Typography variant='subtitle2'>{`${t('Build')}`}</Typography>
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
                              <Typography variant='subtitle2'>{`${t('Facial Hair')}`}</Typography>
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
                              <Typography variant='subtitle2'>{`${t('Hair Color')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Select size='small' fullWidth>
                                <MenuItem value=''>Not Selected</MenuItem>
                              </Select>
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
                              <Typography variant='subtitle2'>{`${t('Hair Style')}`}</Typography>
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
                              <Typography variant='subtitle2'>{`${t('Glasses')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Checkbox color='secondary' />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Scar/Marks')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' />
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
                              <Typography variant='subtitle2'>{`${t('Clothing')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Warning Apply To')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t(
                                'Verbally Read from Trespass Warning Card'
                              )}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Checkbox color='secondary' />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item={12} xs={12}>
                      <Divider className={styles.divider} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant='subtitle'>{`${t('Driving License')}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Driving License')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='time' fullWidth size='small' />
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('DL State')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Select size='small' fullWidth>
                                <MenuItem value=''>Select State</MenuItem>
                              </Select>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('DL Expiration Date')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='datetime-local'
                                fullWidth
                                size='small'
                                placeholder={`${t('DL Expiration Date')}`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item={12} xs={12}>
                      <Divider className={styles.divider} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant='subtitle'>{`${t('Guest Information')}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Registered guest')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>
                                <Radio color='secondary' /> {`${t('Yes')}`} <Radio color='secondary' /> {`${t('No')}`}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Room#')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField type='text' fullWidth size='small' />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Arrival Date')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='datetime-local'
                                fullWidth
                                size='small'
                                placeholder={`${t('Arrival Date')}`}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField}>
                        <Grid item xs={12} md={3.9}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Typography variant='subtitle2'>{`${t('Departure Date')}`}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <TextField
                                type='datetime-local'
                                fullWidth
                                size='small'
                                placeholder={`${t('Arrival Date')}`}
                              />
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
                      {`${t('Remove this Subject')}`}
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
                  {`${t('Add More Subjects')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Subject
