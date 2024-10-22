import React from 'react';
import project1 from '../assets/world.png';
import project2 from '../assets/project2.webp';

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-100 p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        <div className="shadow-lg rounded-lg p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
          <img src={project1} alt="Project 1" className="rounded-lg mb-4" />
          <h3 className="text-2xl font-bold mt-4">React 19 Project</h3>
          <p className="text-gray-600 mt-2">This project covers React 19 features, dynamic routes, Axios API, and responsive web design.</p>
          <a href="https://heartfelt-granita-ed7fe2.netlify.app/" target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-500 hover:underline text-lg">View Live</a>
        </div>

        <div className="shadow-lg rounded-lg p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
          <img src={project2} alt="Project 2" className="rounded-lg mb-4" />
          <h3 className="text-2xl font-bold mt-4">E-Commerce Website</h3>
          <p className="text-gray-600 mt-2">A fully responsive and feature-rich e-commerce website with a shopping cart, checkout process, and more.</p>
          <a href="https://lnkd.in/ewDjv6hM" target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-500 hover:underline text-lg">View Live</a>
        </div>
      </div>

      {/* More Projects Button */}
      <div className="text-center mt-8">
        <a 
          href="https://github.com/khanaleema" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600">
          More Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
