import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import UseStylesMain from './UseStylesMain'

const Main = () => {
  UseStylesMain();

  return (
    <div className='main'>
      <ProductsList />
    </div>
  )
}

export default Main