import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectsPage from "./Pages/Projects";
import Resume from './Pages/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif]">
        <Navigation />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home ">
                    <Hero />
                  </div>
                  <Skills />
                  <Contact />
                </>
              }
            />
             <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<Resume/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
