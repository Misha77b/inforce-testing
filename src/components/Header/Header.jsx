import React, { useState } from 'react';
import UseStylesHeader from './UseStylesHeader';
import ModalWindow from '../Modals/Modals';
import Button from '@mui/material/Button';

const Header = () => {
  UseStylesHeader()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='header'>
      <Button
        onClick={handleOpen}
        className='header-btn'
        color='secondary' 
        variant='contained'
      >
        Add product
      </Button>
      {open && 
        <ModalWindow
          open={open}
          handleClose={handleClose}
        />
      } 
    </div>
  )
}

export default Header