import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter , Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import './App.css';

import NavBar from './components/navBar';
import AnimatedRoutes from './components/animatedRoutes.jsx'

const App = () => {

  return (
    <div className='main'>
    
      <HashRouter>
        <NavBar />
        <AnimatedRoutes/>
        {/* <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      </HashRouter>
    </div>
  );
};

export default App;

