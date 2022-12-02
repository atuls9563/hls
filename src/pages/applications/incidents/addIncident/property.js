import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, Fab, TextField, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/property.module.css'
import { useTranslation } from 'react-i18next'

const Property = () => {
  
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
                <Grid container >

                
                <Grid item xs={12} md={12}>
                  <Typography variant='h6' className={styles.topHeading}>
                    {`${t('Property')}`}&nbsp;
                    {i + 1}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Grid container className={styles.textField} justifyContent='space-between'>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Item Description')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Item Description')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('$ Loss')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('$ Loss')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Color')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Color')}`}
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
                          <Typography variant='subtitle2'>{`${t('Serial')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Serial')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Model')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Model')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Property Type')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Property Type')}`}
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
                          <Typography variant='subtitle2'>{`${t('Owner Name')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Owner Name')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Owner Status')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Owner Status')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Last Seen Date')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='date'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Last Seen Date')}`}
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
                          <Typography variant='subtitle2'>{`${t('Last Seen Time')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='time'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Last Seen Time')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Last Seen By')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Last Seen By')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Last Seen Phone')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Last Seen Phone')}`}
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
                          <Typography variant='subtitle2'>{`${t('Discover Gone Date')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='date'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Discover Gone Date')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Last Gone Time')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Last Gone Time')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Discovered Gone By')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='text'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Discovered Gone By')}`}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Grid container className={styles.textFieldOne} justifyContent='space-between'>
                    <Grid item xs={12} md={3.9}>
                      <Grid container>
                        <Grid item xs={12} md={12}>
                          <Typography variant='subtitle2'>{`${t('Discovered Gone Phone')}`}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            type='time'
                            fullWidth
                            size='small'
                            onChange={e => handleinputchange(e, i)}
                            placeholder={`${t('Discovered Gone Phone')}`}
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
                      {`${t('Remove this Property')}`}
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
                  {`${t('Add More Property')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Property
