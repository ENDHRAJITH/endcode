import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  // Frontend
  
  { "name": "HTML", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "category": "frontend" },
  { "name": "CSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "category": "frontend" },
  { "name": "JavaScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "category": "frontend" },
  { "name": "React JS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "category": "frontend" },
  { "name": "Tailwind CSS", "icon": "https://tse3.mm.bing.net/th/id/OIP.mFNmwiH8FJ-xUN1RXj-o-wHaDt?pid=Api&P=0&h=180", "category": "frontend" },
  { "name": "Bootstrap", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", "category": "frontend" },
  
  { "name": "GSAP", "icon": "https://tse2.mm.bing.net/th/id/OIP.AqIITqKQY2Eew24atvnmnQHaDt?pid=Api&P=0&h=180", "category": "frontend" },
  { "name": "AOS", "icon": "https://i.ytimg.com/vi/RbquCHhExIo/hqdefault.jpg", "category": "frontend" },
  { "name": "Framer Motion", "icon": "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png", "category": "frontend" },
  { "name": "Anime.js", "icon": "https://tse3.mm.bing.net/th/id/OIP.34NTg5dgVdWLGMdErFy5wAHaE8?pid=Api&P=0&h=180", "category": "frontend" },
  { "name": "Three.js", "icon": "https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg", "category": "frontend" },

 

   // Backend
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Express JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
  { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg", category: "backend" },
  { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", category: "backend" },

  // Database
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "database" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "database" },
  { name: "Supabase", icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", category: "database" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
   

  // UI/UX
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "uiux" },
 
  // Programming + DevOps
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "progdevops" },
  { name: "OOPs", icon: "https://cdn-icons-png.flaticon.com/512/2784/2784460.png", category: "progdevops" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "progdevops" },
  { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/139458195?s=200&v=4", category: "progdevops" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "progdevops" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "progdevops" },
   
 
   
];

const Skills = () => {
  const panelRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const el = panelRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          start: "left center",
          end: "right center",
          scrub: true,
        },
      }
    );
  }, []);

  const filteredSkills =
    filter === "all" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section
      ref={panelRef}
      className="panel flex flex-col items-center justify-center w-screen min-h-screen text-white px-4 sm:px-6"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">SKILLS</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-xl border ${filter==="all" ? "bg-white/20 border-white" : "border-white/30"}`}>All</button>
        <button onClick={() => setFilter("frontend")} className={`px-4 py-2 rounded-xl border ${filter==="frontend" ? "bg-white/20 border-white" : "border-white/30"}`}>Frontend</button>
        <button onClick={() => setFilter("backend")} className={`px-4 py-2 rounded-xl border ${filter==="backend" ? "bg-white/20 border-white" : "border-white/30"}`}>Backend</button>
        <button onClick={() => setFilter("database")} className={`px-4 py-2 rounded-xl border ${filter==="database" ? "bg-white/20 border-white" : "border-white/30"}`}>Database</button>
        <button onClick={() => setFilter("uiux")} className={`px-4 py-2 rounded-xl border ${filter==="uiux" ? "bg-white/20 border-white" : "border-white/30"}`}>UI/UX</button>
        <button onClick={() => setFilter("progdevops")} className={`px-4 py-2 rounded-xl border ${filter==="progdevops" ? "bg-white/20 border-white" : "border-white/30"}`}>Programming & DevOps</button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl w-full">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-4 rounded-xl flex flex-col items-center justify-center shadow-md transition duration-300 hover:scale-105"
          >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-3" />
            <p className="text-xs sm:text-sm font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
