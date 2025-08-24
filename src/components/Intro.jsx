import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IntroText = () => {
  const linesRef = useRef([]);

  const lines = [
    "Hi, I'm Endhrajith — a passionate full stack developer and creative designer.",
    "I craft seamless digital experiences with code, colors, and bold ideas.",
  ];

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.4,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-2 z-15 px-4 text-center">
      {lines.map((line, index) => (
        <div
          key={index}
          ref={(el) => (linesRef.current[index] = el)}
          className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wider text-white z-10 leading-relaxed"
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default IntroText;
