import React from 'react';
import './App.css';
import Logo from './components/Logo'; 
import Nav from './components/Nav'; 
import Routes from './Routes';
import Footer from './components/Footer';


import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
