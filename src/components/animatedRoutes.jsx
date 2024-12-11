// import React from "react";
import Home from '../pages/home'
import About from '../pages/about';
import Projects from '../pages/projects';
// import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageWrapper from './pageWrapper';
import Project from '../pages/project';
// import { AnimatePresence, motion } from 'framer-motion';


const pageOrder = ['/', '/about', '/projects'];

function AnimatedRoutes() {
    const location = useLocation();
    const previousPathname = useRef(location.pathname); // Holds the previous path
    const [initialized, setInitialized] = useState(false);
    const [direction, setDirection] = useState(0);

    // Use useLayoutEffect to update the previous pathname immediately after the render
    useEffect(() => {
        // Skip updating during initial render
        if (initialized) {
            // Calculate the transition direction only if there's a change in path
            const newDirection = getDirection(location.pathname);
            setDirection(newDirection); // Set the direction for the new page transition

            // Update previousPathname for the next navigation
            previousPathname.current = location.pathname; // Update previous pathname after path change
        } else {
            // Set the initialized state to true after the first render
            setInitialized(true);
        }
    }, [location.pathname, initialized]); // Dependency on pathname


    const getDirection = (currentPath) => {
        const previousPath = previousPathname.current;

        // console.log({ currentPath, previousPath }); 

        // Get the indices of the current and previous paths
        const currentIndex = pageOrder.indexOf(currentPath);
        const prevIndex = pageOrder.indexOf(previousPath);

        // Handle case where the path is invalid
        if (currentIndex === -1 || prevIndex === -1) {
            console.error('Invalid paths detected:', { currentPath, previousPath });
            return 0; // Return 0 to avoid transitions if paths are invalid
        }

        // Return 1 for forward navigation, -1 for backward navigation
        return currentIndex > prevIndex ? 1 : -1;
    };


    // const direction = getDirection();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                {/* Main Routes */}
                <Route
                    path="/"
                    element={<PageWrapper direction={direction} pageIndex={0}><Home /></PageWrapper>}
                />
                <Route
                    path="/about"
                    element={<PageWrapper direction={direction} pageIndex={1}><About /></PageWrapper>}
                />
                <Route
                    path="/projects"
                    element={<PageWrapper direction={direction} pageIndex={2}><Projects /></PageWrapper>}
                />

                {/* Project Routes */}
                <Route
                    path="/projects/mari"
                    element={<PageWrapper direction={direction} pageIndex={3}><Project projectIndex={0} adjacentIndexes={[2,5]}/></PageWrapper>}
                />
                <Route
                    path="/projects/gogo-grocery"
                    element={<PageWrapper direction={direction} pageIndex={7}><Project projectIndex={5} adjacentIndexes={[0,1]}/></PageWrapper>}
                />
                <Route
                    path="/projects/intelliride"
                    element={<PageWrapper direction={direction} pageIndex={4}><Project projectIndex={1} adjacentIndexes={[5,3]}/></PageWrapper>}
                />
                <Route
                    path="/projects/bumble-beethere"
                    element={<PageWrapper direction={direction} pageIndex={6}><Project projectIndex={3} adjacentIndexes={[1,2]}/></PageWrapper>}
                />
                <Route
                    path="/projects/vinewatch"
                    element={<PageWrapper direction={direction} pageIndex={5}><Project projectIndex={2} adjacentIndexes={[3,0]}/></PageWrapper>}
                />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
