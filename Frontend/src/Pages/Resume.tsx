import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, Server, Cloud, Database, Network, Terminal, BadgeCheck } from "lucide-react";
import resume from "../assets/Abdul Rafi.pdf"; // Ensure your Resume.pdf is in the correct path

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
            Software Engineer
          </p>
          <div className="flex justify-center gap-6 text-blue-400">
            <a href="https://github.com/rafiabdul143" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
          <a
  href="https://www.linkedin.com/in/abdulrafi0870/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
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
          <h2 className="text-xl font-semibold text-blue-400 mb-2">Professional Summary</h2>
       <p className="text-gray-300 leading-relaxed">
  Software Engineer specializing in building scalable enterprise applications, modern data platforms, and cloud-native solutions using <strong>Microsoft Fabric, Microsoft Azure, ASP.NET Core, React, TypeScript, C#, Python, and SQL Server</strong>. Experienced in designing and implementing end-to-end data engineering solutions with <strong>Lakehouse, Data Warehouse, OneLake, PySpark, Data Pipelines, Semantic Models, and Power BI</strong> to transform complex business requirements into reliable, data-driven solutions. Proficient in applying <strong>DevOps practices, CI/CD automation, GitHub Actions, Azure DevOps, Docker, and cloud deployment strategies</strong> to streamline software delivery and improve development efficiency. Microsoft Certified across <strong>Azure Administration, Microsoft Fabric, Azure DevOps, SQL Development, and GitHub technologies</strong>, with a strong passion for software engineering, scalable system design, modern web development, and continuous learning.
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

          {/* Software Engineer Experience */}
          <div className="mb-6 pb-6 border-b border-gray-700 last:border-0">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                <Server className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-semibold text-white text-lg">Software Engineer</h3>
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
                <p className="text-gray-400 text-sm mt-1">Dec 2025 – Present</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4" /> Cloud & Data Engineering
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 ml-5 list-disc">
                  <li>Built and maintained ETL/ELT pipelines in <strong>Microsoft Fabric</strong> for ingesting, transforming, and loading data from multiple enterprise sources</li>
                  <li>Developed reusable data pipelines and transformation logic to improve data quality and deliver analytics-ready datasets for business reporting</li>
                  <li>Worked with <strong>Microsoft Azure</strong> services including Virtual Machines, Storage Accounts, and Microsoft Entra ID to support cloud-based data solutions</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4" /> DevOps & Development
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 ml-5 list-disc">
                  <li>Supported <strong>CI/CD processes</strong> using Azure DevOps, assisting with deployment pipelines, source control, and release activities</li>
                  <li>Optimized <strong>SQL Server queries</strong> for data validation, troubleshooting, and performance improvements across production workloads</li>
                  <li>Monitored pipeline executions, investigated failures, and collaborated with the team to resolve production issues within agreed timelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* C# Developer Intern Experience */}
          <div className="mb-6 pb-6 border-b border-gray-700 last:border-0">
            <h3 className="font-semibold text-white">Remote Intern – C# Developer</h3>
            <p className="text-blue-300 text-sm">Shalsys Software Solutions Pvt. Ltd.</p>
            <p className="text-gray-400 text-sm">Jun 2025 – Oct 2025</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 space-y-1">
              <li>Contributed to the development and enhancement of Windows-based applications using C#, gaining hands-on experience with enterprise application development and object-oriented programming</li>
              <li>Developed and optimized SQL Server queries to support application functionality, data retrieval, and reporting requirements</li>
              <li>Worked with ASP.NET Core MVC to understand controller-based architecture, application flow, and backend development practices</li>
              <li>Assisted in debugging application issues, validating implemented features, and performing functional testing to ensure reliable application behavior</li>
            </ul>
          </div>

          {/* Data Science Intern Experience */}
          <div>
            <h3 className="font-semibold text-white">Data Science Intern</h3>
            <p className="text-blue-300 text-sm">NIT Trichy</p>
            <p className="text-gray-400 text-sm">June 2024 – July 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 space-y-1">
              <li>Completed an intensive internship focused on Python programming, applying data analysis techniques to extract meaningful insights from structured datasets</li>
              <li>Worked with Python libraries such as Pandas, NumPy, and Matplotlib to clean, analyze, and visualize data for exploratory analysis and reporting</li>
              <li>Collaborated with mentors and peers on practical assignments, strengthening problem-solving, technical communication, and teamwork</li>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                <Cloud className="w-4 h-4 text-blue-400" /> Cloud Platforms & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Microsoft Azure", "Microsoft Entra ID", "AWS (EC2, S3)", "GCP (Fundamentals)", "Azure DevOps", "Git", "GitHub", "GitHub Actions", "CI/CD", "Docker", "Kubernetes"].map((skill) => (
                  <span key={skill} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                <Database className="w-4 h-4 text-blue-400" /> Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SQL Server", "MySQL", "MongoDB"].map((skill) => (
                  <span key={skill} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                <Terminal className="w-4 h-4 text-blue-400" /> Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["C#", "Python", "SQL", "Java", "JavaScript"].map((skill) => (
                  <span key={skill} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                <Server className="w-4 h-4 text-blue-400" /> Frameworks & Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ASP.NET Core MVC", "HTML5", "RESTful APIs", "React.js", "Node.js", "Express.js", "TailwindCSS"].map((skill) => (
                  <span key={skill} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                <Network className="w-4 h-4 text-blue-400" /> Data Engineering & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Microsoft Fabric", "Power BI", "Data Warehousing", "Data Modeling", "ETL/ELT Pipelines"].map((skill) => (
                  <span key={skill} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                <Server className="w-4 h-4 text-blue-400" /> Software Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SDLC", "Debugging", "Application Development", "Problem Solving", "Agile Methodologies"].map((skill) => (
                  <span key={skill} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40">
                    {skill}
                  </span>
                ))}
              </div>
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
              <span className="font-semibold text-white">Face Recognition Attendance System:</span> Developed a full-stack desktop application using Python, OpenCV, and Tkinter. Implemented face detection using Haar Cascade and recognition using the LBPH algorithm. Designed a CSV-based data storage system for maintaining attendance records, with an intuitive GUI for real-time recognition and attendance marking.
            </li>
            <li>
              <span className="font-semibold text-white">Smart Irrigation System (IoT):</span> Designed an IoT-based smart irrigation system using Arduino Uno, moisture sensors, and relay modules. Automated irrigation based on real-time soil moisture levels to reduce manual intervention and optimize water usage, gaining hands-on experience in hardware–software integration.
            </li>
            <li>
              <span className="font-semibold text-white">Personal Portfolio Website:</span> Developed a responsive portfolio website using React.js, Vite, and Tailwind CSS to showcase projects, certifications, and technical skills. Built a CI/CD pipeline using GitHub Actions and deployed on Vercel with seamless integration to GitHub for continuous deployment, applying reusable component architecture and Git-based version control.
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
            {[
              { name: "DevOps Engineer Expert (AZ-400)", org: "Microsoft", category: "Microsoft Certified" },
              { name: "Azure Administrator Associate (AZ-104)", org: "Microsoft", category: "Microsoft Certified" },
              { name: "GitHub Actions (GH-200)", org: "Microsoft", category: "Microsoft Certified" },
              { name: "Fabric Analytics Engineer Associate (Dp-600)", org: "Microsoft", category: "Microsoft Certified" },
              { name: "Fabric Data Engineer Associate (DP-700)", org: "Microsoft", category: "Microsoft Certified" },
                            { name: "SQL AI Developer Associate (DP-800)", org: "Microsoft", category: "Microsoft Certified" },
              { name: "Data Science Internship", org: "NIT Trichy",category: "NIT Trichy Certified"},
              { name: "Cloud Computing", org: "AWS Educate & Google Cloud Skill Boost",category:"GCP & AWS"},
            ].map((cert) => {
              const isMicrosoft = cert.category === "Microsoft Certified";
              return (
                <div
                  key={cert.name}
                  className={`flex items-start gap-3 rounded-lg p-4 border ${
                    isMicrosoft
                      ? "bg-blue-900/25 border-blue-500/50"
                      : "bg-blue-900/10 border-blue-700/30"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border ${
                      isMicrosoft
                        ? "border-blue-400/60 bg-blue-500/20 text-blue-300"
                        : "border-blue-700/40 bg-blue-900/30 text-blue-400"
                    }`}
                  >
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span
                      className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1.5 ${
                        isMicrosoft ? "bg-blue-500/25 text-blue-300" : "bg-blue-900/40 text-blue-400"
                      }`}
                    >
                      {cert.category}
                    </span>
                    <h3 className="font-semibold text-white text-sm leading-snug">{cert.name}</h3>
                    <p className="text-blue-300 text-xs mt-1">{cert.org}</p>
                  </div>
                </div>
              );
            })}
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