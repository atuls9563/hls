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
import styles from '../../../../styles/editWorkflow.module.css'
import { useTranslation } from 'react-i18next'
import { TrashCanOutline } from 'mdi-material-ui'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const EditStaticTour = () => {
  const { t } = useTranslation()
  const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }])
  const [inputListTwo, setinputListTwo] = useState([{ firstName: '', lastName: '' }])
  const [inputListThree, setinputListThree] = useState([{ firstName: '', lastName: '' }])
  const [inputListFour, setinputListFour] = useState([])
  const [inputListFive, setinputListFive] = useState([{ firstName: '', lastName: '' }])
  const [inputListSix, setinputListSix] = useState([{ firstName: '', lastName: '' }])
  const [selectedValue, setSelectedValue] = useState('')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

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

  const handleinputchangeFive = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListFive]
    list[index][name] = value
    setinputListFive(list)
  }

  const handleinputchangeSix = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListSix]
    list[index][name] = value
    setinputListSix(list)
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

  const handleremoveFive = () => {
    const list = [...inputListFive]
    list.pop()
    setinputListFive(list)
  }

  const handleremoveSix = () => {
    const list = [...inputListSix]
    list.pop()
    setinputListSix(list)
  }

  const handleaddclick = () => {
    setinputList([...inputList, { firstName: '', lastName: '' }])
  }

  const handleaddclickTwo = () => {
    setinputListTwo([...inputListTwo, { firstName: '', lastName: '' }])
  }

  const handleaddclickThree = () => {
    setinputListThree([...inputListTwo, { firstName: '', lastName: '' }])
  }

  const handleaddclickFour = () => {
    setinputListFour([...inputListFour, { firstName: '', lastName: '' }])
  }

  const handleaddclickFive = () => {
    setinputListFive([...inputListFive, { firstName: '', lastName: '' }])
  }
  
  const handleaddclickSix = () => {
    setinputListSix([...inputListSix, { firstName: '', lastName: '' }])
  }

  function createData(questions, positive, negative, action) {
    return { questions, positive, negative, action }
  }

  const rows = [
    createData('1. Are there any cracks or loose parts in the housing?', 'No', 'Yes', <TrashCanOutline className={styles.icon} />),
    createData('2. Is the unit clean, undamaged, free of excessive wear?', 'Yes', 'No', <TrashCanOutline className={styles.icon} />),
    createData('3. Batteries within expiration date. Replace if required.', 'Yes', 'No', <TrashCanOutline className={styles.icon} />),
    createData(
      '4. Verify electrodes are connected to the AED and sealed in their package. Replace if required.',
      'Yes',
      'No',
      <TrashCanOutline className={styles.icon} />
    ),
    createData('5. Check for adequate supplies.', 'Yes', 'No', <TrashCanOutline className={styles.icon} />),
    createData(
      '6. Turn the AED on and off and verify the green check indicates ready for use.',
      'Yes',
      'No',
      <TrashCanOutline className={styles.icon} />
    ),
    createData('7.Are all cables free of cracks, cuts, and exposed or broken wires?', 'Yes', 'No', <TrashCanOutline className={styles.icon} />)
  ]

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Applications')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Workflows')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/workflows/editWorkflow'>
          <Typography className={styles.link} variant='subtitle'>{`${t('Edit A Workflow')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container} justifyContent='space-between'>
          <Grid item xs={12} md={2}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('Edit A Workflow')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} className={styles.header}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button}>
              {`${t('Print')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Workflow Name')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' />
          </Grid>
          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t('Workflow Question (this is what the user sees)')}`}</Typography>
            <TextField required variant='outlined' fullWidth size='small' type='text' rows={2} multiline />
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Questions</TableCell>
                  <TableCell align='right'>Positive Option</TableCell>
                  <TableCell align='right'>Negative Option</TableCell>
                  <TableCell align='right'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.question} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.questions}
                    </TableCell>
                    <TableCell align='right'>{row.positive}</TableCell>
                    <TableCell align='right'>{row.negative}</TableCell>
                    <TableCell className={styles.cell} align='right'>
                      {row.action}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item={12} md={12} className={styles.header}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclick}
              className={styles.button}
            >
              {`${t('Add More Questions')}`}
            </Fab>
          </Grid>
          <Grid item xs={12} md={12} className={styles.footer}>
            {inputList.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    {i + 8}
                    <Grid item xs={12} md={2.9}>
                      <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
                    </Grid>
                    <Grid item xs={12} md={2.9}>
                      <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
                    </Grid>
                    <Grid item xs={12} md={2.9}>
                      <TextField type='text' fullWidth size='small' onChange={e => handleinputchange(e, i)} />
                    </Grid>
                    <Grid item xs={12} md={2.9}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremove()}
                        className={styles.button}
                      >
                        {`${t('- Remove Question')}`}
                      </Fab>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Grid>

          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={2.9} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Followup Actions (Always)')}`}
              <span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='firstName'>First Name</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1} className={styles.block}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclickThree}
              className={styles.button}
            >
              {`${t('+')}`}
            </Fab>
          </Grid>

          <Grid item xs={12} md={12} className={styles.footer}>
            {inputListTwo.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    <Grid item xs={12} md={2.9}></Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeTwo(e, i)} fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeTwo(e, i)} fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
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
          <Grid item xs={12} md={12} className={styles.footer}>
            {inputListThree.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    <Grid item xs={12} md={2.9}></Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
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
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={2.9} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Followup Actions (When All Positive)')}`}
              <span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='firstName'>First Name</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1} className={styles.block}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclickFour}
              className={styles.button}
            >
              {`${t('+')}`}
            </Fab>
          </Grid>

          <Grid item xs={12} md={12} className={styles.footer}>
            {inputListFour.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    <Grid item xs={12} md={2.9}></Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
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
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={2.9} className={styles.block}>
            <Typography variant='subtitle2'>
              {`${t('Followup Actions (When One or More Negative)')}`}
              <span className={styles.aster}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='checklist'>A Check List</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={3.9} className={styles.block}>
            <Select size='small' variant='outlined' fullWidth>
              <MenuItem value='firstName'>First Name</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={1} className={styles.block}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleaddclickFour}
              className={styles.button}
            >
              {`${t('+')}`}
            </Fab>
          </Grid>

          <Grid item xs={12} md={12} className={styles.footer}>
            {inputListFive.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    <Grid item xs={12} md={2.9}></Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeFive(e, i)} fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeFive(e, i)} fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremoveFive()}
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

          <Grid item xs={12} md={12} className={styles.footer}>
            {inputListSix.map((x, i) => {
              return (
                <div key={i}>
                  <Grid container justifyContent='space-between' className={styles.footer}>
                    <Grid item xs={12} md={2.9}></Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                      <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
                        <MenuItem value='checklist'>A Check List</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Fab
                        color='secondary'
                        variant='extended'
                        size='medium'
                        type='submit'
                        onClick={() => handleremoveSix()}
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
            <Divider />
          </Grid>

          <Grid item xs={12} md={5.5} className={styles.block}>
            <Typography variant='subtitle2'>{`${t(
              'Event (when should this workflow be shown to the user)'
            )}`}</Typography>
            <Select size='small' variant='outlined' onChange={e => handleinputchangeSix(e, i)} fullWidth>
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
          <Grid item xs={12} md={5.5}></Grid>
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
                <Typography variant='subtitle2'>{`${t(
                  '# of minutes between repeat events'
                )}`}</Typography>
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

export default EditStaticTour
