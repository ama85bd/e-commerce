import React from 'react';

function HomePage() {
  return (
    <div className='header'>
      <div className='logo-box'>
        <img src='../assets/logo-white.png' alt='Logo' className='logo' />
      </div>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>E-commerce</span>
          <span className='heading-primary-sub'>is where life happens</span>
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
