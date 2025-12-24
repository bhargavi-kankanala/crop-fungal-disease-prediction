import React, { useState, useEffect } from 'react';
import { Menu, Bell, User, Search, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { motion } from 'framer-motion';

interface NavbarProps {
  title: string;
  toggleSidebar: () => void;
}

const Navbar = ({ title, toggleSidebar }: NavbarProps) => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom h-16 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 p-1 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-dark-text" />
          </button>
          
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Keth Suraksha AI</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center justify-center flex-1 px-16">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-lighter-text" />
            </div>
            <input
              type="text"
              placeholder="Search diseases, treatments, or crops..."
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <button
            className="p-2 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-dark-text" />
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-1 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary flex items-center"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white mr-1">
                {user?.fullName?.charAt(0) || <User className="h-4 w-4" />}
              </div>
              <span className="hidden md:inline text-sm font-medium mr-1">{user?.fullName || 'Guest'}</span>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium">{user?.fullName || 'Guest'}</p>
                  <p className="text-xs text-lighter-text">{user?.location || 'No location set'}</p>
                </div>
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 text-sm hover:bg-primary/10 flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-primary/10 flex items-center text-error"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;