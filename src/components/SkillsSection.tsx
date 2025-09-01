'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

const SkillsSection: React.FC = () => {
  const skillIcons: { [key: string]: string } = {
    'MongoDB': '🍃',
    'Express.js': 'ex',
    'React': '⚛️',
    'Node.js': '🟢',
    'TypeScript': '🔧',
    'Tailwind CSS': '🌊',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-orange">#</span>skills
              </h2>
              <div className="flex items-center space-x-4">
                <div className="h-0.5 bg-orange w-16"></div>
                <div className="h-0.5 bg-orange w-8"></div>
                <div className="h-0.5 bg-orange w-12"></div>
              </div>
            </div>
            <motion.a
              href="#works"
              className="text-muted-foreground hover:text-orange transition-colors duration-300 text-sm underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              see all →
            </motion.a>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:border-orange hover:shadow-lg hover:shadow-orange/20">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.name === 'Express.js' ? (
                    <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                      <span className="text-background font-bold text-sm">ex</span>
                    </div>
                  ) : skill.name === 'TypeScript' ? (
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">TS</span>
                    </div>
                  ) : skill.name === 'Tailwind CSS' ? (
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">TW</span>
                    </div>
                  ) : skill.name === 'MongoDB' ? (
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                  ) : skill.name === 'React' ? (
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">⚛</span>
                    </div>
                  ) : skill.name === 'Node.js' ? (
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                  ) : (
                    skillIcons[skill.name] || '🔧'
                  )}
                </div>
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
          <motion.div
            className="text-8xl font-bold text-orange"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ⚙️
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-20 opacity-10 pointer-events-none">
          <motion.div
            className="w-16 h-16 border-2 border-orange rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;