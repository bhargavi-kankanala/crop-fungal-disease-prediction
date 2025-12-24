import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-light-text">
          <div className="mb-2 md:mb-0">
            &copy; 2025 Mobile Portal AI - Crop Fungal Disease Detection
          </div>
          
          <div className="flex items-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-error" />
            <span>for farmers across India</span>
          </div>
          
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;