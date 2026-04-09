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
  Server,
  Network,
  Terminal,
  Briefcase,
  DatabaseZap,
  CloudLightning,
  Layers,
} from 'lucide-react';
import rafiPhoto from '../assets/rafiPhoto.jpg';

const highlights = [
  { 
    icon: <Server className="w-5 h-5" />, 
    title: 'Software Trainee', 
    description: 'Quadrant Technologies - Azure, DevOps, SQL Server' 
  },
  { 
    icon: <Award className="w-5 h-5" />, 
    title: 'Data Science Internship', 
    description: 'NIT Trichy' 
  },
  { 
    icon: <Globe className="w-5 h-5" />, 
    title: 'Cybersecurity Experience', 
    description: 'Cisco Packet Tracer' 
  },
  { 
    icon: <Code className="w-5 h-5" />, 
    title: 'Open Source Contributor', 
    description: 'Multiple Projects' 
  },
];

const skills = {
  cloud: ['Azure ', 'Cloud Basics', 'Networking','Dockers', 'DevOps', 'AWS (S3, EC2)'],
  databases: ['SQL Server', 'MongoDB', 'MySQL'],
  frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS'],
  backend: ['Node.js', 'ASP.NET Core', 'Python'],
  iot: ['C/C++', 'Microcontrollers', 'MQTT', 'Sensor Integration'],
  versionControl: ['Git', 'GitHub', 'GitLab', 'CI/CD'],
};

const softSkills = ['Problem Solving', 'Time Management', 'Communication', 'Teamwork', 'Creativity', 'Adaptability', 'Quick Learner'];

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
            Full-Stack Developer & Cloud Enthusiast building <strong>scalable, enterprise-ready solutions</strong> with modern technologies.
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
                Software Trainee | Full-Stack Developer
              </p>
              <p className="text-gray-300 mb-6">
                Passionate technologist specializing in <strong>cloud infrastructure</strong>, <strong>database management</strong>, and <strong>full-stack development</strong>. Currently mastering enterprise technologies to build robust, scalable applications.
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
                    className="px-3 py-1 text-xs bg-gray-800 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-blue-900/30 hover:border-blue-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
         {/* Key Highlights */}
<div className="space-y-6 mt-10 w-full">
  <h3 className="text-2xl font-bold text-blue-400 border-b border-gray-700 pb-3">
    Key Milestones
  </h3>
  <div className="space-y-6">
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

          {/* Right Column: Skills, Highlights, Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Professional Summary */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition-all duration-300 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">Professional Summary</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full border border-blue-700/50 font-medium">
                        Currently Working
                      </span>
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Quadrant Technologies */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="mt-1">
                      <CloudLightning className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-1">Software Trainee at Quadrant Technologies</h4>
                      <p className="text-gray-300 text-sm">
                        Currently mastering <strong>SQL Server</strong>, <strong>Azure Ecosystem</strong>, <strong>Networking</strong>, 
                        <strong> DevOps Administration</strong>, and <strong>Storage solutions</strong>. Actively expanding technical domain 
                        knowledge in enterprise cloud infrastructure and database management.
                      </p>
                    </div>
                  </div>
                  
                  {/* Core Focus Areas & Technical Growth */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-800">
                    <div>
                      <h5 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                        <DatabaseZap className="w-4 h-4" /> Core Focus Areas
                      </h5>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          SQL Server Administration
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          Azure Cloud Services
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          Network Infrastructure
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> Technical Growth
                      </h5>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          DevOps & CI/CD Practices
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          Storage Solutions
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          Enterprise Deployment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shalsys Internship */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-300 mb-1">
                      C# Developer Intern at Shalsys Private Limited
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Worked with an <strong>IT services and ERP consulting firm</strong>, gaining exposure to
                      <strong> enterprise business solutions</strong> and <strong>ERP systems</strong>.
                      Contributed to <strong>Windows-based application development using C#</strong>,
                      wrote <strong>SQL Server queries</strong>, and gained foundational knowledge of
                      <strong> ASP.NET Core MVC</strong>. Strengthened skills in
                      <strong> remote collaboration</strong> and <strong>requirement analysis</strong>.
                    </p>
                  </div>
                </div>

                {/* Internship Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h5 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4" /> Development Stack
                    </h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        C# & Windows Applications
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        .NET Framework
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        ASP.NET MVC / .NET Core
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> ERP & Enterprise Exposure
                    </h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Epicor ERP Technologies
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Enterprise Business Solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Requirement Analysis & Remote Collaboration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 flex items-start gap-4 hover:border-blue-600 transition-all duration-300 shadow-xl">
              <Monitor className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">B.Tech in CSE with IoT Specialization</h3>
                <p className="text-sm text-blue-400">KITS Warangal</p>
                <p className="text-sm text-gray-400 mt-1">CGPA: 7.73</p>
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
                    cloudDevOps: CloudLightning,
                    databases: DatabaseZap,
                    frontend: Code,
                    backend: Cpu,
                    iot: Zap,
                    versionControl: GitBranch,
                  }[category];

                  const displayName =
                    category === 'cloudDevOps' ? 'Cloud & DevOps' :
                    category === 'versionControl' ? 'Version Control' :
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
                            className="flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
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