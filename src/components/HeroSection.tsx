'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating dots pattern */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-orange rounded-full"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>
        </div>

        {/* Large triangle */}
        <motion.div
          className="absolute top-32 right-32 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[150px] border-b-orange opacity-80"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Small floating shapes */}
        <motion.div
          className="absolute top-40 left-20 w-4 h-4 bg-orange rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-40 left-40 w-6 h-6 border-2 border-orange rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hey, I&apos;m {personalInfo.name}, an{' '}
              <span className="block">intuitive</span>
              <span className="text-orange gradient-text">
                {personalInfo.title.toLowerCase()}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalInfo.specialization}
            </motion.p>

            <motion.p
              className="text-lg font-medium text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {personalInfo.callToAction}
            </motion.p>
          </motion.div>

          {/* Profile Image with Geometric Background */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Large orange triangle background */}
              <motion.div
                className="absolute -top-10 -left-10 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[200px] border-b-orange opacity-90 z-0"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Profile image placeholder */}
              <motion.div
                className="relative z-10 w-80 h-80 bg-gradient-to-br from-orange to-orange/70 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-lg font-semibold">
                    {personalInfo.name}
                  </div>
                  <div className="text-white/80 text-sm">
                    {personalInfo.title}
                  </div>
                </div>
              </motion.div>

              {/* Floating geometric elements around image */}
              <motion.div
                className="absolute -top-5 -right-5 w-8 h-8 bg-orange rounded-full"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-5 -left-5 w-6 h-6 border-2 border-orange rotate-45"
                animate={{
                  rotate: [45, 135, 45],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;