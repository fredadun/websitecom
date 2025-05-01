'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SearchIcon, ChevronRightIcon } from 'lucide-react';

import Layout from '../../components/layout/layout';

type Industry = 'all' | 'financial-services' | 'healthcare' | 'manufacturing' | 'retail' | 'energy' | 'public-sector';
type Technology = 'all' | 'dynamics-365' | 'azure' | 'power-platform' | 'ai';

const CaseStudiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<Technology>('all');

  const industries = [
    { id: 'financial-services', label: 'Financial Services' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'retail', label: 'Retail' },
    { id: 'energy', label: 'Energy' },
    { id: 'public-sector', label: 'Public Sector' }
  ];

  const technologies = [
    { id: 'dynamics-365', label: 'Dynamics 365' },
    { id: 'azure', label: 'Azure' },
    { id: 'power-platform', label: 'Power Platform' },
    { id: 'ai', label: 'AI & Machine Learning' }
  ];

  const caseStudies = [
    {
      slug: 'global-financial-services-crm',
      title: 'Global Financial Services CRM Transformation',
      excerpt: 'Led the architecture and implementation of a global CRM transformation for a major international bank, serving 15,000+ users across 30 countries.',
      image: '/images/case-studies/case-study-1.jpg',
      industry: 'financial-services',
      technologies: ['dynamics-365', 'azure', 'power-platform'],
      results: [
        'Reduced customer onboarding time by 45%',
        'Enabled cross-selling across regions, increasing revenue by 12%'
      ]
    },
    {
      slug: 'healthcare-patient-engagement',
      title: 'AI-Powered Patient Engagement Platform',
      excerpt: 'Designed and implemented an AI-enhanced patient engagement platform for a leading healthcare provider, improving patient outcomes and operational efficiency.',
      image: '/images/case-studies/case-study-2.jpg',
      industry: 'healthcare',
      technologies: ['dynamics-365', 'ai', 'power-platform'],
      results: [
        'Increased patient satisfaction scores by 32%',
        'Reduced appointment no-shows by 47%'
      ]
    },
    {
      slug: 'manufacturing-supply-chain',
      title: 'Intelligent Supply Chain Optimization',
      excerpt: 'Transformed a global manufacturer\'s supply chain with predictive analytics and real-time monitoring, creating a resilient and adaptive system.',
      image: '/images/case-studies/case-study-3.jpg',
      industry: 'manufacturing',
      technologies: ['azure', 'ai', 'power-platform'],
      results: [
        'Reduced inventory costs by 23%',
        'Improved on-time delivery rates to 98.5%'
      ]
    },
    {
      slug: 'retail-omnichannel-experience',
      title: 'Omnichannel Retail Experience Platform',
      excerpt: 'Created a seamless omnichannel customer experience for a major retailer, connecting online and in-store journeys through Microsoft technologies.',
      image: '/images/case-studies/case-study-4.jpg',
      industry: 'retail',
      technologies: ['dynamics-365', 'azure', 'power-platform'],
      results: [
        'Increased cross-channel conversion by 28%',
        'Boosted customer lifetime value by 34%'
      ]
    },
    {
      slug: 'energy-predictive-maintenance',
      title: 'Predictive Maintenance for Energy Infrastructure',
      excerpt: 'Implemented an AI-driven predictive maintenance solution for critical energy infrastructure, reducing downtime and maintenance costs.',
      image: '/images/case-studies/case-study-5.jpg',
      industry: 'energy',
      technologies: ['azure', 'ai'],
      results: [
        'Reduced unplanned downtime by 73%',
        'Decreased maintenance costs by 31%'
      ]
    },
    {
      slug: 'public-sector-citizen-services',
      title: 'Citizen Services Transformation',
      excerpt: 'Modernized citizen services for a government agency with a secure, accessible platform built on Microsoft Cloud for Government.',
      image: '/images/case-studies/case-study-6.jpg',
      industry: 'public-sector',
      technologies: ['dynamics-365', 'azure'],
      results: [
        'Reduced service request processing time by 68%',
        'Improved citizen satisfaction ratings by 47%'
      ]
    }
  ];

  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    const matchesSearch = searchQuery === '' || 
      caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      caseStudy.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || caseStudy.industry === selectedIndustry;
    
    const matchesTechnology = selectedTechnology === 'all' || 
      caseStudy.technologies.includes(selectedTechnology as string);
    
    return matchesSearch && matchesIndustry && matchesTechnology;
  });

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore real-world examples of how my expertise has transformed Microsoft implementations across industries
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search case studies..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full md:w-80 pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                  <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <div className="w-full md:w-auto">
                  <select 
                    value={selectedIndustry} 
                    onChange={e => setSelectedIndustry(e.target.value as Industry)} 
                    className="w-full md:w-auto px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Industries</option>
                    {industries.map(industry => (
                      <option key={industry.id} value={industry.id}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="w-full md:w-auto">
                  <select 
                    value={selectedTechnology} 
                    onChange={e => setSelectedTechnology(e.target.value as Technology)} 
                    className="w-full md:w-auto px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Technologies</option>
                    {technologies.map(technology => (
                      <option key={technology.id} value={technology.id}>
                        {technology.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={caseStudy.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={`/case-studies/${caseStudy.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden h-full flex flex-col">
                      <div className="relative h-48 w-full">
                        <Image 
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {caseStudy.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                          {caseStudy.excerpt}
                        </p>
                        <div className="space-y-2 mb-4">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 mr-2 mt-0.5 text-xs font-bold">
                                ✓
                              </span>
                              <span className="text-sm text-slate-600 dark:text-slate-300">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs">
                            {industries.find(i => i.id === caseStudy.industry)?.label}
                          </span>
                          {caseStudy.technologies.map(tech => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                            >
                              {technologies.find(t => t.id === tech)?.label}
                            </span>
                          ))}
                        </div>
                        <div className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                          View Case Study
                          <ChevronRightIcon className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                No case studies match your current filters.
              </div>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedTechnology('all');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Transform Your Microsoft Implementation?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              Let&apos;s discuss how my expertise can help your organization achieve similar results with your Microsoft technology investments.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;
