import React from 'react';
import AdvertisementComponent from './advertisementComponent';
import CenteredAd from './centredAd';
import ProductSection from './productSection';
const Homepage = () => {
  return (
    <div className='bg-light py-2'>
      <AdvertisementComponent />
    < CenteredAd />
    <ProductSection />
    </div>
  );
};

export default Homepage;
