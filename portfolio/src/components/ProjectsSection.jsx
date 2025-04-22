import React from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaTrain, FaRobot, FaTaxi } from 'react-icons/fa';
import { SiFlask, SiPython, SiReact } from 'react-icons/si';

const projectsData = [
  {
    title: "Beepbob: AI Music Recommender",
    description: "Developed a Music Recommender System using Flask that learns from friends and community members. Integrated Spotify API to fetch track details and used lyrics/audio features for AI-powered recommendations.",
    type: "AI/ML",
    date: "2024",
    technologies: ["Flask", "Python", "Spotify API", "React", "Figma"],
    link: "#",
    demo: "#",
    icon: <FaSpotify size={24} />,
    accentColor: "#779F06"
  },
  {
    title: "RailResolve: Complaint Management",
    description: "AI-powered system for RailMadad that classifies complaints using ML/NLP. Features SOS button with offline support and customer feedback analysis.",
    type: "Full Stack",
    date: "2024",
    technologies: ["MERN", "Python", "Scikit-learn", "NLP"],
    link: "#",
    demo: "#",
    icon: <FaTrain size={24} />,
    accentColor: "#004AAD"
  },
  {
    title: "Samvaad: Conversation Companion",
    description: "Chatbot using NLP/ML with Naive Bayes classifier and TF-IDF vectorizer for accurate response prediction. Built with Dash framework.",
    type: "AI/ML",
    date: "2024",
    technologies: ["Python", "Dash", "NLTK", "Machine Learning"],
    link: "#",
    demo: "#",
    icon: <FaRobot size={24} />,
    accentColor: "#5E503F"
  },
  {
    title: "NYC Taxi Anomaly Detection",
    description: "ML solution to analyze taxi demand data and detect anomalies using Isolation Forest and statistical thresholding.",
    type: "Data Science",
    date: "2024",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    link: "#",
    demo: "#",
    icon: <FaTaxi size={24} />,
    accentColor: "#A68A64"
  }
];

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      rotateX: { duration: 0.6 }
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const ProjectTimelineItem = ({ project, index }) => {
  return (
    <motion.div
      className={`relative pl-8 pb-8 ${index !== projectsData.length - 1 ? '' : 'pb-0'}`}
      variants={itemVariants}
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Enhanced Timeline Line with Animation */}
      <motion.div 
        className="absolute left-0 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-[#A68A64] to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ 
          scaleY: 1,
          transition: { 
            duration: 1.2,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      />
      
      {/* Animated timeline dot with pulse effect */}
      <motion.div 
        className="absolute w-6 h-6 rounded-full border-4 border-[#F0E7DA] -left-[13px] top-0 z-10"
        style={{ backgroundColor: project.accentColor }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ 
          scale: [0, 1.2, 1],
          opacity: 1,
          transition: { 
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        animate={{
          boxShadow: [`0 0 0 0 rgba(${hexToRgb(project.accentColor)}, 0.4)`, 
                     `0 0 0 10px rgba(${hexToRgb(project.accentColor)}, 0)`, 
                     `0 0 0 0 rgba(${hexToRgb(project.accentColor)}, 0)`]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeOut"
          }
        }}
      />
      
      {/* Glow effect */}
      <motion.div 
        className="absolute -left-1 top-0 w-2 h-full opacity-0"
        style={{ backgroundColor: project.accentColor }}
        whileHover={{ 
          opacity: 0.2,
          transition: { duration: 0.3 }
        }}
      />
      
      {/* Project Card */}
      <motion.div
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#A68A64] border-opacity-20 relative"
        whileHover={{ 
          boxShadow: `0 15px 30px -10px ${project.accentColor}30`
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }}
      >
        {/* Project Header */}
        <div 
          className="p-5 flex items-center relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${project.accentColor}08, #FFFFFF)`,
            borderBottom: `1px solid ${project.accentColor}15`
          }}
        >
          {/* Header accent */}
          <div 
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: project.accentColor }}
          />
          
          <motion.div 
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full mr-4 shadow-sm border border-[#A68A64] border-opacity-20"
            whileHover={{ 
              rotate: 10, 
              scale: 1.1,
              backgroundColor: `${project.accentColor}20`
            }}
            transition={{ type: "spring" }}
            style={{ color: project.accentColor }}
          >
            {project.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold font-playfair text-[#3A3329]">{project.title}</h3>
            <p className="text-[#5E503F] text-opacity-70 font-inter">{project.type} • {project.date}</p>
          </div>
        </div>
        
        {/* Project Details */}
        <div className="p-5">
          <p className="text-[#5E503F] mb-4 font-inter leading-relaxed">{project.description}</p>
          
          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-[#5E503F] text-opacity-70 mb-2 font-inter">TECH STACK:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.span 
                  key={i}
                  className="px-3 py-1 bg-[#F0E7DA] text-[#5E503F] rounded-full text-xs font-medium font-inter"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.1 + i * 0.05,
                    type: "spring",
                    stiffness: 500
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${project.accentColor}20`
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium font-inter"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 4px 14px -2px ${project.accentColor}40`
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: project.accentColor,
                color: 'white'
              }}
            >
              View Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#F0E7DA] to-[#F8F3EC] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute right-10 bottom-10 w-16 h-16 rounded-full bg-[#779F06] opacity-10 blur-xl"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute left-20 top-1/4 w-24 h-24 rounded-full bg-[#004AAD] opacity-10 blur-xl"
        animate={{
          x: [0, 15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute right-1/3 top-1/2 w-32 h-32 rounded-full bg-[#5E503F] opacity-5 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#3A3329]">
            Featured <span className="text-[#004AAD]">Projects</span>
          </h2>
          <motion.p 
            className="text-[#5E503F]/90 text-lg max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            AI-powered solutions and full-stack applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Timeline Line */}
          <motion.div 
            className="absolute left-8 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-[#A68A64] to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ 
              scaleY: 1,
              transition: { 
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
              }
            }}
          />
          
          {/* Projects Timeline */}
          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <ProjectTimelineItem 
                key={project.title} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;