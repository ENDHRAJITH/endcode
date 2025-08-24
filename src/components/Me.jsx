import React, { useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaGithub } from "react-icons/fa"; // 👈 added

gsap.registerPlugin(ScrollTrigger);

const Me = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="panel bg-[#060616] min-h-screen w-screen flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 text-center md:text-left">
      {/* Image Section */}
      <img
        ref={imgRef}
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-[400px] md:h-[90%] object-cover rounded-2xl shadow-lg"
        src={assets.Me}
        alt="About Me"
      />

      {/* Typing Text Section */}
      <div className="text-white max-w-md md:max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Me</h2>

        <TypeAnimation
          sequence={[
            "I’m a passionate and adaptable Full Stack Developer currently pursuing a B.E. in Electronics and Communication Engineering, with strong skills in React, Tailwind CSS, Firebase, and JavaScript. During my internship, I gained hands-on experience in CI/CD pipelines, Docker containerization, GitHub-based deployments  and monitoring systems. I’ve built scalable web applications and smart incident management tools, focusing on clean code and performance optimization. I’m actively expanding my backend knowledge with Node.js, Express, and MongoDB, while exploring cloud-native DevOps practices.",
            1000,
          ]}
          wrapper="p"
          speed={70}
          className="text-sm sm:text-base leading-relaxed sm:leading-7 mb-6 px-2 md:px-0"
          cursor={true}
        />

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-2xl">
          <a 
            href="https://www.instagram.com/codeend._?igsh=NzZsdDYycnB3eXo=" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://github.com/ENDHRAJITH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-black transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Me;

