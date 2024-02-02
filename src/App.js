import React, { useState } from 'react';
import './App.css';
import PayPalBtns from './Components/PayPalBtns';
import Products from './Components/Products';
import Footer from './Components/Footer';
import {BrowserRouter as Router } from 'react-router-dom';
import Routte from './Components/Routte';
import SolarNav from './Components/SolarNav';
import Background from './Components/Background';

const App = () => {
  
  return (
    <>
    <SolarNav/>
    <Background/>
      <Footer/>
    </>
  );
}

export default App;
