'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import AnimatedElement from '@/components/ui/animated-element';
import { PlusIcon, MinusIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]); // Open first FAQ by default

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  const faqCategories = [
    {
      title: "Services & Expertise",
      faqs: [
        {
          question: "What Microsoft technologies do you specialize in?",
          answer: "I specialize in the Microsoft Business Applications and Cloud ecosystem, with deep expertise in Dynamics 365, Azure, Power Platform, and AI/Copilot integration. My focus is on helping businesses leverage these technologies to drive digital transformation and achieve measurable business outcomes."
        },
        {
          question: "Do you work with clients outside the UK?",
          answer: "Yes, I work with clients globally. I've successfully delivered projects for organizations across 30+ countries, leveraging remote collaboration tools and flexible scheduling to accommodate different time zones. My international experience allows me to understand diverse business contexts and regulatory environments."
        },
        {
          question: "What size of organizations do you typically work with?",
          answer: "I work with organizations of all sizes, from mid-market businesses to large enterprises. My approach is tailored to the specific needs and scale of each client, ensuring that solutions are appropriately sized and designed for their unique requirements and growth trajectory."
        },
        {
          question: "How do you stay current with rapidly evolving Microsoft technologies?",
          answer: "I maintain active Microsoft certifications, participate in preview programs, attend industry conferences, and engage with the Microsoft partner community. I also dedicate time each week to hands-on exploration of new features and capabilities, ensuring my recommendations and implementations leverage the latest advancements."
        }
      ]
    },
    {
      title: "Project Approach & Methodology",
      faqs: [
        {
          question: "What is your approach to new projects?",
          answer: "My approach begins with a thorough discovery phase to understand your business objectives, challenges, and requirements. I then develop a tailored solution design, followed by an agile implementation methodology with regular checkpoints and demonstrations. Throughout the project, I focus on knowledge transfer, change management, and measuring outcomes against defined success criteria."
        },
        {
          question: "How do you ensure successful adoption of new technologies?",
          answer: "Successful adoption is built into my methodology from day one. I incorporate change management principles, stakeholder engagement, and user-centered design into every project. This includes identifying champions, developing targeted training materials, creating intuitive user experiences, and establishing feedback loops to address concerns and continuously improve the solution."
        },
        {
          question: "Can you work with our existing IT team?",
          answer: "Absolutely. I excel at collaborating with internal IT teams, providing knowledge transfer, mentorship, and complementary expertise. My goal is to empower your team while filling any skill gaps. I can adapt my involvement based on your team's capabilities, from providing strategic guidance to hands-on implementation support."
        },
        {
          question: "How do you handle project scope changes?",
          answer: "I use an agile approach that accommodates evolving requirements while maintaining project governance. When scope changes arise, I help assess their impact on timeline, budget, and outcomes, then work with stakeholders to make informed decisions. My flexible methodology allows for incorporating valuable changes while keeping the project aligned with core objectives."
        }
      ]
    },
    {
      title: "Engagement & Pricing",
      faqs: [
        {
          question: "What engagement models do you offer?",
          answer: "I offer several engagement models to suit different needs: project-based consulting for specific initiatives, retainer arrangements for ongoing support and advisory services, and fractional CTO/technical leadership roles. Each model can be customized to align with your organization's requirements, timeline, and budget constraints."
        },
        {
          question: "How is your pricing structured?",
          answer: "My pricing is transparent and value-based, structured according to the engagement model. Project-based work is typically priced based on scope and deliverables, while retainer arrangements offer predictable monthly fees for agreed services. I provide detailed proposals outlining deliverables, timelines, and investment required, with no hidden costs."
        },
        {
          question: "Do you offer a free initial consultation?",
          answer: "Yes, I offer a complimentary initial consultation to understand your needs and determine if my expertise aligns with your requirements. This typically involves a 60-minute discussion about your business challenges, objectives, and potential approaches to address them, with no obligation to proceed further."
        },
        {
          question: "What is your availability for new projects?",
          answer: "My availability varies throughout the year based on current client commitments. I maintain a balanced client portfolio to ensure I can deliver exceptional service to each organization I work with. Please contact me to discuss your timeline and requirements, and I'll be transparent about my capacity to support your project."
        }
      ]
    },
    {
      title: "Results & Outcomes",
      faqs: [
        {
          question: "How do you measure project success?",
          answer: "I define success metrics at the outset of each engagement, aligned with your business objectives. These typically include quantitative measures (ROI, efficiency gains, cost reductions) and qualitative outcomes (user adoption, capability building, strategic positioning). I track these metrics throughout the project and conduct post-implementation reviews to validate results."
        },
        {
          question: "What results have your clients typically achieved?",
          answer: "Clients have achieved significant measurable outcomes, including 30-50% increases in operational efficiency, 25-40% reductions in manual processes, 60-80% faster reporting and analytics capabilities, and substantial improvements in customer and employee satisfaction. The specific results vary by project, but I consistently focus on delivering tangible business value."
        },
        {
          question: "Do you provide support after project completion?",
          answer: "Yes, I offer post-implementation support options to ensure your solution continues to deliver value. This can include knowledge transfer to your team, documentation, training, periodic health checks, and ongoing advisory services. I'm committed to your long-term success beyond the initial implementation."
        },
        {
          question: "Can you provide references from previous clients?",
          answer: "Absolutely. I'm happy to provide references from clients with similar projects or in related industries, subject to their permission. These references can share their experiences working with me and the outcomes achieved. Please contact me to discuss your specific requirements, and I'll arrange appropriate references."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 dark:from-slate-900/50 dark:to-slate-800/50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Find answers to common questions about my services, approach, and expertise
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <AnimatedElement key={categoryIndex}>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const index = categoryIndex * 10 + faqIndex;
                      const isOpen = openFaqs.includes(index);
                      
                      return (
                        <div 
                          key={faqIndex} 
                          className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                        >
                          <button
                            className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            onClick={() => toggleFaq(index)}
                            aria-expanded={isOpen}
                          >
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                              {faq.question}
                            </h3>
                            <span className="ml-4 flex-shrink-0">
                              {isOpen ? (
                                <MinusIcon className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                              ) : (
                                <PlusIcon className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-slate-600 dark:text-slate-300">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <AnimatedElement>
            <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Have a Question Not Covered Here?
              </h2>
              <p className="mb-8">
                Contact me directly and I&apos;ll be happy to provide the information you need
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 dark:hover:bg-white/90 transition-colors"
              >
                Get in Touch
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Layout>
  );
}
