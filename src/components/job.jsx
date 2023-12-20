import React, { Component } from 'react';
import './work.css'


class Job extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article className='job'>
                <article className='job-left'>
                    {this.props.jobIcon && (
                        <img className='job-icon' src={this.props.jobIcon} alt={this.props.job.jobTitle + "icon"}></img>
                    )}
                </article>
                <article className='job-right'>
                    <h2 className='job-name'>{this.props.job.jobTitle}</h2>
                    <p className='company-name'>{this.props.job.companyName}</p>
                    <p className='employment-period'>{this.props.job.employmentPeriod}</p>
                    <ul>
                        {this.props.job.jobBulletPoints.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </article>
            </article>
        )
    }
}

export default Job