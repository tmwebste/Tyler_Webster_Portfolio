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
                    <article className='project'>
                        <article className='project-top'>
                            {this.props.project.image && (
                                <img className='project-icon' src={this.props.project.image} alt={this.props.project.name + "icon"}></img>
                            )}
                        </article>
                        <article className='project-bottom'>
                            <div className='project-summary'>
                                <h1 className='project-name'>{this.props.project.name}</h1>
                                <h2 className='project-tag'>{this.props.project.tagLine}</h2>
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
                    <article className='project-details'>
                        <p>{this.props.project.details.brief}</p>
                        <p>{this.props.project.details.problem}</p>
                        <p>{this.props.project.details.solution}</p>
                        <p>{this.props.project.details.process}</p>
                        {this.props.project.details.contributions.map((contribution, index) => (
                            <p key={index}>{contribution.contribution}</p>
                        ))}
                    </article>

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