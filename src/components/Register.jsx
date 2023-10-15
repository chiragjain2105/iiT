import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState("")
    const [userpassword, setUserpassword] = useState("")
    const [cpassword, setCpassword] = useState("")
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
        <Stack spacing={2}  sx={{border:"2px solid grey", padding:"5px", width:"40%", margin:"auto" }}>
            {/* <TextField color='success' size='medium' fullWidth label="Ask Questions..." sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={text} onChange={(e)=>setText(e.target.value)} /> */}
            <TextField color='success' size='medium' type='text' label="userName" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextField color='success' size='medium' type='password' label="userPassword" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
            <TextField color='success' size='medium' type='password' label="confirmPassword" sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
            <Button type='submit' onClick={handleRegister}>Register</Button>
        </Stack>
    )
}

export default Register
