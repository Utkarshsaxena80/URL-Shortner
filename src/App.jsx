import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import URLShortener from './components/URLShortener/URLShortener';
import ShortenedURLDisplay from './components/ShortenedURLDisplay/ShortenedURLDisplay';
import HelpSection from './components/HelpSection/HelpSection';
import Footer from './components/Footer/Footer';

// Services
import { getAllURLs, deleteURL } from './services/urlService';

// Styles
import './styles/index.css';

function App() {
  const [shortenedURLs, setShortenedURLs] = useState([]);

  // Load saved URLs from localStorage on component mount
  useEffect(() => {
    const savedURLs = getAllURLs();
    setShortenedURLs(savedURLs);
  }, []);

  // Handle URL shortening success
  const handleURLShortened = (newURL) => {
    setShortenedURLs(prevURLs => [newURL, ...prevURLs]);
    toast.success('URL shortened successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Handle URL removal
  const handleRemoveURL = (id) => {
    try {
      const updatedURLs = deleteURL(id);
      setShortenedURLs(updatedURLs);
      toast.info('URL removed from history', {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Failed to remove URL', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <URLShortener onURLShortened={handleURLShortened} />
        <ShortenedURLDisplay 
          shortenedURLs={shortenedURLs} 
          onRemoveURL={handleRemoveURL} 
        />
        <HelpSection />
      </main>
      <Footer />
      <ToastContainer 
        position="top-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;