'use client';

import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import AnimatedElement from '../ui/animated-element';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage?: string;
  children: React.ReactNode;
  contactCTA?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const ServiceLayout = ({
  title,
  description,
  heroImage,
  children,
  contactCTA = {
    title: 'Ready to Transform Your Business?',
    description: 'Let\'s discuss how I can help drive your digital transformation',
    buttonText: 'Discuss Your Project',
    buttonLink: '/#contact',
  }
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-slate-900/50 dark:to-slate-800/50 py-20 px-4 sm:px-6 lg:px-8 relative">
        {heroImage && (
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
        )}
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

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedElement>
          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {contactCTA.title}
            </h2>
            <p className="mb-8">
              {contactCTA.description}
            </p>
            <Link 
              href={contactCTA.buttonLink} 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 dark:hover:bg-white/90 transition-colors"
            >
              {contactCTA.buttonText}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default ServiceLayout;
