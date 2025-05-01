'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ServiceLayout } from '@/components/layouts/service-layout';
import AnimatedElement from '@/components/ui/animated-element';
import { RefreshCwIcon, LightbulbIcon, UsersIcon, BarChartIcon, TargetIcon, LayersIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TransformationPage() {
  const capabilities = [
    {
      icon: <RefreshCwIcon className="h-6 w-6" />,
      title: 'Digital Strategy Development',
      description: 'Comprehensive digital transformation roadmaps aligned with business objectives'
    },
    {
      icon: <LightbulbIcon className="h-6 w-6" />,
      title: 'Innovation Enablement',
      description: 'Frameworks and technologies to foster innovation and agility'
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: 'Change Management',
      description: 'Structured approach to transitioning individuals and organizations'
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: 'Process Optimization',
      description: 'Streamlining and automating business processes for efficiency'
    },
    {
      icon: <TargetIcon className="h-6 w-6" />,
      title: 'Technology Modernization',
      description: 'Strategic upgrades and migrations to modern technology platforms'
    },
    {
      icon: <LayersIcon className="h-6 w-6" />,
      title: 'Data-Driven Transformation',
      description: 'Leveraging data and analytics to drive decision-making and insights'
    }
  ];

  const pillars = [
    {
      title: 'People & Culture',
      description: 'Fostering a digital culture and developing digital capabilities within your organization',
      items: [
        'Digital skills assessment and development',
        'Change management and adoption strategies',
        'Digital leadership development',
        'Collaborative work environment implementation',
        'Employee experience enhancement'
      ]
    },
    {
      title: 'Process & Operations',
      description: 'Reimagining business processes and operations for the digital age',
      items: [
        'Business process analysis and optimization',
        'Workflow automation and digitization',
        'Operational efficiency improvement',
        'Service delivery model transformation',
        'Agile methodology implementation'
      ]
    },
    {
      title: 'Technology & Platforms',
      description: 'Implementing modern technology platforms to enable digital capabilities',
      items: [
        'Technology stack modernization',
        'Cloud migration and adoption',
        'Data platform implementation',
        'Integration architecture design',
        'Digital workplace solutions'
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Leveraging data as a strategic asset to drive insights and decision-making',
      items: [
        'Data strategy development',
        'Analytics capability building',
        'Business intelligence implementation',
        'Data governance establishment',
        'AI and machine learning integration'
      ]
    }
  ];

  const methodologies = [
    {
      title: 'Assess',
      description: 'Evaluate current state, identify opportunities, and define vision',
      icon: <TargetIcon className="h-6 w-6" />
    },
    {
      title: 'Design',
      description: 'Create transformation roadmap, architecture, and implementation plan',
      icon: <LightbulbIcon className="h-6 w-6" />
    },
    {
      title: 'Transform',
      description: 'Implement solutions, manage change, and drive adoption',
      icon: <RefreshCwIcon className="h-6 w-6" />
    },
    {
      title: 'Optimize',
      description: 'Measure outcomes, refine approach, and continuously improve',
      icon: <BarChartIcon className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: 'What is digital transformation?',
      answer: 'Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It\'s also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure. The goal is to create more efficient processes, better customer experiences, and new business models leveraging modern technologies.'
    },
    {
      question: 'How long does a digital transformation take?',
      answer: 'Digital transformation is a journey rather than a destination. While specific initiatives within a transformation program might take 3-18 months, the overall transformation is ongoing as technology and market conditions evolve. I work with clients to develop phased approaches that deliver incremental value while building toward long-term strategic goals.'
    },
    {
      question: 'How do you measure the success of digital transformation?',
      answer: 'Success metrics should align with your specific business objectives but typically include a combination of financial metrics (revenue growth, cost reduction, ROI), operational metrics (efficiency, productivity, time-to-market), and customer metrics (satisfaction, engagement, retention). I work with clients to establish baseline measurements and KPIs at the beginning of the transformation journey.'
    },
    {
      question: 'How do you handle resistance to change during transformation?',
      answer: 'Change management is a critical component of successful digital transformation. I use a structured approach that includes stakeholder analysis, communication planning, training, and adoption measurement. By involving employees early in the process, addressing concerns proactively, and demonstrating quick wins, we can minimize resistance and build enthusiasm for the transformation.'
    }
  ];

  return (
    <Layout>
      <ServiceLayout 
      title="Digital Transformation" 
      description="Strategic guidance and implementation expertise to prepare your organization for success in the digital age"
      heroImage="/images/services/transformation/hero.jpg"
    >
      {/* Capabilities Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
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

      {/* Transformation Pillars Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Transformation Pillars</h2>
        </AnimatedElement>
        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ZapIcon className="h-5 w-5 text-blue-600" />
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

      {/* Methodology Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Transformation Methodology
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((methodology, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center h-full flex flex-col">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {methodology.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{methodology.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 flex-grow">{methodology.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* Case Study Highlight Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Success Stories
          </h2>
        </AnimatedElement>
        <AnimatedElement>
          <div className="bg-slate-50 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image 
                  src="/images/case-studies/transformation-case-study.jpg" 
                  alt="Digital Transformation Case Study" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Manufacturing Company Digital Overhaul
                </h3>
                <p className="text-slate-600 mb-4">
                  Led a comprehensive digital transformation for a mid-sized manufacturing company, modernizing their operations with cloud-based ERP, IoT-enabled production monitoring, and data analytics. The transformation resulted in 30% improved operational efficiency, 25% reduction in downtime, and enabled new service-based revenue streams.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Cloud Migration
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Process Automation
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Data Analytics
                  </div>
                </div>
                <Link 
                  href="/case-studies/manufacturing-transformation" 
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

      {/* Benefits Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Benefits of Digital Transformation
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedElement delay={0.1}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <BarChartIcon className="h-4 w-4" />
                </div>
                Operational Efficiency
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Streamlined business processes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Reduced operational costs</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Improved resource utilization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Enhanced productivity</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <UsersIcon className="h-4 w-4" />
                </div>
                Customer Experience
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Personalized customer interactions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Omnichannel engagement</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Faster response times</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Improved customer satisfaction</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.3}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <LightbulbIcon className="h-4 w-4" />
                </div>
                Innovation & Agility
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Faster time-to-market</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">New business models</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Increased adaptability</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Culture of experimentation</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <TargetIcon className="h-4 w-4" />
                </div>
                Data-Driven Insights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Better decision-making</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Real-time business intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">•</div>
                  <span className="ml-2 text-slate-600">Competitive advantage</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">FAQ</h2>
        </AnimatedElement>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
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
