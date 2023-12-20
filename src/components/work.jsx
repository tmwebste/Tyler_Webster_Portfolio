import React, { Component } from 'react';
import './work.css'
import Job from './job';


class Work extends Component {
    constructor() {
      super();
    }



    render () {
        return(
            <section id='work' className='page-section'>
                <hr></hr>
                <div className="vertical-container">
                    <div className="vertical-text-normal section-label">
                        <p>E</p>
                        <p>X</p>
                        <p>P</p>
                        <p>E</p>
                        <p>R</p>
                        <p>I</p>
                        <p>E</p>
                        <p>N</p>
                        <p>C</p>
                        <p>E</p>
                    </div>
                </div>
                <section id='work-grid'>
                   <Job job={this.props.jobs.dlb}></Job>
                   <Job job={this.props.jobs.trek}></Job>
                   <Job job={this.props.jobs.jmu}></Job>
                   <Job job={this.props.jobs.eniware}></Job>
                </section>
            </section>
        )
    }
}

export default Work