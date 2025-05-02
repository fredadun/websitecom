'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import AnimatedElement from '../ui/animated-element';
import EnhancedContent from '../ui/enhanced-content';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  client: string;
  industry: string;
  services: string[];
  technologies: string[];
  duration: string;
  results: {
    title: string;
    value: string;
  }[];
  nextCaseStudy?: {
    title: string;
    slug: string;
  };
  prevCaseStudy?: {
    title: string;
    slug: string;
  };
  children: React.ReactNode;
}

export const CaseStudyLayout = ({
  title,
  description,
  heroImage,
  client,
  industry,
  services,
  technologies,
  duration,
  results,
  nextCaseStudy,
  prevCaseStudy,
  children
}: CaseStudyLayoutProps) => {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-slate-900/50 dark:to-slate-800/50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 transform scale-105">
            <Image 
              src={heroImage} 
              alt={`${title} background`} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedElement>
              <div className="text-center">
                <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium mb-6 tracking-wide">
                  Case Study: {client}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Case Study Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 border-b border-slate-200 dark:border-slate-700 pb-12">
            <AnimatedElement>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Client
                </h3>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{client}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Industry
                </h3>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{industry}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Duration
                </h3>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{duration}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.3}>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 h-full">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Results Section */}
          <AnimatedElement>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <span className="w-10 h-1 bg-blue-500 mr-4 rounded-full"></span>
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-50"></div>
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">{result.title}</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{result.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Content Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
              <span className="w-10 h-1 bg-blue-500 mr-4 rounded-full"></span>
              Case Study Details
            </h2>
            <EnhancedContent className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-li:marker:text-blue-500">
              {children}
            </EnhancedContent>
          </div>

          {/* Technologies Section */}
          <AnimatedElement>
            <div className="mb-16 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-3 rounded-full"></span>
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Navigation */}
          <div className="mb-16 border-t border-slate-200 dark:border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {prevCaseStudy ? (
                <AnimatedElement>
                  <Link 
                    href={`/case-studies/${prevCaseStudy.slug}`} 
                    className="group flex items-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all duration-300 mb-4 sm:mb-0"
                  >
                    <ArrowLeftIcon className="h-5 w-5 mr-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Previous Case Study</div>
                      <span className="font-medium">{prevCaseStudy.title}</span>
                    </div>
                  </Link>
                </AnimatedElement>
              ) : <div></div>}
              
              {nextCaseStudy && (
                <AnimatedElement>
                  <Link 
                    href={`/case-studies/${nextCaseStudy.slug}`} 
                    className="group flex items-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all duration-300 justify-end"
                  >
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Next Case Study</div>
                      <span className="font-medium">{nextCaseStudy.title}</span>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 ml-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </Link>
                </AnimatedElement>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <AnimatedElement>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-2xl p-10 text-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10 bg-[length:20px_20px] opacity-30"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how I can help drive your digital transformation with similar results
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 hover:bg-blue-50 dark:hover:bg-white/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Discuss Your Project
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyLayout;
