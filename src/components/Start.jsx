import { Stack, Typography } from '@mui/material'
import React from 'react'

import { Link, Outlet } from 'react-router-dom'


function Start() {
  return (
    <Stack  sx={{border:"2px solid grey", padding:"5px", width:"40%", margin:"auto" }}>
          {/* <Typography variant='h3'>Login</Typography>
          <Typography variant='h3'>Register</Typography> */}
          <Stack direction={"row"}  sx={{ justifyContent:"center" }} >
          <Link to={"login"}>Login &nbsp;||&nbsp;</Link>
          
          <Link to={ "register"}>Register</Link>
          </Stack>
            
     
       <Outlet/>
   
    </Stack>
  )
}

export default Start
