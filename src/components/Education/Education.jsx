import React, { useContext } from "react";
import { education } from "../../constants"; // Import the education data
import { ThemeContext } from "../../theme-context.jsx";

const Education = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="education"
      className={`py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 ${theme === 'light' ? 'light-bg' : ''}`}
    >
      {/* Section Title */}
      <div className={`text-center mb-16 ${theme === 'light' ? 'light-section-title' : ''}`}>
        <h2 className={`text-4xl font-bold ${theme === 'light' ? 'light-section-title' : 'text-white'}`}>EDUCATION</h2>
        <div className={`w-32 h-1 ${theme === 'light' ? 'bg-pink-400' : 'bg-purple-500'} mx-auto mt-4`}></div>
        <p className={`mt-4 text-lg font-semibold ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative flex justify-center">
        {/* Vertical line */}
        <div className={`absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-white'} h-full`}></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            {/* Timeline Circle */}
            <div className={`absolute sm:left-1/2 left-0 transform -translate-x-1/2 border-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 ${theme === 'light' ? 'bg-pink-200 border-pink-400' : 'bg-gray-400 border-[#8245ec]'}`}>
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border backdrop-blur-md shadow-[0_0_20px_1px_rgba(249,168,212,0.3)] ${theme === 'light' ? 'light-card' : 'border-white bg-gray-900'}`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className={`w-24 h-16 rounded-md overflow-hidden ${theme === 'light' ? 'bg-pink-100' : 'bg-white'}`}>
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className={`text-xl sm:text-xl font-semibold ${theme === 'light' ? 'light-text' : 'text-white'}`}>
                      {edu.degree}
                    </h3>
                    <h4 className={`text-md sm:text-sm ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-300'}`}>
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className={`text-sm mt-2 ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-500'}`}>{edu.date}</p>
                </div>
              </div>

              <p className={`mt-4 font-bold ${theme === 'light' ? 'light-text' : 'text-gray-400'}`}>Grade: {edu.grade}</p>
              {edu.Campus && (
                <p className={`mt-2 font-semibold ${theme === 'light' ? 'light-text' : 'text-gray-400'}`}>Campus: {edu.Campus}</p>
              )}
              <p className={`mt-4 ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
