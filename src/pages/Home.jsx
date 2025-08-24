import React, { useRef, useState } from "react";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const btn = useRef(null);
  const [email, setEmail] = useState("");

  const handleMouseEnter = () => {
    gsap.fromTo(
      btn.current,
      { x: -2 },
      {
        x: 2,
        duration: 0.05,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  };

  const handleJoin = () => {
    if (!email) {
      toast.error("⚠ Please enter your email to join!");
      return;
    }

    toast.success(
      "👑 Welcome aboard! Our developer community launches at the end of September 🚀",
      {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #fbbf24, #facc15, #fde047)",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "12px",
        },
      }
    );
    setEmail("");
  };

  return (
    <>
      <section className="w-screen h-screen flex relative">
        <Navbar />
        <Head />

        {/* Left gradient */}
        <div
          style={{
            background: `conic-gradient(
            from 90deg,
            rgba(251, 251, 251, 1) 0%,
            rgba(0, 0, 0, 1) 100%,
            rgba(170, 170, 170, 1) 30%
          )`,
          }}
          className="xl:w-1/2 h-full mix-blend-color-dodge transform scale-y-[-1]"
        />

        {/* Right gradient */}
        <div
          style={{
            background: `conic-gradient(
            from 90deg,
            rgba(251, 251, 251, 1) 0%,
            rgba(0, 0, 0, 1) 100%,
            rgba(170, 170, 170, 1) 30%
          )`,
          }}
          className="xl:w-1/2 transform scale-x-[-1] scale-y-[-1] mix-blend-color-dodge"
        />

        {/* Input + Button */}
        <div className="absolute w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto bottom-[10%] left-1/2 transform -translate-x-1/2 rounded-xl backdrop-blur-md bg-blue-950/10 border border-white/20 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 p-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-1 font-mono outline-none text-white text-base sm:text-lg p-2 bg-transparent"
            placeholder="user@gmail.com"
          />
          <button
            ref={btn}
            onMouseEnter={handleMouseEnter}
            onClick={handleJoin}
            className="w-full sm:w-auto p-2 px-4 rounded-md bg-green-400 text-black font-semibold transition-all duration-300 hover:bg-green-500"
          >
            Let&apos;s Build
          </button>
        </div>
      </section>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
};

export default Home;
