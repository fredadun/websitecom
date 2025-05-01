'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ServiceLayout } from '@/components/layouts/service-layout';
import AnimatedElement from '@/components/ui/animated-element';
import { ArrowRightIcon, BoxIcon, UsersIcon, BarChartIcon, LayersIcon, DatabaseIcon, GraduationCapIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Dynamics365Page() {
  const capabilities = [
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: 'Customer Engagement (CE) implementation',
      description: 'Full implementation of sales, service, and marketing capabilities'
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: 'Finance & Operations (F&O) implementation',
      description: 'End-to-end financial and operational process implementation'
    },
    {
      icon: <LayersIcon className="h-6 w-6" />,
      title: 'Field Service customization',
      description: 'Tailored field service solutions with mobile capabilities'
    },
    {
      icon: <DatabaseIcon className="h-6 w-6" />,
      title: 'Data migration strategies',
      description: 'Secure and efficient data migration from legacy systems'
    },
    {
      icon: <BoxIcon className="h-6 w-6" />,
      title: 'Integration with other systems',
      description: 'Seamless integration with existing enterprise systems'
    },
    {
      icon: <GraduationCapIcon className="h-6 w-6" />,
      title: 'User adoption and training',
      description: 'Comprehensive training and change management programs'
    }
  ];

  const process = [
    'Discovery & Requirements Analysis',
    'Solution Design & Architecture',
    'Development & Configuration',
    'Data Migration',
    'Testing & Quality Assurance',
    'User Training & Adoption',
    'Go-Live & Support'
  ];

  const technologies = [
    'Dynamics 365 CE',
    'Dynamics 365 F&O',
    'Power Platform',
    'Azure Integration Services',
    'Microsoft Dataverse',
    'Power BI'
  ];

  const faqs = [
    {
      question: 'How long does a typical D365 implementation take?',
      answer: 'Implementation timelines vary based on complexity, typically ranging from 3-9 months depending on the scope, requirements, and organizational readiness.'
    },
    {
      question: 'Can we integrate with our existing systems?',
      answer: 'Yes, D365 offers robust integration capabilities with both Microsoft and third-party systems. I specialize in creating seamless integrations that preserve your existing investments while leveraging new capabilities.'
    },
    {
      question: 'What kind of support is provided post-implementation?',
      answer: 'I offer comprehensive post-implementation support including monitoring, optimization, and ongoing training. This ensures your team can fully leverage the platform and adapt to changing business needs.'
    },
    {
      question: 'How do you ensure successful user adoption?',
      answer: 'User adoption is critical to success. I implement a structured change management approach that includes stakeholder engagement, tailored training programs, and ongoing support to ensure your team embraces the new system.'
    }
  ];

  return (
    <Layout>
      <ServiceLayout 
      title="Enterprise-Grade Dynamics 365 Solutions" 
      description="Comprehensive implementation and architecture services tailored to your unique business requirements"
      heroImage="/images/services/dynamics365/hero.jpg"
    >
      {/* Capabilities Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Capabilities
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl h-full">
                <div className="text-blue-600 dark:text-blue-500 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{capability.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Process</h2>
        </AnimatedElement>
        <div className="space-y-4">
          {process.map((step, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="flex items-center p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mr-4">
                  {index + 1}
                </div>
                <span className="text-slate-700 dark:text-slate-300">{step}</span>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Technologies
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center text-slate-700 dark:text-slate-300 h-full flex items-center justify-center">
                {tech}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Case Study Highlight Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Success Stories
          </h2>
        </AnimatedElement>
        <AnimatedElement>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image 
                  src="/images/case-studies/dynamics-case-study.jpg" 
                  alt="Dynamics 365 Case Study" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3 dark:text-white">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Manufacturing Company Transformation
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Helped a leading manufacturing company modernize their operations with Dynamics 365 F&O, resulting in a 35% improvement in operational efficiency and 28% reduction in inventory costs.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white dark:bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300">
                    Dynamics 365 F&O
                  </div>
                  <div className="bg-white dark:bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300">
                    Power BI
                  </div>
                  <div className="bg-white dark:bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300">
                    Azure Integration
                  </div>
                </div>
                <Link 
                  href="/case-studies/manufacturing-transformation" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Read case study
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">FAQ</h2>
        </AnimatedElement>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>
    </ServiceLayout>
    </Layout>
  );
}
