'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems, personalInfo } from '@/data/portfolio';
import { ModeToggle } from './ThemeToggle';
import { useInMobile } from './hooks/useInMobile';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Code2,
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface NavigationIconProps {
  name: string;
  className?: string;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ name, className = "w-4 h-4" }) => {
  const iconMap = {
    home: <Home className={className} />,
    about: <User className={className} />,
    works: <Briefcase className={className} />,
    contact: <Mail className={className} />,
    achievements: <Sparkles className={className} />
  };
  
  return iconMap[name as keyof typeof iconMap] || <Code2 className={className} />;
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useInMobile(768);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (scrollPosition / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      
      // Update active section based on scroll position with improved detection
      const sections = navigationItems.map(item => item.name);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight * 0.3; // 30% of viewport height
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange to-orange/50"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center space-x-3 z-10 relative"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setIsLogoHovered(true)}
              onHoverEnd={() => setIsLogoHovered(false)}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="group flex items-center space-x-2 text-xl md:text-2xl font-bold text-foreground hover:text-orange transition-all duration-300"
                aria-label="Go to home section"
              >
                {/* Logo Text */}
                <div className="flex items-center">
                  <span className="text-orange">&lt;</span>
                  <span className="mx-1">RithyReach</span>
                  <span className="text-orange">/&gt;</span>
                </div>

                {/* Hover Effect */}
                <AnimatePresence>
                  {isLogoHovered && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange to-transparent"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '100%', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  variants={navItemVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <button
                    onClick={() => scrollToSection(item.name)}
                    className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.name
                        ? 'text-orange bg-orange/10 border border-orange/20'
                        : 'text-foreground hover:text-orange hover:bg-orange/5'
                    }`}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <NavigationIcon name={item.name} />
                    <span>{item.name}</span>
                    
                    {/* Active Indicator */}
                    {activeSection === item.name && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-orange rounded-full"
                        layoutId="activeDesktopIndicator"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* CTA Button - Desktop Only */}
              {!isMobile && (
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="hidden lg:flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-orange to-orange/80 text-white rounded-lg font-medium hover:from-orange/90 hover:to-orange/70 transition-all duration-300 shadow-lg shadow-orange/25"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Let&apos;s Talk</span>
                </motion.button>
              )}

              {/* Theme Toggle */}
              <div className="hidden md:block">
                <ModeToggle />
              </div>

              {/* Enhanced Mobile Menu Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="md:hidden relative p-2 text-foreground hover:text-orange transition-colors duration-300 rounded-lg hover:bg-orange/10"
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.95 }}
                data-mobile-menu
              >
                <motion.div
                  className="w-6 h-6 relative"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.nav
              className="fixed top-20 left-4 right-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1
              }}
              data-mobile-menu
            >
              <div className="p-6">
                {/* Mobile Header */}
                <motion.div
                  className="flex items-center justify-between mb-6 pb-4 border-b border-border/50"
                  variants={mobileItemVariants}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange to-orange/70 rounded-md flex items-center justify-center">
                      <Code2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-semibold text-foreground">Navigation</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Online</span>
                  </div>
                </motion.div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2 mb-6">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.name)}
                      className={`group w-full flex items-center space-x-3 p-4 rounded-xl text-left font-medium transition-all duration-300 ${
                        activeSection === item.name
                          ? 'text-orange bg-orange/10 border border-orange/20 shadow-lg shadow-orange/10'
                          : 'text-foreground hover:text-orange hover:bg-orange/5'
                      }`}
                      variants={mobileItemVariants}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeSection === item.name
                          ? 'bg-orange text-white'
                          : 'bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white'
                      }`}>
                        <NavigationIcon name={item.name} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <span className="text-orange">#</span>
                          <span>{item.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {item.label}
                        </div>
                      </div>

                      {activeSection === item.name && (
                        <motion.div
                          className="w-2 h-2 bg-orange rounded-full"
                          layoutId="activeMobileIndicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}

                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-orange transition-colors duration-300 rotate-[-90deg]" />
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Actions */}
                <motion.div
                  className="space-y-4 pt-4 border-t border-border/50"
                  variants={mobileItemVariants}
                >
                  {/* CTA Button */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-orange to-orange/80 text-white rounded-xl font-medium hover:from-orange/90 hover:to-orange/70 transition-all duration-300 shadow-lg shadow-orange/25"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </button>

                  {/* Theme Toggle */}
                  <div className="flex justify-center">
                    <ModeToggle />
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;