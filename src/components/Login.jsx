import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({handleLogin,userpassword,username,setUserpassword,setUsername}) {
    // const [username,setUsername]=useState("")
    // const [userpassword,setUserpassword]=useState("")
    // const handleLogin =async()=>{
    //     // alert("Login ho gya")
    //     debugger
    //     const postData ={
    //         username:username,
    //         password:userpassword
    //     }
    //     try {
    //         var response = await axios.post('http://localhost:8000/login', postData)
    //         console.log(response)
    //         if(response.data){
            
    //         }
    //       }
    //       catch(error) {
    //         console.error('POST request error:', error);
    //       }
    // }
  return (
    <Stack spacing={2}  sx={{border:"2px solid grey", padding:"5px", width:"40%", margin:"auto" }}>
 
    <TextField color='success' size='medium' type='text' label="userName" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={username} onChange={(e)=>setUsername(e.target.value)} />
    <TextField color='success' size='medium' type='password'  label="userPassword" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={userpassword} onChange={(e)=>setUserpassword(e.target.value)} />
  <Stack direction={"row"}  spacing={2} sx={{justifyContent:"end"}}>
    <Button type='submit' onClick={handleLogin}>Login</Button>
    <Link to="/register">krlo Register</Link>
    </Stack>
    </Stack>
  )
}

export default Login
