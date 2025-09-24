/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Calendar, ImageIcon, CheckCircle, Clock, Play, Pause, ArrowLeft, Filter, Search } from 'lucide-react';
import { useInMobile } from '@/components/hooks/useInMobile';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsPage: React.FC = () => {
    const isMobile = useInMobile(768);
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
    const [showAllFeatures, setShowAllFeatures] = useState<Set<number>>(new Set());
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    // Get unique categories - handle both array and string categories
    const categories = ['All', ...new Set(
        projects.flatMap(p =>
            Array.isArray(p.category) ? p.category : [p.category || 'Web App']
        )
    )];

    const statuses = ['All', ...new Set(projects.map(p => p.status).filter(Boolean))];

    // Filter projects with improved category matching
    const filteredProjects = projects.filter(project => {
        const matchesStatus = statusFilter === 'All' || project.status === statusFilter;

        // Check if any category in the project matches the selected filter
        const projectCategories = Array.isArray(project.category)
            ? project.category
            : [project.category || 'Web App'];

        const matchesCategory = filter === 'All' || projectCategories.includes(filter);

        const matchesSearch = searchTerm === '' ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesCategory && matchesStatus && matchesSearch;
    });

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

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Back to Home</span>
                                </Link>
                            </Button>
                            <div className="w-px h-6 bg-border" />
                            <div>
                                <h1 className="text-2xl font-bold">
                                    <span className="text-orange">#</span>all projects
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    {filteredProjects.length} of {projects.length} projects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Filters and Search */}
                <motion.div
                    className="mb-12 space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Search */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search projects, technologies..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 mr-4">
                            <Filter className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Categories:</span>
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${filter === category
                                    ? 'bg-orange text-white shadow-lg shadow-orange/25'
                                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-orange/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Status Filter */}
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 mr-4">
                            <Filter className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Status:</span>
                        </div>
                        {statuses.map((status) => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status || 'All')} // Provide default value to handle undefined
                                className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${statusFilter === status
                                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-green-500/50'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange/10 to-orange-600/5">
                                    {project.image && !imageErrors.has(project.id) ? (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} preview`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={() => handleImageError(project.id)}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <ImageIcon className="w-12 h-12 text-orange/50" />
                                        </div>
                                    )}

                                    {/* Status Badge */}
                                    {project.status && (
                                        <div className="absolute top-4 right-4">
                                            <div className={`px-2 py-1 text-xs rounded-full font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </div>
                                        </div>
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Quick Actions */}
                                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.liveUrl && (
                                            <Button
                                                size="sm"
                                                className="bg-white/90 text-black hover:bg-white text-xs px-3 py-1 h-7"
                                                onClick={() => window.open(project.liveUrl, '_blank')}
                                            >
                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                Live
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-white/90 text-white hover:bg-white hover:text-black text-xs px-3 py-1 h-7"
                                                onClick={() => window.open(project.githubUrl, '_blank')}
                                            >
                                                <Github className="w-3 h-3 mr-1" />
                                                Code
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs bg-orange/10 text-orange px-2 py-1 rounded-md">
                                            {Array.isArray(project.category) ? project.category[0] : (project.category || 'Web App')}
                                        </span>
                                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                            <Calendar className="w-3 h-3" />
                                            <span>2024</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Features Preview */}
                                    {project.features && project.features.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-orange" />
                                                    <span className="text-sm font-medium">Features</span>
                                                </div>
                                                {project.features.length > 2 && (
                                                    <button
                                                        onClick={() => toggleFeatures(index)}
                                                        className="text-xs text-orange hover:text-orange/80 transition-colors"
                                                    >
                                                        {showAllFeatures.has(index) ? 'Show less' : `+${project.features.length - 2} more`}
                                                    </button>
                                                )}
                                            </div>
                                            <div className="space-y-1">
                                                {project.features.slice(0, showAllFeatures.has(index) ? undefined : 2).map((feature: string, idx: number) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start text-xs text-muted-foreground"
                                                    >
                                                        <div className="w-1 h-1 bg-orange rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                                        <span className="line-clamp-1">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-2 py-1 text-xs text-orange">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-orange text-orange hover:bg-orange hover:text-white"
                                        onClick={() => setActiveProject(index)}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-4xl mb-4 opacity-30">🔍</div>
                        <h3 className="text-xl font-bold mb-2">No projects found</h3>
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your search terms or filters
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setFilter('All');
                                setSearchTerm('');
                                setStatusFilter('All');
                            }}
                        >
                            Clear Filters
                        </Button>
                    </motion.div>
                )}

                {/* Project Modal - Same as WorksSection */}
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
                                            <h3 className="text-2xl font-bold">{filteredProjects[activeProject].title}</h3>
                                            {filteredProjects[activeProject].status && (
                                                <div className="flex items-center space-x-2">
                                                    {getStatusIcon(filteredProjects[activeProject].status)}
                                                    <span className={`px-3 py-1 text-sm rounded-full border ${getStatusColor(filteredProjects[activeProject].status)}`}>
                                                        {filteredProjects[activeProject].status}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground">{filteredProjects[activeProject].description}</p>
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
                                {filteredProjects[activeProject].image && !imageErrors.has(filteredProjects[activeProject].id) && (
                                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-2xl overflow-hidden border border-border">
                                        <Image
                                            src={filteredProjects[activeProject].image!}
                                            alt={`${filteredProjects[activeProject].title} full preview`}
                                            fill
                                            className="object-cover"
                                            onError={() => handleImageError(filteredProjects[activeProject].id)}
                                        />
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        {/* Features Section */}
                                        {filteredProjects[activeProject].features && filteredProjects[activeProject].features.length > 0 && (
                                            <div>
                                                <h4 className="font-semibold mb-3 flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-orange mr-2" />
                                                    Key Features
                                                </h4>
                                                <div className="space-y-2">
                                                    {filteredProjects[activeProject].features.map((feature: string, idx: number) => (
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
                                                {filteredProjects[activeProject].technologies.map((tech) => (
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
                                        {filteredProjects[activeProject].liveUrl && (
                                            <Button className="bg-orange hover:bg-orange/90 text-white" asChild>
                                                <a href={filteredProjects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    View Live Project
                                                </a>
                                            </Button>
                                        )}
                                        {filteredProjects[activeProject].githubUrl && (
                                            <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white" asChild>
                                                <a href={filteredProjects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
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
            </div>
        </div>
    );
};

export default ProjectsPage;