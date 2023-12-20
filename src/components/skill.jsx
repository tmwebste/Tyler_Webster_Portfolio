import React, { Component } from 'react';
import './skills.css'


class Skill extends Component {
    constructor() {
      super();
    }

    render () {
        return(
            <article className='skill'>
                {this.props.skillIcon && (
                    <img className='skill-icon' src={this.props.skillIcon} alt={this.props.skillName + "icon"}></img>
                )}
                <p className='skill-name'>{this.props.skillName}</p>
            </article>
        )
    }
}

export default Skill