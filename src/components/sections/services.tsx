'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon, CloudIcon, SparklesIcon, NetworkIcon, RefreshCwIcon, ArrowRightIcon, LayoutGridIcon } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <BoxIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      title: 'Dynamics 365 Implementation & Architecture',
      description: 'End-to-end implementation and architecture of Dynamics 365 solutions for enterprise needs',
      link: '/services/dynamics365'
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      title: 'Azure Cloud Architecture & Integration',
      description: 'Seamless cloud integration and architecture solutions for modern enterprises',
      link: '/services/azure'
    },
    {
      icon: <LayoutGridIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      title: 'Power Platform Custom Development',
      description: 'Custom Power Platform solutions that drive efficiency and automation',
      link: '/services/power-platform'
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      title: 'AI & Copilot Integration',
      description: 'Practical AI solutions that solve real business challenges',
      link: '/services/ai-copilot'
    },
    {
      icon: <NetworkIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      title: 'Integration Architecture',
      description: 'Robust integration solutions for connected enterprise systems',
      link: '/services/integration'
    },
    {
      icon: <RefreshCwIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation expertise for modern businesses',
      link: '/services/transformation'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Microsoft Technology Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Leveraging cutting-edge Microsoft technologies and AI to deliver
            transformative solutions that drive business value and innovation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-8">{service.description}</p>
                <div className="absolute bottom-6 left-6">
                  <a 
                    href={service.link} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group-hover:underline"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
