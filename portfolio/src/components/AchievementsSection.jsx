import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "CodeChef 4 Star Coder",
      description: "Solved 300+ problems and achieved 4-star rating",
      date: "Jan 2025",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "LeetCode 200+ Problems",
      description: "Earned 50 Days Badge with consistent problem solving",
      date: "Dec 2024",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "AI Trainer at Outlier.ai",
      description: "Trained AI models and contributed to dataset development",
      date: "Nov 2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Top 5% in SIH Hackathon",
      description: "Runner-up in Smart India Hackathon internal round",
      date: "Sep 2024",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#F0E7DA] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-[#004AAD] bg-opacity-10 blur-3xl"
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
        className="absolute -right-20 bottom-1/4 w-64 h-64 rounded-full bg-[#779F06] bg-opacity-10 blur-3xl"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-gradient-to-br from-[#3A3329] to-[#5E503F] rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-playfair">
              My <span className="text-[#779F06]">Achievements</span>
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-[#779F06] to-[#004AAD] rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ 
                scaleX: 1,
                transition: { 
                  delay: 0.4, 
                  duration: 0.8,
                  type: "spring"
                }
              }}
            />
            <motion.p 
              className="text-[#F0E7DA] text-opacity-80 mt-4 text-lg max-w-2xl mx-auto font-inter"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.6 }
              }}
            >
              Milestones and recognitions in my journey
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#A68A64] to-transparent"></div>

            {/* Achievement Items */}
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`relative pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Dot */}
                  <div className={`absolute top-6 left-0 w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} md:left-1/2 transform md:-translate-x-2 z-10 border-2 border-[#F0E7DA]`}></div>

                  {/* Content */}
                  <motion.div 
                    className={`p-6 rounded-xl bg-[#5E503F] bg-opacity-50 backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} border border-[#A68A64] border-opacity-30`}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(94, 80, 63, 0.7)"
                    }}
                  >
                    <div className={`text-sm font-mono mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-playfair">{achievement.title}</h3>
                    <p className="text-[#F0E7DA] text-opacity-90 font-inter">{achievement.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;