'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorksSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="works" className="py-20 relative">
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
                <span className="text-orange">#</span>works
              </h2>
              <div className="flex items-center space-x-4">
                <div className="h-0.5 bg-orange w-16"></div>
                <div className="h-0.5 bg-orange w-8"></div>
                <div className="h-0.5 bg-orange w-12"></div>
              </div>
            </div>
            <motion.a
              href="#contact"
              className="text-muted-foreground hover:text-orange transition-colors duration-300 text-sm underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              view →
            </motion.a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-orange transition-all duration-300 hover:shadow-lg hover:shadow-orange/10">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-orange/20 to-orange/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    {/* Project preview placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent" />
                    <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      {index === 0 ? '💼' : index === 1 ? '🎬' : '📦'}
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                      {project.technologies[0]}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-orange/10 text-orange rounded-md border border-orange/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-orange hover:bg-orange/90 text-white flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange text-orange hover:bg-orange hover:text-white flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange text-orange hover:bg-orange hover:text-white flex-1"
                        disabled
                      >
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Want to see more projects or collaborate on something amazing?
          </p>
          <Button
            className="bg-orange hover:bg-orange/90 text-white px-8 py-3"
            asChild
          >
            <a href="#contact">
              Let&apos;s Work Together
            </a>
          </Button>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-32 right-10 opacity-5 pointer-events-none">
          <motion.div
            className="text-9xl font-bold text-orange"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear' as const,
            }}
          >
            💻
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;