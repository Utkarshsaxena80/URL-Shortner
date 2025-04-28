import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaArrowRight } from 'react-icons/fa';
import './URLShortener.css';
import { shortenURL } from '../../services/urlService';

const URLShortener = ({ onURLShortened }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    // Basic URL format validation
    try {
      // Add http:// if not present
      const urlToValidate = !url.startsWith('http') ? `http://${url}` : url;
      new URL(urlToValidate); // This will throw if invalid
      
      setError('');
      setIsLoading(true);
      
      try {
        const result = await shortenURL(url);
        onURLShortened(result);
        setUrl('');
      } catch (error) {
        setError('Failed to shorten URL. Please try again.');
        console.error('Error shortening URL:', error);
      } finally {
        setIsLoading(false);
      }
    } catch (e) {
      setError('Please enter a valid URL');
    }
  };
  
  return (
    <section id="shortener" className="url-shortener">
      <div className="container">
        <motion.div 
          className="shortener-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Shorten Your URL</h2>
          <p className="section-subtitle">Paste your long URL below to create a short, shareable link</p>
          
          <form onSubmit={handleSubmit} className="shortener-form">
            <div className="form-group">
              <div className="input-icon">
                <FaLink className="icon" />
                <input 
                  type="text" 
                  placeholder="Paste your long URL here..." 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={error ? 'input-error' : ''}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
            
            <motion.button 
              type="submit" 
              className="shorten-button"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <span className="spinner"></span>
              ) : (
                <>
                  Shorten <FaArrowRight className="button-icon" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default URLShortener;