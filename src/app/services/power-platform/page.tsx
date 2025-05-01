'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ServiceLayout } from '@/components/layouts/service-layout';
import AnimatedElement from '@/components/ui/animated-element';
import { LayoutGridIcon, BotIcon, DatabaseIcon, BarChartIcon, GlobeIcon, ZapIcon, CodeIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PowerPlatformPage() {
  const capabilities = [
    {
      icon: <LayoutGridIcon className="h-6 w-6" />,
      title: 'Power Apps Development',
      description: 'Custom business applications built with low-code/no-code and professional development approaches'
    },
    {
      icon: <ZapIcon className="h-6 w-6" />,
      title: 'Power Automate Workflows',
      description: 'Automated business processes that connect to hundreds of data sources and services'
    },
    {
      icon: <BotIcon className="h-6 w-6" />,
      title: 'Power Virtual Agents',
      description: 'Intelligent chatbots that resolve common customer and employee requests'
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: 'Power BI Analytics',
      description: 'Interactive data visualizations and business intelligence dashboards'
    },
    {
      icon: <DatabaseIcon className="h-6 w-6" />,
      title: 'Dataverse Implementation',
      description: 'Secure and scalable data storage with built-in business logic and governance'
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: 'Power Pages',
      description: 'Secure, enterprise-grade websites and portals with minimal coding'
    }
  ];

  const services = [
    {
      title: 'Custom Power Apps Development',
      items: [
        'Canvas app development for tailored user experiences',
        'Model-driven apps for complex business processes',
        'Portal apps for external stakeholder engagement',
        'Mobile app development with offline capabilities',
        'Integration with existing systems and data sources'
      ]
    },
    {
      title: 'Power Automate Solutions',
      items: [
        'Business process automation with cloud flows',
        'Desktop automation for legacy applications',
        'Approval workflows with conditional logic',
        'Document generation and processing',
        'Integration with Microsoft 365 and third-party services'
      ]
    },
    {
      title: 'Advanced Power Platform Development',
      items: [
        'Custom connectors for proprietary systems',
        'PCF component development',
        'JavaScript and TypeScript customizations',
        'Power Platform ALM and DevOps implementation',
        'Performance optimization and scalability planning'
      ]
    }
  ];

  const technologies = [
    'Power Apps',
    'Power Automate',
    'Power BI',
    'Power Virtual Agents',
    'Power Pages',
    'Dataverse',
    'Custom Connectors',
    'PCF Components',
    'AI Builder',
    'Azure Functions',
    'SharePoint',
    'Microsoft 365'
  ];

  const faqs = [
    {
      question: 'How can Power Platform benefit my business?',
      answer: 'Power Platform enables rapid development of business solutions without extensive coding. It helps automate processes, create custom applications, analyze data, and build virtual agents—all while leveraging your existing Microsoft investments. Organizations typically see ROI through reduced development costs, process automation, and improved employee productivity.'
    },
    {
      question: 'Do I need coding experience to use Power Platform?',
      answer: 'No, Power Platform is designed with low-code/no-code capabilities that allow business users to create solutions. However, for more complex requirements, my expertise in professional development techniques can extend the platform\'s capabilities beyond what\'s possible with the visual designers alone.'
    },
    {
      question: 'How do you ensure security and governance for Power Platform solutions?',
      answer: 'I implement comprehensive security and governance frameworks that include data loss prevention policies, environment strategies, and role-based access controls. This ensures your Power Platform solutions comply with organizational policies and regulatory requirements while still enabling innovation.'
    },
    {
      question: 'Can Power Platform integrate with our existing systems?',
      answer: 'Yes, Power Platform offers hundreds of pre-built connectors for popular services and systems. For proprietary or legacy systems without pre-built connectors, I can develop custom connectors or use Azure services to create seamless integrations with virtually any system.'
    }
  ];

  return (
    <Layout>
      <ServiceLayout 
      title="Power Platform Custom Development" 
      description="Tailored Microsoft Power Platform solutions that automate processes, enhance productivity, and drive business innovation"
      heroImage="/images/services/power-platform-hero.jpg"
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
              <div className="p-6 bg-slate-50 rounded-xl h-full">
                <div className="text-blue-600 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-slate-600">{capability.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Services</h2>
        </AnimatedElement>
        <div className="space-y-12">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CodeIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="ml-3 text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <AnimatedElement key={index} delay={index * 0.05}>
              <div className="p-4 bg-slate-50 rounded-lg text-center text-slate-700 h-full flex items-center justify-center">
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
          <div className="bg-slate-50 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image 
                  src="/images/case-studies/power-platform-case-study.jpg" 
                  alt="Power Platform Case Study" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Healthcare Provider Process Automation
                </h3>
                <p className="text-slate-600 mb-4">
                  Developed a suite of Power Platform solutions for a healthcare provider that automated patient intake, appointment scheduling, and follow-up processes, reducing administrative time by 65% and improving patient satisfaction scores by 28%.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Power Apps
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Power Automate
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Dataverse
                  </div>
                </div>
                <Link 
                  href="/case-studies/healthcare-automation" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
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
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Development Process</h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedElement delay={0.1}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Discovery</h3>
              <p className="text-slate-600 flex-grow">Understanding your business processes, challenges, and objectives</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Design</h3>
              <p className="text-slate-600 flex-grow">Creating solution architecture and user experience designs</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.3}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Development</h3>
              <p className="text-slate-600 flex-grow">Building and configuring Power Platform components with iterative feedback</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Deployment</h3>
              <p className="text-slate-600 flex-grow">Implementation, training, and ongoing support to ensure adoption</p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </ServiceLayout>
    </Layout>
  );
}
