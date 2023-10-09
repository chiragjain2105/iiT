import React from 'react'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';


export default function Header() {
  return (
    <div className='header' style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'100%',margin:'auto'}}>
            <span style={{fontWeight:"bold", fontSize:"60px", fontFamily:"fantasy"}}>iiT&nbsp;</span>
            <span style={{fontFamily:"cursive"}}>powered by LLM</span>
        </div>
        {/* <div className="logsign" style={{display:'flex', alignItems:'center', width:'14%', justifyContent: 'space-evenly'}}>
            <Button className="login" variant='outlined' color='success' style={{borderRadius:'5px', color:'#10a37f'}}><VpnKeyIcon></VpnKeyIcon></Button>
            <Button className="signup" variant='outlined' color='success'  style={{borderRadius:'5px', color:'#10a37f'}}><LoginIcon></LoginIcon></Button>
        </div> */}
    </div>
  )
}
