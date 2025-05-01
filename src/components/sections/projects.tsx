'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BoxIcon, 
  CloudIcon, 
  NetworkIcon, 
  LayoutGridIcon, 
  RocketIcon, 
  DatabaseIcon, 
  SmartphoneIcon, 
  BrainIcon, 
  ArrowRightIcon 
} from 'lucide-react';

type Category = 'all' | 'dynamics-365' | 'azure' | 'integration' | 'power-platform' | 'transformation' | 'data' | 'mobile' | 'ai';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories = [
    {
      id: 'dynamics-365',
      label: 'Dynamics 365 Implementations',
      icon: <BoxIcon className="h-5 w-5" />
    },
    {
      id: 'azure',
      label: 'Azure Cloud Architecture',
      icon: <CloudIcon className="h-5 w-5" />
    },
    {
      id: 'integration',
      label: 'System Integration',
      icon: <NetworkIcon className="h-5 w-5" />
    },
    {
      id: 'power-platform',
      label: 'Power Platform Solutions',
      icon: <LayoutGridIcon className="h-5 w-5" />
    },
    {
      id: 'transformation',
      label: 'Digital Transformation',
      icon: <RocketIcon className="h-5 w-5" />
    },
    {
      id: 'data',
      label: 'Data Migration & Analytics',
      icon: <DatabaseIcon className="h-5 w-5" />
    },
    {
      id: 'mobile',
      label: 'Mobile & Field Solutions',
      icon: <SmartphoneIcon className="h-5 w-5" />
    },
    {
      id: 'ai',
      label: 'Recent AI Explorations',
      icon: <BrainIcon className="h-5 w-5" />
    }
  ];

  const featuredProjects = [
    {
      title: 'Equinor Global Digital Transformation',
      industry: 'Energy & Oil',
      duration: '18 months',
      technologies: ['Dynamics 365', 'Azure', 'Power Platform', 'IoT'],
      image: '/images/projects/project-1.jpg',
      highlight: '45% operational efficiency improvement',
      description: 'Enterprise-wide digital transformation across 30+ countries, connecting operational systems with business processes through a comprehensive Microsoft cloud solution.',
      categories: ['transformation', 'dynamics-365', 'azure'] as Category[]
    },
    {
      title: 'Ecobank Global Banking Platform',
      industry: 'Financial Services',
      duration: '14 months',
      technologies: ['Dynamics 365', 'Azure Integration Services'],
      image: '/images/projects/project-2.jpg',
      highlight: '60% faster product launches',
      description: 'Unified customer platform across 34 African countries with diverse regulatory requirements, migrating over 300 million records while maintaining business continuity.',
      categories: ['dynamics-365', 'integration'] as Category[]
    },
    {
      title: 'Centrica Dyno Field Service Transformation',
      industry: 'Energy Services',
      duration: '12 months',
      technologies: ['Dynamics 365 Field Service', 'Custom Mobile Solutions'],
      image: '/images/projects/project-3.jpg',
      highlight: '£4.2M annual savings',
      description: 'Transformed engineering operations through intelligent scheduling, mobile solutions, and real-time data integration, improving first-time fix rates and customer satisfaction.',
      categories: ['mobile', 'dynamics-365'] as Category[]
    }
  ];

  const allProjects = [
    {
      title: 'Nationwide Bank Sales Module Implementation',
      category: 'dynamics-365',
      industry: 'Financial Services',
      duration: '8 months',
      technologies: ['Dynamics 365 Sales', 'Banking Accelerator'],
      challenge: 'Implement specialized banking sales processes within Dynamics 365 while maintaining compliance with financial regulations.',
      approach: 'Custom banking module development with comprehensive compliance framework and automated approval workflows.',
      results: 'Reduced sales cycle by 35%, improved regulatory reporting accuracy by 98%',
      categories: ['dynamics-365'] as Category[]
    },
    {
      title: 'Clarion Housing Group Integration Architecture',
      category: 'integration',
      industry: 'Housing & Real Estate',
      duration: '7 months',
      technologies: ['Azure Integration Services', 'Event Grid', 'Service Bus'],
      challenge: 'Connect on-premise systems with cloud platforms in a complex, multi-system environment with high reliability requirements.',
      approach: 'Event-driven architecture with comprehensive error handling and monitoring systems.',
      results: '99.97% integration reliability, 65% reduction in data synchronization issues',
      categories: ['integration', 'azure'] as Category[]
    },
    {
      title: 'NHS Trust AI-Powered Patient Insights',
      category: 'ai',
      industry: 'Healthcare',
      duration: '10 months',
      technologies: ['Azure AI', 'Power BI', 'Dynamics 365'],
      challenge: 'Extract actionable insights from unstructured patient feedback across multiple channels.',
      approach: 'Implementation of Azure AI text analytics with custom healthcare-specific models and Power BI dashboards.',
      results: '42% increase in patient satisfaction through targeted improvements',
      categories: ['ai', 'azure'] as Category[]
    },
    {
      title: 'Global Retail Chain Power Platform Rollout',
      category: 'power-platform',
      industry: 'Retail',
      duration: '9 months',
      technologies: ['Power Apps', 'Power Automate', 'Dataverse'],
      challenge: 'Replace legacy store operations systems with modern, flexible solutions that could be rapidly deployed globally.',
      approach: 'Development of a suite of Power Apps with centralized data model and multi-language support.',
      results: '75% faster deployment of new store processes, 30% reduction in training time',
      categories: ['power-platform'] as Category[]
    }
  ];

  const filteredProjects = allProjects.filter(
    project => selectedCategory === 'all' || project.categories.includes(selectedCategory)
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real-world implementations that delivered exceptional business value
            and technical excellence
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="prose prose-lg max-w-4xl mx-auto mb-16 text-center dark:prose-invert"
        >
          <p className="text-slate-600 dark:text-slate-300">
            Each project represents a unique set of business challenges solved
            through thoughtful architecture, technical expertise, and close
            collaboration with clients. These case studies highlight how
            Microsoft technologies, when implemented with an enterprise mindset,
            can transform operations and deliver measurable business outcomes.
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Featured Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm mb-2">
                      {project.industry}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {project.highlight}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {project.duration}
                    </span>
                    <a 
                      href={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                    >
                      View Case Study
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Explore Projects by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className={selectedCategory === category.id ? 'text-white' : 'text-blue-600 dark:text-blue-500'} style={{ marginRight: '0.5rem' }}>
                  {category.icon}
                </span>
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  {project.category === 'dynamics-365' && <BoxIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'azure' && <CloudIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'integration' && <NetworkIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'power-platform' && <LayoutGridIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'transformation' && <RocketIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'data' && <DatabaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'mobile' && <SmartphoneIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                  {project.category === 'ai' && <BrainIcon className="h-6 w-6 text-blue-600 dark:text-blue-500" />}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h4>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{project.industry} • {project.duration}</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Challenge:</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{project.challenge}</p>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Approach:</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{project.approach}</p>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Results:</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{project.results}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <a
                  href={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm"
                >
                  View Details
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            View All Case Studies
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
