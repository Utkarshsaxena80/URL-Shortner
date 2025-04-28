import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaLink className="logo-icon" />
          <h1>LinkByte</h1>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="nav-list">
            <li><a href="#shortener">Shorten</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;