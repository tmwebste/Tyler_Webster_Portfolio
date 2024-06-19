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
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[0]} >
                        
                        <a href='https://www.figma.com/design/PzaQu3oAZArzXttEJY3zL7/Wireframes?node-id=303-1449&t=snWiR3a9THoLhXhd-1 ' target='_blank'>Figma File</a>
                        
                    </Project>
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[1]} >
                        {/* <a href='https://tmwebste.github.io/pui_project/' target='_blank'>Play the game</a> */}
                        
                    </Project>
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[2]}>
                        <a href='https://docs.google.com/presentation/d/1O0H9u7qRRIuUSWhYjBNVIALaNORenprSxH8SBbdq3fg/edit#slide=id.p1' target='_blank'>Google Slides Presentation</a>
                        <br></br>
                        <a href='https://www.figma.com/file/0IZVinQ8hbEQbUtDY1qv2k/Bumble---Advanced-IXD?type=design&node-id=339%3A9187&mode=design&t=gKJQaeYuDw7It2Wp-1 ' target='_blank'>Figma File</a>
                    </Project>
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[3]}>
                    <a href='https://tmwebste.github.io/pui_project/' target='_blank'>Play the game</a>
                    
                    </Project>
                    {/* <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[4]}>

                    </Project> */}
                </section>
            )
        }

        switch (this.props.selectedProjectIndex) {
            case 0:
                return (
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[0]} >
                        <a href='https://www.figma.com/design/PzaQu3oAZArzXttEJY3zL7/Wireframes?node-id=303-1449&t=snWiR3a9THoLhXhd-1 ' target='_blank'>Figma File</a>
                    </Project>
                )
            case 1:
                return (
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[1]} >

                    </Project>
                )
            case 2:
                return (
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[2]} >
                        <a href='https://docs.google.com/presentation/d/1O0H9u7qRRIuUSWhYjBNVIALaNORenprSxH8SBbdq3fg/edit#slide=id.p1' target='_blank'>Google Slides Presentation</a>
                        <br></br>
                        <a href='https://www.figma.com/file/0IZVinQ8hbEQbUtDY1qv2k/Bumble---Advanced-IXD?type=design&node-id=339%3A9187&mode=design&t=gKJQaeYuDw7It2Wp-1 ' target='_blank'>Figma File</a>
                    </Project>
                )
            case 3:
                return (
                    <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[3]} >
                        {/* <iframe classname="gpt-game" src="https://tmwebste.github.io/pui_project/"></iframe> */}
                        <a href='https://tmwebste.github.io/pui_project/' target='_blank'>Play the game</a>

                    </Project>
                )
            // case 4:
            //     return (
            //         <Project incrementProjectIndex={this.props.incrementProjectIndex} expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[4]}>
            //         </Project>
            //     )
            // case 4:
            //     return (
            //         <Project expandCollapseProject={this.props.expandCollapseProject} project={this.props.projects[4]} >

            //             <p>I really enjoyed this project. Idea generation was one of the most challenging parts of this project. I found it extremely challenging to create ideas that I felt genuinely benefited users in a tangible way. Especially early on, so many people in the course had very similar ideas and it took some work to push past this convergence to find something unique. One of the most entertaining parts was creating a bunch of insane ideas with others in the class. Some ideas were focused on supporting hookups, where others were aimed at creating a deeper more authentic connection. I chose this idea because I feel that it really addresses a big problem with online dating - accountability and communication. </p>
            //             <p>I found Auldyn’s advice about using ChatGPT to generate ideas explicitly to inform you of what not to do both humorous and valuable. When I first asked GPT to make some Ideas, I felt like I was back in the first class where people were pitching the first set of ideas that they had. It was valuable to recognize that these tools cannot yet produce truly novel or unique ideas that push beyond the obvious.</p>
            //             <p>Something that is more challenging than I anticipated is the integration of additional platforms such as the watch. Even at this point, my watch integration is still very separated from the phone app, where I think a more effective connection between the two could be achieved. </p>
            //             <p>Overall, I think I achieved the goals of this project. Not only that, I had fun doing it. This project gave me an engaging opportunity to think more deeply about novel and unique interactions that extended beyond the creation of static websites.</p>

            //             <h2 className='subsection-header'>Additional Links</h2>
            //             <a href='https://docs.google.com/presentation/d/1O0H9u7qRRIuUSWhYjBNVIALaNORenprSxH8SBbdq3fg/edit#slide=id.p1' target='_blank'>Google Slides Presentation</a>
            //             <br></br>
            //             <a href='https://www.figma.com/file/0IZVinQ8hbEQbUtDY1qv2k/Bumble---Advanced-IXD?type=design&node-id=339%3A9187&mode=design&t=gKJQaeYuDw7It2Wp-1 ' target='_blank'>Figma File</a>
            //         </Project>
            //     )
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