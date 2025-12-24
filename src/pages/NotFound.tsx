import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertTriangle, Upload, Book } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-light-bg px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="bg-warning/10 p-6 rounded-full">
          <AlertTriangle className="h-20 w-20 text-warning" />
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Oops! Looks like you plowed into the wrong field 🌾
      </motion.h1>
      
      <motion.p 
        className="text-light-text text-lg text-center max-w-md mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Don't worry! Let's help you find what you're looking for.
      </motion.p>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl w-full mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link 
          to="/" 
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Home className="h-8 w-8 text-primary mb-3" />
          <span className="text-dark-text font-medium">Go to Homepage</span>
        </Link>

        <Link 
          to="/disease-detection" 
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Upload className="h-8 w-8 text-secondary mb-3" />
          <span className="text-dark-text font-medium">Upload Leaf Image</span>
        </Link>

        <Link 
          to="/encyclopedia" 
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Book className="h-8 w-8 text-accent-dark mb-3" />
          <span className="text-dark-text font-medium">Disease Encyclopedia</span>
        </Link>
      </motion.div>

      <motion.div
        className="w-full max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search for diseases, treatments, or crops..."
            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
            Search
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;