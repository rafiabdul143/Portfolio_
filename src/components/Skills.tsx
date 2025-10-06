import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaAndroid, FaMicrochip, FaReact, FaHtml5, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiAndroidstudio, SiTailwindcss, SiDotnet, SiMongodb, SiMysql, SiKubernetes, SiFirebase } from "react-icons/si";

const techStack = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: ".NET", icon: <SiDotnet className="text-indigo-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-sky-400" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Linux", icon: <FaLinux className="text-gray-300" /> },
  { name: "Arduino IDE", icon: <FaAndroid className="text-green-500" /> },
  { name: "IoT / MCU", icon: <FaMicrochip className="text-red-400" /> },
  { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
];

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
  }),
};

const SkillsStack = () => {
  // Split techStack into rows: 6 cards per row for desktop
  const columns = 6;
  const rows = [];
  for (let i = 0; i < techStack.length; i += columns) {
    rows.push(techStack.slice(i, i + columns));
  }

  return (
    <div className="relative pt-24 pb-32 bg-[#0b0f1a] text-white overflow-visible">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1f2c4f] to-[#0b0f1a]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          My <span className="text-[#3a6fa5]">Tech Stack</span>
        </motion.h3>

        <div className="flex flex-col gap-8">
          {rows.map((row, rowIndex) => {
            const rowRef = useRef<HTMLDivElement>(null);
            const rowInView = useInView(rowRef, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={rowIndex}
                ref={rowRef}
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center`}
                custom={rowIndex}
                variants={rowVariants}
                initial="hidden"
                animate={rowInView ? "visible" : "hidden"}
              >
                {row.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer 
                               bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#3a6fa5]/50 transition-colors aspect-square"
                    whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(58,111,165,0.7)" }}
                  >
                    <div className="text-5xl mb-3">{tech.icon}</div>
                    <span className="text-lg font-semibold">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsStack;
