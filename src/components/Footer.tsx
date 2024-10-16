import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition duration-300">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;