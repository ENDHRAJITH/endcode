import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "RMD Engineering College, Chennai",
    duration: "2022 – 2026",
    degree: "BE.ECE",
    score: 7.54,
    max: 10,
    image: "https://tse1.mm.bing.net/th/id/OIP.cr2lr1yRYpxcQo_m13LrfgHaHa?pid=Api&P=0&h=180",
  },
  {
    title: "Veludayar Higher Secondary School, Thiruvarur",
    duration: "2021 – 2022",
    degree: "HSC",
    score: 433.02,
    max: 600,
    image: "https://tse1.mm.bing.net/th/id/OIP.5zDUjG0wn60GvWz9vhQjAwAAAA?pid=Api&P=0&h=180",
  },
  {
    title: "Veludayar Higher Secondary School, Thiruvarur",
    duration: "2019 – 2020",
    degree: "SSLC",
    score: 428,
    max: 500,
    image: "https://tse1.mm.bing.net/th/id/OIP.5zDUjG0wn60GvWz9vhQjAwAAAA?pid=Api&P=0&h=180",
  },
];

const Education = () => {
  const panelRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: panelRef.current,
          start: "left center",
          end: "right center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={panelRef}
      className="panel flex flex-col items-center justify-center w-screen min-h-screen text-white px-4 sm:px-6"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-center">EDUCATION</h2>

      <div className="flex flex-col gap-5 w-full max-w-4xl">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl border border-white/20 transition duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt="icon"
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain rounded-xl bg-white/10 p-2 mb-4 sm:mb-0 sm:mr-5"
            />

            {/* Text Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{item.duration}</p>
              <p className="text-sm sm:text-base">{item.degree}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 mt-4 sm:mt-0 sm:ml-4">
              <CircularProgressbar
                value={(item.score / item.max) * 100}
                text={
                  item.degree === "BE.ECE"
                    ? item.score.toFixed(1)
                    : Math.round(item.score).toString()
                }
                styles={buildStyles({
                  textSize: "24px",
                  pathColor: "#00ffd5",
                  textColor: "#ffffff",
                  trailColor: "#ffffff33",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
