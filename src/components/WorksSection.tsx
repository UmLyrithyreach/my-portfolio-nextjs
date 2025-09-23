/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Zap, Eye, Calendar, ImageIcon, CheckCircle, Clock, Play, Pause } from 'lucide-react';
import { useInMobile } from './hooks/useInMobile';
import Image from 'next/image';

const WorksSection: React.FC = () => {
  const isMobile = useInMobile(768);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [showAllFeatures, setShowAllFeatures] = useState<Set<number>>(new Set());

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => new Set([...prev, projectId]));
  };

  const toggleFeatures = (projectIndex: number) => {
    setShowAllFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex);
      } else {
        newSet.add(projectIndex);
      }
      return newSet;
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in development':
      case 'in progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'live':
        return <Play className="w-4 h-4 text-green-500" />;
      case 'paused':
        return <Pause className="w-4 h-4 text-orange-500" />;
      default:
        return <Code className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'live':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'in development':
      case 'in progress':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'paused':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      default:
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  const ProjectPreviewImage = ({ project, index }: { project: any, index: number }) => {
    const hasImage = project.image && !imageErrors.has(project.id);

    if (hasImage) {
      return (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-fit transition-transform duration-500 group-hover:scale-105"
            onError={() => handleImageError(project.id)}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Project Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white text-sm font-medium mb-1">{project.title}</div>
            <div className="text-white/80 text-xs">{project.technologies[0]}</div>
          </div>

          {/* Status Badge on Image */}
          {project.status && (
            <div className="absolute top-4 right-4">
              <div className={`px-2 py-1 text-xs rounded-full font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                {project.status}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Fallback for projects without images
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-orange/20 to-orange-600/10 rounded-xl flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent" />
        <motion.div
          className="text-6xl opacity-30 z-10"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {index % 3 === 0 ? '🚀' : index % 3 === 1 ? '⚡' : '🎯'}
        </motion.div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-orange text-sm font-medium mb-1">{project.title}</div>
          <div className="text-orange/80 text-xs">{project.technologies[0]}</div>
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            <div className={`px-2 py-1 text-xs rounded-full font-medium border ${getStatusColor(project.status)}`}>
              {project.status}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="works" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-orange">#</span>project showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive preview of my latest work - hover to explore, click to dive deeper
          </p>
        </motion.div>

        {/* Interactive Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${hoveredProject === index
                  ? 'bg-gradient-to-r from-orange/10 to-orange-600/5 border-orange/30 shadow-lg shadow-orange/10'
                  : 'bg-card border-border hover:border-orange/20'
                  }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                {/* Project Thumbnail */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-border group">
                    {project.image && !imageErrors.has(project.id) ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} thumbnail`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange/20 to-orange-600/10 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-orange/50" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${hoveredProject === index ? 'bg-orange animate-pulse' : 'bg-muted'
                        }`} />
                      <span className="text-sm text-orange font-medium">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-muted-foreground">2024</span>
                      {/* Status indicator */}
                      {project.status && (
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(project.status)}
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${hoveredProject === index ? 'text-orange' : 'text-foreground'
                      }`}>
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    {project.liveUrl && (
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    )}
                    <Eye className={`w-5 h-5 transition-colors duration-300 ${hoveredProject === index ? 'text-orange' : 'text-muted-foreground'
                      }`} />
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features Section */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-orange" />
                        <span className="text-sm font-medium text-foreground">Key Features</span>
                      </div>
                      {project.features.length > 3 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFeatures(index);
                          }}
                          className="text-xs text-orange hover:text-orange/80 transition-colors"
                        >
                          {showAllFeatures.has(index) ? 'Show less' : `+${project.features.length - 3} more`}
                        </button>
                      )}
                    </div>
                    <div className="space-y-1">
                      {project.features.slice(0, showAllFeatures.has(index) ? undefined : 3).map((feature: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-orange rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          <span className="leading-tight">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-md transition-colors duration-300 ${hoveredProject === index
                        ? 'bg-orange/20 text-orange border border-orange/30'
                        : 'bg-muted text-muted-foreground'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-orange">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className={`flex space-x-2 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-orange hover:bg-orange/90 text-white text-xs px-3 py-1 h-7"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange text-orange hover:bg-orange hover:text-white text-xs px-3 py-1 h-7"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                </div>

                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  animate={{ rotate: activeProject === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-1 h-8 rounded-full transition-colors duration-300 ${hoveredProject === index ? 'bg-orange' : 'bg-muted'
                    }`} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Project Preview */}
          <div className="sticky top-8">
            <AnimatePresence mode="wait">
              {hoveredProject !== null ? (
                <motion.div
                  key={hoveredProject}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-orange/20 to-orange-600/10 rounded-3xl p-8 border border-orange/20 overflow-hidden">
                    <div className="bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
                      {/* Browser Header */}
                      <div className="flex items-center space-x-2 px-4 py-3 bg-muted/30 border-b border-border">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-background rounded-lg px-3 py-1 text-xs text-muted-foreground border border-border">
                            {projects[hoveredProject].liveUrl || 'localhost:3000'}
                          </div>
                        </div>
                      </div>

                      {/* Project Content Area with Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <ProjectPreviewImage
                          project={projects[hoveredProject]}
                          index={hoveredProject}
                        />
                      </div>
                    </div>

                    <motion.div
                      className="absolute top-4 right-4 bg-orange/20 text-orange px-3 py-1 rounded-full text-sm font-medium border border-orange/30"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Preview
                    </motion.div>
                  </div>

                  {/* Enhanced Project Stats */}
                  <motion.div
                    className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="text-center p-4 bg-card rounded-xl border border-border">
                      <Code className="w-5 h-5 text-orange mx-auto mb-2" />
                      <div className="text-sm font-medium">{projects[hoveredProject].technologies.length}</div>
                      <div className="text-xs text-muted-foreground">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-xl border border-border">
                      <Calendar className="w-5 h-5 text-orange mx-auto mb-2" />
                      <div className="text-sm font-medium">2024</div>
                      <div className="text-xs text-muted-foreground">Year</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-xl border border-border">
                      {getStatusIcon(projects[hoveredProject].status || 'Active')}
                      <div className="text-sm font-medium mt-2">
                        {projects[hoveredProject].status || 'Active'}
                      </div>
                      <div className="text-xs text-muted-foreground">Status</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-xl border border-border">
                      <CheckCircle className="w-5 h-5 text-orange mx-auto mb-2" />
                      <div className="text-sm font-medium">
                        {projects[hoveredProject].features?.length || 0}
                      </div>
                      <div className="text-xs text-muted-foreground">Features</div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                (!isMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-96 flex items-center justify-center bg-gradient-to-br from-muted/20 to-muted/5 rounded-3xl border border-dashed border-muted"
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-4 opacity-30"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        👁️
                      </motion.div>
                      <p className="text-muted-foreground">Hover over a project to preview</p>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Enhanced Project Modal */}
        <AnimatePresence>
          {activeProject !== null && (
            <motion.div
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-card border border-border rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                      {projects[activeProject].status && (
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(projects[activeProject].status)}
                          <span className={`px-3 py-1 text-sm rounded-full border ${getStatusColor(projects[activeProject].status)}`}>
                            {projects[activeProject].status}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground">{projects[activeProject].description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveProject(null)}
                    className="text-muted-foreground hover:text-foreground ml-4"
                  >
                    ✕
                  </Button>
                </div>

                {/* Full Project Image */}
                {projects[activeProject].image && !imageErrors.has(projects[activeProject].id) && (
                  <div className="relative w-full h-64 md:h-80 mb-6 rounded-2xl overflow-hidden border border-border">
                    <Image
                      src={projects[activeProject].image!}
                      alt={`${projects[activeProject].title} full preview`}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(projects[activeProject].id)}
                    />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {/* Features Section */}
                    {projects[activeProject].features && projects[activeProject].features.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-orange mr-2" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {projects[activeProject].features.map((feature: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-orange rounded-full mr-3 mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Code className="w-5 h-5 text-orange mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-orange/10 text-orange rounded-lg border border-orange/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {projects[activeProject].liveUrl && (
                      <Button className="bg-orange hover:bg-orange/90 text-white" asChild>
                        <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    {projects[activeProject].githubUrl && (
                      <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white" asChild>
                        <a href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Impressed by what you see?</h3>
            <p className="text-muted-foreground mb-6">
              {`These projects represent just a glimpse of what's possible. Let's collaborate and create something extraordinary together.`}
            </p>
            <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3" asChild>
              <a href="#contact">Let&apos;s Build Something Amazing</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;