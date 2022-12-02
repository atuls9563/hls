import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Fab, Grid, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import styles from '../../../../../styles/bodyInjuryDiagram.module.css'
import { useTranslation } from 'react-i18next'
import { Close, EyeOffOutline, SquareEditOutline } from 'mdi-material-ui'
import CanvasDraw from 'react-canvas-draw'

const BodyInjuryDiagram = (props) => {
  const { t } = useTranslation()
  const [value, setValue] = useState(0)
  const [inputList, setinputList] = useState([])
  const [saveableCanvas, setSaveableCanvas] = useState('')
  const [lines, setLines] = useState([])
  const [erasedLines, setErasedLines] = useState([])
  const [ctx, setCtx] = useState({})
  const [valuesChanged, setValuesChanges] = useState(true)

  const inClientSpace = (ctxs, action) => {
    ctxs.forEach(ctxp => {
      ctxp.save()
      ctxp.setTransform(IDENTITY.a, IDENTITY.b, IDENTITY.c, IDENTITY.d, IDENTITY.e, IDENTITY.f)
    })
    try {
      action()
    } finally {
      ctxs.forEach(ctxp => ctxp.restore())
    }
  }

  const clearWindow = ctxp => {
    inClientSpace([ctxp], () => ctxp.clearRect(0, 0, ctxp.canvas.width, ctxp.canvas.height))
  }

  const clearExceptErasedLines = () => {
    lines = []
    valuesChanged = true
    clearWindow(ctx.drawing)
    clearWindow(ctx.temp)
  }

  const triggerOnChange = () => {
    props.onChange && props.onChange()
  }

  const undo = () => {
    let lines = []
    if (lines.length) {
      lines = lines.slice(0, -1)
    } else if (erasedLines.length) {
      lines = erasedLines.pop()
    }
    clearExceptErasedLines()
    triggerOnChange()
  }

  const eraseAll = () => {
    erasedLines.push([...lines])
    clearExceptErasedLines()
    triggerOnChange()
  }
  
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
    setValue(true)
  }

  return (
    <div>
      <Paper className={styles.container} variant='outlined'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={10}>
                <Typography variant='h6'>
                  <b>{`${t('Body Injury Diagram')}`}</b>
                </Typography>
              </Grid>
              <Grid item={12} md={2}>
                <Fab
                  color='secondary'
                  variant='extended'
                  size='medium'
                  type='submit'
                  onClick={handleaddclick}
                  className={styles.button}
                >
                  {`${t('Add a Diagram')}`}
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Grid container className={styles.textField} justifyContent='space-between'>
                        <Grid item xs={12} md={6}>
                          <Typography variant='subtitle'>
                            {`${t('Body Injury Diagram')}`}&nbsp;
                            {i + 1}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={1}>
                          {value ? (
                            <EyeOffOutline onClick={() => setValue(!value)} />
                          ) : (
                            <SquareEditOutline onClick={() => setValue(!value)} />
                          )}
                          <Close onClick={() => handleremove()} />
                        </Grid>
                      </Grid>
                      {value ? (
                        <Grid container justifyContent='space-between'>
                          <Grid item xs={12} md={5}>
                            <CanvasDraw
                              brushRadius={1}
                              onChange={() => console.log('onChange')}
                              brushColor='rgb(255, 0, 0)'
                              imgSrc='/images/body_new.jpg'
                              lazyRadius={0}
                              canvasWidth={482}
                              canvasHeight={490}
                              className={styles.image}
                            />
                          </Grid>
                          <Grid item xs={12} md={3.9}>
                            <Grid container className={styles.textField}>
                              <Grid item xs={12} md={12}>
                                <Typography variant='subtitle2'>
                                  {`${t('Person Name')}`} <span className={styles.aster}>*</span>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <TextField
                                  onChange={e => handleinputchange(e, i)}
                                  type='text'
                                  fullWidth
                                  size='small'
                                  placeholder={`${t('Person Name')}`}
                                />
                              </Grid>
                            </Grid>

                            <Grid container className={styles.textField}>
                              <Grid item xs={12} md={12}>
                                <Typography variant='subtitle2'>
                                  {`${t('Note')}`} <span className={styles.aster}>*</span>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <TextField
                                  onChange={e => handleinputchange(e, i)}
                                  type='text'
                                  fullWidth
                                  size='small'
                                  rows={2}
                                  multiline
                                />
                              </Grid>
                            </Grid>
                            <Grid container className={styles.footer}>
                              <Grid item={12} md={2}>
                                <Fab
                                  color='secondary'
                                  variant='extended'
                                  size='medium'
                                  type='submit'
                                  onClick={() => {
                                    saveableCanvas.clear
                                  }}
                                  className={styles.button}
                                >
                                  {`${t('Clear')}`}
                                </Fab>
                              </Grid>
                              <Grid item={12} md={2}>
                                <Fab
                                  color='secondary'
                                  variant='extended'
                                  size='medium'
                                  type='submit'
                                  onClick={() => {
                                    undo()
                                  }}
                                  className={styles.button}
                                >
                                  {`${t('Undo')}`}
                                </Fab>
                              </Grid>
                              <Grid item={12} md={2}>
                                <Fab
                                  color='secondary'
                                  variant='extended'
                                  size='medium'
                                  type='submit'
                                  onClick={handleaddclick}
                                  className={styles.button}
                                >
                                  {`${t('Redo')}`}
                                </Fab>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ) : null}
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default BodyInjuryDiagram
