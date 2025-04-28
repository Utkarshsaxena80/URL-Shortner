import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck, FaTrash, FaExternalLinkAlt } from 'react-icons/fa';
import './ShortenedURLDisplay.css';

const ShortenedURLDisplay = ({ shortenedURLs, onRemoveURL }) => {
  const [copiedId, setCopiedId] = useState(null);
  
  const handleCopyToClipboard = async (url, id) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };
  
  if (!shortenedURLs.length) {
    return null;
  }
  
  return (
    <section id="history" className="shortened-urls">
      <div className="container">
        <motion.div 
          className="results-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Your Shortened URLs</h2>
          <div className="urls-list">
            <AnimatePresence>
              {shortenedURLs.map((item) => (
                <motion.div 
                  key={item.id}
                  className="url-item"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="url-details">
                    <div className="original-url" title={item.originalUrl}>
                      {item.originalUrl}
                    </div>
                    <div className="shortened-url">
                      <a href={item.shortUrl} target="_blank" rel="noopener noreferrer">
                        {item.shortUrl} <FaExternalLinkAlt className="external-icon" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="url-actions">
                    <motion.button
                      className="action-button copy-button"
                      onClick={() => handleCopyToClipboard(item.shortUrl, item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copiedId === item.id ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 15 }}
                        >
                          <FaCheck className="copy-icon check" />
                          <span>Copied!</span>
                        </motion.div>
                      ) : (
                        <>
                          <FaCopy className="copy-icon" />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                    
                    <motion.button
                      className="action-button delete-button"
                      onClick={() => onRemoveURL(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTrash className="delete-icon" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShortenedURLDisplay;