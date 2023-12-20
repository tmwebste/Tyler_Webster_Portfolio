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
                <hr></hr>
                <div className="vertical-container">
                    <div className="vertical-text-normal section-label">
                        <p>P</p>
                        <p>R</p>
                        <p>O</p>
                        <p>J</p>
                        <p>E</p>
                        <p>C</p>
                        <p>T</p>
                        <p>S</p>
                    </div>
                </div>
                <section id='projects-grid'>
                    <Project projectName={this.props.projects.mystery.name} projectIcon={this.props.projects.mystery.image}></Project>
                    <Project projectName="Custom Wearable Liquid Metal Flex Sensor"></Project>
                    <Project projectName="Open Source Mechanical Macropad"></Project>
                    <Project projectName="Weather Resistant Enivironmental Sensor Network For Realtime Agricultural Monitoring"></Project>
                </section>

            </section>
            
        )
    }
}

export default Projects