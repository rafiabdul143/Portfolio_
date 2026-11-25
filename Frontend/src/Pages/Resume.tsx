import React from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, Download,
  Server, Cloud, Database, Network, Terminal, BadgeCheck,
} from "lucide-react";
import resume from "../assets/Abdul Rafi.pdf";

const sectionClass = "bg-gray-900/50 border border-blue-500/60 rounded-lg p-6 mb-8";
const badgeClass = "text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700/40";

const skills = [
  { title: "Cloud & DevOps", icon: Cloud, items: ["Microsoft Azure", "Microsoft Entra ID", "AWS (EC2, S3)", "Azure DevOps", "Git", "GitHub", "GitHub Actions", "CI/CD", "Docker", "Kubernetes"] },
  { title: "Data Engineering & Analytics", icon: Network, items: ["Microsoft Fabric", "Lakehouse", "Data Pipelines", "ETL/ELT", "PySpark", "Power BI", "Data Warehousing", "Data Modeling"] },
  { title: "Programming Languages", icon: Terminal, items: ["C#", "Python", "Java", "JavaScript", "SQL"] },
  { title: "Frameworks & APIs", icon: Server, items: ["ASP.NET Core MVC", "React", "Node.js", "Express.js", "REST APIs", "HTML5", "Tailwind CSS"] },
  { title: "Databases", icon: Database, items: ["Microsoft SQL Server", "MySQL", "MongoDB"] },
  { title: "Software Engineering", icon: Server, items: ["Object-Oriented Programming", "SDLC", "Debugging", "Application Development", "Agile Fundamentals"] },
];

const certifications = [
  "Azure Administrator Associate (AZ-104)",
  "Azure DevOps Engineer Expert (AZ-400)",
  "Fabric Analytics Engineer Associate (DP-600)",
  "Fabric Data Engineer Associate (DP-700)",
  "SQL AI Developer Associate (DP-800)",
  "GitHub Actions (GH-200)",
];

const ExperienceItem = ({ title, company, period, children, current = false }) => (
  <div className="border-b border-gray-700/70 pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-blue-300 text-sm font-medium">{company}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-gray-400 text-sm">{period}</span>
        {current && <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" /></span>}
      </div>
    </div>
    {children}
  </div>
);

const Resume = () => (
  <section id="resume" className="py-16 bg-black mt-10 text-white min-h-screen">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">ABDUL RAFI</h1>
        <p className="text-blue-400 text-lg font-medium mb-4">Software Engineer</p>
        <div className="flex justify-center gap-6 text-blue-400">
          <a href="https://github.com/rafiabdul143" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="w-6 h-6 hover:text-blue-500 transition-colors" /></a>
          <a href="https://www.linkedin.com/in/abdulrafi0870/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" /></a>
          <a href="mailto:mohdabdulrafi17@gmail.com" aria-label="Email"><Mail className="w-6 h-6 hover:text-blue-500 transition-colors" /></a>
          <a href="tel:+919959088937" aria-label="Phone"><Phone className="w-6 h-6 hover:text-blue-500 transition-colors" /></a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className={sectionClass}>
        <h2 className="text-xl font-semibold text-blue-400 mb-2">Professional Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          Software Engineer at Quadrant Technologies with experience in
          <strong> enterprise application development, cloud platforms, and data engineering</strong>.
          Skilled in <strong>C#, ASP.NET Core, Python, SQL, React, and Microsoft Azure</strong>,
          with hands-on experience in Microsoft Fabric, ETL/ELT pipelines, and production data
          workloads. Familiar with DevOps practices, CI/CD automation, and cloud infrastructure,
          backed by six Microsoft certifications across Azure, Fabric, DevOps, SQL, and GitHub.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className={sectionClass}>
        <h2 className="text-xl font-semibold text-blue-400 mb-5">Professional Experience</h2>

        <ExperienceItem title="Software Engineer" company="Quadrant Technologies" period="Dec 2025 – Present" current>
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1.5">
            <li>Support enterprise Microsoft Fabric environments across Data Factory Pipelines, Lakehouse, Notebooks, Warehouses, and Semantic Models.</li>
            <li>Develop and maintain ETL/ELT workflows for data ingestion, transformation, validation, and analytics.</li>
            <li>Troubleshoot production pipeline failures and SQL-related issues, performing root-cause analysis to improve workload reliability.</li>
            <li>Work with Azure services and Azure DevOps to support cloud infrastructure, source control, and deployment activities.</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem title="Software Engineer Intern" company="Quadrant Technologies" period="Jun 2025 – Nov 2025">
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1.5">
            <li>Gained hands-on experience supporting Microsoft Fabric data workloads and enterprise cloud solutions.</li>
            <li>Assisted with pipeline monitoring, issue investigation, data validation, and troubleshooting across development and production environments.</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem title="Remote Intern – C# Developer" company="Shalsys Software Solutions Pvt. Ltd." period="Mar 2025 – May 2025">
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1.5">
            <li>Developed and enhanced Windows applications using C# and object-oriented programming.</li>
            <li>Wrote SQL Server queries and explored ASP.NET Core MVC, application debugging, and functional testing.</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem title="Data Science Intern" company="National Institute of Technology, Tiruchirappalli" period="Jun 2024 – Jul 2024">
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1.5">
            <li>Used Python, Pandas, NumPy, and Matplotlib to clean, analyze, and visualize datasets for exploratory analysis.</li>
            <li>Applied data analysis techniques to identify patterns and communicate insights from structured data.</li>
          </ul>
        </ExperienceItem>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className={sectionClass}>
        <h2 className="text-xl font-semibold text-blue-400 mb-5">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title} className="bg-black/20 border border-blue-800/40 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm"><Icon className="w-4 h-4 text-blue-400" />{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => <span key={skill} className={badgeClass}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className={sectionClass}>
        <h2 className="text-xl font-semibold text-blue-400 mb-5">Projects</h2>
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h3 className="font-semibold text-white">Face Recognition Attendance System</h3>
            <p className="mt-1 leading-relaxed">Built a Python desktop application using OpenCV and Tkinter, implementing Haar Cascade face detection, LBPH recognition, and CSV-based attendance records.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Smart Irrigation System (IoT)</h3>
            <p className="mt-1 leading-relaxed">Developed an Arduino-based irrigation system using soil moisture sensors and relay modules to automate watering based on real-time soil conditions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Personal Portfolio Website</h3>
            <p className="mt-1 leading-relaxed">Built a responsive portfolio using React, Vite, and Tailwind CSS; configured GitHub Actions for CI/CD and deployed the application on Vercel.</p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className={sectionClass}>
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Education</h2>
        <h3 className="text-white font-medium">B.Tech – Computer Science and Engineering (IoT)</h3>
        <p className="text-blue-300 text-sm">Kakatiya Institute of Technology and Science, Warangal</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
          <span>CGPA: <strong className="text-white">7.73/10</strong></span>
          <span>Jun 2022 – May 2025</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className={sectionClass}>
        <h2 className="text-xl font-semibold text-blue-400 mb-5">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((certification) => (
            <div key={certification} className="flex items-center gap-3 rounded-lg p-3 bg-blue-900/20 border border-blue-700/40">
              <BadgeCheck className="w-5 h-5 text-blue-300 shrink-0" />
              <span className="text-sm text-gray-200">{certification}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="text-center mt-10">
        <a href={resume} download="AbdulRafi_Resume.pdf" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#1f4e7a] to-[#3a6fa5] text-white hover:from-[#3a6fa5] hover:to-[#1f4e7a] transition-all duration-300 font-semibold shadow-md shadow-[#3a6fa533]">
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
