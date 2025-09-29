import React, { useContext } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import { ThemeContext } from '../../theme-context.jsx';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="about"
      className={`py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 ${theme === 'light' ? 'light-bg' : ''}`}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight ${theme === 'light' ? 'light-text' : 'text-white'}`}>
            Hi, Myself
          </h1>
          {/* Name */}
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight ${theme === 'light' ? 'light-text' : 'text-white'}`}>
            Sujal Bhatt
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight ${theme === 'light' ? 'light-accent' : 'text-[#8245ec]'}`}>
            <span className={theme === 'light' ? 'light-text' : 'text-white'}>I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Coder',
                'UI/UX Designer',
                'Tech-Enthusiast'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className={theme === 'light' ? 'light-accent' : 'text-[#8245ec]'}>{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className={`text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>
            I am passionate about building fast, scalable, and user-centric web applications.
            I specialize in the MERN stack, real-time systems using WebSockets, and integrating modern AI tools to create smart, interactive experiences. From multiplayer games to AI-powered platforms, I love bringing full-stack ideas to life — end to end.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1aNvAfVXf7VtTatff9hAIdFzMBck1vfSl/view"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 ${theme === 'light' ? 'bg-pink-500 text-white' : 'text-white'}`}
            style={theme === 'light' ? {
              background: 'linear-gradient(90deg, #f472b6, #ec4899)',
              boxShadow: '0 0 2px #f472b6, 0 0 2px #f472b6, 0 0 40px #f472b6',
            } : {
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Download Resume
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className={`w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 rounded-full ${theme === 'light' ? 'border-pink-400' : 'border-purple-700'}`}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sujal Bhatt"
              className={`w-full h-full rounded-full object-cover object-top drop-shadow-[0_10px_20px_rgba(249,168,212,0.5)] ${theme === 'light' ? '' : 'drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'}`}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
