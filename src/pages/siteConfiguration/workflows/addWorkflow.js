import {
  Breadcrumbs,
  Checkbox,
  Divider,
  Fab,
  Grid,
  MenuItem,
  Paper,
  Radio,
  Select,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../../../styles/addWorkflow.module.css'
import { useTranslation } from 'react-i18next'
import Option from './option'

const AddWorkflow = ({positive}) => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('')
  const [openEdit, setOpenEdit] = useState(false)
  const [inputList, setinputList] = useState([])

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

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

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
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
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Workflows')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows/Workflow'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Edit A Workflow')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={2}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Add A Workflow')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Workflow Type')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Workflow Name')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Workflow Question (this is what the user sees)')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' rows={2} multiline />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Event (when should this workflow be shown to the user)')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Weather Qualified?')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Workflow Scope')}`}</Typography>
            <Grid item xs={12} md={12}>
              <Radio color='secondary' value='yes' checked={selectedValue === 'yes'} onChange={handleChangeTwo} />{' '}
              {`${t('Patrol Service')}`}
              <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
              {`${t('Tours')}`}
              <Radio value='no' checked={selectedValue === 'no'} onChange={handleChangeTwo} color='secondary' />
              {`${t('Both')}`}
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Display Name for Graph')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Distribution Categories')}`}
              <span className={styles.aster}>*</span>
            </Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Workflow Options')}`}</Typography>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleEditClickOpen}
              className={styles.button}
            >
              {`${t('+Add Option')}`}
            </Fab>
            <Option
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
          </Grid>
          {positive?<>(
          <Grid item xs={12} md={1.7}>
            <Typography variant='subtitle2'>{`${t('Option')}`}</Typography>
            <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
          </Grid>
          <Grid item xs={12} md={1.7}>
            <Typography variant='subtitle2'>{`${t('Effect')}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1.7}>
            <Typography variant='subtitle2'>{`${t('Outcome')}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1.7}>
            <Typography variant='subtitle2'>{`${t('Follow-Up?')}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1.7}>
            <Typography variant='subtitle2'>{`${t('Follow-Up Type')}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1.7}>
            <Typography variant='subtitle2'>{`${t('Select a Checklist')}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item={12} md={1} className={styles.header}>
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
          </Grid>)</>:null}
          <Grid item xs={12} md={12} className={styles.footer}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='flex-end' className={styles.footer}>
                    <Grid item xs={12} md={1.7}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
                        <MenuItem value='checklist'>Select Followup</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremove()}
                        className={styles.buttonTwo}
                      >
                        {`${t('-')}`}
                      </Fab>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Frequency')}`}</Typography>
            <Grid container>
              <Grid item xs={4} md={4}>
                <TextField required variant='outlined' size='small' type='text' />
              </Grid>
              <Grid item xs={8} md={8}>
                <Typography variant='subtitle2'>{`${t(
                  '# of minutes before first event (Stay event only)'
                )}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Frequency')}`}</Typography>
            <Grid container>
              <Grid item xs={4} md={4}>
                <TextField required variant='outlined' size='small' type='text' />
              </Grid>
              <Grid item xs={8} md={8}>
                <Typography variant='subtitle2'>{`${t('# of minutes between repeat events')}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Is Voice Activated?')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Is Time Boxed?')}`}</Typography>
            <Checkbox color='secondary' />
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Workflow L1 Category Prevention')}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={5.5}></Grid>
          <Grid item xs={12} md={2} className={styles.footerTwo}>
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

export default AddWorkflow
