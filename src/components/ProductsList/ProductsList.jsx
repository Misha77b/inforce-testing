import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../API/products/products.thunks'
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import Button from '@mui/material/Button';

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsReducer.products);
  
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  console.log(products);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <ProductCard 
        products={products}
      />
    </div>
  )
}

export default ProductsList