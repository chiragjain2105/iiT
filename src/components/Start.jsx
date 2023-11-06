// import React from 'react'
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';



// function Start() {
//   const [open, setOpen] = React.useState(true);
//   const [scroll, setScroll] = React.useState('paper');

//   // const handleClickOpen = (scrollType) => () => {
//   //   setOpen(true);
//   //   setScroll(scrollType);
//   // };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);
//   return (
//     <>
    
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         scroll={scroll}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >
//         <DialogTitle id="scroll-dialog-title">Select</DialogTitle>
//         <DialogContent dividers={scroll === 'paper'}>
//           <DialogContentText
//             id="scroll-dialog-description"
//             ref={descriptionElementRef}
//             tabIndex={-1}
//           >
          


//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   )
// }

// export default Start





/////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

function Start() {
  const [open, setOpen] = useState(true);
const navigate =useNavigate()  

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (item) => {
   console.log(item)
   if(item===1)
   navigate("/iit")
  else
  navigate("/docs")
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" textAlign={"center"}>Select</DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description">
            <List>
              {[
                { id: 1, text: 'why I am here  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate maxime ipsam nostrum. Velit tempore aperiam obcaecati saepe dignissimos eum expedita necessitatibus quis placeat. Accusamus excepturi iste ea velit similique nulla quia aperiam atque quis dolore! ', image: 'src/text.png' },
                { id: 2, text: 'why I am like this  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate maxime ipsam nostrum. Velit tempore aperiam obcaecati saepe dignissimos eum expedita necessitatibus quis placeat. Necessitatibus amet ad nesciunt perferendis aliquam eum adipisci a corporis debitis facere sint officiis officia ducimus, magnam ', image: 'src/doc.png' },
              ].map((item, index) => (
                <>
                <ListItem
                  key={item.id}
                  sx={{cursor:'pointer'}}
                  onClick={() => handleListItemClick(item.id)}
                >
                  {/* <Checkbox
                    edge="start"
                    checked={selectedItems.includes(item)}
                    tabIndex={-1}
                    disableRipple
                    color="secondary"
                  /> */}
                  <ListItemText sx={{ textAlign: "justify", marginRight: "15px" }} secondary={item.text} />
                  <img src={item.image} alt={"error loading"} style={{ width: '90px' }} />
                </ListItem>
                  {index < 1 && <Divider variant="fullWidth" component="li" />}
                  </>
              ))}
            </List>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel </Button>
          <Button
            onClick={() => {
              // Navigate to another page with selected items
              // You can use the selectedItems array here to pass the selected items to the next page.
            }}
          >
            Proceed
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default Start;
