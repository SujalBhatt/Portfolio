import React from "react";

const Footer = ({ theme }) => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ${theme === 'light' ? 'bg-pink-100' : ''}`}>
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-pink-600' : 'text-purple-500'}`}>Sujal Bhatt</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className={`hover:${theme === 'light' ? 'text-pink-600' : 'text-purple-500'} text-sm sm:text-base my-1 ${theme === 'light' ? 'text-gray-600' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Copyright Text */}
        <p className={`text-sm mt-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          © 2025 Sujal Bhatt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
