import { nanoid } from 'nanoid';

const STORAGE_KEY = 'linkbyte-urls';

const loadURLs = () => {
  try {
    const storedURLs = localStorage.getItem(STORAGE_KEY);
    return storedURLs ? JSON.parse(storedURLs) : [];
  } catch (error) {
    console.error('Error loading URLs from localStorage:', error);
    return [];
  }
};

const saveURLs = (urls) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
  } catch (error) {
    console.error('Error saving URLs to localStorage:', error);
  }
};


export const shortenURL = async (originalUrl) => {
  try {
  
    const formattedOriginalUrl = !originalUrl.startsWith('http') 
      ? `http://${originalUrl}` 
      : originalUrl;
    
    // Generate a unique ID for the short URL
    const uniqueId = nanoid(8);
    
    // In a real app, you would call an API here
    // This is a simulated "API call" that returns a result after a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create shortened URL object
        const newShortUrl = {
          id: uniqueId,
          originalUrl: formattedOriginalUrl,
          shortUrl: `${window.location.origin}/s/${uniqueId}`,
          createdAt: new Date().toISOString()
        };
        const existingURLs = loadURLs();
        const updatedURLs = [newShortUrl, ...existingURLs];
        saveURLs(updatedURLs);
        
        resolve(newShortUrl);
      }, 800); 
    });
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw new Error('Failed to shorten URL');
  }
};

export const getAllURLs = () => {
  return loadURLs();
};

export const deleteURL = (id) => {
  try {
    const urls = loadURLs();
    const updatedURLs = urls.filter(url => url.id !== id);
    saveURLs(updatedURLs);
    return updatedURLs;
  } catch (error) {
    console.error('Error deleting URL:', error);
    throw new Error('Failed to delete URL');
  }
};