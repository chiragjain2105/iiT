import React, { useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios';
// import { Button } from '@mui/material';

export default function Buttons({handleClickOpen,handleReset,setInputText}) {
    const [uploadFile,setUploadFile] = useState();


    const handleFileChange = async(e) => {
      
        setUploadFile(e.target.files[0])
       

    }
    const handleUpload= async()=>{
        debugger;
        console.log(uploadFile);
        var fileData = new FormData();
        fileData.append('pdf_file',uploadFile);
        console.log(fileData)
        if(uploadFile){
            try {
                var response = await axios.post('http://localhost:8000/uploadpdf/',fileData,
               
                );
    
                console.log("JAI SHREE RAM",response)
                if(response.data.data){
                   setInputText(response.data.data)
                }
                // alert('ho gya')/
            }
            catch (error){
                console.log("error",error)
            }
        }
        else{
            alert("upload kr le ")
        }
    }
  return (
    <div className='allbutton'>
        <div className="soundpdf">
            <button className='sound' style={{borderRadius:'200px'}}>
                <VolumeUpIcon></VolumeUpIcon>
            </button>
            {/* <input type="file" onChange={handleFileChange}/> */}
            <button  className="pdf" onClick={handleUpload} style={{borderRadius:'200px'}}>
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
