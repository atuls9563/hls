import { Breadcrumbs, Divider, Grid, InputAdornment, Paper, TextField, Typography, Fab } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../../../../styles/distribution.module.css'
import { DataGrid } from '@mui/x-data-grid'
import { Close, Magnify, SquareEditOutline, ContentCopy } from 'mdi-material-ui/'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import AddDistribution from './addDistribution'
import CopyDistribution from './copyDistribution'
import EditDistribution from './editDistributionAAT'
import EditDolphinSoftwares from './editDolphinSoftwares'
import EditDistributionHCA from './editDistributionHCA'
import EditDistributionHTSV1 from './EditDistributionHTSV1'
import EditDistributionHCACTM from './editDistributionHCACTM'
import EditDistributionHTSV2 from './EditDistributionHTSV2'
import EditDistributionHTSV4 from './EditDistributionHTSV4'
import EditDistributionMHEditDistributionMH from './editDistributionMH'
import EditDistributionNO from './editDistributionNO'

const Distribution = () => {
  const { t } = useTranslation()
  const [isNameSortable, setIsNameSortable] = useState(true)
  const [pageSize, setPageSize] = useState(7)
  const [openEdit, setOpenEdit] = useState(false)
  const [openEditTwo, setOpenEditTwo] = useState(false)
  const [openEditThree, setOpenEditThree] = useState(false)
  const [openEditFour, setOpenEditFour] = useState(false)
  const [openEditFive, setOpenEditFive] = useState(false)
  const [openEditSix, setOpenEditSix] = useState(false)
  const [openEditSeven, setOpenEditSeven] = useState(false)
  const [openEditEight, setOpenEditEight] = useState(false)
  const [openEditNine, setOpenEditNine] = useState(false)
  const [openEditTen, setOpenEditTen] = useState(false)
  const [openEditEleven, setOpenEditEleven] = useState(false)

  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClickOpenTwo = () => setOpenEditTwo(true)
  const handleEditClickOpenThree = () => setOpenEditThree(true)
  const handleEditClickOpenFour = () => setOpenEditFour(true)
  const handleEditClickOpenFive = () => setOpenEditFive(true)
  const handleEditClickOpenSix = () => setOpenEditSix(true)
  const handleEditClickOpenSeven = () => setOpenEditSeven(true)
  const handleEditClickOpenEight = () => setOpenEditEight(true)
  const handleEditClickOpenNine = () => setOpenEditNine(true)
  const handleEditClickOpenTen = () => setOpenEditTen(true)
  const handleEditClickOpenEleven = () => setOpenEditEleven(true)

  const handleEditClose = () => setOpenEdit(false)
  const handleEditCloseTwo = () => setOpenEditTwo(false)
  const handleEditCloseThree = () => setOpenEditThree(false)
  const handleEditCloseFour = () => setOpenEditFour(false)
  const handleEditCloseFive = () => setOpenEditFive(false)
  const handleEditCloseSix = () => setOpenEditSix(false)
  const handleEditCloseSeven = () => setOpenEditSeven(false)
  const handleEditCloseEight = () => setOpenEditEight(false)
  const handleEditCloseNine = () => setOpenEditNine(false)
  const handleEditCloseTen = () => setOpenEditTen(false)
  const handleEditCloseEleven = () => setOpenEditEleven(false)

  const columns = [
    {
      flex: 0.01,
      field: 'name',
      headerName: 'Name',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'type',
      headerName: 'Type',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'functions',
      headerName: 'Functions Available',
      minWidth: 80,
      sortable: isNameSortable
    },
    {
      flex: 0.01,
      field: 'categoryFunctions',
      headerName: 'Category Functions Available',
      minWidth: 80,
      sortable: isNameSortable
    },

    {
      flex: 0.01,
      field: 'action',
      headerName: 'Action',
      minWidth: 80,
      sortable: isNameSortable,
      renderCell: props => {
        return (
          <>
            <SquareEditOutline onClick={handleEditClickOpenEleven} />
            <EditDistribution
              openEditThree={openEditThree}
              setOpenEditThree={setOpenEditThree}
              handleEditClickOpenThree={handleEditClickOpenThree}
              handleEditCloseThree={handleEditCloseThree}
            />

            <Close />
            <ContentCopy onClick={handleEditClickOpenTwo} />
            <CopyDistribution
              openEditTwo={openEditTwo}
              setOpenEditTwo={setOpenEditTwo}
              handleEditClickOpenTwo={handleEditClickOpenTwo}
              handleEditCloseTwo={handleEditCloseTwo}
            />
            <EditDolphinSoftwares
              openEditFour={openEditFour}
              setOpenEditFour={setOpenEditFour}
              handleEditClickOpenFour={handleEditClickOpenFour}
              handleEditCloseFour={handleEditCloseFour}
            />

            <EditDistributionHCA
              openEditFive={openEditFive}
              setOpenEditFive={setOpenEditFive}
              handleEditClickOpenFive={handleEditClickOpenFive}
              handleEditCloseFive={handleEditCloseFive}
            />
            <EditDistributionHCACTM
              openEditSix={openEditSix}
              setOpenEditSix={setOpenEditSix}
              handleEditClickOpenSix={handleEditClickOpenSix}
              handleEditCloseSix={handleEditCloseSix}
            />
            <EditDistributionHTSV1
              openEditSeven={openEditSeven}
              setOpenEditSeven={setOpenEditSeven}
              handleEditClickOpenSeven={handleEditClickOpenSeven}
              handleEditCloseSeven={handleEditCloseSeven}
            />
            <EditDistributionHTSV2
            openEditEight={openEditEight}
            setOpenEditEight={setOpenEditEight}
            handleEditClickOpenEight={handleEditClickOpenEight}
            handleEditCloseEight={handleEditCloseEight}/>
            <EditDistributionHTSV4
            openEditNine={openEditNine}
            setOpenEditNine={setOpenEditNine}
            handleEditClickOpenNine={handleEditClickOpenNine}
            handleEditCloseNine={handleEditCloseNine}/>

            <EditDistributionMHEditDistributionMH
            openEditTen={openEditTen}
            setOpenEditTen={setOpenEditTen}
            handleEditClickOpenTen={handleEditClickOpenTen}
            handleEditCloseTen={handleEditCloseTen}/>
            <EditDistributionNO
            openEditEleven={openEditEleven}
            setOpenEditEleven={setOpenEditEleven}
            handleEditClickOpenEleven={handleEditClickOpenEleven}
            handleEditCloseEleven={handleEditCloseEleven}/>
          </>
        )
      }
    }
  ]

  const rows = [
    {
      id: 1
    }
  ]

  return (
    <div>
      <Breadcrumbs className={styles.breadcrumb}>
        <Link href='/home'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Home')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Site Configuration')}`}</Typography>
        </Link>
        <Link href='/siteConfiguration/contacts/distribution'>
          <Typography variant='subtitle' className={styles.link}>{`${t('Distribution')}`}</Typography>
        </Link>
      </Breadcrumbs>
      <Paper variant='outlined'>
        <Grid container className={styles.container}>
          <Grid item xs={12} md={2} className={styles.textField}>
            <Typography variant='h6' className={styles.heading}>
              {`${t('Distribution')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.7}>
            <Fab
              color='secondary'
              variant='extended'
              size='medium'
              type='submit'
              onClick={handleEditClickOpen}
              className={styles.button}
            >
              {`${t('Add Distribution')}`}
            </Fab>
            <AddDistribution
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              handleEditClickOpen={handleEditClickOpen}
              handleEditClose={handleEditClose}
            />
          </Grid>
          <Grid item xs={12} md={12} className={styles.textFieldOne}>
            <Typography variant='subtitle' className={styles.heading}>
              {`${t('Distribution for')}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={styles.search}>
            <TextField
              size='small'
              fullWidth
              placeholder={`${t('Enter Keywords')}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Typography variant='subtitle2' className={styles.heading2}>
                      {`${t('Filter by')}`}
                    </Typography>
                    <Divider orientation='vertical' className={styles.divider3} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Magnify />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} className={styles.table}>
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
      </Paper>
    </div>
  )
}

export default Distribution
