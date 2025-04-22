import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(data);
        setSubmitSuccess(true);
        reset();
        setIsSubmitting(false);
        setTimeout(() => setSubmitSuccess(false), 5000);
        resolve();
      }, 1500);
    });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope size={20} />,
      title: "Email",
      info: "thegentlemonk@gmail.com",
      action: "mailto:thegentlemonk@gmail.com",
      color: "bg-[#004AAD]/10 text-[#004AAD] border-[#004AAD]/20"
    },
    {
      icon: <FaPhone size={20} />,
      title: "Phone",
      info: "+91 8572037252",
      action: "tel:+918572037252",
      color: "bg-[#779F06]/10 text-[#779F06] border-[#779F06]/20"
    },
    {
      icon: <FaLinkedin size={20} />,
      title: "LinkedIn",
      info: "linkedin.com/in/whoisramendra",
      action: "https://www.linkedin.com/in/whoisramendra",
      color: "bg-[#004AAD]/10 text-[#004AAD] border-[#004AAD]/20"
    },
    {
      icon: <FaGithub size={20} />,
      title: "GitHub",
      info: "github.com/whoisramendra",
      action: "https://github.com/whoisramendra",
      color: "bg-[#5E503F]/10 text-[#5E503F] border-[#5E503F]/20"
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Location",
      info: "Punjab, India",
      action: "https://maps.google.com/?q=Punjab,India",
      color: "bg-[#A68A64]/10 text-[#A68A64] border-[#A68A64]/20"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#F0E7DA] to-[#F8F3EC] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-[#004AAD]/10 blur-3xl"
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
        className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-[#779F06]/10 blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#3A3329]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get <span className="text-[#004AAD]">In Touch</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-[#004AAD] to-[#779F06] rounded-full mx-auto mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ 
              scaleX: 1,
              transition: { 
                delay: 0.3,
                duration: 0.8,
                type: "spring"
              }
            }}
          />
          <motion.p 
            className="text-[#5E503F]/90 text-lg max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h3 
              className="text-2xl font-semibold text-[#3A3329] font-playfair"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Information
            </motion.h3>
            <motion.p 
              className="text-[#5E503F]/90 font-inter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </motion.p>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start p-5 rounded-xl border ${method.color} shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(94, 80, 63, 0.1)"
                  }}
                >
                  {/* Hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/10 to-[#779F06]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="mr-4 mt-1 z-10">
                    <motion.div
                      className={`p-3 rounded-full ${method.color.split(' ')[0]} border ${method.color.split(' ')[3]}`}
                      whileHover={{ 
                        rotate: 10,
                        scale: 1.1,
                        transition: { type: "spring" }
                      }}
                    >
                      {method.icon}
                    </motion.div>
                  </div>
                  <div className="z-10">
                    <h4 className="font-medium text-[#3A3329] font-inter">{method.title}</h4>
                    <p className="text-[#5E503F]/90 font-inter">{method.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-[#A68A64]/20 relative"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0E7DA]/30 to-white/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="p-6 sm:p-8 relative z-10">
              <motion.h3 
                className="text-2xl font-semibold text-[#3A3329] mb-6 font-playfair"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Send Me a Message
              </motion.h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-[#5E503F]/80 mb-1 font-inter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-[#A68A64]/30 focus:ring-2 focus:ring-[#004AAD] focus:border-[#004AAD] transition-all duration-200 hover:border-[#004AAD] font-inter"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <motion.p 
                      className="mt-1 text-sm text-red-600 font-inter"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-[#5E503F]/80 mb-1 font-inter">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-[#A68A64]/30 focus:ring-2 focus:ring-[#004AAD] focus:border-[#004AAD] transition-all duration-200 hover:border-[#004AAD] font-inter"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <motion.p 
                      className="mt-1 text-sm text-red-600 font-inter"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-[#5E503F]/80 mb-1 font-inter">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-[#A68A64]/30 focus:ring-2 focus:ring-[#004AAD] focus:border-[#004AAD] transition-all duration-200 hover:border-[#004AAD] font-inter"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <motion.p 
                      className="mt-1 text-sm text-red-600 font-inter"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-[#5E503F]/80 mb-1 font-inter">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-[#A68A64]/30 focus:ring-2 focus:ring-[#004AAD] focus:border-[#004AAD] transition-all duration-200 hover:border-[#004AAD] font-inter"
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <motion.p 
                      className="mt-1 text-sm text-red-600 font-inter"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div 
                  className="pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#004AAD] to-[#0066CC] text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:ring-offset-2 shadow-md hover:shadow-lg font-inter ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:from-[#00388a] hover:to-[#004AAD]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 bg-[#779F06]/10 text-[#5E503F] rounded-lg border border-[#779F06]/30 shadow-sm font-inter"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#779F06]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you! Your message has been sent successfully.
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;