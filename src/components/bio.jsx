import React, { Component } from 'react';
import './bio.css';
import profileImage from '../assets/Head_Drawing_noBG.png'
import profileImage2 from '../assets/Tyler_noBG.png'
// import profileImage3 from '../assets/head_cropped.png'
import profileImage3 from '../assets/hero_image.png';
import profileImageBack from '../assets/hero_image_back.png';

class Bio extends Component {
    constructor() {
        super();
        this.state = {
            offset: { x: 2, y: 2 },
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        const { clientX, clientY } = e;
        const xOffset = (window.innerWidth / 2 - clientX) / 100;
        const yOffset = (window.innerHeight / 2 - clientY) / 80;
        this.setState({ offset: { x: xOffset, y: yOffset } });
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove);
    }

    render() {
        const { offset } = this.state;
        const skewFactor = 0.1; // Adjust this value to control the skew intensity

        return (
            <>
            <div id='bio'>
                <div className='bio-left'>
                    <img id='headshot' src={profileImage3} alt='profile photo' 
                        style={{
                            transform: `translate(${offset.x}px, ${offset.y}px) rotateX(${-offset.y}deg) rotateY(${offset.x}deg)`,
                        }}
                    />
                    <img id='headshot-back' src={profileImageBack} alt='profile photo' 
                        style={{
                            transform: `translate(${-offset.x}px, ${-offset.y}px) rotateX(${-offset.y}deg) rotateY(${offset.x}deg)`,
                        }}
                    />
                </div>
                <div className='bio-right'>
                    {/* <h2 className='bio'>About Me</h2> */}
                   
                    <h1 id='tagline-big'>👋🏼 Hi, Im Tyler!</h1>
                    <h1 id='tagline'>I Transform Concepts into Functional Prototypes and Refined Products</h1>
               
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