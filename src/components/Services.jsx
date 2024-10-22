import React from 'react';
import { FaCode, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaCode size={60} className="text-teal-500 mx-auto mb-4" />,
    title: "Web Development",
    description: "Building modern and scalable web applications using the latest technologies.",
    bgColor: "teal-100",
    link: "https://www.linkedin.com/in/aleemakhan17/", 
  },
  {
    icon: <FaPaintBrush size={60} className="text-pink-600 mx-auto mb-4" />,
    title: "Web Design",
    description: "Crafting visually appealing and user-friendly designs that are responsive across devices.",
    bgColor: "pink-100",
    link: "https://www.linkedin.com/in/aleemakhan17/", 
  },
  {
    icon: <FaShoppingCart size={60} className="text-orange-500 mx-auto mb-4" />,
    title: "E-Commerce Solutions",
    description: "Providing complete e-commerce solutions, including shopping carts and checkout systems.",
    bgColor: "orange-100",
    link: "https://www.linkedin.com/in/aleemakhan17/",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-blue-100 text-black py-10">
      <h2 className="text-4xl font-bold mb-6 text-center">My Services</h2>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`shadow-lg p-6 bg-white rounded-lg text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl`}>
              <div className={`flex justify-center items-center h-16 w-16 mx-auto mb-4 rounded-full bg-${service.bgColor}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-2">{service.description}</p>
              <p className="text-gray-500 text-sm italic mb-4">“Transforming ideas into reality”</p>
              <a 
                href={service.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block text-blue-500 hover:underline text-lg">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
