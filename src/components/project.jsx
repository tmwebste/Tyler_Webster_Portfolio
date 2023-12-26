import React, { Component } from 'react';
import './projects.css'


class Project extends Component {
    constructor() {
      super();
    }

    render () {
        return(
            <article className='project'>
                <article className='project-top'>
                    {this.props.projectIcon && (
                        <img className='project-icon' src={this.props.projectIcon} alt={this.props.projectName + "icon"}></img>
                    )}
                </article>
                <article className='project-bottom'>
                    <h2 className='project-name'>{this.props.projectName}</h2>
                    <p className='project-tag'>{this.props.tagLine}</p>
                </article>
            </article>
        )
    }
}

export default Project