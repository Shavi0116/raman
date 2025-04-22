import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiCplusplus, SiFlask, SiSpring } from 'react-icons/si';

// Constants for better organization
const SKILLS_DATA = [
  // Frontend
  { 
    name: 'React', 
    category: 'frontend', 
    icon: <FaReact size={28} />, 
    description: 'Building interactive UIs with hooks and context API',
    proficiency: 90
  },
  { 
    name: 'JavaScript', 
    category: 'frontend', 
    icon: <SiJavascript size={28} />, 
    description: 'ES6+ syntax, async programming, and design patterns',
    proficiency: 85
  },
  { 
    name: 'HTML', 
    category: 'frontend', 
    icon: <FaHtml5 size={28} />, 
    description: 'Semantic HTML5 markup and accessibility best practices',
    proficiency: 95
  },
  { 
    name: 'CSS', 
    category: 'frontend', 
    icon: <FaCss3Alt size={28} />, 
    description: 'Flexbox, Grid, animations and responsive design',
    proficiency: 90
  },
  
  // Backend
  { 
    name: 'Node.js', 
    category: 'backend', 
    icon: <FaNodeJs size={28} />, 
    description: 'Building scalable server-side applications',
    proficiency: 80
  },
  { 
    name: 'Express', 
    category: 'backend', 
    icon: <SiExpress size={28} />, 
    description: 'REST API development and middleware integration',
    proficiency: 75
  },
  { 
    name: 'Flask', 
    category: 'backend', 
    icon: <SiFlask size={28} />, 
    description: 'Python microframework for web applications',
    proficiency: 70
  },
  { 
    name: 'SpringBoot', 
    category: 'backend', 
    icon: <SiSpring size={28} />, 
    description: 'Enterprise Java applications framework',
    proficiency: 65
  },
  
  // Languages
  { 
    name: 'Python', 
    category: 'language', 
    icon: <FaPython size={28} />, 
    description: 'AI/ML development with libraries like Scikit-learn',
    proficiency: 85
  },
  { 
    name: 'C++', 
    category: 'language', 
    icon: <SiCplusplus size={28} />, 
    description: 'Data structures, algorithms and OOP concepts',
    proficiency: 75
  },
  { 
    name: 'Java', 
    category: 'language', 
    icon: <FaJava size={28} />, 
    description: 'Spring framework and enterprise application development',
    proficiency: 70
  },
];

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'language', name: 'Languages' },
];

// Animation variants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  },
  skillItem: (direction) => ({
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }),
  description: {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  },
  decorative: {
    animate: {
      x: [0, 50, 0],
      y: [0, 30, 0],
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Memoized filtered skills
  const filteredSkills = useMemo(() => {
    return activeCategory === 'all' 
      ? SKILLS_DATA.filter((skill, index, self) => 
          index === self.findIndex(s => s.name === skill.name)
        )
      : SKILLS_DATA.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const handleSkillClick = (skillName) => {
    setSelectedSkill(prev => prev === skillName ? null : skillName);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend': return 'text-[#004AAD]';
      case 'backend': return 'text-[#779F06]';
      default: return 'text-[#5E503F]';
    }
  };

  const getCategoryBgColor = (category) => {
    switch (category) {
      case 'frontend': return 'bg-[#004AAD]/10';
      case 'backend': return 'bg-[#779F06]/10';
      default: return 'bg-[#5E503F]/10';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#F0E7DA] to-[#F8F3EC] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-[#004AAD] bg-opacity-15 blur-3xl"
        {...ANIMATION_VARIANTS.decorative}
      />
      <motion.div 
        className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-[#779F06] bg-opacity-15 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3A3329] font-playfair">
            Technical <span className="text-[#004AAD]">Skills</span>
          </h2>
          <p className="text-[#5E503F]/90 text-lg max-w-2xl mx-auto font-inter">
            Technologies I've mastered through projects and coursework
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="inline-flex flex-wrap justify-center gap-3 bg-white/50 p-2 rounded-xl backdrop-blur-sm border border-[#A68A64]/20 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedSkill(null);
                }}
                className={`px-6 py-2 rounded-lg text-sm font-medium font-inter transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#004AAD] to-[#779F06] text-white shadow-md'
                    : 'text-[#5E503F] hover:bg-[#5E503F]/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: activeCategory === category.id ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  repeat: activeCategory === category.id ? Infinity : 0,
                  duration: 1.5
                }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="flex justify-center">
          <motion.div 
            key={activeCategory}
            className="relative overflow-hidden w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={ANIMATION_VARIANTS.container}
          >
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/5 to-[#779F06]/5"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${skill.category}`}
                  className={`flex flex-col items-center p-6 rounded-xl bg-white/90 backdrop-blur-sm
                    hover:bg-white transition-all w-full relative overflow-hidden cursor-pointer
                    border border-[#A68A64]/30 shadow-sm hover:shadow-md ${getCategoryBgColor(skill.category)}`}
                  onClick={() => handleSkillClick(skill.name)}
                  custom={{ direction: index % 2 === 0 ? 'up' : 'down' }}
                  variants={ANIMATION_VARIANTS.skillItem}
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(94, 80, 63, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/10 to-[#779F06]/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Skill icon with bounce animation */}
                  <motion.div 
                    className={`text-4xl mb-4 ${getCategoryColor(skill.category)}`}
                    whileInView={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: index * 0.1
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <span className="text-lg font-semibold font-inter text-[#3A3329] mb-2">
                    {skill.name}
                  </span>
                  
                  {/* Proficiency bar */}
                  <div className="w-full h-1.5 bg-[#F0E7DA] rounded-full mb-3 overflow-hidden">
                    <motion.div 
                      className={`h-full ${skill.category === 'frontend' ? 'bg-[#004AAD]' : 
                        skill.category === 'backend' ? 'bg-[#779F06]' : 'bg-[#5E503F]'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  {/* Description expand animation */}
                  {selectedSkill === skill.name && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-sm font-inter text-[#5E503F] text-center"
                      transition={{ duration: 0.3 }}
                      variants={ANIMATION_VARIANTS.description}
                    >
                      {skill.description}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;