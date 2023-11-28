import React from 'react'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Grid, IconButton, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Header({setAuthToken}) {
  const navigate=useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("currentpath",currentPath)


const handleLogout=()=>{
  navigate('/', { replace: true });
  setAuthToken(false)

}


  return (
    <Grid container className='header' style={{display:'flex', justifyContent:'space-between', margin:"0"}}>
        <Grid item xs={11.5} style={{width:'100%',margin:'auto'}}>
            <span style={{fontWeight:"bold", fontSize:"60px", fontFamily:"fantasy"}}>iiT&nbsp;</span>
            <span style={{fontFamily:"cursive"}}>powered by ChatGPT</span>
        </Grid>
        {/* <div className="logsign" style={{display:'flex', alignItems:'center', width:'14%', justifyContent: 'space-evenly'}}>
            <Button className="login" variant='outlined' color='success' style={{borderRadius:'5px', color:'#10a37f'}}><VpnKeyIcon></VpnKeyIcon></Button>
            <Button className="signup" variant='outlined' color='success'  style={{borderRadius:'5px', color:'#10a37f'}}><LoginIcon></LoginIcon></Button>
        </div> */}

        {currentPath==="/"||currentPath==="/register"?null:
        <Grid item xs={.5} className="logout" sx={{display:"flex",justifyContent:"center"}} >
          <Tooltip title="Logout">
          <IconButton onClick={handleLogout}  >
            <LogoutTwoToneIcon color='error' />
          </IconButton>
          </Tooltip>
        </Grid>}
        
    </Grid>
  )
}
