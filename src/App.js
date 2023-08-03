import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Component2 from './Component2'
import { Accordion } from '@mui/material';
import Accordions from './Accordion';
import Nav from './Nav';
import { Popup } from './Popup';
import Test from './test';


export default function SimpleBackdrop() {
  
  const [open, setOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setIsActive(!isActive)
    // setOpen(false);
  }

  return (
    <div>
       <Button onClick={handleOpen} sx={{color:'#9F77EB'}}>Documents</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        {/* <Popup />   */}
        <Test/>
        {/* <Component2 handleClose={handleClose} isActive={isActive}/> */}
      </Backdrop> 
      <Nav/>  
    </div>
  );
}