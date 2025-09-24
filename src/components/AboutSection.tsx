'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Lightbulb, 
  Users, 
  Target, 
  Sparkles, 
  ChevronDown,
  ChevronUp,
  Heart,
  Coffee,
  Zap
} from 'lucide-react';

interface MotivationItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PersonalityTrait {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  const motivations: MotivationItem[] = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always staying updated with the latest technologies and best practices"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Building projects that solve real-world problems and make a difference"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Creating maintainable, scalable, and well-documented code"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Working with teams to deliver exceptional user experiences"
    }
  ];

  const personalityTraits: PersonalityTrait[] = [
    { icon: <Coffee className="w-5 h-5" />, label: "Coffee Enthusiast", color: "bg-amber-500" },
    { icon: <Heart className="w-5 h-5" />, label: "Passionate", color: "bg-red-500" },
    { icon: <Zap className="w-5 h-5" />, label: "Fast Learner", color: "bg-yellow-500" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Creative", color: "bg-purple-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-orange/5 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange">#</span>about
            </h2>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <motion.div 
              className="h-1 bg-gradient-to-r from-orange to-orange/50 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div 
              className="h-1 bg-gradient-to-r from-orange/50 to-orange/20 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div 
              className="h-1 bg-gradient-to-r from-orange/20 to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Introduction Card */}
          <motion.div variants={itemVariants}>
            <Card className="mb-8 border-2 border-orange/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Hey! You can call me{' '}
                      <motion.span 
                        className="text-orange relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {personalInfo.nickname}
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-orange"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </motion.span>
                      !!
                    </motion.h3>

                    <motion.div
                      className="text-muted-foreground leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <p dangerouslySetInnerHTML={{ __html: personalInfo.aboutText }} />
                    </motion.div>
                  </div>

                  {/* Personality Traits */}
                  <motion.div 
                    className="flex flex-wrap lg:flex-col gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {personalityTraits.map((trait, index) => (
                      <motion.div
                        key={trait.label}
                        className="flex items-center space-x-2 bg-card/50 rounded-full px-3 py-2 border border-border/50"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`${trait.color} p-1 rounded-full text-white`}>
                          {trait.icon}
                        </div>
                        <span className="text-sm font-medium whitespace-nowrap">{trait.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 mb-8"
              >
                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="border-border/50 bg-gradient-to-br from-card to-card/30">
                    <CardContent className="p-6">
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* What Drives Me Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-2xl font-bold mb-6 text-center">
                    <span className="text-orange">What</span> drives me
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {motivations.map((motivation, index) => (
                      <motion.div
                        key={motivation.title}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: index * 0.1 }}
                        onHoverStart={() => setActiveCard(index)}
                        onHoverEnd={() => setActiveCard(null)}
                      >
                        <Card className={`h-full cursor-pointer transition-all duration-300 ${
                          activeCard === index 
                            ? 'border-orange shadow-lg shadow-orange/20' 
                            : 'border-border/50 hover:border-orange/50'
                        }`}>
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <motion.div
                                className={`p-3 rounded-xl transition-colors duration-300 ${
                                  activeCard === index 
                                    ? 'bg-orange text-white' 
                                    : 'bg-orange/10 text-orange'
                                }`}
                                whileHover={{ rotate: 5 }}
                              >
                                {motivation.icon}
                              </motion.div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-lg mb-2">{motivation.title}</h5>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {motivation.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Connect Text */}
          <motion.div variants={itemVariants}>
            <Card className="mb-8 border-2 border-orange/30 bg-gradient-to-r from-orange/5 to-transparent">
              <CardContent className="p-6">
                <motion.p
                  className="text-lg font-medium text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {personalInfo.connectText}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Button
              onClick={toggleExpanded}
              variant="outline"
              size="lg"
              className="group border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300 px-8 py-3"
            >
              <span className="mr-2">
                {isExpanded ? 'Show less' : 'Learn more about me'}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Code Symbol */}
        <motion.div
          className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="text-8xl font-bold text-orange">
            &lt;/&gt;
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;