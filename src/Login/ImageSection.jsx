import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import loginBgImage from '../assets/loginbg.png'; // your static background image

const ImageSection = () => {
  return (
    <div className="hidden lg:block lg:w-1/2 h-screen overflow-hidden relative">
      <motion.img
        src={loginBgImage}
        alt="Login Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
    </div>
  );
};

export default ImageSection;
