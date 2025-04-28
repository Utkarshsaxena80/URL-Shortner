import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="hero-title">
            Transform Long URLs into <span className="highlight">Short Links</span>
          </h1>
          <p className="hero-subtitle">
            Create short, memorable links that redirect to your original URLs. 
            Simple, fast, and completely free.
          </p>
          <a href="#shortener" className="cta-button">
            Get Started
          </a>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="hero-illustration">
            <div className="url-card">
              <div className="url-card-content">
                <div className="url-line"></div>
                <div className="url-line url-line-short"></div>
              </div>
            </div>
            <div className="url-card url-card-alt">
              <div className="url-card-content">
                <div className="url-line"></div>
                <div className="url-line url-line-short"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;