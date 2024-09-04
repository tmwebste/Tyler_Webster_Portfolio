import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';
import './carousel.css'; // For the CSS part

const Carousel = () => {
  const svgs = [
    '../assets/mari/e-cn.svg',
    '../assets/mari/e-ps.svg',
    '../assets/mari/e-vl.svg',
    '../assets/mari/tm-ra.svg',
    '../assets/mari/tm-sm.svg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = svgs.length;

  // Function to handle left and right swipes (mobile only)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Swipe handlers for mobile devices
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Media query to detect if the screen width is mobile or not
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Conditionally render based on whether it's mobile or desktop
  return (
    <>
      {isMobile ? (
        // Mobile version (swipeable)
        <div {...handlers} className="card-carousel">
          {svgs.map((svg, index) => (
            <div
              key={index}
              className={`card ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${(0- currentIndex) * 100}%)`,
              }}
            >
              <img src={svg} alt={`SVG ${index}`} />
            </div>
          ))}
        </div>
      ) : (
        // Desktop version (hover interaction)
        <div className="card-carousel">
          {svgs.map((svg, index) => (
            <div key={index} className="card">
              <img src={svg} alt={`SVG ${index}`} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};


export default Carousel;
