import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import AnimatedRoutes from './components/animatedRoutes'

const App = () => {

  return (
    <div className='main'>
    
      <Router>
        <NavBar />
        <AnimatedRoutes/>
        {/* <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      </Router>
    </div>
  );
};

export default App;

