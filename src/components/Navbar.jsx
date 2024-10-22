import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-4 flex justify-between items-center bg-gradient-to-r from-white to-gray-200 shadow-md backdrop-blur-md w-full">
      {/* Logo Text with Zoom Effect */}
      <span className="text-lg font-bold transition-transform duration-300 transform hover:scale-110">
        AleemaKhan
      </span>

      {/* Mobile toggle button */}
      <div className="md:hidden" onClick={toggleNavbar}>
        {isOpen ? (
          <FaTimes className="text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-2xl cursor-pointer" />
        )}
      </div>

      <ul className={`flex gap-6 md:flex ${isOpen ? 'flex-col' : 'hidden md:flex'}`}>
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#services" className="hover:text-blue-600">Services</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>

      <a 
        className="m-0 border border-orange-600 hover:bg-orange-600 hover:text-orange-50 rounded-full px-6 py-2 text-orange-600 shadow-lg shadow-orange-900/0 font-semibold" 
        href="#contact"       >
        Book a meet
      </a>
    </nav>
  );
};

export default Navbar;
