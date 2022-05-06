import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteProduct } from '../../API/products/products.thunks';
import { useDispatch } from 'react-redux';
import ModalWindow from '../Modals/Modals';

const useStyles = makeStyles({
    root: {
      width: 345,
      margin: '20px',
    },
    media: {
      height: 150,
      objectFit: 'cover',
    },
    actions: {
      display: 'flex', 
      justifyContent: 'space-around'
    }
  });

const ProductCard = ({products}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(products);

  const handleProductDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteProduct(id));
  }

  return (
    <>
        {products.map((product) => {
          return <div key={product.id}>
            <Card className={classes.root} id={product.id} sx={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
              <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  image={product.imageUrl}
                  title={product.name}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                  </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions className={classes.actions}>
                <Button id={product.id} size="small" color="error" variant='contained' onClick={handleProductDelete}>
                  Delete
                </Button>
                <Button onClick={handleOpen} id={product.id} size="small" color='secondary' variant='contained'>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </div>
        })}
        {open && 
        <ModalWindow
          open={open}
          handleClose={handleClose}
        />
      } 
    </>

  )
}

export default ProductCard

ProductCard.propTypes = {
  products: PropTypes.array,
}