import React, { Component } from 'react';
import './footer.css';
import emailLogo from '../assets/email.svg';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="footer">
                <section className='footer-content'>
                    <div className="footer-logo-section">
                        <h3 className="footer-head" >Tyler Webster © {(new Date().getFullYear())}</h3>
                    </div>
                    <div className="contacts">
                        <a className="social-link" href="https://www.linkedin.com/in/tylermwebster" target="_blank"><img className="link-img" src={linkedInLogo} alt="LinkedIn logo"></img></a>
                        <a className="social-link" href="mailto: TylerMichaelWebster@gmail.com"><img className="link-img" src={emailLogo} alt="Email logo"></img></a>
                        <a className="social-link" href="https://github.com/tmwebste" target="_blank"><img className="link-img" src={githubLogo} alt="Github logo"></img></a>
                    </div>
                </section>
            </section>

        )
    }
}

export default Footer