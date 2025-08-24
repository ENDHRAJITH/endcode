import React from "react";
import { Download } from "lucide-react";

export const Internship = () => {
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
            src="/company-logo.png" // place your logo inside /public
            alt="Cloud Destination"
            className="rounded-xl w-full h-64 md:h-full object-contain animate-fadeIn"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h3 className="text-4xl font-bold mb-2 animate-fadeIn delay-100 text-white">
              Cloud Destination
            </h3>
            <p className="text-base text-gray-300 italic mb-4 animate-fadeIn delay-200">
              Perungudi - Thiruvanmiyur, Chennai
            </p>

            <p className="text-base md:text-lg mb-6 text-gray-300 animate-fadeIn delay-300 leading-relaxed">
              I worked as a <span className="font-semibold text-white">DevOps Intern</span> at
              Cloud Destination, where I gained hands-on experience with DevOps tools and cloud
              technologies such as Docker, GitHub, BigPanda, Honerners.io, and AgentZero.  
              This internship strengthened my foundation in <span className="text-white font-semibold">
              CI/CD pipelines</span>, containerization, and cloud infrastructure management.
            </p>
          </div>

          {/* Certificate Download */}
          <div className="flex items-center gap-4 animate-fadeIn delay-400">
            <a
              href="/certificate.pdf" // place certificate in /public
              download
              className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-white font-medium
                         hover:bg-white/30 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
