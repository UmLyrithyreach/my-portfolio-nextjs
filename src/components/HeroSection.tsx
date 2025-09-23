"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import Image from 'next/image';
import { useInMobile } from './hooks/useInMobile';
import Typewriter from "typewriter-effect";
import LandingCard from './landingProfile/landingCard';

export const HeroSection: React.FC = () => {
  const isMobile = useInMobile(768); // Use mobile breakpoint at 768px

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-20 px-6"
    >
      <div className="container mx-auto">
        {isMobile ? (
          // Mobile layout - stacked but with consistent animations
          <div className="flex flex-col items-center justify-center gap-8 order-2 lg:order-1">
            {/* Image Content - Move to top on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              <LandingCard />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-4 order-2"
            >
              <motion.h1
                className="text-3xl sm:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {`Hey, I'm ${personalInfo.name}, an `}
                <span className="block mt-2">intuitive</span>
                <span className="text-orange font-bold block mt-2">
                  <Typewriter
                    options={{
                      strings: [personalInfo.title],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                      cursor: "_",
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {personalInfo.description}
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {personalInfo.specialization}
              </motion.p>

              <motion.p
                className="text-base sm:text-lg font-medium text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {personalInfo.callToAction}
              </motion.p>
            </motion.div>
          </div>
        ) : (
          // Desktop layout - side by side (keep as is but minor adjustments)
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 order-2 lg:order-1">
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
                {`Hey, I'm ${personalInfo.name}, an intuitive `}
                <span className="text-orange font-bold">
                  <Typewriter
                    options={{
                      strings: [personalInfo.title],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                      cursor: "_",
                      deleteSpeed: 30,
                    }}
                  />
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

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center w-full"
            >
              <LandingCard />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection;