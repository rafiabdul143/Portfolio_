import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import resume from "../assets/Resume.pdf"; // Ensure your Resume.pdf is in the correct path

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-black text-white min-h-screen">
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
            MA RAFI
          </h1>
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
            Motivated Computer Science Engineering (CSE–IoT) graduate with hands-on experience in cloud computing,
            full-stack development (MERN stack), and IoT-based applications. Skilled in Python, Java, JavaScript
            with exposure to CI/CD, distributed systems, and cloud platforms. Seeking an entry-level Cloud Developer
            role at HPE to design, develop, and deploy secure, scalable cloud solutions.
          </p>
        </motion.div>

        {/* ==== Education ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Education</h2>
          <p className="text-gray-300 font-medium">
            Bachelor of Technology in Computer Science and Engineering (CSE-IoT), <br />
            Kakatiya Institute of Technology and Science
          </p>
          <p className="text-gray-400 mt-1">CGPA: 7.73/10</p>
          <p className="text-gray-400 mt-1">Coursework: IoT, DBMS, OOPS, OS, CN</p>
          <p className="text-gray-400 mt-1">June 2022 – May 2025</p>
        </motion.div>

        {/* ==== Technical Skills ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">Programming</h3>
              <p>Python, Java, JavaScript, SQL, HTML, CSS</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">MERN Stack</h3>
              <p>MongoDB, Express, React.js, Node.js</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Cloud / DevOps</h3>
              <p>AWS Educate, Google Cloud, CI/CD (GitHub Actions), Docker</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Frameworks / Libraries</h3>
              <p>React, Streamlit, TensorFlow, Keras</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Databases</h3>
              <p>MySQL, MongoDB</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Version Control & Tools</h3>
              <p>Git, GitHub, VS Code, Arduino IDE, Cisco Packet Tracer</p>
            </div>
          </div>
        </motion.div>

        {/* ==== Experience ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-blue-500 rounded-lg p-6 mb-10"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Experience</h2>
          <div className="text-gray-300">
            <h3 className="font-semibold text-white">Data Science Intern, NIT Trichy</h3>
            <p className="text-gray-400">June 2024 – July 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300">
              <li>Completed a Data Science internship, gaining hands-on experience with Python and data analysis.</li>
              <li>Worked on diverse datasets, utilizing Python libraries for analysis and visualization.</li>
              <li>Participated in team discussions and peer reviews, enhancing collaborative skills.</li>
            </ul>
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
          <ul className="list-disc ml-5 text-gray-300 space-y-3">
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
          <ul className="list-disc ml-5 text-gray-300">
            <li>Data Science – NIT Trichy</li>
            <li>Cloud Computing – AWS Educate & Google Cloud Skill Boost</li>
          </ul>
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
