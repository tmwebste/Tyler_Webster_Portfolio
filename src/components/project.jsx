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
                    {this.props.project.image && (
                        <img className='project-icon' src={this.props.project.image} alt={this.props.project.name + "icon"}></img>
                    )}
                </article>
                <article className='project-bottom'>
                    <div className='project-summary'>
                        <h2 className='project-name'>{this.props.project.name}</h2>
                        <p className='project-tag'>{this.props.project.tagLine}</p>
                        {this.props.children}
                    </div>
                    <div className='see-project-div'>
                        <a className='see-more'>See More</a>
                    </div>
                </article>
            </article>
        )
    }
}

export default Project