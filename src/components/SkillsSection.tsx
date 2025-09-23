'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsSection: React.FC = () => {
  const skills = [
    { tool: "MongoDB", image: "/mognologo.png", category: "Database", proficiency: 50 },
    { tool: "PostgreSQL", image: "/Postgresql_elephant.svg", category: "Database", proficiency: 90 },
    { tool: "MySQL", image: "/mysql.png", category: "Database", proficiency: 93 },
    { tool: "Express.js", image: "/expresslogo.png", category: "Backend", proficiency: 70 },
    { tool: "Node.js", image: "/nodelogo.png", category: "Backend", proficiency: 70 },
    { tool: "React", image: "/reactlogo.svg", category: "Frontend", proficiency: 90 },
    { tool: "Next.js", image: "/next-js.svg", category: "Frontend", proficiency: 85 },
    { tool: "Tailwind CSS", image: "/tailwindlogo.png", category: "Styling", proficiency: 92 },
    { tool: "CSS3", image: "/CSS3.png", category: "Styling", proficiency: 88 },
    { tool: "Git", image: "/git.png", category: "Tools", proficiency: 80 },
    { tool: "GitHub", image: "/github.png", category: "Tools", proficiency: 95 },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Styling", "Tools"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Group skills by category for organization
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-orange">#</span>skills & expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange text-white shadow-lg shadow-orange/25'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-orange/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs opacity-60">
                  ({skillsByCategory[category]?.length || 0})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.tool}-${selectedCategory}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-orange/10 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs font-medium bg-orange/10 text-orange rounded-full border border-orange/20">
                  {skill.category}
                </span>
              </div>

              {/* Skill Icon & Name */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange/5 to-orange-600/5 rounded-xl flex items-center justify-center group-hover:from-orange/10 group-hover:to-orange-600/10 transition-all duration-300">
                    <Image
                      src={skill.image}
                      alt={skill.tool}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{skill.tool}</h3>
                  <span className="text-sm text-muted-foreground">
                    {skill.proficiency >= 90 ? 'Expert' : 
                     skill.proficiency >= 75 ? 'Advanced' : 
                     skill.proficiency >= 60 ? 'Intermediate' : 'Learning'}
                  </span>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-medium">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-orange to-orange-600 h-full rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-orange-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-xl border border-orange/0 group-hover:border-orange/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Category Summary */}
        {selectedCategory !== "All" && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                {filteredSkills.length} {selectedCategory.toLowerCase()} skill{filteredSkills.length !== 1 ? 's' : ''}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Background Decoration */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <motion.div
          className="text-6xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          ⚡
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;