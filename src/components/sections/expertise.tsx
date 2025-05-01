'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, GlobeIcon, TrendingUpIcon, CheckCircleIcon } from 'lucide-react';
import CountUp from 'react-countup';

export const Expertise = () => {
  const stats = [
    {
      icon: <AwardIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      value: 12,
      suffix: '+',
      label: 'Years Experience'
    },
    {
      icon: <GlobeIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      value: 30,
      suffix: '+',
      label: 'Global Projects'
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      value: 6,
      suffix: '+',
      label: 'Microsoft Certifications'
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
      value: 45,
      suffix: '%',
      label: 'Efficiency Improvement'
    }
  ];

  const certifications = [
    'Microsoft Certified: Azure Solutions Architect Expert',
    'Microsoft Certified: Power Platform Solution Architect Expert',
    'Microsoft Certified: Dynamics 365 Solutions Architect Expert',
    'Microsoft Certified: Azure AI Engineer Associate',
    'Microsoft Certified: Azure Data Engineer Associate',
    'Microsoft Certified: DevOps Engineer Expert'
  ];

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Microsoft Certified Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            With extensive certifications and real-world experience implementing
            enterprise solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            Microsoft Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="flex items-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
              >
                <CheckCircleIcon className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-200">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
