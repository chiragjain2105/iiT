
import { Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

function AskQuestion({ inputText }) {
  const [text,setText] = useState('');
  const [ans,setAns] = useState("");
  const handleReset = () => {
      setText('');
      setAns("");
  }
  const handleAskQestion =async () =>{
   
    debugger;
    // Define the data you want to send in the POST request
    const postData = {
      question:text
    };
    
    // Send the POST request
    // axios.post('http://localhost:8000/api/question', postData)
    //     .then(response => {
    //     console.log('POST request response:', response.data);
    //     })
    //     .catch(error => {
    //     console.error('POST request error:', error);
    //     });

    //     if(response.data){
    //       setAns(response.data.result)
    //     }
    try {
      var response = await axios.post('http://localhost:8000/api/question', postData)
      console.log(response)
      if(response.data){
        setAns(response.data.result)
      }
    }
    catch(error) {
      console.error('POST request error:', error);
    }
  }
  const blogStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4, // Display in two lines
    WebkitBoxOrient: 'vertical',
    maxHeight: '7.2em', // Adjust the height as needed
  };
  return (
    <Stack spacing={2} className='blogText'>
      <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }} style={blogStyle}>{inputText}</Typography>
      {/* <Typography variant='h3' sx={{color:'black', fontFamily:'cursive', textAlign:'center', margin:'10px 0'}} >Ask Questions...</Typography> */}
     

        <TextField color='success' size='medium' fullWidth label="Ask Questions..." sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={text} onChange={(e)=>setText(e.target.value)} />

        <Stack spacing={2} direction="row-reverse">
          <button style={{width:'100px'}} onClick={handleReset} >Reset</button>
          <button style={{width:'100px'}} onClick={handleAskQestion}>Ask</button>
        </Stack>
        {(ans!="")&&  <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>{ans}</Typography>}
       
      
    </Stack>
  )
}

export default AskQuestion
