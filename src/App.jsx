import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;