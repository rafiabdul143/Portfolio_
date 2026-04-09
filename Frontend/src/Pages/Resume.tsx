import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, Server, Cloud, Database, Network, Terminal } from "lucide-react";
import resume from "../assets/Resume.pdf"; // Ensure your Resume.pdf is in the correct path

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-black mt-10 text-white min-h-screen">
      <div className="container mx-auto px-6">

        {/* ==== Header ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            ABDUL RAFI
          </h1>
          <p className="text-blue-400 text-lg font-medium mb-4">
            Software Trainee | Full-Stack Developer | Cloud Enthusiast
          </p>
          <div className="flex justify-center gap-6 text-blue-400">
            <a href="https://github.com/rafiabdul143" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/mohd-abdul-rafi-17" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="mailto:mohdabdulrafi17@gmail.com">
              <Mail className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="tel:+919959088937">
              <Phone className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* ==== Objective ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Objective</h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate Software Trainee and Computer Science Engineering (CSE–IoT) graduate with hands-on experience in 
            <strong> Azure cloud ecosystem, SQL Server administration, networking, DevOps practices,</strong> and full-stack development. 
            Currently expanding expertise in enterprise cloud infrastructure while actively working on scalable web applications 
            and IoT-based systems. Seeking to leverage cloud technologies and development skills to contribute to innovative 
            technology solutions.
          </p>
        </motion.div>

        {/* ==== Professional Experience ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Professional Experience</h2>
          
          {/* Software Trainee Experience */}
          <div className="mb-6 pb-6 border-b border-gray-700 last:border-0">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                <Server className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-semibold text-white text-lg">Software Trainee</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-700/50">
                      Currently Working
                    </span>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </div>
                <p className="text-blue-300 text-sm font-medium">Quadrant Technologies</p>
                <p className="text-gray-400 text-sm mt-1">Present</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4" /> Cloud & Infrastructure
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 ml-5 list-disc">
                  <li>Mastering <strong>Azure ecosystem</strong> and cloud service fundamentals</li>
                  <li>Learning <strong>networking principles</strong> including DNS resolution and storage solutions</li>
                  <li>Understanding enterprise cloud infrastructure and deployment strategies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4" /> Development & Operations
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 ml-5 list-disc">
                  <li>Gaining hands-on experience with <strong>SQL Server administration</strong></li>
                  <li>Learning <strong>DevOps practices</strong> and Git administration workflows</li>
                  <li>Expanding technical domain knowledge in enterprise application deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Science Intern Experience */}
          <div>
            <h3 className="font-semibold text-white">Data Science Intern</h3>
            <p className="text-blue-300 text-sm">NIT Trichy</p>
            <p className="text-gray-400 text-sm">June 2024 – July 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 space-y-1">
              <li>Completed an intensive Data Science internship, gaining hands-on experience with Python and data analysis</li>
              <li>Worked on diverse datasets, utilizing Python libraries for analysis and visualization</li>
              <li>Participated in team discussions and peer reviews, enhancing collaborative skills</li>
            </ul>
          </div>
        </motion.div>

        {/* ==== Education ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-300 font-medium">
                Bachelor of Technology in Computer Science and Engineering (CSE–IoT)
              </h3>
              <p className="text-blue-300">Kakatiya Institute of Technology and Science, Warangal</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <p className="text-gray-400">CGPA: <strong className="text-white">7.73/10</strong></p>
                <p className="text-gray-400">June 2022 – May 2025</p>
              </div>
              <p className="text-gray-400 mt-1">Coursework: IoT Systems, Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks, Cloud Computing</p>
            </div>
          </div>
        </motion.div>

        {/* ==== Technical Skills ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Cloud className="w-4 h-4" /> Cloud & DevOps
              </h3>
              <p>Azure Ecosystem, Cloud Fundamentals, AWS (S3, EC2), Networking & Storage, DNS Resolution, DevOps Administration, CI/CD, Docker</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Database className="w-4 h-4" /> Databases
              </h3>
              <p>SQL Server, MongoDB, MySQL, Database Administration</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Programming
              </h3>
              <p>Python, Java, JavaScript, C/C++, HTML, CSS, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Server className="w-4 h-4" /> Full-Stack
              </h3>
              <p>MERN Stack (MongoDB, Express, React.js, Node.js), ASP.NET Core, REST APIs</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Network className="w-4 h-4" /> IoT & Tools
              </h3>
              <p>Microcontrollers, MQTT, Sensor Integration, Git, GitHub, VS Code, Cisco Packet Tracer</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Frameworks & Libraries</h3>
              <p>React, Streamlit, TensorFlow, Keras, OpenCV, TailwindCSS</p>
            </div>
          </div>
        </motion.div>

        {/* ==== Projects ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
          <ul className="list-disc ml-5 text-gray-300 space-y-4">
            <li>
              <span className="font-semibold text-white">Image Weapon Detection System:</span> Developed an AI-based system using Python and OpenCV to detect weapons in images. Implemented real-time object detection and classification using pre-trained models to enhance security monitoring.
            </li>
            <li>
              <span className="font-semibold text-white">Face Recognition Attendance System:</span> Built a desktop application using Python, OpenCV, and Tkinter. Integrated Haarcascade and deep learning models for accurate face recognition. Maintained attendance logs in CSV files and implemented a GUI dashboard for user-friendly management.
            </li>
            <li>
              <span className="font-semibold text-white">Sparkle E-Commerce Website:</span> Developed a full-stack e-commerce platform using MERN stack with user authentication, shopping cart, and responsive UI. Implemented RESTful APIs, Redux state management, and deployed on a cloud platform to showcase end-to-end web development skills.
            </li>
            <li>
              <span className="font-semibold text-white">Smart Irrigation System:</span> Designed an IoT-based smart irrigation system using Arduino Uno, moisture sensors, servo motors, and relay modules. Automated watering schedule based on soil moisture level, reducing water wastage and increasing agricultural efficiency. Integrated with an LCD for real-time status display.
            </li>
          </ul>
        </motion.div>

        {/* ==== Certifications ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Data Science Internship</h3>
              <p className="text-blue-300 text-sm">NIT Trichy</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1">Cloud Computing</h3>
              <p className="text-blue-300 text-sm">AWS Educate & Google Cloud Skill Boost</p>
            </div>
          </div>
        </motion.div>

        {/* ==== Declaration ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Declaration</h2>
          <p className="text-gray-300">
            I hereby declare that the above information is true to the best of my knowledge and belief.
          </p>
       
        </motion.div>

        {/* ==== Download Resume Button ==== */}
        <div className="text-center mt-8">
          <a
            href={resume}
            download="AbdulRafi_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#1f4e7a] to-[#3a6fa5] text-white hover:from-[#3a6fa5] hover:to-[#1f4e7a] transition-all duration-300 font-semibold shadow-md shadow-[#3a6fa533]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;