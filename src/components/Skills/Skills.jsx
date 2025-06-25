// src/components/Skills/Skills.jsx
import React, { useContext } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { ThemeContext } from "../../theme-context.jsx";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="skills"
      className={`py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom ${theme === 'light' ? 'light-bg' : ''}`}
    >
      {/* Section Title */}
      <div className={`text-center mb-8 ${theme === 'light' ? 'light-section-title' : ''}`}>
        <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'light' ? 'light-section-title' : 'text-white'}`}>SKILLS</h2>
        <div className={`w-24 h-1 ${theme === 'light' ? 'bg-pink-400' : 'bg-[#8245ec]'} mx-auto mt-2`}></div>
        <p className={`mt-4 text-lg font-semibold ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className={`px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border shadow-[0_0_20px_1px_rgba(249,168,212,0.3)] ${theme === 'light' ? 'light-card' : 'bg-gray-900 backdrop-blur-md border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'}`}
          >
            <h3 className={`text-2xl sm:text-3xl font-semibold mb-4 text-center ${theme === 'light' ? 'light-text' : 'text-gray-400'}`}>
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-center space-x-2 border-2 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center ${theme === 'light' ? 'border-pink-300 bg-pink-50' : 'border-gray-700 bg-transparent'}`}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className={`text-xs sm:text-sm ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-300'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
