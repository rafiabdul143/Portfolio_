import skillnet from "../assets/skillnet.png";
import epf from "../assets/EPF.png";
import buniyaadec from "../assets/Buniyaadec.png";
import share from "../assets/share.jpg";
import ecommerce from "../assets/Ecom.png";
import mjpcollege from "../assets/govt.png";
import python from "../assets/python.png";
import smart from "../assets/smarte.jpg";
import covid from "../assets/covid.png";
import weapon from "../assets/weopon.png";
import resumeForge from "../assets/resumeForge.png"

export const projects = [
 {
  slug: "skillnet-platform",

  title: "SkillNet Platform",

  category: "Full Stack Application",

  role: "Full Stack Developer",

  duration: "Jan 2025 - Present",

  client: "Personal Project",

  shortDescription:
    "Professional networking and skill-sharing platform.",

  longDescription:
    "SkillNet is a modern professional networking platform designed to connect developers, students, and professionals through skill-based collaboration. The platform enables users to showcase portfolios, discover opportunities, collaborate on projects, exchange knowledge, and communicate securely in real time.",

  image: skillnet,

  github: "https://github.com/rafiabdul143/SkillNet",

  live: "https://sk-black.vercel.app/",

  status: "ongoing",

  tech: [
    "ASP.NET Core",
    "React",
    "SQL Server",
    "JWT",
    "SignalR",
    "Entity Framework",
    "Tailwind CSS"
  ],
  stats: {
  frontend: "30+ Components",
  backend: "4 Controllers • 6 Services",
  database: "7 Entities"
},

  features: [
    "JWT Authentication",
    "Portfolio Showcase",
    "Project Collaboration",
    "Real-time Messaging",
    "Skill Discovery",
    "User Profiles"
  ],

 challenges: [
  {
    title: "Building secure authentication and authorization",
    solution: "Implemented JWT-based authentication"
  },
  {
    title: "Implementing scalable real-time communication",
    solution: "Used SignalR for real-time messaging"
  },
  {
    title: "Managing complex user relationships and connections",
    solution: "Normalized database architecture using SQL Server"
  },
  {
    title: "Designing responsive UI for all devices",
    solution: "Built reusable React components with Tailwind CSS"
  }
],

  architecture: [
    "React Frontend",
    "ASP.NET Core REST API",
    "SignalR Hub",
    "SQL Server Database"
  ],
  conclusion:
  "SkillNet successfully demonstrates the development of a scalable full-stack platform using React, ASP.NET Core, SQL Server, and SignalR. The project strengthened expertise in authentication, real-time communication, database design, and modern software architecture while providing a strong foundation for future enhancements."
},

  {
    slug: "epf-withdrawal-advisor",
    title: "EPF Withdrawal Eligibility Advisor",

    shortDescription:
      "Rule-based EPF eligibility and withdrawal calculator.",

    longDescription:
      "A React-based web application that evaluates EPF withdrawal eligibility according to EPFO guidelines and calculates the maximum withdrawable amount.",

    image: epf,

    github: "https://github.com/rafiabdul143/EPF-Advisor",
    live: "https://epf-advisor.vercel.app/",

    status: "completed",

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS"
    ],

    features: [
      "Eligibility Verification",
      "Withdrawal Calculation",
      "Responsive Design",
      "Rule-based Logic"
    ]
  },
{
  slug: "resumeforge",

  title: "ResumeForge",

  shortDescription:
    "AI-powered ATS Resume Builder for creating professional resumes.",

  longDescription:
    "ResumeForge is an AI-powered ATS Resume Builder that enables users to create recruiter-friendly resumes with real-time preview, modern templates, PDF export, and ATS optimization. Built with React and Vite, it provides a fast, responsive, and intuitive experience while allowing users to customize resumes and generate professional PDFs suitable for job applications.",

  image: resumeForge,

  github:
    "https://github.com/rafiabdul143/ATSFreeResumeMaker",

  live:
    "https://atsfreeresumemaker.vercel.app/",

  status: "ongoing",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "PDF Export",
    "Local Storage"
  ],

  features: [
    "ATS-Friendly Resume Builder",
    "Real-Time Resume Preview",
    "Multiple Modern Resume Templates",
    "PDF Export",
    "Responsive Design",
    "Local Storage Persistence",
    "Fast Vite Development Environment",
    "Professional UI with Tailwind CSS"
  ]
},
  {
    slug: "buniyaadec-civil-career-guidance",
    title: "Buniyaadec Civil Career Guidance Platform",

    shortDescription:
      "Career guidance platform for civil engineers.",

    longDescription:
      "Developed for a Dubai-based client to guide civil engineering students and professionals through structured learning paths and career resources.",

    image: buniyaadec,

    github:
      "https://github.com/rafiabdul143/Civil-University-1",

    live:
      "https://buniyaadec.com",

    status: "completed",

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ],

    features: [
      "Career Roadmaps",
      "Responsive Design",
      "Student Resources",
      "Professional Guidance"
    ]
  },

  {
    slug: "stocks-predictionsystem",
    title: "Stocks Prediction System",

    shortDescription:
      "AI-powered stock prediction platform.",

    longDescription:
      "Machine learning powered stock prediction system using RNN models with AWS deployment and interactive market analytics.",

    image: share,

    github:
      "https://github.com/rafiabdul143/Stock-Prediction-System",

    live: "#",

    status: "ongoing",

    tech: [
      "Python",
      "React",
      "Machine Learning",
      "AWS EC2",
      "AWS S3",
      "MongoDB",
      "RNN"
    ],

    features: [
      "AI Prediction Engine",
      "Real-time Analytics",
      "Cloud Deployment",
      "Interactive Dashboards"
    ]
  },

  {
    slug: "e-commerce-website",
    title: "E-Commerce Website",

    shortDescription:
      "Full-stack MERN shopping platform.",

    longDescription:
      "A complete MERN e-commerce application featuring authentication, product management, shopping cart functionality, and responsive UI.",

    image: ecommerce,

    github:
      "https://github.com/rafiabdul143/E-commerce-site-Sparkle",

    live:
      "https://sparkle-shopping.vercel.app/",

    status: "ongoing",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT"
    ],

    features: [
      "Authentication",
      "Shopping Cart",
      "Product Management",
      "Responsive Design"
    ]
  },

  {
    slug: "mjp-college-website",
    title: "MJP Women's Government College Website",

    shortDescription:
      "Official college website developed as a freelance project.",

    longDescription:
      "Designed and developed the official website for MJP Women's Government College with Firebase-powered content management and responsive design.",

    image: mjpcollege,

    github:
      "https://github.com/rafiabdul143/Govt-College-Website-Freelance-",

    live:
      "https://mjptbcwrdcwomenwargal.ac.in/home",

    status: "completed",

    tech: [
      "React",
      "Firebase",
      "JavaScript",
      "Tailwind CSS",
      "Node.js"
    ],

    features: [
      "Content Management",
      "Responsive UI",
      "Firebase Integration",
      "Institutional Website"
    ]
  },

  {
    slug: "face-recognition-attendance-system",
    title: "Face Recognition Attendance System",

    shortDescription:
      "Automated attendance using facial recognition.",

    longDescription:
      "A deep learning powered attendance management system using OpenCV and face recognition technologies with an intuitive desktop interface.",

    image: python,

    github:
      "https://github.com/rafiabdul143/Attendance-monitoring-system-based-on-facial-recognition-using-deep-learning-and-python-",

    live:
      "https://www.linkedin.com/posts/abdulrafi0870_python-facerecognition-computervision-activity-7243573303955611648-ub5k",

    status: "completed",

    tech: [
      "Python",
      "OpenCV",
      "Tkinter",
      "Face Recognition",
      "MySQL"
    ],

    features: [
      "Face Recognition",
      "Attendance Tracking",
      "Email Notifications",
      "Desktop GUI"
    ]
  },

  {
    slug: "smart-irrigation-system-iot",
    title: "Smart Irrigation System (IoT)",

    shortDescription:
      "Automated irrigation using soil moisture monitoring.",

    longDescription:
      "IoT-based irrigation system that automatically controls water supply based on soil moisture levels using Arduino and sensors.",

    image: smart,

    github:
      "https://github.com/rafiabdul143/SMART-IRRIGATION-System",

    live:
      "https://www.linkedin.com/posts/abdulrafi0870_iot-arduino-smartirrigation-activity-7227988870565347328-PJNt",

    status: "completed",

    tech: [
      "Arduino",
      "Moisture Sensor",
      "C++"
    ],

    features: [
      "Automatic Irrigation",
      "Water Conservation",
      "Sensor Monitoring",
      "IoT Integration"
    ]
  },

  {
    slug: "covid-info-system",
    title: "COVID Info System",

    shortDescription:
      "COVID statistics and information dashboard.",

    longDescription:
      "Desktop application that provides real-time COVID statistics and information using APIs and data visualization techniques.",

    image: covid,

    github:
      "https://github.com/rafiabdul143/Covid-Information-System",

    live:
      "https://www.linkedin.com/posts/nishath-sultana-86233b251_covid19-datavisualization-helpdesk-ugcPost-7263702232397676545-8vQa",

    status: "completed",

    tech: [
      "Python",
      "Tkinter",
      "API Integration"
    ],

    features: [
      "Live Statistics",
      "API Integration",
      "Data Visualization",
      "Desktop GUI"
    ]
  },

  {
    slug: "weapon-detection-system",
    title: "Weapon Detection System",

    shortDescription:
      "AI-powered weapon detection using computer vision.",

    longDescription:
      "Deep learning based weapon detection system capable of identifying weapons from images using CNN models and OpenCV.",

    image: weapon,

    github:
      "https://github.com/rafiabdul143/Image-weapon-detection-system-using-cnn",

    live:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7380938784621854720/",

    status: "completed",

    tech: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "CNN",
      "Deep Learning"
    ],

    features: [
      "Weapon Detection",
      "CNN Model",
      "Image Classification",
      "Computer Vision"
    ]
  }
];
