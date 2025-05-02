'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, BrainIcon, RocketIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const technologies = ['AI/ML', 'Dynamics 365', 'Azure', 'Power Platform'];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-slate-900/50 dark:to-slate-800/50" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-10">
          <div className="w-full h-full bg-blue-600 rounded-full blur-3xl" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6">
              AI-Powered Microsoft
              <span className="text-blue-600 dark:text-blue-500"> Solutions Architect</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Transforming businesses with advanced AI integration across
              Dynamics 365, Azure, and Power Platform with over 12 years of
              experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech, index) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }} 
                  className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }} 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Discuss Your AI Solution
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#services" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5 }} 
                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                Explore AI Services
              </motion.a>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }} 
              className="text-slate-500 dark:text-slate-400 flex items-center"
            >
              <span className="text-blue-600 dark:text-blue-500 mr-2">✨</span>
              Delivering intelligent solutions for organizations across 30+ countries
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-transparent relative">
              <Image 
                src="/images/hero/fred-profile.png" 
                alt="Fred Adun - AI Solutions Architect" 
                className="object-cover" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" data-component-name="Hero" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 flex items-center gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <BrainIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  AI-Powered Solutions
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Microsoft Certified Expert
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 flex items-center gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <RocketIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  45% Efficiency Boost
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Through AI Integration
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
