import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home'
import Navbar from './containers/Navbar/Navbar';
import Wallet from './containers/Wallet/Wallet';
import Details from './containers/Details/Details';

import './App.css'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/details" element={<Details />} />De
      </Routes>
    </>
  )
}

export default App