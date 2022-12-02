import Modal from '@mui/material/Modal'
import { Close } from 'mdi-material-ui/'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import Divider from '@mui/material/Divider'
import styles from '../../../../../styles/copyDistribution.module.css'
import React, { useState } from 'react'
import { TextField, Grid, Paper, Radio } from '@mui/material'
import { useTranslation } from 'react-i18next'

const CopyDistribution = ({ openEditTwo, setOpenEditTwo, handleEditClickOpenTwo, handleEditCloseTwo }) => {
  const { t } = useTranslation()
  const [selectedValue, setSelectedValue] = useState('searchSiteContacts')

  const handleChangeTwo = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Modal open={openEditTwo} onClose={handleEditCloseTwo}>
        <Paper className={styles.modal} variant='outlined'>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12} className={styles.header}>
              <Typography variant='h5' className={styles.heading}>
                {`${t('Copy Distribution To Following Contacts (From : amit.banerjee@aus.com)')}`}
              </Typography>
              <Close onClick={handleEditCloseTwo} className={styles.icon} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography variant='subtitle2' className={styles.headingFive}>
                    <Radio
                      color='secondary'
                      value='searchSiteContacts'
                      checked={selectedValue === 'searchSiteContacts'}
                      onChange={handleChangeTwo}
                    />
                    {`${t('Search Site Contacts')}`}
                    <Radio
                      color='secondary'
                      value='searchAllContacts'
                      checked={selectedValue === 'searchAllContacts'}
                      onChange={handleChangeTwo}
                    />{' '}
                    {`${t('Search All Contacts')}`}
                  </Typography>
                  <TextField
                    type='text'
                    fullWidth
                    size='small'
                    placeholder={
                      selectedValue === 'searchSiteContacts'
                        ? `${t('Search All Contacts')}`
                        : `${t('Enter Email Address')}`
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12} className={styles.footer}>
              <Fab color='secondary' variant='extended' size='medium' type='submit' className={styles.button2}>
                {`${t('Submit')}`}
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  )
}

export default CopyDistribution
