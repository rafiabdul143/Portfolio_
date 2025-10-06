import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Resume.pdf";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
const navigate = useNavigate();

  const titles = [
    "Full-Stack Developer",
    ".NET Developer",
    "Desktop Developer",
    "IoT Enthusiast",
    "UI/UX Designer",
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % titles.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      
      {/* ==== Background ==== */}
      <div className="absolute inset-0">
        {/* Soft gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2c4f] via-[#01081e] to-black opacity-90"></div>

        {/* Subtle moving grid */}
{/* Subtle moving grid */}
<div className="absolute inset-0
  bg-[linear-gradient(90deg,#111 2px,transparent 2px),
      linear-gradient(#111 2px,transparent 2px)]
  bg-[size:80px_80px]
  animate-[background-position_30s_linear_infinite]">
</div>

</div>

      {/* ==== Content ==== */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Name with animated gradient glow */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f6dc5] via-[#4fa0f1] to-[#033f78] animate-gradient-x">
            Abdul Rafi
          </span>
        </motion.h1>

        {/* Animated Titles */}
        <div className="text-2xl mb-8 text-gray-300 min-h-[2rem] flex justify-center items-center relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="absolute text-[#3a6fa5] px-2 whitespace-nowrap"
            >
              {titles[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
        >
          Crafting robust software and intelligent systems with clean code and scalable architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full"
        ><a
  href={resume}
  download="Rafi_Resume.pdf"
  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#1f4e7a] to-[#3a6fa5] text-white hover:from-[#3a6fa5] hover:to-[#1f4e7a] transition-all duration-300 font-semibold shadow-md shadow-[#3a6fa533]"
>
  <Download className="w-5 h-5" />
  Download Resume
</a>


       
    <button
  onClick={() => navigate("/projects")} // route of your Projects page
  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-[#3a6fa5] text-[#3a6fa5] hover:bg-[#3a6fa5] hover:text-black transition-all duration-300 font-semibold shadow-md"
>
  View Projects
</button>


        </motion.div>

        {/* Scroll Indicator */}
     
      </div>

      {/* Tailwind animation for gradient text */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
          }
          @keyframes background-position {
            0% { background-position: 0 0; }
            100% { background-position: 160px 160px; }
          }
          .animate-[background-position_30s_linear_infinite] {
            animation: background-position 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
