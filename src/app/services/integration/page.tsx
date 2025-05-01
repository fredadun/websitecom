'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ServiceLayout } from '@/components/layouts/service-layout';
import AnimatedElement from '@/components/ui/animated-element';
import { NetworkIcon, LinkIcon, ServerIcon, CloudIcon, DatabaseIcon, SettingsIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function IntegrationPage() {
  const capabilities = [
    {
      icon: <NetworkIcon className="h-6 w-6" />,
      title: 'Enterprise Integration Patterns',
      description: 'Implementation of proven integration patterns for complex enterprise systems'
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: 'API Design & Management',
      description: 'Strategic API design, development, and management for seamless connectivity'
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: 'Hybrid Integration',
      description: 'Connecting on-premises systems with cloud services for unified operations'
    },
    {
      icon: <CloudIcon className="h-6 w-6" />,
      title: 'Cloud Integration',
      description: 'Seamless integration between cloud platforms and SaaS applications'
    },
    {
      icon: <DatabaseIcon className="h-6 w-6" />,
      title: 'Data Integration',
      description: 'Unified data access across disparate systems and data sources'
    },
    {
      icon: <SettingsIcon className="h-6 w-6" />,
      title: 'Integration Governance',
      description: 'Establishing standards, policies, and practices for sustainable integration'
    }
  ];

  const services = [
    {
      title: 'Microsoft Integration Services',
      items: [
        'Azure Integration Services implementation (Logic Apps, Service Bus, API Management)',
        'BizTalk Server design and development',
        'Azure Functions for serverless integration',
        'Event Grid and Event Hub solutions',
        'Integration with Microsoft 365 and Dynamics 365'
      ]
    },
    {
      title: 'API Strategy & Implementation',
      items: [
        'API strategy development and roadmap planning',
        'RESTful API design and implementation',
        'OpenAPI/Swagger documentation',
        'API security and governance',
        'API performance optimization and monitoring'
      ]
    },
    {
      title: 'Integration Architecture',
      items: [
        'Enterprise integration architecture design',
        'Microservices architecture planning',
        'Event-driven architecture implementation',
        'Integration patterns and best practices',
        'Integration Center of Excellence establishment'
      ]
    }
  ];

  const technologies = [
    'Azure Logic Apps',
    'Azure Service Bus',
    'Azure API Management',
    'Azure Functions',
    'Azure Event Grid',
    'Azure Event Hubs',
    'BizTalk Server',
    'Power Automate',
    'Azure Data Factory',
    'Azure Synapse',
    'Microsoft Graph API',
    'Azure AD B2C'
  ];

  const faqs = [
    {
      question: 'Why is integration architecture important?',
      answer: 'Integration architecture is the foundation that enables different systems, applications, and data sources to work together seamlessly. Without proper integration, organizations face data silos, inefficient processes, and inability to leverage their full technology investments. A well-designed integration architecture enables business agility, improves operational efficiency, and creates a platform for innovation.'
    },
    {
      question: 'How do you approach integration projects?',
      answer: 'I follow a methodical approach that starts with understanding your business objectives and existing systems landscape. From there, I develop an integration strategy and architecture that aligns with your goals. Implementation is done iteratively, focusing on delivering business value early while building toward the long-term vision. Throughout the process, I emphasize documentation, knowledge transfer, and sustainable practices.'
    },
    {
      question: 'Can you integrate with legacy systems?',
      answer: 'Yes, I specialize in integrating modern cloud platforms with legacy systems. Using technologies like Azure Integration Services and BizTalk Server, I can connect virtually any system regardless of age or technology stack. This allows organizations to preserve their investments in legacy systems while modernizing their overall architecture.'
    },
    {
      question: 'How do you ensure security in integration solutions?',
      answer: 'Security is built into every layer of the integration architecture. This includes transport-level security (TLS/SSL), message-level security (encryption, digital signatures), identity and access management, API security, and data protection. I follow security best practices and compliance requirements specific to your industry to ensure your integrations are secure by design.'
    }
  ];

  return (
    <Layout>
      <ServiceLayout 
      title="Integration Architecture" 
      description="Connect your enterprise systems, applications, and data for seamless operations and improved efficiency"
      heroImage="/images/services/integration/hero.jpg"
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

      {/* Services Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Services</h2>
        </AnimatedElement>
        <div className="space-y-12">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
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

      {/* Integration Patterns Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Integration Patterns
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedElement delay={0.1}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Point-to-Point Integration</h3>
              <p className="text-slate-600 mb-4">
                Direct connections between systems for simple integration scenarios. Suitable for limited integrations with few systems.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="w-24 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                    System A
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-16 h-0.5 bg-blue-600"></div>
                  </div>
                  <div className="w-24 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                    System B
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Hub-and-Spoke Integration</h3>
              <p className="text-slate-600 mb-4">
                Centralized integration hub that connects to multiple systems. Reduces complexity and improves manageability.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-16 bg-blue-500 rounded flex items-center justify-center text-white mb-4">
                    Hub
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                      A
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                      B
                    </div>
                    <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                      C
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.3}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Event-Driven Architecture</h3>
              <p className="text-slate-600 mb-4">
                Systems communicate through events, enabling loose coupling and real-time processing. Ideal for reactive and scalable systems.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-full h-12 bg-blue-500 rounded flex items-center justify-center text-white mb-4">
                    Event Bus
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="w-20 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-sm">
                      Publisher
                    </div>
                    <div className="w-20 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-sm">
                      Subscriber
                    </div>
                    <div className="w-20 h-16 bg-blue-100 rounded flex items-center justify-center text-blue-600 text-sm">
                      Subscriber
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <div className="bg-slate-50 p-6 rounded-xl h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">API-Led Connectivity</h3>
              <p className="text-slate-600 mb-4">
                Layered API approach that separates system, process, and experience APIs. Creates reusable assets and improves governance.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex flex-col space-y-2">
                  <div className="w-full h-10 bg-blue-300 rounded flex items-center justify-center text-blue-800">
                    Experience APIs
                  </div>
                  <div className="w-full h-10 bg-blue-400 rounded flex items-center justify-center text-white">
                    Process APIs
                  </div>
                  <div className="w-full h-10 bg-blue-500 rounded flex items-center justify-center text-white">
                    System APIs
                  </div>
                  <div className="w-full h-10 bg-blue-600 rounded flex items-center justify-center text-white">
                    Systems & Data
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-20">
        <AnimatedElement>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Technologies
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <AnimatedElement key={index} delay={index * 0.05}>
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg text-center text-slate-700 dark:text-slate-200 h-full flex items-center justify-center">
                {tech}
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
                  src="/images/case-studies/integration-case-study.jpg" 
                  alt="Integration Architecture Case Study" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Retail Enterprise Integration Hub
                </h3>
                <p className="text-slate-600 mb-4">
                  Designed and implemented an enterprise integration hub for a retail company, connecting their e-commerce platform, inventory management, CRM, and ERP systems. The solution reduced order processing time by 75% and enabled real-time inventory visibility across all channels.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Azure Logic Apps
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Azure API Management
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-slate-700">
                    Azure Service Bus
                  </div>
                </div>
                <Link 
                  href="/case-studies/retail-integration-hub" 
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
