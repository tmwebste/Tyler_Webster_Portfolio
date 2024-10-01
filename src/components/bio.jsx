import React, { Component } from 'react';
import './bio.css'
import profileImage from '../assets/Head_Drawing_noBG.png'
import profileImage2 from '../assets/Tyler_noBG.png'
import profileImage3 from '../assets/head_cropped.png'

class Bio extends Component {
    constructor() {
        super();
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
               
                    {/* <div className='see-more-div'>
                        {!this.props.expanded && 
                        (
                            <button className='see-more' onClick={this.props.expandBio} >More About Me</button>
                        )}
                        
                    </div> */}
                </div>

            </div>


            {this.props.expanded && 
                    <section className='bio-expanded'>
                        <h1 className='bio-header'>{this.props.bio.title}</h1>
                        {this.props.bio.items.map((bioItem, index) => (
                            <article className="bio-expanded-bottom">
                                <div  key={index} className='bio-expanded-image'>
                                    <img className='bio-image' src={bioItem.image} alt='bio image'></img>
                                </div>
                                <article className='bio-item'>
                                    <h2 >{bioItem.title}</h2>
                                    <p>{bioItem.text}</p>
                                </article>
                           
                            </article>
                        ))}
                    </section>
                }
            </>
        )
    }
}

export default Bio