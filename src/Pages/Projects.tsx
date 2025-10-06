import React, { useState } from "react";
import { motion } from "framer-motion";
import python from '../assets/python.png';
import ecommerce from '../assets/Ecom.png';
import covid from '../assets/covid.png';
import weopon from '../assets/weopon.png';

import smart from '../assets/smarte.jpg';
import skillnet from '../assets/skillnet.png';
import share from '../assets/share.jpg';
import mjpcollege from '../assets/govt.png';

import {
  ExternalLink,
  Github,
  Camera,
  Droplets,
  ShoppingCart,
  Shield,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";


const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
  title: "SkillNet Platform",
  description:
    "A professional networking and skill-sharing platform that connects users based on expertise, enabling collaboration, project posting, and portfolio showcasing with secure authentication.",
tech: ["ASP.NET Core", "React", "SQL Server", "JWT"," Entity Framework","tailwinds CSS","Restful APIs","C#","JavaScript","SignalR","LINQ","HTML","CSS",".NET-8"],
  icon: <Users className="w-5 h-5 text-blue-400" />,
  github: "#https://github.com/rafiabdul143/SkillNet",
  live: "#",
  status: "ongoing",
  image: skillnet,
},
{
  title: "Stocks Prediction System",
  description:
    "Professional AI-powered stock market prediction system that leverages machine learning models to forecast share price trends with interactive real-time data visualization. Deployed on AWS using EC2, S3, and integrated ML services for scalability and performance.",
  tech: [
    "Python",
    "React",
    "Machine Learning",
    "AWS EC2",
    "AWS S3",
    "AWS ML Service",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "RNN",
    "MongoDB"
  ],
  icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
  github: "https://github.com/rafiabdul143/Stock-Prediction-System",
  live: "#",
  status: "ongoing",
  image: share,
},
{
  title: "E-Commerce Website",
  description:
    "A full-stack MERN e-commerce platform featuring user authentication, product management, and an intuitive shopping cart system. Built with a responsive and modern UI using TailwindCSS, it leverages Redux for efficient state management and RESTful APIs for seamless backend integration.",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "TailwindCSS", "JWT", "REST API"],
  icon: <ShoppingCart className="w-5 h-5 text-blue-400" />,
  github: "https://github.com/rafiabdul143/E-commerce-site-Sparkle",
  live: "https://sparkle-shopping.vercel.app/",
  status: "ongoing",
  image: ecommerce,
},
{
  title: "MJP Women's Government College Website",
  description:
    "Collaborated as a freelance developer to design and build the official website for MJP Women's Government College, Wargal. The platform features dynamic content management, responsive UI, and real-time data updates powered by Firebase. It enhances the college's digital presence through an intuitive interface and seamless navigation experience.",
  tech: [
    "React",
    "Firebase",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "REST API",
    "Git",
    "Vercel"
  ],
  icon: <Globe className="w-5 h-5 text-pink-400" />,
  github: "https://github.com/rafiabdul143/Govt-College-Website-Freelance-",
  live: "https://mjptbcwrdcwomenwargal.ac.in/home",
  status: "completed",
  image: mjpcollege,
},


    {
      title: "Face Recognition Attendance System",
      description:
        "This project is a cutting-edge real-time attendance system that combines advanced face recognition and a sleek Tkinter interface, setting a new benchmark in accuracy, automation, and user-friendly design to make attendance management smarter and more efficient.",
      tech: ["Python", "OpenCV", "Tkinter","face_recognition","EmailJS","SMTP","mysql.connector","OS"],
      icon: <Camera className="w-5 h-5 text-blue-400" />,
      github: "https://github.com/rafiabdul143/Attendance-monitoring-system-based-on-facial-recognition-using-deep-learning-and-python-",
      live: "https://www.linkedin.com/posts/abdulrafi0870_python-facerecognition-computervision-activity-7243573303955611648-ub5k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOf1RMBnMTpFDWRJN_Fj4ZQJTwrG57J6-8",
      status: "completed",
  image: python,

    },
    {
      title: "Smart Irrigation System (IoT)",
      description:
        "Moisture-based auto irrigation system with Arduino, servo, and efficient water management.",
      tech: ["Arduino", "Moisture Sensor", "C++"],
      icon: <Droplets className="w-5 h-5 text-blue-400" />,
      github: "https://github.com/rafiabdul143/SMART-IRRIGATION-System",
      live: "https://www.linkedin.com/posts/abdulrafi0870_iot-arduino-smartirrigation-activity-7227988870565347328-PJNt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOf1RMBnMTpFDWRJN_Fj4ZQJTwrG57J6-8",
      status: "completed",
      image: smart,
    },

    {
      title: "COVID Info System",
      description:
        "Desktop app for real-time COVID-19 data visualization with APIs and simple UI.",
      tech: ["Python", "Tkinter", "APIs"],
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      github: "https://github.com/rafiabdul143/Covid-Information-System",
      live: "https://www.linkedin.com/posts/nishath-sultana-86233b251_covid19-datavisualization-helpdesk-ugcPost-7263702232397676545-8vQa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOf1RMBnMTpFDWRJN_Fj4ZQJTwrG57J6-8",
      status: "completed",
      image: covid,
    },




   
   {
  title: "Weapon Detection System",
  description:
    "AI-based system that detects weapons in real-time using deep learning and computer vision techniques.",
  tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Computer Vision","keras","NumPy","Pandas","CNN"],
  icon: <Shield className="w-5 h-5 text-blue-400" />,
  github: "https://github.com/rafiabdul143/Image-weapon-detection-system-using-cnn",
  live: "#https://www.linkedin.com/feed/update/urn:li:ugcPost:7380938784621854720/",
  status: "completed",
  image: weopon,
},

  ];

  // 🔹 Apply filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((proj) => proj.status === filter);

  // 🔹 Apply Show More / Show Less on filtered list
  const visibleProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.02 },
  };

  return (
    <section id="projects" className="py-16 bg-[#000a1c]">
      <div className="container mx-auto px-4">
        
        
        {/* ==== Heading ==== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-3 max-w-2xl mx-auto">
            A showcase of my practical projects — compact, GitHub–repo styled,
            and focused on real-world problem solving.
          </p>
        </motion.div>

        {/* ==== Filter Tabs ==== */}
        <div className="flex justify-center gap-3 mb-8">
          {["all", "completed", "ongoing"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                setShowMore(false); // reset show more when filter changes ✅
              }}
              className={`px-4 py-1.5 text-xs md:text-sm rounded-full font-medium transition-all duration-300 ${
                filter === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-600"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* ==== Projects Grid ==== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all"
            >
              {/* ==== Image First ==== */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-54 object-cover"
              />

              <div className="p-5 flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <span>{project.icon}</span>
                    {project.title}
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      project.status === "completed"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ==== Show More ==== */}
        {filteredProjects.length > 4 && (
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 text-sm bg-blue-500 text-white rounded-md"
            >
              {showMore ? "Show Less" : "Show More"}
            </motion.button>
            {/* ==== Final Note ==== */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center mt-10"
>
  <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
    Through these projects, I have demonstrated my skills and knowledge across multiple domains, solving real-world problems effectively.
  </p>
</motion.div>

          </div>
          
        )}
      </div>
 
    </section>
  );
};

export default Projects;
