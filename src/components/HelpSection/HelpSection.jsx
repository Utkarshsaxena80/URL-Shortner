import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './HelpSection.css';

const faqs = [
  {
    id: 1,
    question: "What is LinkByte URL shortener?",
    answer: "LinkByte is a free URL shortening service that allows you to create shorter, more manageable links from long URLs. These shortened links are easier to share, remember, and track."
  },
  {
    id: 2,
    question: "Are the shortened links permanent?",
    answer: "Yes, once created, your shortened links will work indefinitely. However, since this is a demo application, the links are stored in your browser's local storage, so clearing your browser data will remove your shortened links."
  },
  {
    id: 3,
    question: "Is there a limit to how many URLs I can shorten?",
    answer: "In this demo version, there's no hard limit on the number of URLs you can shorten. However, since we're using local storage, the practical limit depends on your browser's storage capacity."
  },
  {
    id: 4,
    question: "Can I customize the shortened URLs?",
    answer: "In the current version, URLs are automatically assigned a random short code. Custom URL options may be available in future updates."
  },
  {
    id: 5,
    question: "Are there any statistics for my shortened links?",
    answer: "The current version doesn't include click tracking or analytics. This is a feature we plan to add in future updates."
  },
  {
    id: 6,
    question: "How do I delete a shortened URL?",
    answer: "You can delete any shortened URL by clicking the trash icon next to the link in the history section. This will permanently remove the link from your history."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="faq-item"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <motion.div
          className={`faq-arrow ${isOpen ? 'active' : ''}`}
          initial={false}
        >
          <FaChevronDown />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="faq-answer-inner">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HelpSection = () => {
  return (
    <section id="help" className="help-section">
      <div className="container">
        <motion.div 
          className="help-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Get answers to common questions about our URL shortener service</p>
          
          <div className="faqs">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpSection;