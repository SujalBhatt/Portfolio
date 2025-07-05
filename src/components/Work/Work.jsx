import React, { useContext } from "react";
import { projects } from "../../constants";
import { ThemeContext } from "../../theme-context.jsx";

const Work = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const { theme } = useContext(ThemeContext);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className={`py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative ${theme === 'light' ? 'light-bg' : ''}`}
    >
      {/* Section Title */}
      <div className={`text-center mb-16 ${theme === 'light' ? 'light-section-title' : ''}`}>
        <h2 className={`text-4xl font-bold ${theme === 'light' ? 'light-section-title' : 'text-white'}`}>PROJECTS</h2>
        <div className={`w-32 h-1 ${theme === 'light' ? 'bg-pink-400' : 'bg-purple-500'} mx-auto mt-4`}></div>
        <p className={`mt-4 text-lg font-semibold ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={`border rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-pink-300/50 hover:-translate-y-2 transition-transform duration-300 ${theme === 'light' ? 'light-card' : 'border-white bg-gray-900 backdrop-blur-md'}`}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'light-text' : 'text-white'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 pt-4 line-clamp-3 ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-500'}`}>
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-block text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2 ${theme === 'light' ? 'bg-pink-200 text-pink-700' : 'bg-[#251f38] text-purple-500'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className={`rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative ${theme === 'light' ? 'light-card-strong' : 'bg-gray-900'}`}>
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className={`text-3xl font-bold hover:text-pink-500 ${theme === 'light' ? 'text-pink-700' : 'text-white'}`}
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className={`w-full flex justify-center px-4 ${theme === 'light' ? 'bg-pink-100' : 'bg-gray-900'}`}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className={`lg:text-3xl font-bold mb-4 text-md ${theme === 'light' ? 'light-text' : 'text-white'}`}>
                  {selectedProject.title}
                </h3>
                <p className={`mb-6 lg:text-base text-xs ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs font-semibold rounded-full px-2 py-1 ${theme === 'light' ? 'bg-pink-200 text-pink-700' : 'bg-[#251f38] text-purple-500'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-1/2 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center ${theme === 'light' ? 'bg-pink-300 hover:bg-pink-400 text-pink-900' : 'bg-gray-800 hover:bg-purple-800 text-gray-400'}`}
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-1/2 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center ${theme === 'light' ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-purple-600 hover:bg-purple-800 text-white'}`}
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
