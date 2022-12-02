import { Grid } from '@mui/material'
import React from 'react';


// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

import { useAuth } from 'src/hooks/useAuth'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const SamlRedirect = props => {


  const router = useRouter()
  const auth = useAuth();
  
  useEffect(() => {


    // const { url } = router.query
    // if(url){

    //   console.log('url-->', url);
    //   auth.ssoRedirect({ url }, () => {
  
    //   })
  
    // }
    
    // // console.log('url-->', url);
    // async function ssoLogin(ssoURL){

    //   if(ssoURL){
    //     console.log('ssoURL -->', ssoURL);
    //     try {
    //       const res = await fetch(
    //         `${url}`
    //       );
    //       const data = await res.json();
    //       if(data && data.token){
    //        auth.ssoRedirect(data)

    //       }
    //       console.log(data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   } 
   
    // }

    // ssoLogin(url); 
  }, [router, auth])



  return (
    <Grid container >
      <Grid item xs={12} md={6}>
          hi
      </Grid>

    </Grid>
  )
}
SamlRedirect.guestGuard = true
SamlRedirect.getLayout = page => <BlankLayout>{page}</BlankLayout>


export default SamlRedirect
