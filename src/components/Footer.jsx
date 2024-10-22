import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Aleema Khan. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.instagram.com/i._.aleemakhan/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/aleemakhan17/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/khanaleema" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 hover:text-gray-300">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
