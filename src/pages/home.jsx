import React, { useState, useEffect, Component } from 'react'

import Bio from '../components/bio'
import Projects from '../components/projects'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Work from '../components/work'
import BGAccent from '../assets/Vector_BG.svg'
// import AIMystery from '../assets/AI_Mystery.png'
import projectJson from '../assets/projectData.json'
import bioJson from '../assets/bio.json'
import workJson from '../assets/workData.json'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            focus: 'all',
            bioExpanded: false,
            selectedProjectIndex: null,
            projectData: projectJson.projects,
            bio: bioJson.bio
        };
    }

    resetView = () => {
        console.log("reseting view");

        const updatedProjectData = [...this.state.projectData];

        // Close all projects
        updatedProjectData.forEach((project) => {
            project.expanded = false;
        });

        this.setState({
            focus: 'all',
            bioExpanded: false,
            selectedProjectIndex: null,
            projectData: updatedProjectData
        });
        console.log(this.state);
    }

    expandCollapseBio = () => {

        this.resetView();
        console.log("toggling bio");
        let newFocus = 'bio'
        if (this.state.focus === 'bio') {
            newFocus = 'all';
        }
        this.setState({
            bioExpanded: !this.state.bioExpanded,
            focus: newFocus
        });
    }

    expandBio = () => {

        this.resetView();
        console.log("expanding bio");
        let newFocus = 'bio'
        this.setState({
            bioExpanded: true,
            focus: newFocus,
            
        });
    }


    expandProjectSection = () => {

        this.resetView();
        console.log("expanding projects");
        let newFocus = 'project'

        this.setState({
            focus: newFocus
            
        });
    }

    incrementProjectIndex = (increment) => {
        const numProjects = 3;
        this.resetView();
        let newFocus = 'project'

        let newProjectIndex = this.state.selectedProjectIndex + increment;
        if (newProjectIndex > numProjects){
            newProjectIndex = 0;
        } else if (newProjectIndex < 0){
            newProjectIndex = numProjects;
        }
        console.log(`Changing to project ${newProjectIndex}`)

        const updatedProjectData = [...this.state.projectData];

        // Update the 'expanded' property of the selected project
        updatedProjectData[newProjectIndex].expanded = true

        this.setState({
            projectData: updatedProjectData,
            selectedProjectIndex: newProjectIndex,
            focus: newFocus
        });

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    expandCollapseProject = (projectIndex) => {

        this.resetView();
        console.log("toggling specific project: " + projectIndex);
        let newFocus = 'project'

        const updatedProjectData = [...this.state.projectData];

        // Update the 'expanded' property of the selected project
        updatedProjectData[projectIndex].expanded = true;

        if (this.state.focus === 'project' && this.state.selectedProjectIndex != null) {
            newFocus = 'all';
            updatedProjectData[projectIndex].expanded = false;
            projectIndex = null;
        }

        this.setState({
            projectData: updatedProjectData,
            selectedProjectIndex: projectIndex,
            focus: newFocus
        });

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }


    renderFocused = () => {
        switch (this.state.focus) {
            case 'all':
                return (
                    <>
                        <div id='bio-start' className='section-divider'></div>
                        <Bio expandBio={this.expandCollapseBio} expanded={this.state.bioExpanded}></Bio>
                        <div id='projects-start' className='section-divider'></div>
                        {/* <Projects projects={projectData}></Projects> */}
                        {this.state.projectData.length === 0 ? (
                            <div>Loading...</div> // Display a loading indicator while data is being loaded
                        ) : (
                            <Projects selectedProjectIndex={this.state.selectedProjectIndex} expandCollapseProject={this.expandCollapseProject} projects={this.state.projectData} />
                        )}
                    </>
                )
            case 'bio':
                return (
                    <>
                        <div id='bio-start' className='section-divider'></div>
                        <Bio expandBio={this.expandCollapseBio} expanded={this.state.bioExpanded} bio={this.state.bio}></Bio>
                    </>
                )
            case 'project':
                return (
                    <>
                        <div id='projects-start' className='section-divider'></div>
                        {/* <Projects projects={projectData}></Projects> */}
                        {this.state.projectData.length === 0 ? (
                            <div>Loading...</div> // Display a loading indicator while data is being loaded
                        ) : (
                            <Projects selectedProjectIndex={this.state.selectedProjectIndex} incrementProjectIndex={this.incrementProjectIndex} expandCollapseProject={this.expandCollapseProject} projects={this.state.projectData} />
                        )}
                    </>
                )
        }
    }

    render() {
        return (
            <div className='main'>
                <NavBar goHome={this.resetView} expandBio={this.expandBio} expandProjectSection={this.expandProjectSection}></NavBar>
                {this.renderFocused()}
                <Footer></Footer>
            </div>
        )
    }
}


export default Home