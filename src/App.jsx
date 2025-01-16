import React, { useState, useRef, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { gsap } from 'gsap';  // Import GSAP

import NavBar from './components/navBar';
import AnimatedRoutes from './components/animatedRoutes.jsx';

const MouseTracker = () => {
  useEffect(() => {
    let mouseX = 500;
    let mouseY = 500;

    const updateProperties = () => {
      document.body.style.setProperty('--x', `${mouseX + window.scrollX}px`);
      document.body.style.setProperty('--y', `${mouseY + window.scrollY}px`);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateProperties();
    };

    const handleScroll = () => {
      updateProperties();
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

const App = () => {
  const pathRef = useRef(null);


  return (
    <div className='main'>
      <MouseTracker/>
      <div className="cursor">
        <svg width="60" height="60">

          <path
            ref={pathRef}  // Attach the ref to the path element
            fill={'#FAF9F6'}
            d="M44 30C44 26.287 42.525 22.726 39.8995 20.1005C37.274 17.475 33.713 16 30 16C26.287 16 22.726 17.475 20.1005 20.1005C17.475 22.726 16 26.287 16 30C16 33.713 17.475 37.274 20.1005 39.8995C22.726 42.525 26.287 44 30 44C33.713 44 37.274 42.525 39.8995 39.8995C42.525 37.274 44 33.713 44 30Z"  // Initial path (circle)
          />
        </svg>
      </div>

      <HashRouter>
        <NavBar />
        <AnimatedRoutes />
      </HashRouter>
    </div>
  );
};

export default App;
