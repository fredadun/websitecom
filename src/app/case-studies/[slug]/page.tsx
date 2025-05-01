'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  ClockIcon, 
  TagIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from 'lucide-react';

import Layout from '../../../components/layout/layout';

// This would typically come from a CMS or API
const caseStudies = [
  {
    slug: 'global-financial-services-crm',
    title: 'Global Financial Services CRM Transformation',
    client: 'Major International Bank',
    industry: 'Financial Services',
    date: 'January 2023',
    duration: '8 months',
    coverImage: '/images/case-studies/case-study-1.jpg',
    categories: ['Dynamics 365', 'Azure', 'Integration'],
    technologies: ['Dynamics 365 Sales', 'Azure Functions', 'Power Automate', 'Azure API Management'],
    summary: 'Led the architecture and implementation of a global CRM transformation for a major international bank, serving 15,000+ users across 30 countries.',
    challenge: 'The client was struggling with an aging CRM system that couldn\'t support their global operations. Data was siloed across regional instances, creating inconsistent customer experiences and preventing a unified view of customer relationships.',
    solution: 'Designed a modern Dynamics 365 architecture with a global data model and regional deployments connected through Azure services. Implemented complex data synchronization patterns and custom security models to meet strict financial regulations while enabling global collaboration.',
    results: [
      'Reduced customer onboarding time by 45%',
      'Enabled cross-selling across regions, increasing revenue by 12%',
      'Improved data quality with automated validation, reducing errors by 60%',
      'Created a unified customer view across all global operations'
    ],
    testimonial: {
      quote: 'The architecture solution addressed challenges we\'d been struggling with for months. The implementation was smooth despite the complexity, and the system has transformed how our global teams collaborate.',
      author: 'CIO, Major International Bank'
    },
    content: `
      <h2>Project Background</h2>
      <p>This major international bank had been operating with disparate CRM systems across its global operations for over a decade. Each region had developed its own customizations and data models, making it increasingly difficult to get a unified view of customer relationships and to ensure consistent service delivery.</p>
      
      <h2>The Challenge</h2>
      <p>The primary challenges included:</p>
      <ul>
        <li>Siloed customer data across 12 regional CRM instances</li>
        <li>Inconsistent business processes between regions</li>
        <li>Complex regulatory requirements that varied by country</li>
        <li>Legacy integrations with over 30 banking systems</li>
        <li>Need for 24/7 global availability with strict performance requirements</li>
      </ul>
      
      <h2>Technical Approach</h2>
      <p>Our solution architecture centered on a Dynamics 365 implementation with several key components:</p>
      <ul>
        <li>Global master data management with regional data distribution</li>
        <li>Azure-based integration layer to connect with banking systems</li>
        <li>Custom security model implementing country-specific data residency rules</li>
        <li>Real-time synchronization of critical customer interaction data</li>
        <li>Global reporting layer built on Power BI with Azure Synapse Analytics</li>
      </ul>
      
      <h2>Implementation Methodology</h2>
      <p>We adopted a phased rollout approach, beginning with a pilot in two regions before expanding globally. The implementation involved:</p>
      <ul>
        <li>Collaborative design workshops with stakeholders from all regions</li>
        <li>Development of a global data model with regional extensions</li>
        <li>Creation of a comprehensive data migration strategy</li>
        <li>Rigorous performance testing to ensure system responsiveness</li>
        <li>Extensive user training program adapted for regional differences</li>
      </ul>
      
      <h2>Technical Challenges Overcome</h2>
      <p>Several significant technical challenges were addressed during implementation:</p>
      <ul>
        <li>Designing a conflict resolution mechanism for concurrent updates across regions</li>
        <li>Implementing a sophisticated caching strategy to maintain performance</li>
        <li>Creating a resilient integration architecture that could handle system outages</li>
        <li>Developing a custom audit solution to meet financial compliance requirements</li>
      </ul>
      
      <h2>Results and Impact</h2>
      <p>The new system has been transformative for the bank's operations:</p>
      <ul>
        <li>Customer onboarding time reduced from 10 days to 5.5 days on average</li>
        <li>Cross-regional referrals increased by 230% in the first six months</li>
        <li>Data quality issues reduced by 60%, improving regulatory reporting accuracy</li>
        <li>System availability improved to 99.98%, exceeding the target SLA</li>
        <li>User adoption reached 94% within three months of full deployment</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>Key insights from this project that we've applied to subsequent implementations:</p>
      <ul>
        <li>Early involvement of compliance teams is critical in financial services projects</li>
        <li>Regional champions are essential for successful global rollouts</li>
        <li>Performance testing must include realistic data volumes from the start</li>
        <li>Incremental value delivery maintains project momentum and stakeholder support</li>
      </ul>
    `
  },
  // Additional case studies would be defined here
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find(cs => cs.slug === params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <Layout>
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-6">
              {caseStudy.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="inline-block px-3 py-1 mr-2 mb-2 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 mb-8">
              <span className="flex items-center mr-6 mb-2">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {caseStudy.date}
              </span>
              <span className="flex items-center mr-6 mb-2">
                <ClockIcon className="h-4 w-4 mr-2" />
                {caseStudy.duration}
              </span>
              <span className="flex items-center mb-2">
                <TagIcon className="h-4 w-4 mr-2" />
                {caseStudy.industry}
              </span>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {caseStudy.summary}
            </p>
          </motion.div>
          
          {/* Cover Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 relative h-96 w-full rounded-xl overflow-hidden"
          >
            <Image 
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                The Challenge
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                The Solution
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {caseStudy.solution}
              </p>
            </div>
          </motion.div>
          
          {/* Technologies Used */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Results
            </h2>
            <ul className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                >
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 mr-3 mt-0.5 text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 rounded-xl p-8"
          >
            <blockquote className="text-xl text-slate-600 dark:text-slate-300 italic mb-4">
              &quot;{caseStudy.testimonial.quote}&quot;
            </blockquote>
            <p className="text-slate-900 dark:text-white font-medium">
              {caseStudy.testimonial.author}
            </p>
          </motion.div>
          
          {/* Detailed Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: caseStudy.content }}
          />
          
          {/* Share */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                Share this case study
              </h3>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(caseStudy.title)}&url=${encodeURIComponent(`https://fredadun.com/case-studies/${caseStudy.slug}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://fredadun.com/case-studies/${caseStudy.slug}`)}&title=${encodeURIComponent(caseStudy.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Interested in similar results for your organization?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Let&apos;s discuss how my expertise in Microsoft technologies can help transform your implementation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
}
