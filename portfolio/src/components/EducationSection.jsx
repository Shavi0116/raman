import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUniversity, FaGraduationCap, FaSchool, FaBookOpen, FaAward } from 'react-icons/fa';
import { IoLocationSharp, IoCalendarClear } from 'react-icons/io5';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    field: "Specialization: Cyber Security",
    duration: "Sep 2022 - Present",
    location: "Punjab, India",
    score: "Current GPA: 8.0/10.0",
    icon: <FaUniversity size={20} />,
    color: "#004AAD",
    highlights: [
      "Cyber Security Specialization",
      "Coursework in Network Security, Cryptography",
      "Participated in Hackathons"
    ]
  },
  {
    institution: "Kartar Public School",
    degree: "Intermediate",
    duration: "Apr 2020 - Mar 2021",
    location: "J&K, India",
    score: "Percentage: 75%",
    icon: <FaGraduationCap size={20} />,
    color: "#779F06",
    highlights: [
      "Science Stream (PCM)",
      "School Topper in Computer Science",
      "Participated in Science Exhibitions"
    ]
  },
  {
    institution: "Delhi Public School",
    degree: "Matriculation",
    duration: "Apr 2018 - Mar 2019",
    location: "Dharan, Nepal",
    score: "Percentage: 80%",
    icon: <FaSchool size={20} />,
    color: "#5E503F",
    highlights: [
      "School Council Member",
      "Won Inter-School Quiz Competition",
      "Active in Sports Activities"
    ]
  }
];

const EducationCard = ({ education, index, scrollYProgress }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Animation calculations based on scroll position
  const y = useTransform(
    scrollYProgress,
    [0.1 + index * 0.15, 0.3 + index * 0.15],
    [50, 0]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0.1 + index * 0.15, 0.2 + index * 0.15],
    [0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.1 + index * 0.15, 0.2 + index * 0.15],
    [0.9, 1]
  );

  return (
    <motion.div
      className="relative group mb-10 last:mb-0"
      style={{
        y,
        opacity,
        scale
      }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-[#A68A64] border-opacity-20"
        whileHover={{ 
          y: -5,
          boxShadow: `0 10px 30px -5px ${education.color}30`
        }}
      >
        <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-start gap-5">
            {/* Institution Icon */}
            <motion.div 
              className={`flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0`}
              style={{ 
                backgroundColor: `${education.color}20`,
                color: education.color
              }}
              whileHover={{ 
                rotate: 10,
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              {education.icon}
            </motion.div>
            
            {/* Education Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#3A3329] mb-1 font-playfair">
                {education.institution}
              </h3>
              <p className="text-[#5E503F] text-opacity-90 text-sm mb-2 font-inter">
                {education.degree}
                {education.field && <span className="block text-[#5E503F] text-opacity-80 mt-1">{education.field}</span>}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E503F] text-opacity-70 font-inter">
                <div className="flex items-center gap-1">
                  <IoLocationSharp size={12} />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoCalendarClear size={12} />
                  <span>{education.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Score Badge */}
          <div className="mt-4">
            <span 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium font-inter"
              style={{ 
                backgroundColor: `${education.color}20`,
                color: education.color
              }}
            >
              {education.score}
            </span>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="px-6 pb-6 pt-0 border-t border-[#A68A64] border-opacity-20">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-[#5E503F] mb-3 font-inter">
              <FaBookOpen size={14} />
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {education.highlights.map((highlight, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#5E503F] text-opacity-90 font-inter"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : -10
                  }}
                  transition={{ 
                    delay: isExpanded ? 0.1 + i * 0.05 : 0,
                    duration: 0.3
                  }}
                >
                  <span className="mt-1">
                    <FaAward size={10} className="flex-shrink-0" style={{ color: education.color }} />
                  </span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const EducationSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-[#F0E7DA] to-[#F8F3EC] relative overflow-hidden">
      {/* Floating animated shapes */}
      <motion.div 
        className="absolute left-10 top-1/4 w-8 h-8 rounded-full"
        style={{ backgroundColor: "#004AAD", opacity: 0.1 }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute right-20 top-1/3 w-12 h-12 rounded-lg"
        style={{ backgroundColor: "#779F06", opacity: 0.1 }}
        animate={{
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute left-1/3 bottom-1/4 w-6 h-6 rounded-full"
        style={{ backgroundColor: "#5E503F", opacity: 0.1 }}
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="text-4xl md:text-5xl font-bold text-[#3A3329] mb-3 font-playfair"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.2 }
            }}
          >
            My <span className="relative inline-block">Education
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1"
                style={{ backgroundColor: "#A68A64", opacity: 0.4 }}
                initial={{ scaleX: 0 }}
                whileInView={{ 
                  scaleX: 1,
                  transition: { 
                    delay: 0.4,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-[#5E503F] text-opacity-90 max-w-lg mx-auto text-lg md:text-xl font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.6 }
            }}
          >
            Academic journey and milestones that shaped my knowledge
          </motion.p>
        </motion.div>

        <div ref={ref} className="space-y-10">
          {educationData.map((education, index) => (
            <EducationCard 
              key={education.institution} 
              education={education} 
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute -left-10 bottom-0 w-20 h-20 rounded-full blur-xl"
          style={{ backgroundColor: "#004AAD", opacity: 0.1 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default EducationSection;