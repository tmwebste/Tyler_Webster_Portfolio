import { useState } from 'react'

import Bio from '../components/bio'
import Projects from '../components/projects'
import NavBar from '../components/navBar'
import Skills from '../components/skills'
import Work from '../components/work'
import BGAccent from '../assets/Vector_BG.svg'
import AIMystery from '../assets/AI_Mystery.png'

function Home() {

    const [projectDetails, setProjectDetails] = useState({
        mystery:{
            name:'OpenAI Powered Murder Mystery Game',
            tagLine:'test',
            image:AIMystery
        },
    });

    const [jobDetails, setJobDetails] = useState({
        dlb: {
            jobTitle: "Electrical Design Engineer",
            companyName: "DLB Associates - Remote",
            employmentPeriod: "June 2022 - June 2023",
            jobBulletPoints: [
                "Generate and review electrical design drawings for mission critical data-center projects",
                "Conduct site visits and manage construction administration processes with external contractors and clients",
                "Perform load, voltage drop, short circuit and other relevant electrical calculations",
                "Collaborate completely remotely with internal and external parties",
            ],
        },
        trek: {
            jobTitle: "Product Development Engineering Intern",
            companyName: "Trek Bicycle Corporation - Waterloo, WI",
            employmentPeriod: "May 2021 - August 2021",
            jobBulletPoints: [
                "Researched and developed procedure, software, and electronics to evaluate developmental electric bicycles",
                "Produced test results responsible for triggering the development of new internal standards for e-bike motors",
                "Managed user studies collecting anatomical data for the purpose of optimizing bicycle fit geometry",
                "Created formal test plans for evaluation of bicycle components",
            ],
        },
        jmu: {
            jobTitle: "Undergraduate Research Assistant: Human Computer Interactions / Computer Engineering",
            companyName: "James Madison University - Harrisonburg, VA",
            employmentPeriod: "August 2019 - May 2022",
            jobBulletPoints: [
                "Developed, coded, tested and debugged embedded system software",
                "Produced a wearable computing device for the purpose of exploring the use of haptic feedback as a performance correction method during physical exercise",
                "Created system prototypes and conducted pre-study to assess device performance",
                "Produced PCB, software, and algorithms to automate feedback for wireless haptic feedback system",
            ],
        },
        eniware: {
            jobTitle: "Engineering Intern",
            companyName: "Eniware, Portable Sterilization - Bethesda, MD",
            employmentPeriod: "May 2017 - July 2017", 
            jobBulletPoints: [
                "Generated prototype renderings for presentation and display",
                "Assisted lead engineer to develop a portable surgical equipment sterilizer",
                "Collaborated with chemists to optimize internal layout for sterilization processes",
            ],
        },
    });

    return (
        <>
            <NavBar></NavBar>
            <div className='main'>
                <div className="vertical-container">
                    <div className="vertical-text-normal left-column">
                        <p>T</p>
                        <p>Y</p>
                        <p>L</p>
                        <p>E</p>
                        <p>R</p>
                    </div>
                    <div className="vertical-text-normal right-column">
                        <p>W</p>
                        <p>E</p>
                        <p>B</p>
                        <p>S</p>
                        <p>T</p>
                        <p>E</p>
                        <p>R</p>
                    </div>
                </div>

                <div className="vertical-text">
                    <h2>Tyler Webster-2023</h2>
                </div>
                <div id='bio-start' className='section-divider'></div>
                <Bio></Bio>
                <div id='skills-start' className='section-divider'></div>
                <Skills></Skills>
                <div id='projects-start' className='section-divider'></div>
                <Projects projects={projectDetails}></Projects>
                <div id='experience-start' className='section-divider'></div>
                <Work jobs={jobDetails}></Work>

            </div>
            <img id='bg-accent' src={BGAccent} alt="Background Acceent" />
        </>
    )
}


export default Home