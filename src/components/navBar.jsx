import React, { Component } from 'react';
import './navBar.css';
import myResume from '../assets/Tyler_Webster_Resume.pdf';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }



    toggleMenu() {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen,
        }));
    }

    render() {
        return (
            <div className='nav-container'>
                <nav className="custom-nav" id='main'>
                    <div className="logo-section">
                        <Link to="/" className="logo-text"><img className='logo' src={logo} alt='logo'></img>Tyler Webster</Link>
                    </div>
                    <div className={`menu-section`}>
                        <Link className="menu-item" to="/about">About</Link>
                        <Link className="menu-item" to="/projects">Projects</Link>
                        <a className="menu-item" href={myResume} target="_blank">Resume</a>
                    </div>

                </nav>
                <div className={`hamburger ${this.state.menuOpen ? 'open' : ''}`}>
                    <div className='hamburger-icon' onClick={this.toggleMenu} >
                        <span className={`line ${this.state.menuOpen ? 'open' : ''}`} id='top-line'></span>
                        <span className={`line ${this.state.menuOpen ? 'open' : ''}`} id='center-line'></span>
                        <span className={`line ${this.state.menuOpen ? 'open' : ''}`} id='bottom-line'></span>
                    </div>

                </div>
                <div className={`hamburger-menu-section ${this.state.menuOpen ? 'open' : ''}`}>
                    <Link className="menu-item" to="/" onClick={this.toggleMenu} >Home</Link>
                    <Link className="menu-item" to="/about" onClick={this.toggleMenu} >About</Link>
                    <Link className="menu-item" to="/projects" onClick={this.toggleMenu} >Projects</Link>
                    <a className="menu-item" href={myResume} target="_blank">Resume</a>
                </div>
            </div>
        );
    }
}

export default NavBar;
