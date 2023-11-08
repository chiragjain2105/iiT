
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function AskQuestion({ inputText, showicon }) {
  // for like and dislike animation
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [data,setData]=useState("")

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = async() => {
    setOpen(true);
    debugger
    try {
      var response = await axios.get('http://localhost:8000/pdf_sources/')
      console.log(response)
     
      if(response.data){
        console.log("response",response.data)
        setData(response.data)
      }
     
    }
    catch(error) {
      console.error('GET error:', error);
    }

  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLikeClick = () => {
    setLikeClicked(true);
  };

  const handleDislikeClick = () => {
    setDislikeClicked(true);
  };

  const handleupdown = () => {
    debugger
    setTimeout(function () {
      setClicked(true);
    }, 1000);

  }

  const [text, setText] = useState('');
  const [ans, setAns] = useState(" ");
  const handleReset = () => {
    setText('');
    setAns("");
  }
  const handleAskQestion = async () => {
    setLoading(true)
    debugger;
    //testing like and dislike button
    // alert("ask is clicked")
    setProgress(progress + 70)

    // setAns("Testing Buttons Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam nulla, impedit non et ut? Dolores quia unde nihil commodi consequatur laboriosam beatae ipsam cupiditate nisi quos quae quo neque itaque, suscipit voluptate amet dolor magnam illum doloribus aut vero.")


    //////
    //Define the data you want to send in the POST request
    const postData = {
      question:text
    };

    try {
      var response = await axios.post('http://localhost:8000/api/question', postData)
      console.log(response)
      if(response.data){
        setAns(response.data.result)
    setProgress(100)
    setLoading(false)
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
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* trying new loading code */}

      {/* <Stack direction={"row"} spacing={0.5} justifyContent={"center"}>
            <div className='loading' style={{width:"10px",height:"10px" ,borderRadius:"5px" }}></div>
            <div className='loading1' style={{width:"10px",height:"10px" ,borderRadius:"5px" }}></div>
            <div className='loading2' style={{width:"10px",height:"10px" ,borderRadius:"5px" }}></div>
          </Stack> */}


      {/* end */}

     




      <Stack spacing={2} className='blogText' sx={{ marginTop: "34px" }}>


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

        {loading== true? <>
        <Stack direction={"row"} spacing={0.5} justifyContent={"center"}>
            <div className='loading' style={{width:"10px",height:"10px" ,borderRadius:"5px" }}></div>
            <div className='loading1' style={{width:"10px",height:"10px" ,borderRadius:"5px" }}></div>
            <div className='loading2' style={{width:"10px",height:"10px" ,borderRadius:"5px" }}></div>
          </Stack>
      </>:
      <>
       {(ans != "") ? <>    <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>{ans}</Typography>
          {ans != " " && <>
            <Stack direction={"row"} spacing={0} sx={{ justifyContent: "center", alignItems: "center" }}>
              {(clicked != true) ? <>
                <Typography variant='caption' sx={{ color: 'gray', fontFamily: 'cursive' }}>Is this answer helpful so far?</Typography>
                <button style={{ border: "none", background: "none" }} className={`like-button ${likeClicked ? 'clicked' : ''}`}
                  onClick={handleLikeClick}><IconButton onClick={handleupdown}><ThumbUpTwoToneIcon /></IconButton></button>
                <button className={`dislike-button ${dislikeClicked ? 'clicked' : ''}`}
                  onClick={handleDislikeClick} style={{ border: "none", background: "none" }}><IconButton onClick={handleupdown}><ThumbDownTwoToneIcon /></IconButton></button>
              </> :
                <Typography variant='overline' fontFamily={"cursive"} className='animated-element '>thanks for feedback!!!</Typography>
              }


              {showicon && <button style={{ border: "none", background: "none" }}><IconButton  onClick={handleClickOpen}><InfoTwoToneIcon /></IconButton> </button>}


            </Stack>
          </>}
        </> : null}
      
      </>}



       




        {/* {(ans != "") ? <>    <Typography variant='body1' sx={{ color: 'gray', fontFamily: 'cursive' }}>{ans}</Typography>
        {ans != " " && <Stack direction={"row"} spacing={0} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant='caption' sx={{ color: 'gray', fontFamily: 'cursive' }}>Is this answer helpful so far?</Typography>
          <button style={{ border: "none", background: "none" }} className={`like-button ${likeClicked ? 'clicked' : ''}`}
            onClick={handleLikeClick}><IconButton onClick={handleupdown}><ThumbUpTwoToneIcon /></IconButton></button>
          <button className={`dislike-button ${dislikeClicked ? 'clicked' : ''}`}
            onClick={handleDislikeClick} style={{ border: "none", background: "none" }}><IconButton onClick={handleupdown}><ThumbDownTwoToneIcon /></IconButton></button>

          {showicon && <button style={{ border: "none", background: "none" }}><IconButton><InfoTwoToneIcon /></IconButton> </button>}


        </Stack>}
      </> : null} */}



      </Stack>




      {/* dialog code for info */}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontFamily:"cursive",backgroundColor:"black", color:"white"  }} id="customized-dialog-title">
          This Knowledge Nugget Has Been Mined From
        </DialogTitle>
        {/* <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent dividers>
          <Typography gutterBottom fontFamily={"cursive"}>
          Pdf : {data.pdf}
          </Typography>
          <Typography gutterBottom fontFamily={"cursive"}>
         Page : {data.page}
          </Typography>
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>


    </>
  )
}

export default AskQuestion
