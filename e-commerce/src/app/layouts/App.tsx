import React from 'react';
import FooterPage from '../../features/Footer';
import HomePage from '../../features/HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <HomePage />
      <FooterPage />
    </div>
  );
}

export default App;
