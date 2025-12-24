import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  BarChart2,
  FileText,
  BookOpen,
  Map,
  MessageCircle,
  HelpCircle,
  Settings,
  X,
  User
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();
  
  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isOpen) {
      closeSidebar();
    }
  }, [location.pathname]);

  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      }
    },
    closed: { 
      x: '-100%',
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  const overlayVariants = {
    open: { opacity: 0.5 },
    closed: { opacity: 0 }
  };

  const menuItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <BarChart2 className="w-5 h-5" /> },
    { name: 'Disease Encyclopedia', path: '/encyclopedia', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Education', path: '/education', icon: <FileText className="w-5 h-5" /> },
    { name: 'Disease Map', path: '/map', icon: <Map className="w-5 h-5" /> },
    { name: 'Community', path: '/community', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const secondaryItems = [
    { name: 'Help & Support', path: '/help', icon: <HelpCircle className="w-5 h-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-20 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-30 lg:z-0 lg:translate-x-0 pt-16"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="lg:hidden absolute top-4 right-4">
            <button
              onClick={closeSidebar}
              className="p-1 rounded-full hover:bg-primary/10 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-dark-text" />
            </button>
          </div>

          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                {user?.fullName?.charAt(0) || <User className="h-5 w-5" />}
              </div>
              <div className="ml-3">
                <p className="font-medium text-dark-text">{user?.fullName || 'Guest'}</p>
                <p className="text-xs text-lighter-text">{user?.location || 'No location set'}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-dark-text hover:bg-primary/10'
                      }`
                    }
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="px-4 text-xs font-semibold text-lighter-text uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-2 space-y-1">
                {secondaryItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-dark-text hover:bg-primary/10'
                        }`
                      }
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="p-4 border-t">
            <div className="bg-primary/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-primary">Need expert help?</p>
              <p className="text-xs text-light-text mt-1">
                Connect with agricultural experts for personalized advice.
              </p>
              <button className="mt-2 text-xs font-medium text-white bg-primary px-3 py-1 rounded-lg hover:bg-primary-dark transition-colors">
                Contact Experts
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;