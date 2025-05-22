import React from 'react';
import gifImage from '../../assets/aboutpsi.gif'; 
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const RightSection = () => {
    return (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 hidden md:flex items-center justify-center"
        >
          <img
            src={gifImage}
            alt="Dubai Animation"
            className="h-full w-auto rounded-lg shadow-lg"
          />
        </motion.div>
      );
    };

export default RightSection;
