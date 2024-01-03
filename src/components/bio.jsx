import React, { Component } from 'react';
import './bio.css'
import profileImage from '../assets/Head_Drawing_noBG.png'
import profileImage2 from '../assets/Tyler_noBG.png'
import profileImage3 from '../assets/head_cropped.png'

class Bio extends Component {
    constructor() {
        super();

        this.state = {
            expanded:false
        }


    }

    expandBio = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return (
            <>
            <div id='bio'>
                <div className='bio-left'>
                    <img id='headshot' src={profileImage3} alt='profile photo' />
                </div>
                <div className='bio-right'>
                    {/* <h2 className='bio'>About Me</h2> */}
                   
                    <h1 id='tagline'>Innovative Engineering: Transforming Concepts into Technical Realities with Precision and Imagination.</h1>
               
                    <div className='see-more-div'>
                        <a className='see-more' onClick={this.expandBio} >More About Me </a>
                    </div>
                </div>

            </div>


            {this.state.expanded && 
                    <section className='bio-expanded'>
                        <h1>Expanded Bio</h1>
                        <p>This is my expanded bio</p>
                    </section>
                }
            </>
        )
    }
}

export default Bio