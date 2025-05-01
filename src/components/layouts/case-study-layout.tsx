'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import AnimatedElement from '../ui/animated-element';
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
        <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-slate-900/50 dark:to-slate-800/50 py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
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
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  {title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  {description}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Case Study Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <AnimatedElement>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Client</h3>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{client}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Industry</h3>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{industry}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Duration</h3>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{duration}</p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.3}>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Results Section */}
          <AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {results.map((result, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{result.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">{result.value}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Content Section */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </div>

          {/* Technologies Section */}
          <AnimatedElement>
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Navigation */}
          <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between">
              {prevCaseStudy && (
                <Link href={`/case-studies/${prevCaseStudy.slug}`} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 mb-4 sm:mb-0">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  <span>Previous: {prevCaseStudy.title}</span>
                </Link>
              )}
              {nextCaseStudy && (
                <Link href={`/case-studies/${nextCaseStudy.slug}`} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 justify-end">
                  <span>Next: {nextCaseStudy.title}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <AnimatedElement>
            <div className="mt-12 bg-blue-600 dark:bg-blue-700 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="mb-8">
                Let&apos;s discuss how I can help drive your digital transformation with similar results
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 dark:hover:bg-white/90 transition-colors"
              >
                Discuss Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyLayout;
