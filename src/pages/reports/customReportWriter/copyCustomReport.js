import Typography from '@mui/material/Typography'
import styles from '../../../../styles/copyCustomReport.module.css'
import React, { useState } from 'react'
import { Card, Grid } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import Checkbox from '@mui/material/Checkbox'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from '@mui/material/styles'
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
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)

  const theme = useTheme()

  const [filterActivity, setFilterActivity] = useState([])

  const [categoryLevelOne, setCategoryLevelOne] = useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event

    setFilterActivity(typeof value === 'string' ? value.split(',') : value)
  }

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

  const animatedComponents = makeAnimated()
  const names = [{ id: 2, value: 'red', label: 'Red' }]

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
        <Link href='/reports/customReportWriter/copyCustomReport'>
          <Typography variant='subtitle' className={styles.link}>
            {`${t('Copy Custom Report')}`}
          </Typography>
        </Link>
      </Breadcrumbs>
      <Card variant='outlined' className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant='h5' className={styles.topHeading}>
              {`${t('COPY CUSTOM REPORT')}`}
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
            </Grid>

            <Grid container className={styles.boxOneArea}>
              <Grid item xs={12} md={3.9}>
                <Grid container className={styles.spaceTwo}>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Report Title')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant='subtitle2' className={styles.headingBox}>
                      {`${t('Copy of Report 1')}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3.9} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Choose Date Range')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='30minutes'>30 Minutes</MenuItem>
                      <MenuItem value='last1Hour'>Last 1 Hour</MenuItem>
                      <MenuItem value='last12Hours'>Last 12 Hours</MenuItem>
                      <MenuItem value='weekly'>Last 24 Hours</MenuItem>
                      <MenuItem value='last7days'>Last 7 days</MenuItem>
                      <MenuItem value='last30Days'>Last 30 Days</MenuItem>
                      <MenuItem value='shiftWise'>Shift Wise</MenuItem>
                      <MenuItem value='customDate'>Custom Date</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3.9} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Select Shift')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth className={styles.select}>
                      <MenuItem value='SelectType'>Select Type</MenuItem>
                      <MenuItem value='testShift1'>Test Shift1</MenuItem>
                      <MenuItem value='testShift2'>Test Shift2</MenuItem>
                      <MenuItem value='testShift3'>Test Shift3</MenuItem>
                      <MenuItem value='devTestShift'>Dev Test Shift</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Card variant='outlined' className={styles.container}>
        <Grid item xs={12} md={12} className={styles.boxOne}>
          <Grid container>
            <Grid item xs={12} md={12} className={styles.space}>
              <Typography variant='subtitle' className={styles.heading1}>
                {`${t('Select Options')}`}
              </Typography>
            </Grid>

            <Grid container className={styles.boxOneArea}>
              <Grid item xs={12} md={1.5} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Format')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='defaultBlack'>Default(Black)</MenuItem>
                      <MenuItem value='colorCodedActivity'>Color Coded Activity</MenuItem>
                      <MenuItem value='colorCodedEffects'>Color Coded Effects</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={2.2} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Date/Time sort order')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' className={styles.select} fullWidth>
                      <MenuItem value='newestOnTop'>Newest on top</MenuItem>
                      <MenuItem value='oldestonTop'>Oldest on top</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={1.5} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Effects')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth className={styles.select}>
                      <MenuItem value='all'>All</MenuItem>
                      <MenuItem value='postive'>Positive</MenuItem>
                      <MenuItem value='negative'>Negative</MenuItem>
                      <MenuItem value='neutral'>Neutral</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={3.3} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Bottom Summary')}`} <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth className={styles.select}>
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

              <Grid item xs={12} md={1.5} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Group By')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth className={styles.select}>
                      <MenuItem value='none'>None</MenuItem>
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

              <Grid item xs={12} md={1.5} className={styles.spaceTwo}>
                <Grid container>
                  <Grid item xs={12} md={12} className={styles.text}>
                    <Typography variant='subtitle2' className={styles.headingTwo}>
                      {`${t('Images')}`}
                      <span className={styles.aster}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Select size='small' fullWidth className={styles.select}>
                      <MenuItem value='none'>None</MenuItem>
                      <MenuItem value='thumbnail'>Thumbnail</MenuItem>
                      <MenuItem value='thumbnailandLarge'>Thumbnail & Large</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card variant='outlined' className={styles.container}>
        <Grid item xs={12} md={12} className={styles.boxOne}>
          <Grid container>
            <Grid item xs={12} md={12} className={styles.space}>
              <Typography variant='subtitle' className={styles.heading1}>
                {`${t('Filter Categories')}`}
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={styles.boxOneArea}>
            <Grid item xs={12} md={3}>
              <Grid container className={styles.spaceTwo}>
                <Grid item xs={12} md={12}>
                  <Typography variant='subtitle2' className={styles.headingTwo}>
                    {`${t('Category Level 1')}`} <span className={styles.aster}>*</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Select
                    size='small'
                    multiple
                    value={categoryLevelOne}
                    MenuProps={MenuProps}
                    fullWidth
                    className={styles.select}
                    onChange={handleChange}
                  >
                    <MenuItem value='none'>None</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid container className={styles.spaceTwo}>
                <Grid item xs={12} md={12} className={styles.text}>
                  <Typography variant='subtitle2' className={styles.headingTwo}>
                    {`${t('Category Level 2')}`}
                    <span className={styles.aster}>*</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Select size='small' className={styles.select} fullWidth>
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
                    {`${t('Category Level 3')}`} <span className={styles.aster}>*</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Select size='small' fullWidth className={styles.select}>
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
                  <Fab color='secondary' variant='extended' size='medium' className={styles.button2} onClick={notify}>
                    <Typography variant='subtitle2' className={styles.boxFont}>
                      +
                    </Typography>
                  </Fab>
                  <ToastContainer closeOnClick autoClose={5000}></ToastContainer>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} className={styles.table}>
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
      </Card>

      <Card variant='outlined' className={styles.container}>
        <Grid container className={styles.footer}>
          <Grid item xs={12} md={5.9} className={styles.contentBoxOne}>
            <Grid container>
              <Grid item xs={12} md={12} className={styles.contentBoxSpaceOne}>
                <Typography variant='subtitle' className={styles.headingTwo}>
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

            <Grid container className={styles.headingBox}>
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
              <Grid item xs={12} md={12} className={styles.headingBox}>
                <Typography variant='subtitle' className={styles.headingTwo}>
                  {`${t('Filter Device')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.headingBox}>
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
              <Grid item xs={12} md={12} className={styles.headingBox}>
                <Typography variant='subtitle' className={styles.headingTwo}>
                  {`${t('Filter Security Professional')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.headingBox}>
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
                <Typography variant='subtitle' className={styles.headingTwo}>
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

            <Grid container className={styles.headingBox}>
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
              <Grid container className={styles.headingBox}>
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
              <Grid item xs={12} md={12} className={styles.headingBox}>
                <Typography variant='subtitle2' className={styles.headingTwo}>
                  {`${t('Report Format')}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container className={styles.headingBox}>
                <Grid item xs={12} md={12}>
                  <Select
                    size='small'
                    value={filterActivity}
                    MenuProps={MenuProps}
                    fullWidth
                    className={styles.select}
                    onChange={handleChange}
                  >
                    <MenuItem value='none'>None</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card variant='outlined' className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button3}>
              {`${t('Save Report')}`}
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
