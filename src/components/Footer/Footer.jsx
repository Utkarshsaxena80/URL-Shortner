import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <motion.div 
          className="footer-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaLink className="footer-logo-icon" />
          <span className="footer-logo-text">LinkByte</span>
        </motion.div>
        
        <motion.div 
          className="footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          &copy; {new Date().getFullYear()} LinkByte. All rights reserved.
        </motion.div>
        
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Contact</a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;