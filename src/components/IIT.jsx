import React from 'react'
import Header from './Header'
import Blog from './Blog'
import Buttons from './Buttons'
// import InputDialog from './InputDialog'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function IIT() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <Button color='success' onClick={handleClose}>Proceed</Button>
                </DialogActions>
            </Dialog>
            <div className="header">
                <Header></Header>
            </div>

            <div className='blogbutton'>
                <div className="blog">
                    <Blog></Blog>
                </div>
                <div className="buttons">
                    <Buttons handleClickOpen={handleClickOpen}></Buttons>
                </div>
            </div>
            {/* <div>
                <InputDialog></InputDialog>
            </div> */}
        </div>
    )
}

export default IIT
