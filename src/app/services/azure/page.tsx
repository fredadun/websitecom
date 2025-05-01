'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { ServiceLayout } from '@/components/layouts/service-layout';
import AnimatedElement from '@/components/ui/animated-element';
import { CloudIcon, ServerIcon, ShieldIcon, GlobeIcon, SettingsIcon, LineChartIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AzurePage() {
  const capabilities = [
    {
      icon: <CloudIcon className="h-6 w-6" />,
      title: 'Cloud Migration Strategy',
      description: 'Strategic planning and execution of migrations from on-premises to Azure'
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automated infrastructure deployment using Azure Resource Manager and Terraform'
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: 'Security & Compliance',
      description: 'Implementation of Azure security best practices and compliance frameworks'
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: 'Global Scale Solutions',
      description: 'Design of globally distributed applications with multi-region deployments'
    },
    {
      icon: <SettingsIcon className="h-6 w-6" />,
      title: 'DevOps Implementation',
      description: 'CI/CD pipelines and DevOps practices using Azure DevOps and GitHub Actions'
    },
    {
      icon: <LineChartIcon className="h-6 w-6" />,
      title: 'Cost Optimization',
      description: 'Strategic planning to optimize Azure spending without sacrificing performance'
    }
  ];

  const services = [
    {
      title: 'Azure Architecture Design',
      items: [
        'Solution architecture for new cloud initiatives',
        'Re-architecture of existing applications for cloud',
        'Hybrid cloud architecture planning',
        'Multi-cloud strategy development',
        'Microservices and containerization design'
      ]
    },
    {
      title: 'Azure Integration Services',
      items: [
        'API Management implementation',
        'Logic Apps and Service Bus integration',
        'Event Grid and Event Hub solutions',
        'Azure Functions for serverless integration',
        'Integration with on-premises systems via Azure Hybrid Connections'
      ]
    },
    {
      title: 'Azure Data Solutions',
      items: [
        'Data warehouse design with Azure Synapse',
        'Real-time analytics with Azure Stream Analytics',
        'Data lake implementation with Azure Data Lake Storage',
        'Database migration to Azure SQL and Cosmos DB',
        'Big data processing with Azure Databricks'
      ]
    }
  ];

  const technologies = [
    'Azure Virtual Machines',
    'Azure Kubernetes Service',
    'Azure App Service',
    'Azure Functions',
    'Azure Logic Apps',
    'Azure API Management',
    'Azure SQL Database',
    'Azure Cosmos DB',
    'Azure Data Factory',
    'Azure DevOps',
    'Azure Monitor',
    'Azure Security Center'
  ];

  const faqs = [
    {
      question: 'How do you approach Azure migrations?',
      answer: 'I follow Microsoft\'s Cloud Adoption Framework, starting with assessment and discovery, followed by planning, migration execution, and optimization. Each migration is tailored to your specific business needs, risk tolerance, and technical requirements.'
    },
    {
      question: 'Can you help with cost optimization for existing Azure deployments?',
      answer: 'Absolutely. I offer Azure cost optimization assessments that identify opportunities for savings through right-sizing, reserved instances, spot instances, and architectural improvements. Many clients see 20-30% cost reductions while maintaining or improving performance.'
    },
    {
      question: 'How do you ensure security in Azure deployments?',
      answer: 'Security is built into every solution from the ground up. I implement Azure Security Center, Azure Policy, and security best practices like least privilege access, network security groups, and encryption. Regular security assessments ensure your environment stays secure as threats evolve.'
    },
    {
      question: 'What size organizations do you work with?',
      answer: 'I work with organizations of all sizes, from startups to enterprises. My approach is scalable and adaptable to your organization\'s specific needs, whether you\'re just starting your cloud journey or looking to optimize an existing Azure environment.'
    }
  ];

  return (
    <Layout>
      <ServiceLayout 
      title="Azure Cloud Architecture & Integration" 
      description="Strategic cloud solutions that drive innovation, scalability, and business agility for your organization"
      heroImage="/images/services/azure/hero.jpg"
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
                <p className="text-slate-600 dark:text-slate-300 mb-6">{capability.description}</p>
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
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Azure Technologies
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <AnimatedElement key={index} delay={index * 0.05}>
              <div className="flex items-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg text-center text-slate-700 dark:text-slate-200 h-full flex items-center justify-center">
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
                  src="/images/case-studies/azure-case-study.jpg" 
                  alt="Azure Cloud Case Study" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Financial Services Cloud Transformation
                </h3>
                <p className="text-slate-600 mb-4">
                  Architected and implemented a secure, compliant Azure cloud environment for a financial services firm, reducing infrastructure costs by 40% while improving performance and enabling rapid scaling during peak periods.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-1 rounded-md mr-2">
                    Azure Kubernetes Service
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-1 rounded-md mr-2">
                    Azure SQL
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-1 rounded-md mr-2">
                    Azure Security Center
                  </div>
                </div>
                <Link 
                  href="/case-studies/financial-cloud-transformation" 
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">FAQ</h2>
        </AnimatedElement>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{faq.answer}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>
    </ServiceLayout>
    </Layout>
  );
}
