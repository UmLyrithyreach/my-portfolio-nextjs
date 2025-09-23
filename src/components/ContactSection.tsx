'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo, personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const getContactIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'telegram':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.11.67.77z" />
          </svg>
        );
      case 'discord':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        );
      case 'email':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        );
    }
  };

  return (
    <section id="contact" className="py-20 relative">
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
            <span className="text-orange">#</span>contact
          </h2>
          <div className="flex items-center space-x-4">
            <div className="h-0.5 bg-orange w-16"></div>
            <div className="h-0.5 bg-orange w-8"></div>
            <div className="h-0.5 bg-orange w-12"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-lg text-foreground font-medium text-left">
              {personalInfo.connectText}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-card border border-border rounded-xl p-8 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((contact) => (
                <motion.div
                  key={contact.platform}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-6 h-auto hover:bg-orange/10 hover:border-orange transition-all duration-300 border border-transparent"
                    asChild
                  >
                    <a
                      href={contact.url}
                      target={contact.platform === 'Email' ? '_self' : '_blank'}
                      rel={contact.platform === 'Email' ? '' : 'noopener noreferrer'}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                        {getContactIcon(contact.platform)}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-foreground group-hover:text-orange transition-colors duration-300">
                          {contact.platform}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {contact.username}
                        </div>
                      </div>
                      <div className="text-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}

              {/* Other Contact Methods */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-border"
              >
                <Button
                  variant="outline"
                  className="w-full border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center space-x-2">
                    <span>Home</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute top-20 right-20 opacity-5 pointer-events-none">
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
            📧
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;