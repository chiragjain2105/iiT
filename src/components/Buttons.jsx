import React from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
// import axios from 'axios';
// import { Button } from '@mui/material';

export default function Buttons({handleClickOpen,handleReset}) {

  return (
    <div className='allbutton'>
        <div className="soundpdf">
            <button className='sound' style={{borderRadius:'200px'}}>
                <VolumeUpIcon></VolumeUpIcon>
            </button>
            <button  className="pdf" style={{borderRadius:'200px'}}>
                <FileUploadIcon></FileUploadIcon>
            </button>
        </div>
        <div className="submit" style={{width:'100%', margin: '5px 0'}}>
            <button className="sbmt" onClick={handleClickOpen} style={{width:'100%'}}>Submit</button>
        </div>
        <div className="reset" style={{width:'100%'}}>
            <button className="rst" onClick={handleReset} style={{width:'100%'}}>Reset</button>
        </div>
    </div>
  )
}
