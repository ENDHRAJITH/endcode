import React from "react";
import Me from "../components/Me";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { Project } from "../components/Project";
import Certificate from "../components/Certificate";
import { assets } from "../assets/assets";

const toolIcons = {
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  "WhatsApp API": "https://cdn.simpleicons.org/whatsapp/25D366",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  Express: "https://cdn.simpleicons.org/express/white",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  "Jira API": "https://cdn.simpleicons.org/jira/0052CC",
  HTML: "https://cdn.simpleicons.org/html5/E34F26",
  CSS: "https://cdn.simpleicons.org/css3/1572B6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  PHP: "https://cdn.simpleicons.org/php/777BB4",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  LangChain: "https://avatars.githubusercontent.com/u/139458195?s=200&v=4"
};

const projects = [
  {
    name: "MERN Stack Authentication System",
    image: assets.p1,
    description:
      "A full-featured authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides secure user registration, login, password hashing, JWT-based session management, and role-based access control. Ideal for web applications requiring robust authentication and user management.",
    tools: ["React", "Tailwind CSS", "MongoDB","Node.js","Express"],
    github: "https://github.com/ENDHRAJITH/mern",
  },
  {
    name: "SAANKITHIKA 2K25 – College Symposium Website",
    image: "http://rmd.ac.in/images/campus/hoster_3.jpg",
    description:
      "Designed and developed a fully responsive, visually engaging website for Saankethika 2K25, the college symposium event of 2025. The platform centralizes event details, schedules, registrations, and updates, providing participants and visitors with a seamless and interactive experience.",
    tools: ["HTML","CSS","JavaScript"],
    github: "https://github.com/ENDHRAJITH/SAANKETHIKA-2K25",
    live: "https://saankethika2k25.netlify.app/",
  },
  {
    name: "CodeMate AI – Intelligent Coding Assistant",
    image: assets.cm,
    
    description:
      "A simple CodeMate AI is a smart chatbot designed to assist developers by providing instant coding solutions, explanations, and guidance. Built with React.js for a sleek and interactive frontend and LangChain integrated with OpenAI for powerful AI-driven responses, CodeMate AI helps programmers debug, learn, and accelerate development efficiently. Perfect for students, hobbyists, and professional developers seeking quick coding support. app with deposit, withdraw, and loan features.",
    tools: ["LangChain","React"],
    github: "https://github.com/EndhrajithThiya/codemate.io",
    live: "https://your-bank-app.live",
  },
    {
    name: "MCQ WEB APP",
    image: assets.mcq,
    description:"The MCQ Web App lets staff create/manage quizzes and students attempt them in a timed fullscreen mode.It features authentication, auto-timed questions, and live progress tracking.After submission, students get detailed results with topic-wise analysis and PDF export.Built using React, Tailwind, Firebase, and charts for analytics.",
   tools: ["React", "Tailwind CSS", "MongoDB","Node.js","Express"],
    github: "https://github.com/Aravind182/mcq_clone.git",
    live: "https://your-bank-app.live",
  },
];

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Section 1 - About Me */}
      <Me className="panel" />

      {/* Section 2 - Education */}
      <Education className="panel" />

      {/* Section 3 - Skills */}
      <Skills className="panel" />

      {/* Section 4 - Projects */}
      {projects.map((proj, i) => (
        <Project key={i} project={proj} toolIcons={toolIcons} />
      ))}

     
    </div>
  );
};

export default About;
