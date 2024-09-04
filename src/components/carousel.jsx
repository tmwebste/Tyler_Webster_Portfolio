import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import { useSwipeable } from 'react-swipeable';
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

  return (
    <div className="card-carousel">
      {svgs.map((svg, index) => (
        <div key={index} className="card">
          <img src={svg} alt={`SVG ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
