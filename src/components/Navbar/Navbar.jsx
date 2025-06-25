import React, { useState, useEffect, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../theme-context.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? (theme === 'light' ? 'bg-pink-100 bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md') : (theme === 'light' ? 'bg-transparent' : 'bg-transparent')
      }`}
    >
      <div className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} py-5 flex justify-between items-center`}>
        {/* Logo */}
        <div className={`text-lg font-semibold cursor-pointer ${theme === 'light' ? 'text-pink-600' : ''}`}>
          <span className={`${theme === 'light' ? 'text-pink-600' : 'text-[#8245ec]'}`}>&lt;</span>
          <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Sujal</span>
          <span className={`${theme === 'light' ? 'text-pink-600' : 'text-[#8245ec]'}`}>/</span>
          <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Bhatt</span>
          <span className={`${theme === 'light' ? 'text-pink-600' : 'text-[#8245ec]'}`}>&gt;</span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`mr-4 md:ml-4 relative w-14 h-8 flex items-center rounded-full transition-colors duration-300 focus:outline-none border-2 ${theme === 'light' ? 'bg-pink-100 border-pink-300' : 'bg-gray-800 border-gray-600'}`}
          aria-label="Toggle theme"
        >
          <span className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${theme === 'light' ? 'translate-x-6 bg-pink-400' : 'translate-x-0 bg-gray-700'}`}>
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5A4.5 4.5 0 1012 16.5a4.5 4.5 0 000-9z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.635-7.64 6.348-9.123a.75.75 0 01.908.37.75.75 0 01-.062.988A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.515-3.555.75.75 0 01.988-.062.75.75 0 01.37.908z" />
              </svg>
            )}
          </span>
          {/* Track background color transition */}
          <span className={`block w-full h-full rounded-full transition-colors duration-300 ${theme === 'light' ? 'bg-pink-200' : 'bg-gray-700'}`}></span>
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:${theme === 'light' ? 'text-pink-600' : 'text-[#8245ec]'} ${
                activeSection === item.id ? (theme === 'light' ? 'text-pink-600' : 'text-[#8245ec]') : ''
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SujalBhatt"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === 'light' ? 'text-gray-600 hover:text-pink-600' : 'text-gray-300 hover:text-[#8245ec]'}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-bhatt-168020306/"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === 'light' ? 'text-gray-600 hover:text-pink-600' : 'text-gray-300 hover:text-[#8245ec]'}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/SujalBhatt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-bhatt-168020306/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
