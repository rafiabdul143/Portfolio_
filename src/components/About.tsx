import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Globe, Award, BookOpen, GitBranch, Monitor, FileText, Users } from 'lucide-react';
import rafiPhoto from '../assets/rafiPhoto.jpg';
import BadgesSection from './BadgesSection';

const About: React.FC = () => {
  const highlights = [
    { icon: <Award className="w-6 h-6" />, title: 'Data Science Internship', description: 'NIT Trichy' },
    { icon: <Globe className="w-6 h-6" />, title: 'Cybersecurity Experience', description: 'Cisco Packet Tracer' },
    { icon: <Code className="w-6 h-6" />, title: 'Open Source Contributor', description: 'Multiple Projects' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'CSE with IoT Specialization', description: 'KITS Warangal' }
  ];

  const timeline = [
    { year: '2022', description: 'HTML, CSS, JavaScript – built first web projects.' },
    { year: '2023', description: 'React.js, Node.js, MongoDB – Internship at Cisco.' },
    { year: '2024', description: 'ASP.NET Core, SQL Server, IoT projects – Internship at NIT Trichy.' },
    { year: '2025', description: 'ERP & Inventory systems, DevOps, portfolio projects.' },
  ];

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS'],
    backend: ['Node.js', 'ASP.NET Core', 'Python'],
    versionControl: ['Git', 'GitHub', 'GitLab'],
    databases: ['MongoDB', 'SQL Server', 'MySQL']
  };

  const softSkills = ['Problem Solving', 'Time Management', 'Communication', 'Teamwork', 'Creativity', 'Adaptability'];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-red-500 glow-red">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto w-80 h-80"
          >
            <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center overflow-hidden relative">
              <img src={rafiPhoto} alt="Abdul Rafi" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Intro */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-red-400 font-semibold">Abdul Rafi</span>, a passionate and hardworking Computer Science and Engineering student specialized in <span className="text-red-400">Internet of Things (IoT)</span> at KITS Warangal.
              </p>
              <p>
                I build <span className="text-red-400">smart, scalable, and impactful solutions</span> using technology, whether web applications, IoT systems, or full-stack projects.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-red-400 mb-2">Education</h3>
              <p>B.Tech in Computer Science Engineering (CSE) specialized in IoT</p>
              <p>CGPA: 7.73</p>
            </div>

            {/* Technical Skills */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-red-400 mb-2">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white">Frontend</h4>
                  <p className="text-gray-300">{skills.frontend.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Backend</h4>
                  <p className="text-gray-300">{skills.backend.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Version Control</h4>
                  <p className="text-gray-300">{skills.versionControl.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Databases</h4>
                  <p className="text-gray-300">{skills.databases.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px #f87171' }}
                    className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 cursor-pointer transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-red-500">
              <h3 className="text-xl font-semibold text-red-400 mb-4">Timeline</h3>
              <ul className="space-y-8">
                {timeline.map((item, index) => (
                  <li key={index} className="relative">
                    <span className="absolute -left-5 top-0 w-3 h-3 bg-red-500 rounded-full"></span>
                    <p className="font-semibold text-white">{item.year}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">{highlight.title}</h4>
                      <p className="text-sm text-gray-400">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
      {/* Badges Section */}
      <BadgesSection />
    </section>
  );
};

export default About;
