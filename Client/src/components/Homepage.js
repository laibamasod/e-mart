import React from 'react';
import AdvertisementComponent from './advertisementComponent';
import ProductDetailComponent from './productDetalComponent';

const Homepage = () => {
  return (
    <div className='bg-light py-2'>
      <AdvertisementComponent />
      {/* <ProductDetailComponent /> */}
    </div>
  );
};

export default Homepage;
