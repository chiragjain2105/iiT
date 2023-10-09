
import { Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function AskQuestion({ inputText }) {
  const [Text,setText] = useState('');
  const [ans,setAns] = useState(false);
  const handleReset = () => {
      setText('');
      setAns(false);
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
     

        <TextField color='success' size='medium' fullWidth label="Ask Questions..." sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center'}} value={Text} onChange={(e)=>setText(e.target.value)} />

        <Stack spacing={2} direction="row-reverse">
          <button style={{width:'100px'}} onClick={handleReset} >Reset</button>
          <button style={{width:'100px'}} onClick={()=>setAns(true)}>Ask</button>
        </Stack>
        {ans&&  <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>HELLO ELON MUSK KAUN HAI</Typography>}
       
      
    </Stack>
  )
}

export default AskQuestion
