import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaHtml5, FaCss3Alt, FaJsSquare, FaLaravel, FaNodeJs, FaReact, FaGithubSquare } from 'react-icons/fa';

const skillsData = [
  { skill: <FaHtml5 className="text-red-600" />, percentage: 99, color: 'bg-red-500' },
  { skill: <FaCss3Alt className="text-blue-500" />, percentage: 100, color: 'bg-blue-500' },
  { skill: <FaJsSquare className="text-yellow-500" />, percentage: 90, color: 'bg-yellow-500' },
  { skill: <FaLaravel className="text-red-600" />, percentage: 70, color: 'bg-green-500' },
  { skill: <FaReact className="text-teal-500" />, percentage: 100, color: 'bg-teal-500' },
  { skill: <FaNodeJs className="text-green-600" />, percentage: 85, color: 'bg-green-600' },
  { skill: <FaGithubSquare className="text-gray-600" />, percentage: 100, color: 'bg-gray-600' },
];

const AboutSection = () => {
  const [zoom, setZoom] = useState(false);

  const handleZoomToggle = () => {
    setZoom(!zoom);
  };

  return (
    <section id="about" className="py-16 bg-blue-100 flex flex-col items-center  mx-auto px-4 overflow-hidden">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 transform transition-transform duration-500 hover:scale-105">Hi,</h1>
      <h2 className="text-4xl font-semibold text-pink-600 mb-8 flex items-center transform transition-transform duration-500 hover:scale-105">
        <span role="img" aria-label="wave" className="mr-2">👋</span>
        It's me, <span className="text-pink-600">Aleema Khan</span>
      </h2>
      <p className="text-lg text-gray-800 mb-4 transform transition-transform duration-500 hover:scale-105">
        I'm a passionate Web Developer, Web Designer, and Graphic Designer, focused on crafting interactive and engaging user experiences.
      </p>
      <p className="text-lg text-gray-800 mb-8 transform transition-transform duration-500 hover:scale-105">
        I specialize in various technologies and frameworks, and I am constantly exploring new tools and methodologies to enhance my skill set.
      </p>
      
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://www.linkedin.com/in/aleemakhan17/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={40} className="text-gray-800 hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/khanaleema" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={40} className="text-gray-800 hover:text-black transition duration-300" />
        </a>
        <a href="https://www.instagram.com/i._.aleemakhan/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram size={40} className="text-gray-800 hover:text-pink-500 transition duration-300" />
        </a>
      </div>

      {/* Skills Section */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
      <div className={`bg-white shadow-lg shadow-blue-500 rounded-lg p-6 w-full max-w-4xl transition-transform duration-500 transform ${zoom ? 'zoom-in rotate-in' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map(({ skill, percentage, color }, index) => (
            <div key={index} className={`flex items-center transform transition-transform duration-500 hover:scale-105`}>
              <div className="w-1/4 text-gray-700 text-center">{skill}</div>
              <div className="w-3/4">
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden relative">
                  <div
                    className={`h-2 rounded-full ${color} transform transition-transform duration-500 hover:scale-105`}
                    style={{ width: `${percentage}%`, transition: 'width 0.6s ease-in-out' }}
                  ></div>
                </div>
                <span className="text-sm text-gray-700 ml-2">{percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-light-gray {
          background-color: #f9f9f9; /* Light gray background */
        }

        /* Zoom In Effect */
        @keyframes zoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .zoom-in {
          animation: zoomIn 0.5s ease forwards;
        }

        /* Rotation Effect for Skills Fill */
        @keyframes rotateIn {
          from {
            transform: rotate(0deg);
            opacity: 0;
          }
          to {
            transform: rotate(360deg);
            opacity: 1;
          }
        }

        .rotate-in {
          animation: rotateIn 0.5s ease forwards;
        }

        /* Scroll Error */
        body {
          overflow-y: scroll;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
