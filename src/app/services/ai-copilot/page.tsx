'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ServiceLayout } from '@/components/layouts/service-layout';
import AnimatedElement from '@/components/ui/animated-element';
import { SparklesIcon, BrainIcon, MessageSquareIcon, SearchIcon, CodeIcon, BarChartIcon, ZapIcon, RocketIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AICopilotPage() {
  const capabilities = [
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: 'Microsoft Copilot Integration',
      description: 'Seamless integration of Copilot capabilities into Microsoft 365 and business applications'
    },
    {
      icon: <BrainIcon className="h-6 w-6" />,
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions built on Azure OpenAI Service and Azure Cognitive Services'
    },
    {
      icon: <MessageSquareIcon className="h-6 w-6" />,
      title: 'Intelligent Chatbots',
      description: 'AI-powered conversational interfaces for customer service and employee support'
    },
    {
      icon: <SearchIcon className="h-6 w-6" />,
      title: 'Knowledge Mining',
      description: 'Extract insights from unstructured data using AI-powered search and analytics'
    },
    {
      icon: <CodeIcon className="h-6 w-6" />,
      title: 'AI Development',
      description: 'Custom AI model development, fine-tuning, and deployment'
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and business intelligence with AI-driven insights'
    }
  ];

  const services = [
    {
      title: 'Microsoft Copilot Implementation',
      items: [
        'Copilot for Microsoft 365 deployment and adoption',
        'Copilot Studio custom copilot development',
        'Business process enhancement with Copilot',
        'Copilot governance and security implementation',
        'User training and change management for Copilot adoption'
      ]
    },
    {
      title: 'Azure AI Solutions',
      items: [
        'Azure OpenAI Service implementation',
        'Custom GPT model deployment and fine-tuning',
        'Azure Cognitive Services integration',
        'Document intelligence and form processing',
        'Computer vision and image analysis solutions'
      ]
    },
    {
      title: 'AI Integration Services',
      items: [
        'AI integration with existing business applications',
        'Power Platform AI Builder implementation',
        'Dynamics 365 AI capabilities enhancement',
        'AI-powered automation workflows',
        'Custom AI connectors and API development'
      ]
    }
  ];

  const technologies = [
    'Microsoft Copilot',
    'Copilot Studio',
    'Azure OpenAI Service',
    'Azure Cognitive Services',
    'Azure Machine Learning',
    'Power Platform AI Builder',
    'Dynamics 365 AI',
    'Microsoft Semantic Kernel',
    'Azure Bot Service',
    'Language Understanding (LUIS)',
    'Azure Form Recognizer',
    'Azure Computer Vision'
  ];

  const faqs = [
    {
      question: 'How can AI and Copilot benefit my business?',
      answer: 'AI and Copilot can transform your business by automating routine tasks, enhancing decision-making with data-driven insights, improving customer experiences through personalization, and enabling employees to focus on higher-value work. Organizations typically see benefits in productivity, cost reduction, and innovation capabilities.'
    },
    {
      question: 'Is my data safe when using AI and Copilot?',
      answer: 'Yes, Microsoft\'s AI and Copilot services are built with enterprise-grade security and privacy. I implement comprehensive security measures including data encryption, access controls, and compliance with regulatory requirements. Your data is not used to train the underlying AI models, and you maintain ownership and control of your data.'
    },
    {
      question: 'How long does it take to implement AI and Copilot solutions?',
      answer: 'Implementation timelines vary based on complexity and scope. Simple Copilot for Microsoft 365 deployments can be completed in weeks, while custom AI solutions may take 2-4 months. I use an agile approach to deliver value incrementally, allowing you to see benefits early in the process.'
    },
    {
      question: 'Do we need specialized AI expertise to maintain these solutions?',
      answer: 'No, I design solutions with maintainability in mind. While complex custom AI models may require specialized knowledge, many AI and Copilot implementations can be managed by your existing IT team. I provide comprehensive documentation, knowledge transfer, and optional ongoing support to ensure your team can effectively maintain the solutions.'
    }
  ];

  return (
    <Layout>
      <ServiceLayout 
      title="AI & Copilot Integration" 
      description="Harness the power of Microsoft's AI and Copilot technologies to transform your business processes and drive innovation"
      heroImage="/images/services/ai-copilot-hero.jpg"
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
                  src="/images/case-studies/ai-copilot-case-study.jpg" 
                  alt="AI & Copilot Case Study" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Legal Firm Knowledge Management Transformation
                </h3>
                <p className="text-slate-600 mb-4">
                  Implemented a custom AI solution for a legal firm that transformed their knowledge management capabilities, reducing research time by 70% and enabling attorneys to quickly access relevant case law and precedents through natural language queries.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Azure OpenAI
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Microsoft Copilot
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Semantic Kernel
                  </div>
                </div>
                <Link 
                  href="/case-studies/legal-ai-transformation" 
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

      {/* AI Implementation Process Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">AI Implementation Process</h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedElement delay={0.1}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Discovery</h3>
              <p className="text-slate-600 flex-grow">Identifying use cases and defining success criteria for AI implementation</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Design</h3>
              <p className="text-slate-600 flex-grow">Creating AI solution architecture and data strategy</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.3}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Development</h3>
              <p className="text-slate-600 flex-grow">Building, training, and fine-tuning AI models and integrations</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-slate-50 p-6 rounded-xl text-center h-full flex flex-col">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Deployment</h3>
              <p className="text-slate-600 flex-grow">Implementation, user training, and continuous improvement</p>
            </div>
          </AnimatedElement>
        </div>
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
    </ServiceLayout>
    </Layout>
  );
}
