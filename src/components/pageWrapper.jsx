import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {

    return (
        <motion.div
            initial={{ x: 100 + '%' }} // Moves off-screen based on direction
            animate={{ x: 0 }} // Moves to the center
            exit={{ x: -100 + '%' }} // Moves off-screen in the opposite direction
            transition={{ duration: 0.2, ease: 'easeInOut' }} // Smooth animation
        >
            {children}
        </motion.div>

    );
};

export default PageWrapper;