'use client';

import React from 'react';
import { 
  BrainIcon, 
  LayoutGridIcon, 
  CodeIcon, 
  CloudIcon, 
  SparklesIcon, 
  MessageSquareIcon, 
  LayoutPanelLeftIcon, 
  ServerIcon, 
  FlaskConicalIcon,
  DownloadIcon
} from 'lucide-react';
import AnimatedElement from '../ui/animated-element';

export const About = () => {
  const expertiseAreas = [
    {
      title: 'Business Analysis & Solution Design',
      icon: <LayoutPanelLeftIcon className="h-6 w-6" />,
      items: [
        'Using domain-driven design to model complex business processes',
        'Conducting detailed gap analysis between business requirements',
        'Running collaborative workshops with stakeholders',
        'Creating comprehensive design documentation',
        'Developing domain-specific approaches'
      ]
    },
    {
      title: 'Microsoft Platform Implementation',
      icon: <ServerIcon className="h-6 w-6" />,
      items: [
        'Building enterprise solutions with D365, Azure, and Power Platform',
        'Developing custom PCF controls for specialized interfaces',
        'Creating multi-stage business processes',
        'Implementing portal solutions with Power Pages',
        'Setting up data integration patterns'
      ]
    },
    {
      title: 'Emerging AI Integration',
      icon: <BrainIcon className="h-6 w-6" />,
      items: [
        'Enhancing projects with Copilot for D365 capabilities',
        'Exploring predictive models for maintenance and analysis',
        'Integrating Azure Cognitive Services',
        'Evaluating AI opportunities within existing implementations',
        'Developing AI governance frameworks'
      ]
    },
    {
      title: 'Integration & Development Practices',
      icon: <FlaskConicalIcon className="h-6 w-6" />,
      items: [
        'Designing API-first architectures with Azure API Management',
        'Implementing CI/CD pipelines in Azure DevOps',
        'Creating frameworks for enterprise data migrations',
        'Developing reusable integration patterns',
        'Establishing technical standards and governance'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Microsoft Certified: Azure Solutions Architect Expert',
      icon: <CloudIcon className="h-8 w-8" />,
      color: 'blue'
    },
    {
      title: 'Microsoft Certified: Power Platform Solution Architect Expert',
      icon: <SparklesIcon className="h-8 w-8" />,
      color: 'yellow'
    },
    {
      title: 'Microsoft Certified: Dynamics 365 Solutions Architect Expert',
      icon: <LayoutGridIcon className="h-8 w-8" />,
      color: 'indigo'
    },
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      icon: <BrainIcon className="h-8 w-8" />,
      color: 'purple'
    },
    {
      title: 'Microsoft Certified: Azure Data Engineer Associate',
      icon: <ServerIcon className="h-8 w-8" />,
      color: 'green'
    },
    {
      title: 'Microsoft Certified: DevOps Engineer Expert',
      icon: <CodeIcon className="h-8 w-8" />,
      color: 'red'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedElement 
          variant="fadeInUp" 
          duration={0.6} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Microsoft Technology Specialist with AI Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transforming enterprise Microsoft solutions with emerging AI
            capabilities
          </p>
        </AnimatedElement>

        {/* Professional Background */}
        <AnimatedElement 
          variant="fadeInUp" 
          delay={0.2} 
          duration={0.6} 
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            My Journey in Microsoft Technologies & AI
          </h3>
          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              With over 12 years in the Microsoft ecosystem, I&apos;ve built a career
              designing and implementing enterprise solutions that transform how
              organizations operate. My expertise spans Dynamics 365, Azure
              cloud services, and Power Platform, with a current focus on
              leading complex digital transformation programs across global
              enterprises.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              In recent years, I&apos;ve expanded my expertise to include artificial
              intelligence capabilities, recognizing AI&apos;s transformative
              potential within the Microsoft technology stack. This newer
              direction has allowed me to enhance traditional implementations
              with intelligent features that deliver additional business value.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I thrive on translating complex business challenges into practical
              technical solutions, working closely with stakeholders to
              understand their needs before architecting comprehensive systems.
              My hands-on approach means I don&apos;t just design solutions—I build
              them, from custom PCF controls and Azure Functions to complex data
              migrations and emerging AI implementations.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              What sets my approach apart is the combination of deep Microsoft
              platform knowledge with a practical understanding of where AI can
              add value, ensuring solutions are both innovative and
              enterprise-ready. I balance technical excellence with business
              value, focusing on sustainable solutions that drive measurable
              outcomes.
            </p>
          </div>
        </AnimatedElement>

        {/* Expertise Areas */}
        <AnimatedElement 
          variant="fadeInUp" 
          delay={0.3} 
          duration={0.6} 
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Specialized Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <AnimatedElement 
                key={index} 
                variant="fadeInUp" 
                delay={index * 0.1} 
                duration={0.5} 
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-100 dark:hover:border-blue-900/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {area.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-slate-600 dark:text-slate-300">
                      <div className="flex-shrink-0 h-2 w-2 bg-blue-600 dark:bg-blue-500 rounded-full mt-2 mr-3" />
                      <span className="hover:text-slate-900 dark:hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>

        {/* Certifications */}
        <AnimatedElement 
          variant="fadeInUp" 
          delay={0.4} 
          duration={0.6} 
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Microsoft Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <AnimatedElement 
                key={index} 
                variant="zoomIn" 
                delay={index * 0.1}
                duration={0.5}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-4">
                  {cert.icon}
                </div>
                <h4 className="text-slate-900 dark:text-white font-medium">{cert.title}</h4>
              </AnimatedElement>
            ))}
          </div>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4">
            DBS Certificate Number: 001545010781
          </p>
        </AnimatedElement>

        {/* Personal Touch */}
        <AnimatedElement 
          variant="fadeInUp" 
          delay={0.5} 
          duration={0.6} 
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Beyond Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedElement 
              variant="fadeInLeft"
              duration={0.5} 
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <p className="text-slate-600 dark:text-slate-300">
                Beyond my professional work, I&apos;m passionate about music
                composition and lyric writing, which offers a creative balance to
                my technical career. I enjoy traveling to experience different
                cultures and perspectives, which enhances my ability to work with
                global teams.
              </p>
            </AnimatedElement>
            <AnimatedElement 
              variant="fadeInRight"
              delay={0.2}
              duration={0.5}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <p className="text-slate-600 dark:text-slate-300">
                I&apos;m an avid football fan and follow matches regularly. Recently,
                I&apos;ve become increasingly fascinated with AI innovations and spend
                time researching how these emerging technologies can enhance
                traditional business solutions.
              </p>
            </AnimatedElement>
          </div>
        </AnimatedElement>

        {/* CTA Section */}
        <AnimatedElement 
          variant="fadeInUp" 
          delay={0.6} 
          duration={0.6} 
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Let&apos;s Connect
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in exploring how my Microsoft expertise can transform
            your implementation? Let&apos;s connect to discuss your specific
            challenges and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/Fred-Adun-CV.pdf" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon className="h-5 w-5 mr-2" />
              Download CV
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
            >
              <MessageSquareIcon className="h-5 w-5 mr-2" />
              Discuss Your Project
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;
