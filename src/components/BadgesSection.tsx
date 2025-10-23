import React, { useState } from "react";
import { motion } from "framer-motion";
import DataAnalyticsImg from '../assets/data analytics.png';
import footer from "./Footer";
import google_1 from '../assets/google_1.png';
import networking from '../assets/networking.png';
import cybersecurity from '../assets/cybersecurity.png';
import amazon from '../assets/amazon_1.png';
import google_2 from '../assets/google_2.png';
import google_3 from '../assets/google_2.png';
import Ccna from '../assets/Ccna.png'
import python_1 from '../assets/python_1.png';
import amazon1 from '../assets/amazon_2.png';
import amazon2 from '../assets/amazon_3.png';
import amazon3 from '../assets/amazon_4.png';

// Example badge data
const badges = [
  { img: DataAnalyticsImg, link: "https://www.linkedin.com/posts/abdulrafi0870_data-science-internship-at-nit-trichy-activity-7225038436569595904-TMte?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOf1RMBnMTpFDWRJN_Fj4ZQJTwrG57J6-8", name: "Data Analytics", issuer: "NIT TRICHY" },
  { img: google_1, link: "https://www.credly.com/earner/earned/badge/89d0f82c-5eed-48d9-9f30-d04fb259bc28", name: " Cloud Computing", issuer: "Google Cloud " },
  { img: google_2, link: "https://www.credly.com/earner/earned/badge/e1da049b-959a-45cb-9095-0b533c22900f", name: "Google Cloud Network", issuer: "Google Cloud" },
   { img: google_3, link: "https://www.credly.com/earner/earned/badge/540b7f1e-800a-45b6-a36d-ecc1f003fe7e", name: "Load Balancer", issuer: "Google Cloud" },
  { img: cybersecurity, link: "https://www.credly.com/badges/1b34e777-19e8-4393-8cf5-9b26f011b19c", name: "CyberSecurity", issuer: "Cisco Networks " },
  { img: networking, link: "https://www.credly.com/badges/1297ccee-71b5-4541-a35f-bc88c80722ee", name: "Networking", issuer: "Cisco Networks" },
  { img: python_1, link: "https://www.credly.com/badges/b233454e-1ed7-4b85-aeb3-5c6730824648", name: "Python Essentials", issuer: "Cisco Networks" },
  { img: Ccna, link: "https://www.credly.com/badges/3089f15a-92f9-436d-9dc2-537b110ff33b", name: "CCNA", issuer: "Cisco Network" },
   { img: amazon, link: "https://www.credly.com/earner/earned/badge/e1da049b-959a-45cb-9095-0b533c22900f", name: "ServerLess", issuer: "AWS Educate" },
    { img: amazon1, link: "https://www.credly.com/badges/1297ccee-71b5-4541-a35f-bc88c80722ee", name: " AWS Storage", issuer: "AWS Educate" },
  { img: amazon2, link: "https://www.credly.com/badges/b233454e-1ed7-4b85-aeb3-5c6730824648", name: "DataBases", issuer: "AWS Educate" },
  { img: amazon3, link: "https://www.credly.com/badges/3089f15a-92f9-436d-9dc2-537b110ff33b", name: "CloudsOps", issuer: "AWS Educate" },
];

const BadgeCard: React.FC<{ badge: typeof badges[0]; index: number }> = ({ badge, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex-shrink-0"
    >
      <motion.a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="block relative"
      >
        {/* Main card container */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-900/50 transition-all duration-300 shadow-2xl hover:shadow-blue-900/25 w-64 h-80">
          {/* Badge image container */}
          <div className="relative mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 shadow-inner border border-gray-700/50 group-hover:border-blue-800/50 transition-all duration-300">
              <img 
                src={badge.img} 
                alt={badge.name} 
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          {/* Badge content */}
          <div className="text-center space-y-3">
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors duration-300">{badge.name}</h3>
            <p className="text-gray-400 text-sm font-medium">{badge.issuer}</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Verified</span>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const BadgesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 mb-0 bg-black relative overflow-hidden">
      {/* Background & Decorations */}
        {/* Background Decorations */}
    <div className="absolute inset-0">
        {/* Soft gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010d24] via-[#00030b] to-black opacity-90"></div>


      </div>


      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Badges{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 drop-shadow-lg">
              & Certification
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of badges and certifications that reflect my expertise and growth in technology
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Desktop grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {(showAll ? badges : badges.slice(0, 4)).map((badge, index) => (
            <BadgeCard key={index} badge={badge} index={index} />
          ))}
        </div>

        {/* Desktop View More / View Less Button */}
        <div className="hidden md:flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden mt-6">
          <div className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
            {badges.map((badge, index) => (
              <BadgeCard key={index} badge={badge} index={index} />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/40 cursor-pointer">
              <div className="text-3xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-gray-300 font-medium">Technologies Mastered</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/40 cursor-pointer">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/40 cursor-pointer">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300 font-medium">Verified</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <footer/>
    </section>
  );
};

export default BadgesSection;
