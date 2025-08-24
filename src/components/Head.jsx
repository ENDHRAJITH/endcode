import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import IntroText from './Intro';

const Head = () => {
  const textRef = useRef([]);

  const words = ['Craft.', 'Create.', 'Collaborate.', '—', 'build', 'with', 'me.'];

  useEffect(() => {
    gsap.to(textRef.current, {
      y: -20,
      duration: 0.8,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
      },
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="absolute top-[16%] left-[10%] sm:left-[15%] md:left-[21%] w-[80%] sm:w-[70%] md:w-auto">
      <div className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold text-center flex gap-2 sm:gap-4 flex-wrap justify-center z-20">
        {words.map((word, index) => (
          <div
            key={index}
            ref={(el) => (textRef.current[index] = el)}
            className="tracking-wide z-10"
          >
            {word}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <IntroText />
      </div>
    </div>
  );
};

export default Head;
