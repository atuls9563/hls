import Typography from '@mui/material/Typography'
import styles from '../../../../styles/editCustomReport.module.css'
import React, { useState } from 'react'
import { Card, Grid, TextField } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import Checkbox from '@mui/material/Checkbox'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Information from 'mdi-material-ui/Information'
import makeAnimated from 'react-select/animated'
import SelectOne from 'react-select'
import { useTranslation } from 'react-i18next'
import { DataGrid } from '@mui/x-data-grid'
import Fab from '@mui/material/Fab'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const CopyCustomReport = () => {
  const { t } = useTranslation()

  const [filterActivity, setFilterActivity] = useState([])
  const [categoryLevelOne, setCategoryLevelOne] = useState([])
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const handleChange = event => {
    const {
      target: { value }
    } = event

    setFilterActivity(
  
      // On autofill we get a stringified value.

      typeof value === 'string' ? value.split(',') : value
    )
  }

  const animatedComponents = makeAnimated()

  const names = [
    {
      id: 1,
      value: 'red',
      label: 'Red'
    }
  ]

  const columns = [
    {
      flex: 0.01,
      field: 'categoryName',
      headerName: 'Category Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'categoryType',
      headerName: 'Category Type',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'action',
      headerName: 'Action',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]

  const rows = [
    {
      id: 1
    }
  ]

  const rowsZone = [
    {
      id: 1
    }
  ]

  const columnsZone = [
    {
      flex: 0.01,
      field: 'zonePath',
      headerName: 'Zone Path',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'zoneType',
      headerName: 'Zone Type',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'action',
      headerName: 'Action',
      minWidth: 80,
      sortable: isNameSortable
    }
  ]


  const notify = () => {
    toast.warning(`Please select a category level 1`, {
      theme: 'colored'
    })
  }

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>

        <Link href='/reports/customReportWriter'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Custom Report Writer')}`}</Typography>
        </Link>
        <Link href='/reports/customReportWriter/editCustomReport'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Edit Custom Report')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Card variant='outlined' className={styles.container}>
        <Grid container>
 <Grid item xs={12} md={12} >
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('EDIT CUSTOM REPORT')}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.space}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Report Title and Report Duration.')}`}
                </Typography>
                <Typography variant='caption' className={styles.aster}>
                  {`${t('This report is not scheduled yet.')}`}
                </Typography>
              </Grid>

              <Grid container className={styles.boxTwoArea}>
                <Grid item xs={12} md={6}>
                  <Grid container className={styles.spaceTwo}>
                    <Grid item xs={12} md={12}>
                      <Typography variant='subtitle2' className={styles.headingTwo}>
                        {`${t('Report Title')}`} <span className={styles.aster}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField fullWidth size='small' placeholder={`${t('Random Test Report')}`} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6} className={styles.spaceTwo}>
                  <Grid container>
                    <Grid item xs={12} md={12} className={styles.text}>
                      <Typography variant='subtitle2' className={styles.headingTwo}>
                        {`${t('Choose Date Range')}`} <span className={styles.aster}>*</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Select size='small' fullWidth>
                        <MenuItem value='30minutes'>30 Minutes</MenuItem>
                        <MenuItem value='last1Hour'>Last 1 Hour</MenuItem>
                        <MenuItem value='last12Hours'>Last 12 Hours</MenuItem>
                        <MenuItem value='weekly'>Last 24 Hours</MenuItem>
                        <MenuItem value='last7days'>Last 7 days</MenuItem>
                        <MenuItem value='last30Days'>Last 30 Days</MenuItem>
                        <MenuItem value='none'> Shift Wise</MenuItem>
                        <MenuItem value='customDate'>Custom Date</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Card variant='outlined' className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={12} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.space}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Select Options')}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={styles.boxTwoArea}>
              <Grid item xs={12} md={1.5} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Format')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='defaultBlack'>Default(Black)</MenuItem>
                      <MenuItem value='colorCodedActivity'>Color Coded Activity</MenuItem>
                      <MenuItem value='colorCodedEffects'>Color Coded Effects</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={2} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Date/Time sort order')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='newestOnTop'>Newest on top</MenuItem>
                      <MenuItem value='oldestonTop'>Oldest on top</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={1.6} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Effects')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                      <MenuItem value='postive'>Positive</MenuItem>
                      <MenuItem value='negative'>Negative</MenuItem>
                      <MenuItem value='neutral'>Neutral</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3.2} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Bottom Summary')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                      <MenuItem value='postive'>Positive</MenuItem>
                      <MenuItem value='negative'>Negative</MenuItem>
                      <MenuItem value='neutral'>Neutral</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>
                      <Checkbox color='secondary' />
                      {`${t('Show Only Summary in Reports')}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={1.9} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Group By')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small'  fullWidth>
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value='siteZone'>Site Zone</MenuItem>
                      <MenuItem value='activity'>Activity</MenuItem>
                      <MenuItem value='securityProfessional'>Security Professional</MenuItem>
                      <MenuItem value='device'>Device</MenuItem>
                      <MenuItem value='categoryLevel1'>Category Level 1</MenuItem>
                      <MenuItem value='categoryLevel2'>Category Level 2</MenuItem>
                      <MenuItem value='categoryLevel3'>Category Level 3</MenuItem>
                      <MenuItem value='effects'>Effects</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={1.7} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Images')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth >
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value='thumbnail'>Thumbnail</MenuItem>
                      <MenuItem value='thumbnail&Large'>Thumbnail & Large</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card variant='outlined' className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={12} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.header}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Filter Categories')}`}
                </Typography>

                <Checkbox color='secondary' className={styles.checkbox} />
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Exclude These Categories')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={styles.boxOneArea}>
              <Grid item xs={12} md={3}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Category Level 1')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select
                      size='small'
                      multiple
                      value={categoryLevelOne}
                      MenuProps={MenuProps}
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>None</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Category Level 2')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='newestOnTop'>Newest on top</MenuItem>
                      <MenuItem value='oldestonTop'>Oldest on top</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Category Level 3')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                      <MenuItem value='postive'>Positive</MenuItem>
                      <MenuItem value='negative'>Negative</MenuItem>
                      <MenuItem value='neutral'>Neutral</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3}>
                <Grid container className={styles.buttonBox}>
                  <Grid item>
                    <Fab color='secondary' variant='extended' size='medium' onClick={notify} className={styles.button2}>
                      <Typography variant='subtitle2' className={styles.boxFont}>
                        +
                      </Typography>
                    </Fab>
                    <ToastContainer closeOnClick autoClose={5000}></ToastContainer>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} className={styles.boxOne}>
                <DataGrid
                  autoHeight
                  columns={columns}
                  rows={rows}
                  pageSize={pageSize}
                  rowsPerPageOptions={[7, 10, 25, 50]}
                  onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Card variant='outlined' className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={12} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.header}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Filter Zones')}`}
                </Typography>

                <Typography variant='subtitle2' className={styles.headingTwo}>
                  <Checkbox color='secondary' />
                  {`${t('Remove Zone Hierarchy')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={styles.boxOneArea}>
              <Grid item xs={12} md={3}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Site Zones')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select
                      size='small'
                      value={categoryLevelOne}
                      MenuProps={MenuProps}
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={0}>None</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Primary Zones')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='newestOnTop'>Newest on top</MenuItem>
                      <MenuItem value='oldestonTop'>Oldest on top</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Sub-Zone')}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth>
                      <MenuItem value='all'>All</MenuItem>
                      <MenuItem value='postive'>Positive</MenuItem>
                      <MenuItem value='negative'>Negative</MenuItem>
                      <MenuItem value='neutral'>Neutral</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3}>
                <Grid container className={styles.buttonBox}>
                  <Grid item>
                    <Fab color='secondary' variant='extended' size='medium' onClick={notify} className={styles.button2}>
                      <Typography variant='subtitle2' className={styles.boxFont}>
                        +
                      </Typography>
                    </Fab>
                    <ToastContainer closeOnClick autoClose={5000}></ToastContainer>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} className={styles.boxOne}>
                <DataGrid
                  autoHeight
                  columns={columnsZone}
                  rows={rowsZone}
                  pageSize={pageSize}
                  rowsPerPageOptions={[7, 10, 25, 50]}
                  onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card variant='outlined' className={styles.container}>
        <Grid container className={styles.footer}>
          <Grid item xs={12} md={5.9} className={styles.contentBoxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceOne}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Filter Activity')}`}
                </Typography>

                <Typography variant='subtitle2' className={styles.headingTwo}>
                  <Checkbox color='secondary' />
                  {`${t("Include 'Incident Narrative'")}`}
                  <Checkbox defaultChecked color='secondary' />
                  {`${t("Exclude 'Zone Vistits'")}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={styles.boxOneArea}>
              <Grid item xs={12} md={12}>
                <SelectOne
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={names}
                  isSearchable={true}
                  defaultValue={[names[0]]}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5.9} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceTwo}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Filter Device')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.boxOneArea}>
                <Grid item xs={12} md={12}>
                  <SelectOne
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={names}
                    isSearchable={true}
                    defaultValue={[names[0]]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Card variant='outlined' className={styles.container}>
        <Grid container className={styles.footer}>
          <Grid item xs={12} md={5.9} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceTwo}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Filter Security Professional')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.boxOneArea}>
                <Grid item xs={12} md={12}>
                  <SelectOne
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={names}
                    isSearchable={true}
                    defaultValue={[names[0]]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.9} className={styles.contentBoxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceOne}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Filter Workflows')}`}
                </Typography>

                <Typography variant='subtitle2' className={styles.headingTwo}>
                  <Checkbox color='secondary' />
                  {`${t('Show Responses Only')}`}
                  <Checkbox color='secondary' />
                  {`${t('Include Followups')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={styles.boxOneArea}>
              <Grid item xs={12} md={12}>
                <SelectOne
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={names}
                  isSearchable={true}
                  defaultValue={[names[0]]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card variant='outlined' className={styles.container}>
        <Grid container className={styles.footer}>
          <Grid item xs={12} md={5.9} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceThree}>
                <Information />
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.boxOneArea}>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle2' className={styles.heading1}>
                    {`${t(
                      'After updating this report, you will be able to pull CSV or PDF for this . You will also be able to schedule this report.'
                    )}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5.9} className={styles.boxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceTwo}>
                <Typography variant='subtitle' className={styles.heading1}>
                  {`${t('Report Format')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.boxOneArea}>
                <Grid item xs={12} md={12}>
                  <Select size='small' value={filterActivity} MenuProps={MenuProps} fullWidth onChange={handleChange}>
                    <MenuItem value={0}>None</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card variant='outlined' className={styles.container}>
        <Grid container className={styles.footer}>
          <Grid item xs={12} md={5.9} className={styles.contentBoxThree}>
            <Grid container className={styles.boxOneAreaTwo}>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.heading1}>
                  Created At : 12-02-2020 11:19:45, By :Prafull Gupta
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5.9} className={styles.contentBoxThree}>
            <Grid container className={styles.boxOneAreaTwo}>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle2' className={styles.heading1}>
                  Updated At : 07-14-2022 08:37:52 , By : Prafull Gupta
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Card variant='outlined' className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button3}>
              {`${t('Update Report')}`}
            </Fab>
            <Fab color='secondary' variant='extended' size='medium' type='reset' className={styles.button3}>
              {`${t('Cancel')}`}
            </Fab>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default CopyCustomReport
