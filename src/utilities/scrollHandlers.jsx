// scrollHandlers.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring} from "framer-motion";
export const handleScroll = ({
    e,
    animating,
    isScrollLocked,
    scrollDistance,
    currentIndex,
    aboutData,
    setScrollDirection,
    setAnimating,
    setCurrentIndex,
    scrollToIndex,
}) => {
    if (isScrollLocked?.current) return; // Safely check if isScrollLocked is defined

    const direction = e.deltaY > 0 ? "down" : "up";
    if (direction === "down" && currentIndex < aboutData.length - 1) {
        isScrollLocked.current = true;
        setCurrentIndex(currentIndex + 1);
        scrollToIndex(currentIndex + 1);
    } else if (direction === "up" && currentIndex > 0) {
        isScrollLocked.current = true;
        setCurrentIndex(currentIndex - 1);
        scrollToIndex(currentIndex - 1);
    }

    // Unlock scrolling after animation
    setTimeout(() => {
        isScrollLocked.current = false;
    }, 500); // Adjust duration to match animation timing
};


export const handleTouchStart = (e, touchStartY) => {
    touchStartY.current = e.touches[0].clientY; // Record the Y position of the touch start
};


export const handleTouchEnd = ({
    e,
    animating,
    isScrollLocked,
    touchStartY,
    currentIndex,
    aboutData,
    setScrollDirection,
    setAnimating,
    setCurrentIndex,
    scrollToIndex,
}) => {
    if (animating || isScrollLocked.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    const swipeThreshold = 50; // Minimum swipe distance to register
    if (Math.abs(deltaY) > swipeThreshold) {
        let newIndex = currentIndex;

        if (deltaY > 0 && currentIndex < aboutData.length - 1) {
            newIndex++;
            setScrollDirection("down");
        } else if (deltaY < 0 && currentIndex > 0) {
            newIndex--;
            setScrollDirection("up");
        }

        if (newIndex !== currentIndex) {
            isScrollLocked.current = true;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    }
};

export const handleAnimationEnd = (isScrollLocked, setAnimating) => {
    isScrollLocked.current = false; // Unlock scrolling
};


export const scrollToIndex = ({ index, rightDivRef, aboutData }) => {
    if (!rightDivRef?.current) return; // Ensure the ref exists

    const rightDiv = rightDivRef.current;
    const imageHeight = rightDiv.scrollHeight / aboutData.length;
    rightDiv.scrollTo({
        top: index * imageHeight,
        behavior: "smooth", // Smooth scrolling
    });
};



    
