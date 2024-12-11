import React, { useState, useRef, useEffect } from 'react';
import './cursor.css';

const Cursor = () => {
    const [isClickable, setIsClickable] = useState(false); // Track if hovering over clickable area
    const cursorRef = useRef(null); // Ref for the SVG cursor
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Function to update the cursor position
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Function to handle when the mouse enters any clickable area
    const handleMouseEnter = (e) => {
        if (e.target.matches('a, button, [role="button"], [href], .clickable')) {
            setIsClickable(true); // If it's an anchor, button, or any clickable role
        }
    };

    // Function to handle when the mouse leaves any clickable area
    const handleMouseLeave = () => {
        setIsClickable(false);
    };

    // Attach mousemove event listener to update cursor position
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        // Add event listener for mouse enter and leave globally
        document.body.addEventListener('mouseenter', handleMouseEnter, true);
        document.body.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter, true);
            document.body.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    return (
        <div class="custom-cursor"
            style={{
                position: 'absolute',
                top: `${cursorPosition.y}px`, // Center the cursor
                left: `${cursorPosition.x}px`
            }}>
            <svg width="60" height="60">
                {isClickable ?
                    <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="2" fill="white"></circle> :
                    <circle cx="30" cy="30" r="20" stroke="black" strokeWidth="2" fill="white"></circle>}
            </svg>
        </div>
    );

}

export default Cursor;