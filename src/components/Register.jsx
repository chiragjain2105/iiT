// import { Button, Stack, TextField, Typography } from '@mui/material'
// import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
// import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
// import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// function Register() {
//     const [username, setUsername] = useState("")
//     const [userpassword, setUserpassword] = useState("")
//     const [cpassword, setCpassword] = useState("")
//     const navigate = useNavigate()
//     const handleRegister = async () => {
//         // alert("Login ho gya")
//         debugger
//         if (userpassword !== cpassword) {
//             alert("password glt dalta hai maderjaat")
//         }
//         else {
//             const postData = {
//                 username: username,
//                 password: userpassword
//             }
//             try {
//                 var response = await axios.post('http://localhost:8000/register', postData)
//                 console.log(response)
//                 // console.log("check staut",response.data.loginStatus)
//                 if (username !== "" || userpassword !== "" || cpassword !== "") {
//                     navigate("/")
//                 }


//                 else {
//                     alert(" sari details toh br le gandu")
//                 }

//             }
//             catch (error) {
//                 console.error('POST request error:', error);
//             }
//         }

//     }

//     return (
//         // main code///////////
//         // <Stack spacing={2}  sx={{border:"2px solid grey", padding:"5px", width:"40%", margin:"auto" }}>
        
//         //     <TextField color='success' size='medium' type='text' label="userName" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={username} onChange={(e) => setUsername(e.target.value)} />
//         //     <TextField color='success' size='medium' type='password' label="userPassword" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
//         //     <TextField color='success' size='medium' type='password' label="confirmPassword" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
//         //     <Button type='submit' onClick={handleRegister}>Register</Button>
//         // </Stack>

//         //////////////end of main first code/////////

//         /////////new register testing///


//         <Stack spacing={2} sx={{ height: "90.25vh", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(189, 181, 181)" }}>
//         <Stack spacing={2} sx={{border:"3px solid black", borderRadius: "0px", backgroundColor: "white", padding: "45px", width: "25%",height:"60%", alignItems: "center", justifyContent: "center" }}>
  
//           <img src="src\gpt_logo.jpg" alt="logo" width={"40px"} height={"40px"} />
//           <Typography sx={{fontFamily:"cursive"}}>Sign up to iiT powered by chatGPT</Typography>
  
//           <Stack direction={"row"} spacing={2} alignItems={"center"}>
//             <PersonOutlineTwoToneIcon />
//             <TextField color='success' size='medium' type='text' label="userName" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center', }} value={username} onChange={(e) => setUsername(e.target.value)} />
//           </Stack>
  
//           <Stack direction={"row"} spacing={2} alignItems={"center"}>
//             <LockOpenTwoToneIcon />
//             <TextField color='success' size='medium' type='password' label="userPassword" required sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
//           </Stack>

//           <Stack direction={"row"} spacing={2} alignItems={"center"}>
//             <LockTwoToneIcon />
//             <TextField color='success' size='medium' type='password' label="confirmPassword" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
//           </Stack>
  
  
//           <Stack direction={"row"} spacing={2} sx={{ justifyContent: "end" }}>
//             <Button variant='contained' type='submit'  onClick={handleRegister}>Register</Button>
         
//           </Stack>
//           <Typography >Already  have an Account?</Typography>
//         <Link  to="/">Login</Link>
//         <Stack direction={"row"} justifyContent={"space-around"} width={"100%"} sx={{marginTop:"20px"}}>
  
    
//         </Stack>
//         </Stack>
        
//       </Stack>
//     )
// }

// export default Register










///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////new responsive code/////////////////////
// import React, { useState } from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
// import { Button, Stack, TextField, Typography } from '@mui/material'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const navigate = useNavigate()
        const handleRegister = async () => {
            // alert("Login ho gya")
            debugger
            if (userpassword !== cpassword) {
                alert("password glt dalta hai maderjaat")
            }
            else {
                const postData = {
                    username: username,
                    password: userpassword
                }
                try {
                    var response = await axios.post('http://localhost:8000/register', postData)
                    console.log(response)
                    // console.log("check staut",response.data.loginStatus)
                    if (username !== "" || userpassword !== "" || cpassword !== "") {
                        navigate("/")
                    }
    
    
                    else {
                        alert(" sari details toh br le gandu")
                    }
    
                }
                catch (error) {
                    console.error('POST request error:', error);
                }
            }
    
        }
    

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
                <Stack spacing={2} alignItems="center">
                <Stack spacing={2} alignItems="center">
                    <img src="src\gpt_logo.jpg" alt="logo" width={40} height={40} />
                    <Typography sx={{ fontFamily: 'cursive' }}>Sign up to iiT powered by chatGPT</Typography>
                </Stack>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <PersonOutlineTwoToneIcon />
                        <TextField
                            color="success"
                            size="medium"
                            type="text"
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
                            type="password"
                            label="userPassword"
                            required
                            sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }}
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <LockTwoToneIcon />
                        <TextField
                            color="success"
                            size="medium"
                            type="password"
                            label="confirmPassword"
                            sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }}
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                    </Stack>
                </Stack>
                <Stack spacing={2} sx={{ alignItems: "center" }} width={"100%"}>
                    <Button variant="contained" color='success' fullWidth type="submit" onClick={handleRegister}>
                        Register
                    </Button>
                    <Typography>Already have an Account?</Typography>
                    <Link to="/">Login</Link>
                </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Register;
