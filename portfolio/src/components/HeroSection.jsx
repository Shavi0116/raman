import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const HeroSection = () => {
  const [particlesInit, setParticlesInit] = useState(null);

  const initParticles = async (engine) => {
    await loadFull(engine);
    setParticlesInit(true);
  };

  return (
    <section 
      id="home" 
      className="relative h-screen bg-gradient-to-br from-[#F0E7DA] to-[#F8F3EC] px-8 py-12 flex flex-col md:flex-row items-center justify-center pt-24 overflow-hidden"
    >
      {/* Particle Background */}
      {particlesInit && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            init={initParticles}
            options={{
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#5E503F",
                },
                links: {
                  color: "#C4B6A0",
                  distance: 150,
                  enable: true,
                  opacity: 0.4,
                  width: 1.2,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.7,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 4 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* Content */}
      <motion.div
        className="w-full md:w-1/2 text-left space-y-6 z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-2">
            <span className="text-[#3A3329]">
              Hi, I'm <span className="text-[#004AAD]">Ramendra Raman</span>
            </span>
          </h1>
          <div className="h-12 md:h-14 lg:h-16">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1500,
                'AI/ML Engineer',
                1500,
                'Problem Solver',
                1500,
                'Tech Enthusiast',
                1500
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#5E503F]"
            />
          </div>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl font-inter max-w-md text-[#4A4235] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Building intelligent solutions with code and creativity. Passionate about 
          AI-powered applications and crafting seamless digital experiences.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* <motion.a
            href="/assests/ramendraGENCV"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-[#779F06] to-[#8BB82A] hover:from-[#5E503F] hover:to-[#6B5D4A] rounded-lg transition-all group shadow-lg hover:shadow-md"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
            <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </motion.a> */}
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-[#004AAD] to-[#0066CC] hover:from-[#00367D] hover:to-[#004AAD] rounded-lg transition-all group shadow-lg hover:shadow-md"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-white/90 relative z-10 bg-gradient-to-br from-[#F0E7DA] to-[#D9C9B8] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl font-bold text-[#5E503F]">RR</span>
          </motion.div>
          <motion.div 
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#779F06] to-[#004AAD] blur-xl opacity-30 z-0"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Animated Accent Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 rounded-full bg-[#779F06] opacity-15 z-0"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 left-10 w-16 h-16 rounded-full bg-[#004AAD] opacity-15 z-0"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, 0, 20] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <div className="w-[30px] h-[50px] border-2 border-[#5E503F] rounded-full flex items-start justify-center">
            <motion.div 
              className="w-[6px] h-[6px] bg-[#004AAD] rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
          <span className="mt-2 text-sm font-medium text-[#5E503F]">Scroll Down</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;