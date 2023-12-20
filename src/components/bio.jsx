import React, { Component } from 'react';
import './bio.css'
import profileImage from '../assets/Head_Drawing_noBG.png'
import profileImage2 from '../assets/Tyler_noBG.png'

class Bio extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id='bio'>

                <div className='bio-left'>
                    <img id='headshot' src={profileImage2} alt='profile photo' />
                </div>
                <div className='bio-right'>
                    {/* <h2 className='bio'>About Me</h2> */}
                    <h1 id='tagline'>Innovative Engineering: Transforming Concepts into Technical Realities with Precision and Imagination.</h1>
                </div>
            </div>
        )
    }
}

export default Bio