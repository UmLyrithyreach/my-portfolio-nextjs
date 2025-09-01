'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="py-20 relative">
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
            <span className="text-orange">#</span>about
          </h2>
          <div className="flex items-center space-x-4">
            <div className="h-0.5 bg-orange w-16"></div>
            <div className="h-0.5 bg-orange w-8"></div>
            <div className="h-0.5 bg-orange w-12"></div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Hey! You can call me <span className="text-orange">{personalInfo.nickname}</span>!!
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I&apos;m an aspiring web developer with a strong foundation in the{' '}
                <span className="text-orange font-semibold">MERN stack</span>. As a recent full-stack development trainee,
                I&apos;m eager to apply my skills to real-world projects and grow into a confident, industry-ready developer.
              </motion.p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <p>
                      While I&apos;ve trained across the full stack, I&apos;m especially passionate about{' '}
                      <span className="text-orange font-semibold">front-end development</span> and creating clean, responsive,
                      and engaging user experiences. I&apos;m constantly learning, building side projects, and staying updated
                      with the latest web development trends.
                    </p>

                    <p>
                      I&apos;m excited to join a team where I can contribute, learn from experienced developers, and
                      sharpen my skills every day. My goal is to create websites that not only look great but also
                      provide exceptional user experiences.
                    </p>

                    <div className="bg-card border border-border rounded-lg p-6 mt-8">
                      <h4 className="text-lg font-semibold mb-4 text-foreground">
                        What drives me:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <span className="text-orange text-lg">•</span>
                          <span>Continuous learning and staying updated with latest technologies</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-orange text-lg">•</span>
                          <span>Building projects that solve real-world problems</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-orange text-lg">•</span>
                          <span>Creating clean, maintainable, and scalable code</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-orange text-lg">•</span>
                          <span>Collaborating with teams to deliver exceptional user experiences</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p
                className="text-lg font-medium text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {personalInfo.connectText}
              </motion.p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={toggleExpanded}
                variant="outline"
                className="border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
              >
                {isExpanded ? 'Read less ...' : 'Read more ...'}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <motion.div
            className="text-6xl font-bold text-orange"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            &lt;/&gt;
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;