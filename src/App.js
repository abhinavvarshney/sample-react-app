import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Signin from './Pages/Signin';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signin' element ={ <Signin /> } />
        <Route path='/movies' element={ <Movies /> } />
      </Routes>
    </>
  );
}

export default App;
