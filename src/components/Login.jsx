// import { Button, Stack, TextField, Typography } from '@mui/material'
// import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
// import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
// import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
// import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import axios from 'axios'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Login({ handleLogin, userpassword, username, setUserpassword, setUsername }) {
//   // const [username,setUsername]=useState("")
//   // const [userpassword,setUserpassword]=useState("")
//   // const handleLogin =async()=>{
//   //     // alert("Login ho gya")
//   //     debugger
//   //     const postData ={
//   //         username:username,
//   //         password:userpassword
//   //     }
//   //     try {
//   //         var response = await axios.post('http://localhost:8000/login', postData)
//   //         console.log(response)
//   //         if(response.data){

//   //         }
//   //       }
//   //       catch(error) {
//   //         console.error('POST request error:', error);
//   //       }
//   // }


//   //password visibility code
//   const [showPassword, setShowPassword] = useState(true)
//   const handleClickShowPassword = () => setShowPassword(!showPassword);

//   return (
//     // main code



//     //   <Stack spacing={2}  sx={{border:"2px solid grey", padding:"45px", width:"40%", margin:"auto"  }}>

//     //   <TextField color='success' size='medium' type='text' label="userName" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={username} onChange={(e)=>setUsername(e.target.value)} />
//     //   <TextField color='success' size='medium' type='password'  label="userPassword" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={userpassword} onChange={(e)=>setUserpassword(e.target.value)} />
//     // <Stack direction={"row"}  spacing={2} sx={{justifyContent:"end"}}>
//     //   <Button type='submit' onClick={handleLogin}>Login</Button>
//     //   <Link to="/register">krlo Register</Link>
//     //   </Stack>
//     //   </Stack>
//     ////////////////////////


//     /////2nd main code/////////////

//     // <Stack spacing={2} sx={{ height: "90.25vh", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(189, 181, 181)"}}>
//     //   <Stack spacing={2} sx={{ borderRadius:"10px", backgroundColor: "grey", padding: "45px", width: "35%", alignItems: "center", justifyContent: "center" }}>

//     //     <Stack direction={"row"} spacing={2} alignItems={"center"}>
//     //       <PersonOutlineTwoToneIcon />
//     //       <TextField color='success'  size='medium' type='text' label="userName" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center',  }} value={username} onChange={(e) => setUsername(e.target.value)} />
//     //     </Stack>

//     //     <Stack direction={"row"} spacing={2} alignItems={"center"}>
//     //       <LockOpenTwoToneIcon />
//     //       <TextField color='success' size='medium' type='password' label="userPassword" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
//     //     </Stack>


//     //     <Stack direction={"row"} spacing={2} sx={{ justifyContent: "end" }}>
//     //       <Button variant='contained' type='submit' onClick={handleLogin}>Login</Button>

//     //     </Stack>
//     //   </Stack>
//     //   <Typography>Don't you have an Account?</Typography>
//     //   <Link to="/register">Register</Link>
//     // </Stack>

//     ////////////////

//     <Stack spacing={2} sx={{ height: "90.25vh", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(189, 181, 181)" }}>
//       <Stack spacing={2} sx={{ border: "3px solid black", borderRadius: "0px", backgroundColor: "white", padding: "45px", width: "25%", height: "60%", alignItems: "center", justifyContent: "center" }}>

//         <img src="src\gpt_logo.jpg" alt="logo" width={"40px"} height={"40px"} />
//         <Typography sx={{ fontFamily: "cursive" }}>Log in to iiT powered by chatGPT</Typography>

//         <Stack spacing={2}>

//         <Stack direction={"row"} spacing={2} alignItems={"center"} >
//           <PersonOutlineTwoToneIcon />
//           <TextField color='success' size='medium' type='text' fullWidth  label="userName" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center', }} value={username} onChange={(e) => setUsername(e.target.value)} />
//         </Stack>

//         <Stack direction={"row"} spacing={2} alignItems={"center"}>
//           <LockOpenTwoToneIcon />
//           <TextField color='success' size='medium'  label="userPassword" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center',  }} value={userpassword} onChange={(e) => setUserpassword(e.target.value)}
//             InputProps={{
//               endAdornment: <InputAdornment position="end">
//                   <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   // onMouseDown={handleMouseDownPassword}
//                   // edge="end"
//                 >
//                 {showPassword ? <VisibilityOffTwoToneIcon /> : <VisibilityTwoToneIcon />}
//                 </IconButton>
//               </InputAdornment>,
//             }}
//             type={showPassword ? "password" : "text"}
//           />
//         </Stack>
//         </Stack>

//         <Stack direction={"row"} spacing={2} sx={{ justifyContent: "end" }}>
//           <Button variant='contained' type='submit' onClick={handleLogin}>Login</Button>

//         </Stack>
//         <Typography >Don't you have an Account?</Typography>
//         <Link to="/register">Register</Link>
//         <Stack direction={"row"} justifyContent={"space-around"} width={"100%"} sx={{ marginTop: "20px" }}>

//           <img src="src\git.png" alt="logo" width={"40px"} height={"40px"} />
//           <img src="src\google.png" alt="logo" width={"40px"} height={"40px"} />
//           <img src="src\apple.png" alt="logo" width={"40px"} height={"40px"} />
//         </Stack>
//       </Stack>

//     </Stack>
//   )
// }

// export default Login








///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////new responsive code////////////////////
import React, { useState } from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Login({ handleLogin, userpassword, username, setUserpassword, setUsername }) {
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Grid
   
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh', backgroundColor: 'rgb(189, 181, 181)' }}
    >
      <Grid
        container
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        xl={3}
        justifyContent="center"
        alignItems="center"
        style={{
          border: '3px solid black',
          borderRadius: 0,
          backgroundColor: 'white',
          padding: '45px',
        }}
      >
        <Stack spacing={2} alignItems={"center"}>
        <Stack spacing={2} alignItems={"center"}>

        <img src="src\gpt_logo.jpg" alt="logo" width={40} height={40} />
        <Typography sx={{ fontFamily: 'cursive' }}>Log in to iiT powered by chatGPT</Typography>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <PersonOutlineTwoToneIcon />
            <TextField
              color="success"
              size="medium"
              type="text"
              fullWidth
              label="userName"
              required
              sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <LockOpenTwoToneIcon />
            <TextField
              color="success"
              size="medium"
              label="userPassword"
              required
              sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }}
              value={userpassword}
              onChange={(e) => setUserpassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOffTwoToneIcon /> : <VisibilityTwoToneIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              type={showPassword ? 'password' : 'text'}
            />
          </Stack>
        </Stack>
        <Stack  spacing={2} sx={{ alignItems:"center" }} width={"100%"}>
          <Button variant="contained" color='success' fullWidth type="submit" onClick={handleLogin}>
            Login
          </Button>
        <Typography>Don't you have an Account?</Typography>
        <Link to="/register">Register</Link>
        </Stack>
        <Stack direction="row" justifyContent="space-around" width={"100%"} sx={{ marginTop: '20px' }}>
          <img src="src\git.png" alt="logo" width={40} height={40} />
          <img src="src\google.png" alt="logo" width={40} height={40} />
          <img src="src\apple.png" alt="logo" width={40} height={40} />
        </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Login;

