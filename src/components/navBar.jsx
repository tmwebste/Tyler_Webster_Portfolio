import React, { Component } from 'react';
import './navBar.css';
import emailLogo from '../assets/email.svg';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';

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
                <div className="empty-space">
                    <a className="social-link" href="https://www.linkedin.com/in/tylermwebster" target="_blank"><img className="link-img" src={linkedInLogo} alt="LinkedIn logo"></img></a>
                    <a className="social-link" href="mailto: TylerMichaelWebster@gmail.com"><img className="link-img" src={emailLogo} alt="Email logo"></img></a>
                    <a className="social-link" href="https://github.com/tmwebste" target="_blank"><img className="link-img" src={githubLogo} alt="Github logo"></img></a>
                </div>
            </nav>

        )
    }
}

export default NavBar