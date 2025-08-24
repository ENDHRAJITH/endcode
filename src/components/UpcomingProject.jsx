import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { assets } from "../assets/assets";

export const UpcomingProject = () => {
  return (
    <section className="panel w-screen min-h-screen bg-[#060616] flex items-center justify-center px-6 py-10">

       
      <div
        className="max-w-6xl w-full bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl
                   transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fadeInUp
                   flex flex-col gap-10"
      >
        {/* Project Header */}
        <h1 className="text-2xl text-white font-500" >Real-Time Project</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Logo / Image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
            srcSet={assets.ce}
               alt="CodeEthnics"
              className="rounded-xl w-full h-64 md:h-full object-contain animate-fadeIn"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full md:w-1/2">
            <h3 className="text-4xl font-bold mb-4 animate-fadeIn delay-100 text-white">
              CodeEthnics – Staff Based Coding Platform
            </h3>
            <p className="text-base md:text-lg mb-6 text-gray-300 animate-fadeIn delay-200 leading-relaxed">
              <span className="font-semibold text-white">CodeEthnics</span> is an upcoming
              staff-driven coding platform where{" "}
              <span className="text-white font-semibold">staff members can create and assign
              coding challenges</span> to students. Students can{" "}
              <span className="text-white font-semibold">participate in tests, track progress,</span> 
              and receive instant feedback.  
              This project focuses on building a structured coding environment for both staff
              and students to improve engagement, assessment, and skill development.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 animate-fadeIn delay-300">
              <a
                href="https://code-ethnics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 text-lg transition-colors"
              >
                <FiExternalLink /> Platform Link
              </a>
              <a
                href="https://codeethnics.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 text-lg transition-colors"
              >
                <FiExternalLink /> Portfolio Link
              </a>
            </div>
          </div>
        </div>

        {/* Tools Used */}
        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-4">
            {[
          { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Express JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
  { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg", category: "backend" },
  { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", category: "backend" },
 
  
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "progdevops" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "progdevops" },
   { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://tse3.mm.bing.net/th/id/OIP.mFNmwiH8FJ-xUN1RXj-o-wHaDt?pid=Api&P=0&h=180" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "GSAP", icon: "https://tse2.mm.bing.net/th/id/OIP.AqIITqKQY2Eew24atvnmnQHaDt?pid=Api&P=0&h=180" },
  { name: "AOS", icon: "https://i.ytimg.com/vi/RbquCHhExIo/hqdefault.jpg" },
  { name: "Framer Motion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },

            ].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-xl text-white font-medium"
              >
                <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                {tool.name}
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Team Members</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "Endhrajith T", img: "/team/aravind.png" },
              { name: "EzhilArasan N", img: "/team/praveen.png" },
              { name: "Dharshan B", img: "/team/sanjay.png" },
              { name: "Aravind A", img: "/team/vignesh.png" },
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl
                           border border-white/20 shadow-lg hover:scale-105 transition-transform"
              >
                 
                <p className="text-white font-medium">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
