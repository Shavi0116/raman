import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      url: "https://github.com/Shavi0116",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      url: "https://linkedin.com/in/shavisharma",
      name: "LinkedIn"
    },
    {
      icon: <FaTwitter className="text-lg" />,
      url: "https://twitter.com/yourhandle",
      name: "Twitter"
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      url: "mailto:mail4shavi@gmail.com",
      name: "Email"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      y: -3,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6" // Reduced py-12 to py-8
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4"> {/* Added gap-4 */}
          {/* Social Links */}
          <motion.div 
            className="flex space-x-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
                variants={linkVariants}
                whileHover="hover"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright - Made more compact */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="block text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                &copy; {new Date().getFullYear()} All rights reserved
              </span>
            </p>
          </motion.div>
        </div>

        {/* Back to Top Button - Made smaller */}
        <motion.div
          className="mt-6 flex justify-center" // Reduced mt-8 to mt-6
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            whileHover={{ y: -2 }}
          >
            Back to top
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 ml-1" // Reduced icon size
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;