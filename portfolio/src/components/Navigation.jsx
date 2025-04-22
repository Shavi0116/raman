import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Download } from "lucide-react";
import profilePic from '../assets/icon.png'; // Update this path

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setScrolled(scrollPosition > 10);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F0E7DA] bg-opacity-90 shadow-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo/Name with Profile Picture */}
          <motion.div 
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img 
              src={profilePic} 
              alt="Ramendra Raman" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#5E503F]"
            />
            <span 
              className="text-2xl font-playfair font-bold cursor-pointer text-[#5E503F]"
              onClick={() => scrollToSection('home')}
            >
              Ramendra Raman
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors font-inter ${
                    activeSection === section.id ? 'text-[#004AAD]' : 'text-[#5E503F] hover:text-[#779F06]'
                  }`}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#779F06]"
                      layoutId="navUnderline"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
            <motion.a
              href="/ramendraGENCV.pdf"
              download
              className="flex items-center gap-1 px-4 py-2 rounded-md bg-[#004AAD] text-white hover:bg-[#00388a] transition-colors font-inter text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <Download size={16} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#5E503F] hover:text-[#779F06] focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-[#F0E7DA] shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`block px-4 py-3 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === section.id 
                      ? 'bg-[#004AAD] bg-opacity-10 text-[#004AAD]' 
                      : 'text-[#5E503F] hover:bg-[#779F06] hover:bg-opacity-10 hover:text-[#5E503F]'
                  }`}
                >
                  {section.name}
                </button>
              </motion.div>
            ))}
            <motion.a
              href="/ramendraGENCV.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-3 mx-2 rounded-md bg-[#004AAD] text-white hover:bg-[#00388a] transition-colors font-medium text-sm"
              whileTap={{ scale: 0.98 }}
            >
              Download Resume <Download size={18} />
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;