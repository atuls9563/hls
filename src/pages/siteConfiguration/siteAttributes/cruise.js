import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Grid, TextField, Checkbox, Fab } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../styles/cruise.module.css'
import { useTranslation } from 'react-i18next'
import { Close } from 'mdi-material-ui'

const Cruise = () => {
  const { t } = useTranslation()
  const [terminal, setTerminal] = useState('')
  const [vessel, setVessel] = useState('')
  const [term, setTerm] = useState([])
  const [vess, setVess] = useState([])

  const addTerminal = () => {
    {
      !terminal ? null : setTerm([...term, terminal])
      setTerminal('')
    }
  }

  const addVessel = () => {
    {
      !vessel ? null : setVess([...vess, vessel])
      setVessel('')
    }
  }

  const deleteTerm = id => {
    const NewTerm = term.filter((elt, ind) => {
      return ind !== id
    })
    setTerm(NewTerm)
  }

  const deleteVess = id => {
    const NewVess = vess.filter((elv, ind) => {
      return ind !== id
    })
    setVess(NewVess)
  }

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h6' className={styles.topHeading}>
              {`${t('Cruise')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container className={styles.textField} justifyContent='space-between'>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2'>{`${t('Cruise Site?')}`}</Typography>
                <Checkbox color='secondary' />
              </Grid>
              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Terminal')}`}</Typography>
                <TextField
                  type='text'
                  fullWidth
                  size='small'
                  value={terminal}
                  onChange={e => setTerminal(e.target.value)}
                />
                <Fab
                  onClick={addTerminal}
                  color='secondary'
                  variant='extended'
                  size='medium'
                  type='submit'
                  className={styles.button}
                >
                  {`${t('Add Terminal')}`}
                </Fab>
              </Grid>

              <Grid item xs={12} md={3.9}>
                <Typography variant='subtitle2'>{`${t('Vessel')}`}</Typography>
                <TextField
                  type='text'
                  fullWidth
                  size='small'
                  value={vessel}
                  onChange={e => setVessel(e.target.value)}
                />
                <Fab
                  color='secondary'
                  variant='extended'
                  size='medium'
                  onClick={addVessel}
                  type='submit'
                  className={styles.button}
                >
                  {`${t('Add Vessel')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} className={styles.input}>
            {term.map((elemT, ind) => {
              return (
                <div key={ind}>
                  <Grid container>
                    <Grid item xs={12} md={12} className={styles.inputText}>
                      <Typography variant='subtitle2'>{elemT}</Typography>
                      <Close onClick={() => deleteTerm(ind)} />
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4} className={styles.input}>
            {vess.map((elemV, ind) => {
              return (
                <div key={ind}>
                  <Grid container>
                    <Grid item xs={12} md={12}className={styles.inputText}>
                      <Typography variant='subtitle2'>{elemV}</Typography>
                      <Close onClick={() => deleteVess(ind)} />
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={styles.footer}>
              <Grid item xs={6} md={2}>
                <Fab color='secondary'  variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Save')}`}
                </Fab>
              </Grid>
              <Grid item xs={6} md={1}>
                <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
                  {`${t('Cancel')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Cruise
