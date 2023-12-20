import React, { Component } from 'react';
import './smiley.css'


class Smiley extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eyePosition: { x: 0, y: 0 },
        };
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        this.setState({ eyePosition: { x: clientX, y: clientY } });
    };

    render() {
        const { eyePosition } = this.state;

        return (
            <div className="smiley-face">
                <div className="eyes">
                    <div className="eye left">
                        <div className='pupil' style={{ left: eyePosition.x - 150, top: eyePosition.y - 150 }}></div>
                    </div>
                    <div className="eye right">
                        <div className='pupil' style={{ left: eyePosition.x - 100, top: eyePosition.y - 150 }}></div>
                    </div>
                </div>
                <div className="mouth"></div>
            </div>
        );
    }
}

export default Smiley