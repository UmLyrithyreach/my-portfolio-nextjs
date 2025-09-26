"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import { useInMobile } from './hooks/useInMobile';
import LandingCard from './landingProfile/landingCard';

export const HeroSection: React.FC = () => {
  const isMobile = useInMobile(768);
  
  // Custom typewriter effect using React state
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = personalInfo.title;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

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
                <span className="text-orange font-bold block mt-2 min-h-[1.2em]">
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                    _
                  </span>
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
          // Desktop layout - side by side
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
                <span className="text-orange font-bold min-h-[1.2em] inline-block">
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                    _
                  </span>
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