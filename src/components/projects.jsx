import React, { Component } from 'react';
import './projects.css'
import Project from './project';

class Projects extends Component {
    constructor() {
      super();
    }

    render () {
        return(
            <section id='projects' className='page-section'>
                {/* <hr></hr> */}

                <section id='projects-grid'>
                    <Project project={this.props.projects.mystery} >
                            <a href='https://tmwebste.github.io/pui_project/' target='_blank'>Play the game</a>
                    </Project>
                    <Project project={this.props.projects.hapticGlove} ></Project>
                    <Project project={this.props.projects.macrowPad}></Project>
                    <Project project={this.props.projects.vineyard}></Project>
                </section>

            </section>
            
        )
    }
}

export default Projects