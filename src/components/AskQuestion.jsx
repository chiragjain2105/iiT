
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import React, { useState } from 'react'
import axios from 'axios';

function AskQuestion({ inputText,showicon }) {
  // for like and dislike animation
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleLikeClick = () => {
    setLikeClicked(!likeClicked);
  };

  const handleDislikeClick = () => {
    setDislikeClicked(!dislikeClicked);
  };

  const handleupdown =()=>{
    setClicked(true);
  }

  const [text, setText] = useState('');
  const [ans, setAns] = useState(" ");
  const handleReset = () => {
    setText('');
    setAns("");
  }
  const handleAskQestion = async () => {

    debugger;
    //testing like and dislike button
    // alert("ask is clicked")
    // setAns("Testing Buttons Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam nulla, impedit non et ut? Dolores quia unde nihil commodi consequatur laboriosam beatae ipsam cupiditate nisi quos quae quo neque itaque, suscipit voluptate amet dolor magnam illum doloribus aut vero.")


    //////
   // Define the data you want to send in the POST request
    const postData = {
      question:text
    };

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
    <Stack spacing={2} className='blogText' sx={{marginTop:"34px"}}>
      <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }} style={blogStyle}>{inputText}</Typography>
      {/* <Typography variant='h3' sx={{color:'black', fontFamily:'cursive', textAlign:'center', margin:'10px 0'}} >Ask Questions...</Typography> */}


      <TextField color='success' size='medium' fullWidth label="Ask Questions..." sx={{ color: 'black', fontFamily: 'cursive', textAlign: 'center' }} value={text} onChange={(e) => setText(e.target.value)} />

      <Stack spacing={2} direction="row-reverse">
        <button style={{ width: '100px' }} onClick={handleReset} >Reset</button>
        <button style={{ width: '100px' }} onClick={handleAskQestion}>Ask</button>
      </Stack>
      {/* main */}
      {/* {(ans!="")&&  <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>{ans}</Typography>} */}
      {/* testing */}
{/* {clicked!=true ?<> {(ans != "") ? <>    <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>{ans}</Typography>
      {ans !=" " && <Stack direction={"row"} spacing={0} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant='caption' sx={{ color: 'gray', fontFamily: 'cursive' }}>Is this answer helpful so far?</Typography>
          <button style={{ border: "none", background: "none" }} className={`like-button ${likeClicked ? 'clicked' : ''}`}
            onClick={handleLikeClick}><IconButton onClick={handleupdown}><ThumbUpTwoToneIcon /></IconButton></button>
          <button className={`dislike-button ${dislikeClicked ? 'clicked' : ''}`}
            onClick={handleDislikeClick} style={{ border: "none", background: "none" }}><IconButton onClick={handleupdown}><ThumbDownTwoToneIcon /></IconButton></button>

{showicon&& <button style={{ border: "none", background: "none" }}><IconButton><InfoTwoToneIcon /></IconButton> </button>}
          

        </Stack>}
        </> : null}</>:
        <Typography fontFamily={"cursive"}>thanks for feedback!!!</Typography>
        } */}

      {(ans != "") ? <>    <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>{ans}</Typography>
      {ans !=" " && <Stack direction={"row"} spacing={0} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant='caption' sx={{ color: 'gray', fontFamily: 'cursive' }}>Is this answer helpful so far?</Typography>
          <button style={{ border: "none", background: "none" }} className={`like-button ${likeClicked ? 'clicked' : ''}`}
            onClick={handleLikeClick}><IconButton onClick={handleupdown}><ThumbUpTwoToneIcon /></IconButton></button>
          <button className={`dislike-button ${dislikeClicked ? 'clicked' : ''}`}
            onClick={handleDislikeClick} style={{ border: "none", background: "none" }}><IconButton onClick={handleupdown}><ThumbDownTwoToneIcon /></IconButton></button>

{showicon&& <button style={{ border: "none", background: "none" }}><IconButton><InfoTwoToneIcon /></IconButton> </button>}
          

        </Stack>}
        </> : null}



    </Stack>
  )
}

export default AskQuestion
