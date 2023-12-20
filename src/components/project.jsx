import React, { Component } from 'react';
import './projects.css'


class Project extends Component {
    constructor() {
      super();
    }

    render () {
        return(
            <article className='project'>
                <article className='project-left'>
                    {this.props.projectIcon && (
                        <img className='project-icon' src={this.props.projectIcon} alt={this.props.projectName + "icon"}></img>
                    )}
                </article>
                <article className='project-right'>
                    <h2 className='project-name'>{this.props.projectName}</h2>
                </article>
            </article>
        )
    }
}

export default Project