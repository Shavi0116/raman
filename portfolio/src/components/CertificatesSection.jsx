import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import DesignJava from '../assets/DesignJava.jpg';
import Frontend from '../assets/Frontend.jpg';
import Cyber from '../assets/Cyber.jpg';
import Nlp from '../assets/Nlp.jpg';
import build from '../assets/build.jpg';
import CyberEssentials from '../assets/CyberEssentials.jpg';

const certificatesData = [
  {
    title: "Design and Implementation of HCI",
    issuer: "NPTEL",
    date: "Jul 2024",
    skills: ["Human-Computer Interaction", "UI/UX Design"],
    image: DesignJava,
    color: "bg-gradient-to-br from-[#004AAD] to-[#0066CC]",
    link: "#"
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Forage",
    date: "Feb 2025",
    skills: ["Cybersecurity", "Threat Analysis", "Incident Response", "SIEM Tools"],
    image: Cyber,
    color: "bg-gradient-to-br from-[#0F4C75] to-[#3282B8]",
    link: "#"
  },
  {
    title: "Career Path: Front-End Development",
    issuer: "LinkedIn Learning",
    date: "Mar 2025",
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
    image: Frontend,
    color: "bg-gradient-to-br from-[#0077B5] to-[#00A0DC]",
    link: "#"
  },
  {
    title: "Introduction to Cybersecurity Essentials",
    issuer: "IBM",
    date: "Mar 2025",
    skills: ["Cybersecurity Fundamentals", "Network Security", "Risk Management", "Security Best Practices"],
    image: CyberEssentials, // Add image path if available
    color: "bg-gradient-to-br from-[#052049] to-[#1F70C1]", // IBM blue gradient
    link: "#"
  },
  {
    title: "Build Apps with ChatGPT, DALL·E, and GPT-4",
    issuer: "Coursera",
    date: "Apr 2025",
    skills: ["AI Integration", "ChatGPT API", "DALL·E", "GPT-4", "AI App Development"],
    image: build, // Add image path if available
    color: "bg-gradient-to-br from-[#0056D2] to-[#00A4E4]", // Coursera blue gradient
    link: "#"
  },
  {
    title: "ChatGPT Playground for Beginners: Intro to NLP AI",
    issuer: "Udemy",
    date: "May 2025",
    skills: ["Natural Language Processing", "ChatGPT", "AI Fundamentals", "Prompt Engineering"],
    image: Nlp, // Add image path if available
    color: "bg-gradient-to-br from-[#5E2B97] to-[#A435F0]", // Udemy purple gradient
    link: "#"
  }
];

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.15,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#004AAD] to-[#779F06] rounded-xl opacity-0 group-hover:opacity-10 blur-lg transition-all duration-500"></div>
      
      <div className="relative h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#A68A64]/20">
        {/* Certificate Image Header */}
        <div className={`relative h-40 ${certificate.color} overflow-hidden`}>
          {certificate.image ? (
            <motion.img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FaCertificate className="text-6xl text-white/90" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
            <FaAward className="text-white text-xl mr-2" />
            <span className="text-white font-medium font-inter">{certificate.issuer}</span>
          </div>
        </div>
        
        {/* Certificate Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <motion.h3 
              className="text-xl font-bold text-[#3A3329] font-playfair leading-tight"
              whileHover={{ x: 3 }}
            >
              {certificate.title}
            </motion.h3>
          </div>
          
          <motion.div 
            className="flex items-center text-sm text-[#5E503F]/80 mb-5 font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {certificate.date}
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {certificate.skills.map((skill, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1.5 bg-[#F0E7DA] text-[#5E503F] rounded-full text-xs font-medium font-inter"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                whileHover={{ 
                  y: -2,
                  backgroundColor: "#004AAD",
                  color: "white",
                  boxShadow: "0 2px 8px rgba(0, 74, 173, 0.3)"
                }}
                transition={{ 
                  duration: 0.2,
                  delay: 0.3 + index * 0.05
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-[#F0E7DA] to-[#F8F3EC] relative overflow-hidden">
      <motion.div 
        className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#004AAD]/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#779F06]/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute left-1/2 top-1/2 w-48 h-48 rounded-full bg-[#5E503F]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#3A3329]"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.2 }
            }}
          >
            <span className="text-[#004AAD]">Certifications</span> & Achievements
          </motion.h2>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-[#004AAD] to-[#779F06] mx-auto mb-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ 
              scaleX: 1,
              transition: { 
                delay: 0.4, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }
            }}
          />
          <motion.p 
            className="text-[#5E503F]/90 text-lg max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                delay: 0.6,
                duration: 0.6
              }
            }}
          >
            Validations of my technical expertise and commitment to continuous learning
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {certificatesData.map((certificate, index) => (
            <CertificateCard 
              key={certificate.title + index} 
              certificate={certificate}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;