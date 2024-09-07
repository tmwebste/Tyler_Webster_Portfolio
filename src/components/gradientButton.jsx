import React from 'react';
import './gradientButton.css'; // Include your CSS styles here

class GradientButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position within the button
    const y = e.clientY - rect.top;  // Mouse Y position within the button

    // Access CSS variables using getComputedStyle
    const computedStyle = getComputedStyle(document.documentElement);
    const secondaryColor = computedStyle.getPropertyValue('--secondary').trim();
    const buttonColor = computedStyle.getPropertyValue('--button').trim();

    // Dynamically update the background using the CSS variables
    button.style.background = `radial-gradient(circle at ${x}px ${y}px, ${secondaryColor}, ${buttonColor} 100%)`;
  };

  handleMouseLeave = (e) => {
    const button = e.currentTarget;
    // Reset the background when the mouse leaves
    button.style.background = '';
  };

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className='see-more'
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        ref={this.buttonRef}
      >
        {this.props.children}
      </button>
    );
  }
}

export default GradientButton;