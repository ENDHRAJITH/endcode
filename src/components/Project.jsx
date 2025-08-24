// Project.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { assets } from "../assets/assets";

export const Project = ({ project, toolIcons }) => {
  return (
  <section className="panel w-screen min-h-screen bg-[#060616] flex items-center justify-center px-6 py-10">
  <div
    className="max-w-5xl w-full bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl
               transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fadeInUp
               flex flex-col md:flex-row items-center md:items-start gap-8"
  >
    {/* Image Section */}
    <div className="flex-shrink-0 w-full md:w-1/2">
      <img
        src={project.image}
        alt={project.name}
        className="rounded-xl w-full h-64 md:h-full object-cover animate-fadeIn"
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-between w-full md:w-1/2">
      <div>
        <h3 className="text-4xl font-bold mb-4 animate-fadeIn delay-100 text-white">
          {project.name}
        </h3>
        <p className="text-base md:text-lg mb-6 text-gray-300 animate-fadeIn delay-200">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-3 text-sm md:text-base text-white mb-6 animate-fadeIn delay-300">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg font-medium"
            >
              {toolIcons[tool] && (
                <img src={toolIcons[tool]} alt={tool} className="w-6 h-6 md:w-8 md:h-8" />
              )}
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 animate-fadeIn delay-400 mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-3xl transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-3xl transition-colors"
        >
          <FiExternalLink />
        </a>
      </div>
    </div>
  </div>
</section>

  );
};
