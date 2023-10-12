import React, { useState } from 'react'
import Buttons from './Buttons'
import Blog from './Blog'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Body({inputText,setInputText,handleReset}) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    // const [inputText,setInputText] = useState('');
    
    const handleClickOpen = () => {
        debugger;
        // Define the data you want to send in the POST request
        const postData = {
            inputData:inputText
        };
        
        // Send the POST request
        axios.post('http://localhost:8000/api/endpoint', postData)
            .then(response => {
            console.log('POST request response:', response.data);
            })
            .catch(error => {
            console.error('POST request error:', error);
            });
        
        if (inputText)
        setOpen(true);
        else
        alert("Please enter the blog")
        
    };
    // const handleReset = () => {
    //     setInputText('');
    // }
    const handleClose = () => {
        setOpen(false);
    };

    const handleProceed = () => {
        navigate("/askQues")
     
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Your input has been abducted by our data-loving aliens"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Click Proceed to Ask Questions....
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={handleClose}>Cancel</Button>
                    <Button color='success' onClick={handleProceed}>Proceed</Button>
                </DialogActions>
            </Dialog>

            <div className='blogbutton'>
                <div className="blog">
                    <Blog inputText={inputText} setInputText={setInputText}></Blog>
                </div>
                <div className="buttons">
                    <Buttons handleClickOpen={handleClickOpen} handleReset={handleReset} setInputText={setInputText}></Buttons>
                </div>
            </div>
        </div>
    )
}

export default Body
