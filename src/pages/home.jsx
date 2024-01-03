import { useState } from 'react'

import Bio from '../components/bio'
import Projects from '../components/projects'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Skills from '../components/skills'
import Work from '../components/work'
import BGAccent from '../assets/Vector_BG.svg'
import AIMystery from '../assets/AI_Mystery.png'

function Home() {

    const [projectDetails, setProjectDetails] = useState({
        mystery: {
            name: 'OpenAI Powered Murder Mystery Game',
            tagLine: 'Dynamically generating game scenarios and character responses via Open AI.',
            image: AIMystery,
            expanded: false,
            details: {

            }
        },
        hapticGlove: {
            name: 'Haptic Glove For Physical Therapy',
            tagLine: 'Improving activity learning and adhesion through continuous haptic feed-back and feed-forward.',
            image: AIMystery,
            expanded: false
        },
        macrowPad: {
            name: 'Open Source Mechanical Macropad',
            tagLine: 'Custom macro pad designed to improve desktop productivity',
            image: AIMystery,
            expanded: false
        },
        vineyard: {
            name: "Weather Resistant Enivironmental Sensor Network For Realtime Agricultural Monitoring",
            tagLine: 'Distributed network of temperature sensors for monitoring temperatures across vinyards and displaying them to the user in real time.',
            image: AIMystery,
            expanded: false
        }

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
        <div className='main'>
            <NavBar></NavBar>
            {/* <div className="vertical-text">
                    <h2>Tyler Webster-2024</h2>
                </div> */}
            <div id='bio-start' className='section-divider'></div>
            <Bio></Bio>
            <div id='projects-start' className='section-divider'></div>
            <Projects projects={projectDetails}></Projects>

            <Footer></Footer>
        </div>
    )
}


export default Home