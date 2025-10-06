import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll listener only updates activeSection on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = ["home", "about"];
        let current = "home";
        for (let id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = id;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", href: "#home", type: "section" },
    { label: "Projects", href: "/projects", type: "route" },
    { label: "About", href: "/about", type: "route" },
      { label: "Resume", href: "/resume", type: "route" },
    { label: "Contact", href: "#contact", type: "section" },

  ];

  const handleNavClick = (item: { href: string; type: string }) => {
    setIsOpen(false);

    if (item.type === "route") {
      navigate(item.href); // Navigate to route page
    } else {
      // Scroll to section: if not on home, navigate first
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const el = document.getElementById(item.href.replace("#", ""));
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActiveSection(item.href.replace("#", ""));
    }
  };

  const isActive = (item: { href: string; type: string }) => {
    if (item.type === "route") return location.pathname === item.href;
    // Only check section if on home page
    if (location.pathname === "/") return activeSection === item.href.replace("#", "");
    return false;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-sky-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 text-3xl font-bold cursor-pointer select-none"
            onClick={() => handleNavClick({ href: "#home", type: "section" })}
          >
            <span className="text-white">A</span>
            <span className="text-blue-400">R</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors duration-300 font-medium text-lg ${
                  isActive(item)
                    ? "text-sky-400 border-b-2 border-sky-400"
                    : "text-gray-300 hover:text-sky-400"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-sky-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-sky-500/20 py-4"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`block w-full text-left px-4 py-3 text-lg transition-all duration-300 ${
                  isActive(item)
                    ? "text-sky-400 bg-sky-500/10"
                    : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
