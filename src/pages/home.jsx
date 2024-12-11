import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from 'react-router-dom';
import './home.css';

//Data model
import projectJson from '../assets/projectData.json'
import bioJson from '../assets/bio.json'

//Icons
import emailLogo from '../assets/email.svg';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
import designerTag from '../assets/designer-tag.svg';
import engineerTag from '../assets/engineer-tag.svg';
import developerTag from '../assets/developer-tag.svg';
import researcherTag from '../assets/researcher-tag.svg';



const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);
    const isScrollLocked = useRef(false);  // Lock scroll flag
    const touchStartY = useRef(null);

    // Load data json  files
    const [projectData, setProjectData] = useState(projectJson.projects);
    const [bioData, setBioData] = useState(bioJson.bio);

    const rightDivRef = useRef(null);
    const textRef = useRef([]);

    //Load this file with data you want to be shown on the homescreen
    const homeData = [
        { src: bioData.summary.image, title: bioData.summary.title, text: bioData.summary.tag, url:'/about' },
        { src: projectData[0].details.contributions.details[0].contributionImage, title: projectData[0].name, text: projectData[0].tagLine, url:projectData[0].path },
        { src: projectData[5].image, title: projectData[5].name, text: projectData[5].tagLine, url:projectData[5].path },
        { src: projectData[1].details.contributions.details[2].contributionImage, title: projectData[1].name, text: projectData[1].tagLine, url:projectData[1].path }
    ];

    // Track the accumulated scroll distance
    const scrollDistance = useRef(0);

    const handleScroll = (e) => {
        e.preventDefault();

        if (animating || isScrollLocked.current) return;

        const delta = e.deltaY;
        let normalizedDelta = delta;

        if (Math.abs(delta) > 10) {
            normalizedDelta = delta / Math.abs(delta) * 50;
        } else if (Math.abs(delta) < 10) {
            normalizedDelta = 0;
        }

        scrollDistance.current += normalizedDelta;

        if (Math.abs(scrollDistance.current) > 100) {
            scrollDistance.current = 0;
        }

        if (Math.abs(scrollDistance.current) > 10) {
            let newIndex = currentIndex;

            if (scrollDistance.current > 0 && currentIndex < homeData.length - 1) {
                newIndex++;
                setScrollDirection("down");
            } else if (scrollDistance.current < 0 && currentIndex > 0) {
                newIndex--;
                setScrollDirection("up");
            }

            if (newIndex !== currentIndex) {
                setAnimating(true);
                isScrollLocked.current = true;

                setCurrentIndex(newIndex);
                scrollToIndex(newIndex);

                scrollDistance.current = 0;
            }
        }
    };

    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (animating || isScrollLocked.current) return;

        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartY.current - touchEndY;

        if (Math.abs(deltaY) > 50) {
            let newIndex = currentIndex;

            if (deltaY > 0 && currentIndex < homeData.length - 1) {
                newIndex++;
                setScrollDirection("down");
            } else if (deltaY < 0 && currentIndex > 0) {
                newIndex--;
                setScrollDirection("up");
            }

            if (newIndex !== currentIndex) {
                setAnimating(true);
                isScrollLocked.current = true;

                setCurrentIndex(newIndex);
                scrollToIndex(newIndex);
            }
        }
    };

    useEffect(() => {
        const unlockScroll = () => {
            isScrollLocked.current = false;
            setAnimating(false);
        };

        document.addEventListener('wheel', handleScroll);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.removeEventListener('wheel', handleScroll);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentIndex, animating]);

    const handleAnimationEnd = () => {
        setAnimating(false);  // End animation
        isScrollLocked.current = false;  // Unlock scroll
    };

    const scrollToIndex = (index) => {

        const rightDiv = rightDivRef.current;
        if (rightDiv) {
            const imageHeight = rightDiv.scrollHeight / homeData.length;
            rightDiv.scrollTo({ top: index * imageHeight, behavior: 'smooth' });
        }
    };

    const { scrollYProgress } = useScroll({ container: rightDivRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 100,
        restDelta: 0.001
    });

    useEffect(() => {
        setCurrentIndex(0);  // Set initial index
        const rightDiv = rightDivRef.current;
        if (rightDiv) {
            scrollToIndex(0);  // Initial scroll to the first index
        }
    }, []);

    return (
        <div className="container" onWheel={handleScroll}>
            <div className="left-div">
                <div
                    className={`text ${scrollDirection === "down" ? "text-entering-right" : "text-entering-left"} `}
                    key={`current-${currentIndex}`}
                    ref={(el) => textRef.current[currentIndex] = el}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <h1 className='title-text'>{homeData[currentIndex].title}</h1>
                    <p className='tag-text'>{homeData[currentIndex].text}</p>
                    {currentIndex === 0 ?(
                        <div className='bio-add'>
                            <div className='skill-list'>
                                <img className="skill-tag" src={designerTag}></img>
                                <img className="skill-tag" src={developerTag}></img>
                                <img className="skill-tag" src={engineerTag}></img>
                                <img className="skill-tag" src={researcherTag}></img>
                            </div>

                            <div className='contacts'>
                                {/* <p className='social-text'>Find me:</p> */}
                                <a className="social-link" href="https://www.linkedin.com/in/tylermwebster" target="_blank"><img className="link-img" src={linkedInLogo} alt="LinkedIn logo"></img></a>
                                <a className="social-link" href="mailto: TylerMichaelWebster@gmail.com"><img className="link-img" src={emailLogo} alt="Email logo"></img></a>
                                <a className="social-link" href="https://github.com/tmwebste" target="_blank"><img className="link-img" src={githubLogo} alt="Github logo"></img></a>
                            </div>
                            <Link className='body-button' to="/about">{"About Me"}</Link>
                            
                        </div>):(
                            <div className='bio-add'>
                                <Link className='body-button' to={homeData[currentIndex].url}>{"See Project"}</Link>
                            </div>
                        )}
                    

                </div>
                <motion.div
                    className="progress-bar"
                    style={{ scaleX }}
                />
            </div>

            <div className="right-div" ref={rightDivRef}>
                {/* <img key={'background'} src={'right-bg.png'} className="right-bg" /> */}
                <div className='right-bg'>
                    <div className='blob-1'></div>
                    <div className='blob-2'></div>
                    <div className='blob-3'></div>
                </div>
                {homeData.map((img, index) => (
                    // <img key={index} src={img.src} alt={`Image ${index + 1}`} className="snap-image" />
                    <div className='snap-image'>
                        <Link className="project-link"  to={homeData[index].url} ><img key={index} src={img.src} alt={`Image ${index + 1}`} className="floating-image" /></Link>
                    </div>


                ))}
            </div>
            {currentIndex === 0 ?
                <div className="down-arrow" style={{ opacity: 1, transition: 'opacity .5s ease-in-out' }}>
                    <svg className="down-arrow-svg" width="30px" height="30px" viewBox="0 0 20 20">

                        <title>arrow_down</title>
                        <desc>A Down Arrow</desc>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -6599.000000)" fill="none">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M103.707257,6450.11258 C104.097581,6449.72125 104.097581,6449.0877 103.707257,6448.69736 C103.316933,6448.30603 102.685027,6448.30603 102.295701,6448.69736 L95.8578462,6455.14292 C95.5433906,6455.4582 94.9983342,6455.235 94.9983342,6454.78962 L94.9983342,6439.98385 C94.9983342,6439.43137 94.5590946,6439 94.0080486,6439 L94.0040555,6439 C93.4530095,6439 93.0017907,6439.43137 93.0017907,6439.98385 L93.0017907,6454.78962 C93.0017907,6455.235 92.4717084,6455.4582 92.1572528,6455.14292 L85.7004312,6448.66634 C85.3111053,6448.275 84.6811958,6448.275 84.2908715,6448.66634 L84.2918698,6448.66634 C83.9025438,6449.05667 83.9025438,6449.69022 84.2928681,6450.08156 L92.6034803,6458.41374 L92.6034803,6458.41374 C93.3831305,6459.19542 94.6479408,6459.19542 95.427591,6458.41374 C95.6072799,6458.23259 103.887944,6449.93143 103.707257,6450.11258" >
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div> :
                <div className="down-arrow" style={{ opacity: 0, transition: 'opacity .4s ease-in-out' }}>
                    <svg className="down-arrow-svg" width="30px" height="30px" viewBox="0 0 20 20">

                        <title>arrow_down</title>
                        <desc>A Down Arrow</desc>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -6599.000000)" fill="none">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M103.707257,6450.11258 C104.097581,6449.72125 104.097581,6449.0877 103.707257,6448.69736 C103.316933,6448.30603 102.685027,6448.30603 102.295701,6448.69736 L95.8578462,6455.14292 C95.5433906,6455.4582 94.9983342,6455.235 94.9983342,6454.78962 L94.9983342,6439.98385 C94.9983342,6439.43137 94.5590946,6439 94.0080486,6439 L94.0040555,6439 C93.4530095,6439 93.0017907,6439.43137 93.0017907,6439.98385 L93.0017907,6454.78962 C93.0017907,6455.235 92.4717084,6455.4582 92.1572528,6455.14292 L85.7004312,6448.66634 C85.3111053,6448.275 84.6811958,6448.275 84.2908715,6448.66634 L84.2918698,6448.66634 C83.9025438,6449.05667 83.9025438,6449.69022 84.2928681,6450.08156 L92.6034803,6458.41374 L92.6034803,6458.41374 C93.3831305,6459.19542 94.6479408,6459.19542 95.427591,6458.41374 C95.6072799,6458.23259 103.887944,6449.93143 103.707257,6450.11258" >
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            }

        </div>
    );
};

export default Home;
