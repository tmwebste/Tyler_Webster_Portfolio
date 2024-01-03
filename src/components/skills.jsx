import React, { Component } from 'react';
import './skills.css'
import Skill from './skill';
import HTMLLogo from '../assets/html5-logo.svg'
import ReactLogo from '../assets/react.svg';
import PythonLogo from '../assets/python-logo.svg';
import JSLogo from '../assets/javascript-logo.svg';
import CADLogo from '../assets/cad-logo.svg';
import DEVLogo from '../assets/dev-logo.svg';
import CPULogo from '../assets/cpu-logo.svg';
import OpenAILogo from '../assets/openai-logo.svg';

class Skills extends Component {
    constructor() {
      super();
    }

    render () {
        return(
            <section id='skills' className='page-section'>
                <hr></hr>

                <section id='skill-grid'>
                    <Skill skillName = "React" skillIcon={ReactLogo}></Skill>
                    <Skill skillName = "HTML/CSS" skillIcon={HTMLLogo}></Skill>
                    <Skill skillName = "JavaScript" skillIcon={JSLogo}></Skill>
                    <Skill skillName = "Python" skillIcon={PythonLogo}></Skill>
                    <Skill skillName = "OpenAI API" skillIcon={OpenAILogo}></Skill>
                    <Skill skillName = "CAD" skillIcon={CADLogo}></Skill>
                    <Skill skillName = "Product Development" skillIcon={DEVLogo}></Skill>
                    <Skill skillName = "Embedded Systems" skillIcon={CPULogo}></Skill>
                    
                    
                </section>
            </section>
        )
    }
}

export default Skills