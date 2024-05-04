import React, { Component } from 'react';
import './projects.css'


class Project extends Component {
    constructor() {
        super();
    }

    renderProject = () => {
        if (this.props.project.expanded) {
            return (
                <section className='project-expanded'>
                    <div className='see-project-div'>
                        <>
                            <button onClick={() => this.props.incrementProjectIndex(-1)} className='see-more'>Previous Project</button>
                            {/* <button onClick={() => this.props.expandCollapseProject(this.props.project.index)} className='see-more'>See Less</button> */}
                            <button onClick={() => this.props.incrementProjectIndex(1)} className='see-more'>Next Project</button>
                        </>
                    </div>

                    <article className='project-expanded-top'>
                        {this.props.project.image && (
                            <img className='project-icon' src={this.props.project.image} alt={this.props.project.name + "icon"}></img>
                        )}
                    </article>
                    <article className='project-expanded-bottom'>
                        <div className='project-expanded-summary'>
                            <h1 className='project-name-expanded'>{this.props.project.name}</h1>
                            {/* <h2 className='project-tag'>{this.props.project.tagLine}</h2> */}

                        </div>
                        <div className='project-brief'>
                            <h2>{this.props.project.details.brief.title}</h2>
                            <p>{this.props.project.details.brief.text}</p>

                        </div>
                    </article>


                    <article className='project-details'>
                        {/* <p>{this.props.project.details.brief}</p> */}
                        <h2 className='subsection-header'>{this.props.project.details.problem.title}</h2>
                        <p>{this.props.project.details.problem.text}</p>
                        <h2 className='subsection-header'>{this.props.project.details.solution.title}</h2>
                        <p>{this.props.project.details.solution.text}</p>
                        <h2 className='subsection-header'>{this.props.project.details.process.title}</h2>
                        <p>{this.props.project.details.process.text}</p>
                        {this.props.project.details.process.details.map((process, index) => (
                            <article className="project-expanded-bottom">

                                <article className='project-brief'>
                                    <h3 key={index}>{process.title}</h3>
                                    <p key={index}>{process.text}</p>
                                </article>
                                <div className='process-right'>
                                    <img className='process-image' src={process.image} alt={process.imageAlt}></img>
                                </div>

                            </article>
                        ))}
                        <h2 className='subsection-header'>{this.props.project.details.contributions.title}</h2>
                        {this.props.project.details.contributions.details.map((contribution, index) => (
                            <article className="project-expanded-bottom">
                                <div className='project-expanded-summary'>
                                    <img className='contribution-image' src={contribution.contributionImage} alt={contribution.imageAlt}></img>
                                </div>
                                <article className='project-brief'>
                                    <h3 key={index}>{contribution.title}</h3>
                                    {/* <h2 key={index}>{}</h3> */}
                                    <p key={index}>{contribution.contribution}</p>
                                </article>

                            </article>
                        ))}
                        <h2 className='subsection-header'>{this.props.project.details.reflection.title}</h2>
                        <p>{this.props.project.details.reflection.text}</p>
                        {this.props.children}
                    </article>
                    <div className='see-project-div'>
                        <>
                            <button onClick={() => this.props.incrementProjectIndex(-1)} className='see-more'>Previous Project</button>
                            {/* <button onClick={() => this.props.expandCollapseProject(this.props.project.index)} className='see-more'>See Less</button> */}
                            <button onClick={() => this.props.incrementProjectIndex(1)} className='see-more'>Next Project</button>
                        </>
                    </div>
                </section>
            )
        } else {
            return (
                <article className='project'>
                    <article className='project-top'>
                        {this.props.project.image && (
                            <img className='project-icon' src={this.props.project.image} alt={this.props.project.name + "icon"}></img>
                        )}
                    </article>
                    <article className='project-bottom'>
                        <div className='project-summary'>
                            <h2 className='project-name'>{this.props.project.name}</h2>
                            <h3 className='project-tag'>{this.props.project.tagLine}</h3>
                            {this.props.children}
                        </div>
                        <div className='see-project-div'>
                            {this.props.project.expanded ? (
                                <button onClick={() => this.props.expandCollapseProject(this.props.project.index)} className='see-more'>See Less</button>
                            ) : (
                                <button onClick={() => this.props.expandCollapseProject(this.props.project.index)} className='see-more'>See More</button>
                            )}

                        </div>
                    </article>

                </article>
            )
        }
    }



    render() {
        return (
            <>
                {this.renderProject()}
            </>
            // <article className='project'>
            //     <article className='project-top'>
            //         {this.props.project.image && (
            //             <img className='project-icon' src={this.props.project.image} alt={this.props.project.name + "icon"}></img>
            //         )}
            //     </article>
            //     <article className='project-bottom'>
            //         <div className='project-summary'>
            //             <h2 className='project-name'>{this.props.project.name}</h2>
            //             <h3 className='project-tag'>{this.props.project.tagLine}</h3>
            //             {this.props.children}
            //         </div>
            //         <div className='see-project-div'>
            //             {this.props.project.expanded ? (
            //                 <button onClick={() => this.props.expandCollapseProject(this.props.project.index)} className='see-more'>See Less</button>
            //             ) : (
            //                 <button onClick={() => this.props.expandCollapseProject(this.props.project.index)} className='see-more'>See More</button>
            //             )}

            //         </div>
            //     </article>

            // </article>
        )
    }
}

export default Project