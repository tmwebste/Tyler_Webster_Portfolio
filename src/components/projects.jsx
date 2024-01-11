import React, { Component } from 'react';
import './projects.css'
import Project from './project';

class Projects extends Component {
    constructor() {
        super();
    }

    renderSelectedProject = () => {
        if (this.props.selectedProjectIndex == null) {
            return (
                <section id='projects-grid'>

                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[0]} >
                        <a href='https://tmwebste.github.io/pui_project/' target='_blank'>Play the game</a>
                    </Project>
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[1]} ></Project>
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[2]}></Project>
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[3]}></Project>
                </section>
            )
        }

        switch (this.props.selectedProjectIndex) {
            case 0:
                return (
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[0]} >
                        <a href='https://tmwebste.github.io/pui_project/' target='_blank'>Play the game</a>
                    </Project>
                )
            case 1:
                return (
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[1]} ></Project>
                )
            case 2:
                return (
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[2]} ></Project>
                )
            case 3:
                return (
                    <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[3]} ></Project>
                )
        }

    }

    render() {
        return (
            <section id='projects' className='page-section'>
                {this.renderSelectedProject()}
            </section>
        )
    }
}

export default Projects