'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        {/* Copyright */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Reach. Built with{' '}
            <span className="text-orange">❤️</span> using{' '}
            <span className="text-orange font-medium">Next.js</span>,{' '}
            <span className="text-orange font-medium">TypeScript</span>, and{' '}
            <span className="text-orange font-medium">Framer Motion</span>
          </p>
          <motion.p
            className="text-muted-foreground/70 text-xs mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Designed & Developed with passion for clean code and great user experiences
          </motion.p>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <motion.div
            className="w-32 h-32 border border-orange rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear' as const,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;