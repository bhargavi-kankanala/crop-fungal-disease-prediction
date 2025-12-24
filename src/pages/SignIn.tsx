import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane as Plant, Lock, User, Leaf, AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      await login(username, password);
      if (!error) {
        navigate('/');
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const formVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-br from-primary-light to-info-light"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg"
          variants={formVariants}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Plant className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-2">Mobile Portal AI</h1>
          <h2 className="text-lg text-center text-light-text mb-8">Crop Fungal Disease Detection</h2>
          
          {error && (
            <div className="bg-error-light text-error p-3 rounded-lg mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-light-text mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-lighter-text" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-light-text mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-lighter-text" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              ) : (
                <Leaf className="h-5 w-5 mr-2" />
              )}
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            
            {showHelp && (
              <motion.div 
                className="mt-6 p-4 bg-secondary/10 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h3 className="text-sm font-bold mb-2">Demo Credentials:</h3>
                <p className="text-sm mb-1">Username: <strong>farmer</strong>, Password: <strong>password</strong></p>
                <p className="text-sm">Username: <strong>expert</strong>, Password: <strong>password</strong></p>
              </motion.div>
            )}
            
            <button
              type="button"
              onClick={() => setShowHelp(!showHelp)}
              className="mt-4 text-sm text-primary hover:text-primary-dark flex mx-auto"
            >
              {showHelp ? 'Hide Help' : 'Need Help?'}
            </button>
          </form>
        </motion.div>
      </div>
      
      <footer className="bg-white bg-opacity-80 py-3 text-center text-sm text-light-text">
        © 2025 Mobile Portal AI - Crop Fungal Disease Detection
      </footer>
    </motion.div>
  );
};

export default SignIn;