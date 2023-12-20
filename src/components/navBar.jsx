import React, { Component } from 'react';
import './navBar.css'

class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="custom-nav">
                <div className="logo-section">
                    <a className="logo-text" href='#bio-start'>TW</a>
                </div>
                <div className="menu-section">
                    <a className="menu-item" href='#skills-start'>SKILLS</a>
                    <a className="menu-item" href='#projects-start'>PROJECTS</a>
                    <a className="menu-item" href='#experience-start'>WORK</a>
                </div>
                <div className="empty-space"></div>
            </nav>

        )
    }
}

export default NavBar