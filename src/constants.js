// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import viteLogo from '../public/vite.svg';
import renderLogo from './assets/tech_logo/render-logo.jpg';
import cursorLogo from './assets/tech_logo/cursor.webp';
import senseLogo from './assets/work_logo/7thSense.png';
import careerLogo from './assets/work_logo/career.png';
import calpalLogo from './assets/work_logo/calpal.png';

// Education Section Logo's
import lpuLogo from './assets/education_logo/lpu.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Vite', logo: viteLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Cursor', logo: cursorLogo },
    ],
  },
];


  
  export const education = [
    {
      id: 0,
      img: lpuLogo,
      school: "Kalvium @ Lovely Professional University (LPU)",
      date: "2024 – 2028 (Ongoing)",
      grade:"10 CGPA",
      Campus: "Jalandhar, Punjab",
      desc: "I am currently pursuing my B.Tech in Computer Science with a specialization in Software Product Engineering through Kalvium's industry-integrated program at Lovely Professional University. This cutting-edge curriculum emphasizes real-world software engineering practices, product development, and modern tech stacks.\n\nThrough hands-on projects, agile team experiences, and continuous collaboration with industry experts, I am building a strong foundation in areas like Data Structures & Algorithms, Full-Stack Web Development, System Design, and DevOps. The program also fosters critical thinking, problem-solving, and software craftsmanship — preparing me to thrive in high-impact engineering roles.",
      degree: "Bachelor of Technology –  Computer Science (Software Product Engineering)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "7th Sense",
      description:
        "A fast-paced multiplayer quiz game built with the MERN stack and WebSockets. Players join real-time 1v1 battles with questions generated using AI models like Mistral and Ollama. Designed for low latency and high replayability, it offers a smooth, engaging experience through modular design and responsive UI.",
      image: senseLogo,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "AI (Mistral, Ollama)"],
      github: "https://github.com/kalviumcommunity/S65_Sujal_Bhatt_Capstone_7thSense",
      webapp: "https://7th-sense.netlify.app/",
    },
    {
      id: 1,
      title: "Career-Craft-AI",
      description:
        "An AI-powered career platform that helps users build resumes, search jobs, and prepare for interviews in real time. Integrated with LLMs like Mistral and Gemini, it offers smart suggestions, instant portfolio generation, and personalized insights — all within a fast, full-stack experience.",
      image: careerLogo,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "LLMs (Mistral, Gemini)"],
      github: "https://github.com/Yagna123k/CAREER-CRAFT-AI",
      webapp: "https://career-craft-ai.vercel.app/",
    },
    {
      id: 2,
      title: "CalPal - AI Calendar Assistant",
      description:
        "An intelligent calendar management system that integrates Google Calendar with Google Gemini AI for natural language event scheduling and management. Users can interact conversationally with the AI to create, modify, and manage calendar events using natural language commands. Built with FastAPI backend for robust API handling and Streamlit frontend for an intuitive user interface.",
      image: calpalLogo, // You can replace this with your project image
      tags: ["Python", "FastAPI", "Streamlit", "Google Calendar API", "Google Gemini AI", "REST API", "Natural Language Processing"],
      github: "https://github.com/SujalBhatt/CalPal",
      webapp: "https://calpal.up.railway.app/",
    },
  ];    

export const LIGHT_MODE_COLORS = {
  background: '#ffffff',
  text: '#222222',
  accent: '#8245ec',
  card: '#f3f4f6',
  border: '#e5e7eb',
};  