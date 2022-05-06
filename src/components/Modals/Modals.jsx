import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '90%',
  bgcolor: 'background.paper',
  border: '1px solid #c9c9c9',
  borderRadius: '10px',
  p: 4,
  overflowX: 'hidden',
  ['@media (max-width: 768px)']: {
    width: 300,
  },
  ['@media (max-width: 425px)']: {
    width: 250,
  },
};

const ModalWindow = ({open, handleClose}) => {

  const renderModal = (e) => {
    if(e.target.id === "") {
      return <AddProduct 
        handleClose={handleClose}
      />
    } else {
      return <EditProduct 
        handleClose={handleClose}
        id={e.target.id}
      />
    }
  }
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"  
    >
      <DialogContent scroll='body' sx={style}>
        <Button 
          onClick={handleClose}
          disableRipple={true}
          sx={{
              position: 'absolute',
              color: 'black',
              right: '-10px',
              top: '10px',
              padding: '0'
          }}
        >
          <CloseIcon />
        </Button>
        <div>
          <AddProduct
            handleClose={handleClose}
          />
        </div>
      </DialogContent>
    </Modal>
  );
}

export default ModalWindow

ModalWindow.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
}