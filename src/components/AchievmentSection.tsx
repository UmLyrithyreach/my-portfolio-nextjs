'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy, 
  Award, 
  Star, 
  Target, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AchievementCardProps {
  achievement: typeof achievements[0];
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  achievement, 
  index, 
  isActive, 
  onHover 
}) => {
  // Icon selection based on achievement content
  const getAchievementIcon = (title: string) => {
    if (title.toLowerCase().includes('project')) return <Target className="w-6 h-6" />;
    if (title.toLowerCase().includes('award')) return <Award className="w-6 h-6" />;
    if (title.toLowerCase().includes('complete')) return <CheckCircle className="w-6 h-6" />;
    return <Trophy className="w-6 h-6" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      className="group relative"
    >
      <Card className={`h-full cursor-pointer transition-all duration-500 transform ${
        isActive 
          ? 'border-orange shadow-2xl shadow-orange/20 scale-105' 
          : 'border-border/50 hover:border-orange/50 hover:shadow-lg hover:shadow-orange/10'
      }`}>
        <CardContent className="p-8 relative overflow-hidden">
          {/* Background Gradient Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
            isActive 
              ? 'from-orange/5 to-orange/10 opacity-100' 
              : 'from-orange/0 to-orange/5 opacity-0 group-hover:opacity-100'
          }`} />
          
          {/* Achievement Number Badge */}
          <div className="absolute top-4 right-4">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-orange text-white' 
                  : 'bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white'
              }`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {index + 1}
            </motion.div>
          </div>

          {/* Icon Container */}
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
              isActive 
                ? 'bg-orange text-white' 
                : 'bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {getAchievementIcon(achievement.title)}
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h3 
              className="text-xl font-bold mb-4 group-hover:text-orange transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {achievement.title}
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              {achievement.description}
            </motion.p>

            {/* Achievement Indicator */}
            <motion.div
              className="flex items-center space-x-2 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
              <Star className={`w-4 h-4 transition-colors duration-300 ${
                isActive ? 'text-orange' : 'text-muted-foreground group-hover:text-orange'
              }`} />
              <span className={`transition-colors duration-300 ${
                isActive ? 'text-orange' : 'text-muted-foreground group-hover:text-orange'
              }`}>
                Achievement Unlocked
              </span>
              <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                isActive 
                  ? 'text-orange translate-x-1' 
                  : 'text-muted-foreground group-hover:text-orange group-hover:translate-x-1'
              }`} />
            </motion.div>
          </div>

          {/* Floating Sparkles Effect */}
          <AnimatePresence>
            {isActive && (
              <>
                <motion.div
                  className="absolute top-8 left-8 text-orange/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 right-16 text-orange/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Sparkles className="w-3 h-3" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AchievementSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-orange/5 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-orange/3 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
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
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-orange">#</span>achievements
            </h2>
          </div>
          
          {/* Animated Underline */}
          <div className="flex items-center justify-center space-x-2 mb-6">
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

          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Milestones and accomplishments that showcase my journey and growth as a developer
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={statsVariants}>
            <Card className="text-center border-orange/20 bg-gradient-to-br from-orange/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-orange" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-orange mb-2">{achievements.length}</h3>
                <p className="text-muted-foreground">Major Achievements</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants}>
            <Card className="text-center border-orange/20 bg-gradient-to-br from-orange/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-orange mb-2">100%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants}>
            <Card className="text-center border-orange/20 bg-gradient-to-br from-orange/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-orange mb-2">Excellence</h3>
                <p className="text-muted-foreground">Quality Standard</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              isActive={activeCard === index}
              onHover={setActiveCard}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto border-2 border-orange/30 bg-gradient-to-r from-orange/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Target className="w-8 h-8 text-orange" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
              <p className="text-muted-foreground text-lg">
                These achievements represent my commitment to excellence and continuous growth.
                I&apos;m excited to bring this same dedication to new projects and opportunities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Achievement Icon */}
        <motion.div
          className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="text-8xl font-bold text-orange">
            🏆
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;