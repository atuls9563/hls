import { Grid } from '@mui/material'
import React from 'react'
import UserViewLeft from './userViewLeft'
import UserViewRight from './userViewRight'

const index = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <UserViewLeft />
        </Grid>
        <Grid item xs={12} md={8}>
          <UserViewRight />
        </Grid>
      </Grid>
    </div>
  )
}

export default index
