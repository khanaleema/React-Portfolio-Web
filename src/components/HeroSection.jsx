import React from 'react';
import heroImage from '../assets/iii.webp';
import resume from '../assets/ak.pdf'; // Update this path to where your resume is stored

const HeroSection = () => {
  return (
    <section className="py-16 flex flex-col-reverse items-center sm:flex-row gap-16 max-w-7xl mx-auto px-4">
      {/* Text Section */}
      <div className="space-y-8 relative flex-1">
        <div className="absolute opacity-[20%] w-56 blur-3xl aspect-square bg-sky-600 rounded-full"></div>
        <div className="absolute z-[-1] -top-[10%] -left-[5%] border border-dashed border-1 border-sky-400 w-64 aspect-square rounded-full"></div>
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-gray-900" style={{ lineHeight: 1.2 }}>
          Enhancing web experiences and crafting robust Websites, is my <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Passion</span>.
        </h1>
        <p className="text-gray-800">
          I am a Web Developer & Web Designer passionate about the web and its advancements and I love experimenting with tough problems.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-full px-6 py-2 text-orange-50 shadow-lg shadow-orange-900/0 font-semibold transition-transform duration-500 transform hover:scale-105" href={resume} download>
            Resume
          </a>
          {/* Social Media Icons */}
          <a className="rounded-full w-8 h-8 overflow-hidden flex items-center justify-center bg-[#55acee] text-white transition-transform duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" href="https://www.instagram.com/i._.aleemakhan/">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          </a>
          <a className="rounded-full w-8 h-8 overflow-hidden flex items-center justify-center bg-[#0077b5] text-white transition-transform duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" href="https://www.linkedin.com/in/aleemakhan17/">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a className="rounded-full w-8 h-8 overflow-hidden flex items-center justify-center bg-[#171515]/70 text-white transition-transform duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" href="https://github.com/khanaleema">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="shrink-0 relative flex-1 flex justify-center sm:justify-start">
        <div className="absolute blur-xl -top-[10%] -right-[20%] w-56 aspect-square bg-sky-600 rounded-full z-[-1]"></div>
        <div className="absolute blur-2xl -bottom-[10%] -left-[20%] w-16 aspect-square bg-orange-600 rounded-full z-[-1]"></div>
        <div className="absolute -bottom-[5%] -left-[7%] grid place-items-center border border-dashed border-1 border-orange-400 w-24 aspect-square rounded-full">
          <div className="border border-dashed border-1 border-orange-400 grid place-items-center w-[90%] aspect-square rounded-full">
            <div className="border border-dashed border-1 border-orange-400 grid place-items-center w-[87%] aspect-square rounded-full"></div>
          </div>
        </div>
        {/* Circle Image with Animation and Glow Effect */}
        <div className="relative p-1 rounded-full border-4 border-blue-500 glow-effect">
          <img className="rounded-full object-cover shadow-2xl transition-transform duration-500 transform hover:scale-105 hover:rotate-12 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96" src={heroImage} alt="profile photo of Abdelhamid" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
