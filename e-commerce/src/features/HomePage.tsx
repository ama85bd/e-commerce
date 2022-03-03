/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function HomePage() {
  return (
    /*
    BEM -> Bolck Element Modifier
    here  
    1. header is a Bolck
    2. header__logo-box so __logo-box is an element
    3. heading-primary--main so --main is a modifier
    */
    <div className='header'>
      <div className='header__logo-box'>
        <img
          src='../assets/logo-white.png'
          alt='Logo'
          className='header__logo'
        />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>E-commerce</span>
          <span className='heading-primary--sub'>is where life happens</span>
        </h1>

        <a href='#' className='btn btn--white btn--animated'>
          Find our product
        </a>
      </div>
    </div>
  );
}

export default HomePage;
