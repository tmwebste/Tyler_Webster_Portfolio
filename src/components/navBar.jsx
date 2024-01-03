import React, { Component } from 'react';
import './navBar.css';
import myResume from '../assets/test.pdf'

class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="custom-nav">
                <div className="logo-section">
                    <a className="logo-text" href='#bio-start'>Tyler Webster</a>
                </div>
                <div className="menu-section">
                    <a className="menu-item" href='#skills-start'>About</a>
                    <a className="menu-item" href='#projects-start'>Projects</a>
                    <a className="menu-item" href={myResume} target="_blank">Resume</a>
                </div>
               
            </nav>

        )
    }
}

export default NavBar