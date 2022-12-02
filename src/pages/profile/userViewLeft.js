import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomChip from 'src/@core/components/mui/chip'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { useTranslation } from 'react-i18next'
import styles from '../../../styles/userViewLeft.module.css'

const statusColors = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const Avatar = styled(CustomAvatar)({
  width: '200px',
  height: '200px'
})

const UserViewLeft = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} md={10}>
          <Card variant='outlined'>
            <Grid item xs={12} md={12} className={styles.avatar}>
              <Avatar alt='message' src='/images/avatars/5.png' />
            </Grid>
            <CardContent>
              <Typography variant='h6'> {`${t('Details')}`}</Typography>
              <Divider className={styles.divider} />
              <Box className={styles.box}>
                <Box className={styles.block}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Username:')}`}
                  </Typography>
                  <Typography variant='body2'>@{data}</Typography>
                </Box>
                <Box className={styles.block}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Email')}`}:
                  </Typography>
                  <Typography variant='body2'>{data}</Typography>
                </Box>
                <Box className={styles.block}>
                  <Typography variant='subtitle2' className={styles.heading}>
                    {`${t('Status')}`} :
                  </Typography>
                  <CustomChip skin='light' size='small' label={data} color={statusColors[data]} />
                </Box>
                <Box className={styles.block}>
                  <Typography className={styles.headingTwo}> {`${t('Role')}`}:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    {data}
                  </Typography>
                </Box>

                <Box className={styles.block}>
                  <Typography className={styles.headingTwo}>{`${t('Contact')}`}:</Typography>
                  <Typography variant='body2'>+1 {data}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserViewLeft
