import React from 'react';
import { motion } from 'framer-motion';

import BadgesSection from '../components/BadgesSection';
import {
  Code,
  Database,
  Cpu,
  Globe,
  Award,
  BookOpen,
  GitBranch,
  Monitor,
  Zap,
  Cloud,
} from 'lucide-react';
import rafiPhoto from '../assets/rafiPhoto.jpg';

const highlights = [
  { icon: <Award className="w-5 h-5" />, title: 'Data Science Internship', description: 'NIT Trichy' },
  { icon: <Globe className="w-5 h-5" />, title: 'Cybersecurity Experience', description: 'Cisco Packet Tracer' },
  { icon: <Code className="w-5 h-5" />, title: 'Open Source Contributor', description: 'Multiple Projects' },
  { icon: <BookOpen className="w-5 h-5" />, title: 'CSE (IoT Specialization)', description: 'KITS Warangal' },
];

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS'],
  backend: ['Node.js', 'ASP.NET Core', 'Python'],
  databases: ['MongoDB', 'SQL Server', 'MySQL'],
  cloud: ['AWS (S3, EC2)', 'Azure', 'Docker/Kubernetes'],
  iot: ['C/C++', 'Microcontrollers', 'MQTT', 'Sensor Integration'],
  versionControl: ['Git', 'GitHub', 'GitLab'],
};

const softSkills = ['Problem Solving', 'Time Management', 'Communication', 'Teamwork', 'Creativity', 'Adaptability'];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#010d24] via-black to-[#030a17] opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-4xl mx-auto text-xl md:text-2xl font-light">
            Full-Stack Developer & IoT Enthusiast building <strong>scalable, real-world solutions</strong> with precision and drive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Column: Photo & Identity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center lg:items-start lg:col-span-1"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mb-8">
              <img src={rafiPhoto} alt="Abdul Rafi" className="w-full h-full object-cover" />
            </div>

            <div className="text-left w-full max-w-xs sm:max-w-none">
              <h3 className="text-2xl font-bold text-white mb-3">Abdul Rafi</h3>
              <p className="text-blue-400 font-semibold text-lg mb-4">
                Full-Stack Developer | IoT Specialist
              </p>
              <p className="text-gray-300 mb-6">
                I thrive on complex challenges, architecting and implementing <strong>smart, scalable solutions</strong>. My focus is creating innovative, seamless connections—from robust <strong>web applications</strong> to integrated <strong>IoT systems</strong>.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="mt-8 w-full">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 lg:text-left text-center border-b border-gray-800 pb-2">
                Attributes
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-800 rounded-full border border-gray-700 text-gray-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills, Highlights, Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2 space-y-10"
          >

                {/* Education */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 flex items-start gap-4 hover:border-blue-600 transition-all duration-300 shadow-xl">
              <Monitor className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">B.Tech in CSE with IoT Specialization</h3>
                <p className="text-sm text-blue-400">KITS Warangal</p>
                <p className="text-sm text-gray-400 mt-1"> CGPA: 7.73</p>
              </div>
            </div>
            {/* Technical Skills */}
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-2xl">
  <h3 className="text-2xl font-bold text-blue-400 mb-5 border-b border-gray-700 pb-3">
    Technical Toolkit
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {Object.entries(skills).map(([category, list], idx) => {
      const Icon = {
        frontend: Code,
        backend: Cpu,
        databases: Database,
        cloud: Cloud,
        iot: Zap,
        versionControl: GitBranch,
      }[category];

      const displayName =
        category === 'versionControl' ? 'DevOps/VCS' :
        category === 'iot' ? 'IoT / Embedded' :
        category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1');

      return (
        <div
          key={idx}
          className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/70 hover:shadow-blue-500/20 hover:shadow-lg"
        >
          <h4 className="font-bold text-white mb-3 flex items-center gap-3 transition-colors">
            {Icon && <Icon className="w-6 h-6 text-blue-500 group-hover:text-blue-300" />}
            {displayName}
          </h4>
          <ul className="text-sm text-gray-400 space-y-1 ml-4 list-none">
            {list.map((skill, skillIdx) => (
                 <li 
            key={skillIdx} 
            // REMOVED custom bullet class
            className="flex items-start" 
        >
            {skill}
        </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
</div>

            {/* Key Highlights */}
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400 border-b border-gray-700 pb-3">
                Key Milestones
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-blue-600 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-700/80 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{highlight.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

         
          </motion.div>
        </div>

        {/* Optional concluding section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        ></motion.div>
      </div>




      <BadgesSection />
    </section>
  );
};

export default About;
