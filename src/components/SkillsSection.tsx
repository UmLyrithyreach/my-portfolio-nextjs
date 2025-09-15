'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsSection: React.FC = () => {
  const logo = [
    { tool: "Mongo", image: "/mognologo.png", tooltip: "MongoDB" },
    { tool: "Express", image: "/expresslogo.png", tooltip: "ExpressJS" },
    { tool: "React", image: "/reactlogo.svg", tooltip: "ReactJS" },
    { tool: "Node", image: "/nodelogo.png", tooltip: "NodeJS" },
    { tool: "Postman", image: "/postmanlogo.png", tooltip: "Postman" },
    { tool: "Tailwind", image: "/tailwindlogo.png", tooltip: "TailwindCSS" },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-orange">#</span>skills
          </h2>
          <div className="flex items-center space-x-4">
            <div className="h-0.5 bg-orange w-16"></div>
            <div className="h-0.5 bg-orange w-8"></div>
            <div className="h-0.5 bg-orange w-12"></div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
        >
          {logo.map((logo, index) => (
            <motion.section
              key={index}
              initial={{ y: -10 }}
              animate={{
                y: [10, -10],
                transition: {
                  duration: 2 + index * 0.7,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="skillLogo"
            >
              <div className="group relative">
                <Image
                  src={logo.image}
                  alt={logo.tool}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-md hover:scale-110 transition-transform duration-300 object-contain"
                  priority={index < 4}
                />
                {/* Tooltip */}
                <div className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[200px] -translate-x-1/2 transform rounded-lg border border-border bg-background px-3 py-2 text-center text-sm font-medium opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100 text-foreground">
                  {logo.tooltip}
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-20 left-20 opacity-5 pointer-events-none">
          <motion.div
            className="text-8xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear' as const,
            }}
          >
            ⚡
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
