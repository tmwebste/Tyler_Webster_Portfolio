import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";

import './project.css'
import Carousel from '../components/carousel';
import arrow from '../assets/arrow.svg';
import projectJson from '../assets/projectData.json'

import designerTag from '../assets/designer-tag.svg';
import engineerTag from '../assets/engineer-tag.svg';
import developerTag from '../assets/developer-tag.svg';
import researcherTag from '../assets/researcher-tag.svg';



const Project = ({ projectIndex, children, adjacentIndexes }) => {

    const [projectData, setProjectData] = useState(projectJson.projects);
    const divRef = useRef(null);

    const roleTags = {"designer": designerTag, "engineer": engineerTag, "developer": developerTag, "researcher": researcherTag};

    const { scrollYProgress } = useScroll({ container: divRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 100,
        restDelta: 0.001
    });

    useEffect(() => {
        // Applying on mount
        document.body.style.overflowY = "scroll";
        // Applying on unmount    
        return () => {
            document.body.style.overflow = "hidden";
        }
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant' // Optional for smooth scrolling
        });
    }); // Empty dependency array ensures the effect runs only once on mount



    const renderProject = () => {
        return (
            <section id='project' className='project-expanded'>
                <div className='see-project-div'>
                    <>
                        <Link className='round-button' to={projectData[adjacentIndexes[0]].path}><img className='left-arrow' src={arrow}></img></Link>
                        <Link className='round-button' to={projectData[adjacentIndexes[1]].path}><img className='right-arrow' src={arrow}></img></Link>
                    </>
                </div>

                <article className='project-expanded-top'>
                    {projectData[projectIndex].image && (
                        <img className='project-icon' src={projectData[projectIndex].image} alt={projectData[projectIndex].name + "icon"}></img>
                    )}
                </article>

                <article className='project-expanded-bottom'>

                    <div className='project-expanded-summary'>
                        <h1 className='project-name-expanded'>{projectData[projectIndex].name}</h1>
                        {/* <h2 className='project-tag'>{projectData[projectIndex].tagLine}</h2> */}

                    </div>

                    <div className='project-brief'>
                        <h2 className= "subsection-header">{projectData[projectIndex].details.brief.title}</h2>
                        <p>{projectData[projectIndex].details.brief.text}</p>

                    </div>
                </article>
                <div className='project-overview'>
                    <h2 className= "subsection-header">{"Overview"}</h2>
                    <div className='overview-table'>

                        <div className='overview-column'>
                            <h4 className='overview-column-title'>Duration</h4>
                            <p>{projectData[projectIndex].roleDetails.duration}</p>
                        </div>
                        <div className='overview-column'>
                            <h4 className='overview-column-title'>Team Size</h4>
                            <p>{projectData[projectIndex].roleDetails.teamsize}</p>
                        </div>


                        <div className='overview-column'>
                            <h4 className='overview-column-title'>Roles</h4>
                            {projectData[projectIndex].roleDetails.roles.map((role, index) => (
                                <img className="skill-tag-small" src={roleTags[role]}></img>
                            ))}

                        </div>
                        <div className='overview-column'>
                            <h4 className='overview-column-title'>Tools</h4>
                            {projectData[projectIndex].roleDetails.tools.map((tool, index) => (
                                <p>{tool}</p>
                            ))}
                        </div>

                    </div>
                </div>

                <article className='project-details'>
                    {/* <p>{projectData[projectIndex].details.brief}</p> */}
                    {projectData[projectIndex].details.problem.title && <h2 className='subsection-header'>{projectData[projectIndex].details.problem.title}</h2>}
                    {projectData[projectIndex].details.problem.text && <p>{projectData[projectIndex].details.problem.text}</p>}

                    {projectData[projectIndex].details.solution.title && <h2 className='subsection-header'>{projectData[projectIndex].details.solution.title}</h2>}
                    {projectData[projectIndex].details.solution.text && <p>{projectData[projectIndex].details.solution.text}</p>}

                    {projectData[projectIndex].details.process.title && <h2 className='subsection-header'>{projectData[projectIndex].details.process.title}</h2>}
                    {projectData[projectIndex].details.process.text && <p>{projectData[projectIndex].details.process.text}</p>}

                    {projectData[projectIndex].details.process.image && <img className='project-icon-full' src={projectData[projectIndex].details.process.image} alt={projectData[projectIndex].details.process.imageAlt}></img>}
                    {projectData[projectIndex].details.process.details.map((process, index) => (
                        <article className="project-expanded-bottom">

                            <div className='project-contribution-left'>
                                <img className='contribution-image' src={process.image} alt={process.imageAlt}></img>
                            </div>
                            <article className='project-contribution-right'>
                                <h3 className="small-header">{process.title}</h3>
                                <p key={index}>{process.text}</p>
                            </article>


                        </article>
                    ))}
                    {/* Add Carousel component only if the prop "carousel" is defined and true */}
                    {projectIndex === 0 && (

                        <div className='carousel-container'>
                            <h2 className='subsection-header'>Key Archetypes</h2>
                            <Carousel />
                        </div>
                    )}


                    {projectData[projectIndex].details.contributions.title && <h2 className='subsection-header'>{projectData[projectIndex].details.contributions.title}</h2>}
                    {projectData[projectIndex].details.contributions.details.map((contribution, index) => (
                        <article className="project-expanded-bottom">
                            <div className='project-contribution-left'>
                                <img className='contribution-image' src={contribution.contributionImage} alt={contribution.imageAlt}></img>
                            </div>
                            <article className='project-contribution-right'>
                                <h3 className="small-header" key={index}>{contribution.title}</h3>
                                {/* <h2 key={index}>{}</h3> */}
                                <p key={index}>{contribution.contribution}</p>
                            </article>

                        </article>
                    ))}
                    {/* <h2 className='subsection-header'>{projectData[projectIndex].details.reflection.title}</h2>
                <p>{projectData[projectIndex].details.reflection.text}</p> */}
                    {children && <div className='child-links'>
                        {children}
                    </div>}

                </article>
                <div className='see-project-div'>
                    <>
                        <Link className='round-button' to={projectData[adjacentIndexes[0]].path}><img className='left-arrow' src={arrow}></img></Link>
                        <Link className='round-button' to={projectData[adjacentIndexes[1]].path}><img className='right-arrow' src={arrow}></img></Link>
                    </>
                </div>
                <motion.div
                    className="progress-bar-full"
                    style={{ scaleX }}
                />
            </section>
        )
    }

    return (
        <>
            {renderProject()}
        </>
    )

}

export default Project;