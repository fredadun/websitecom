'use client';

import React from 'react';
import { CaseStudyLayout } from '@/components/layouts/case-study-layout';
import Image from 'next/image';
import AnimatedElement from '@/components/ui/animated-element';

export default function EcobankGlobalBankingPage() {
  return (
    <CaseStudyLayout
      title="Ecobank Global Banking Platform Transformation"
      description="How Ecobank modernized their core banking platform across 33 African countries with Microsoft technologies"
      heroImage="/images/case-studies/case-study-6.jpg"
      client="Ecobank Transnational Incorporated"
      industry="Banking & Financial Services"
      services={["Core Banking Modernization", "Cloud Migration", "Digital Channels Implementation", "Data Platform Development"]}
      technologies={["Azure Cloud Services", "Dynamics 365", "Power Platform", "Azure Synapse Analytics", "Azure AI"]}
      duration="24 months"
      results={[
        {
          title: "Transaction Processing",
          value: "+320%"
        },
        {
          title: "Digital Adoption",
          value: "+85%"
        },
        {
          title: "Operational Costs",
          value: "-40%"
        }
      ]}
      prevCaseStudy={{
        title: "Financial Services Modernization",
        slug: "financial-services-modernization"
      }}
    >
      <AnimatedElement>
        <h2>The Challenge</h2>
        <p>
          Ecobank Transnational Incorporated, one of Africa&apos;s leading banking groups with operations in 33 countries, was facing significant challenges with their legacy banking platform. As the bank expanded its operations across the continent, the limitations of their existing systems became increasingly apparent:
        </p>
        <ul>
          <li>Fragmented core banking systems across different countries with limited interoperability</li>
          <li>Scalability constraints limiting transaction processing capacity during peak periods</li>
          <li>High operational costs due to maintaining multiple legacy systems</li>
          <li>Limited digital banking capabilities hampering customer experience</li>
          <li>Data silos preventing a unified view of customers across the bank&apos;s footprint</li>
          <li>Regulatory compliance challenges due to varying requirements across multiple jurisdictions</li>
          <li>Security vulnerabilities in aging infrastructure</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Approach</h2>
        <p>
          I led a comprehensive transformation program to modernize Ecobank&apos;s banking platform using Microsoft technologies, while ensuring business continuity across their extensive African operations. The approach included:
        </p>
        
        <h3>1. Strategic Assessment & Transformation Roadmap</h3>
        <p>
          Conducted a thorough assessment of the current technology landscape, business priorities, and market trends across all 33 countries. Developed a multi-year transformation roadmap with clear business outcomes, prioritized initiatives, and a phased implementation approach to manage risk and deliver early value.
        </p>
        
        <h3>2. Cloud-Native Banking Platform</h3>
        <p>
          Designed and implemented a secure, scalable cloud-native banking platform on Azure:
        </p>
        <ul>
          <li>Established a multi-region Azure architecture to support operations across Africa</li>
          <li>Implemented robust security controls and governance aligned with banking regulations</li>
          <li>Developed microservices-based architecture for core banking functions</li>
          <li>Created API-first approach to enable integration with third-party services</li>
          <li>Implemented infrastructure-as-code for consistent deployments across regions</li>
        </ul>
        
        <div className="my-8 relative rounded-xl overflow-hidden">
          <Image 
            src="/images/case-studies/case-study-6.jpg" 
            alt="Ecobank Global Banking Platform Transformation" 
            width={800} 
            height={450}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        
        <h3>3. Omnichannel Digital Banking</h3>
        <p>
          Transformed the customer experience through modern digital channels:
        </p>
        <ul>
          <li>Implemented unified mobile and internet banking platforms</li>
          <li>Developed USSD banking capabilities for feature phone users</li>
          <li>Created agent banking solutions for rural areas with limited infrastructure</li>
          <li>Implemented WhatsApp and social media banking channels</li>
          <li>Developed a unified customer onboarding experience across channels</li>
        </ul>
        
        <h3>4. Data Platform & Analytics</h3>
        <p>
          Implemented a comprehensive data platform to enable data-driven decision making:
        </p>
        <ul>
          <li>Centralized data lake using Azure Data Lake Storage</li>
          <li>Real-time data integration using Azure Data Factory and Event Hubs</li>
          <li>Enterprise data warehouse using Azure Synapse Analytics</li>
          <li>Customer 360 view across all countries and products</li>
          <li>Advanced analytics and reporting using Power BI</li>
        </ul>
        
        <h3>5. AI-Powered Banking Capabilities</h3>
        <p>
          Leveraged AI to enhance customer experience and operational efficiency:
        </p>
        <ul>
          <li>Intelligent chatbots for customer service in multiple languages</li>
          <li>Fraud detection and prevention using machine learning</li>
          <li>Credit scoring models for underbanked populations</li>
          <li>Personalized product recommendations based on customer behavior</li>
          <li>Predictive maintenance for ATM and branch infrastructure</li>
        </ul>
        
        <h3>6. Regulatory Compliance & Reporting</h3>
        <p>
          Implemented robust compliance capabilities to address regulatory requirements:
        </p>
        <ul>
          <li>Automated regulatory reporting for multiple jurisdictions</li>
          <li>Enhanced KYC/AML capabilities with AI-powered risk assessment</li>
          <li>Real-time transaction monitoring and suspicious activity detection</li>
          <li>Comprehensive audit trails and governance controls</li>
          <li>Privacy and data protection measures aligned with local regulations</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Results</h2>
        <p>
          The transformation program delivered significant business value across multiple dimensions:
        </p>
        
        <h3>Operational Improvements</h3>
        <ul>
          <li>320% increase in transaction processing capacity</li>
          <li>40% reduction in operational costs</li>
          <li>65% decrease in system downtime</li>
          <li>50% reduction in time-to-market for new products and services</li>
        </ul>
        
        <h3>Customer Experience Enhancements</h3>
        <ul>
          <li>85% increase in digital channel adoption</li>
          <li>60% improvement in customer satisfaction scores</li>
          <li>42% reduction in customer onboarding time</li>
          <li>30% increase in products per customer through improved cross-selling</li>
        </ul>
        
        <h3>Business Growth</h3>
        <ul>
          <li>25% increase in customer base across the 33 countries</li>
          <li>38% growth in transaction volumes</li>
          <li>45% increase in digital lending</li>
          <li>20% improvement in deposit mobilization</li>
        </ul>
        
        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <blockquote className="italic text-slate-600 dark:text-slate-300">
            &quot;The transformation of our banking platform has been a game-changer for Ecobank. We now have a unified, scalable platform that supports our operations across all 33 countries, enabling us to deliver consistent, high-quality banking services to our customers regardless of their location. Fred&apos;s expertise in both banking technologies and the African market was instrumental in navigating this complex transformation while ensuring we addressed the unique challenges of each market.&quot;
          </blockquote>
          <p className="mt-4 font-medium text-slate-900 dark:text-white">— Group Executive, Technology & Operations, Ecobank</p>
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Key Success Factors</h2>
        <p>
          Several factors contributed to the success of this transformation initiative:
        </p>
        <ul>
          <li>Strong executive sponsorship and clear alignment with the bank&apos;s pan-African strategy</li>
          <li>Country-by-country implementation approach that managed risk while delivering incremental value</li>
          <li>Focus on building local technical capabilities in each market</li>
          <li>Comprehensive change management and customer education programs</li>
          <li>Partnerships with local fintech companies to address market-specific needs</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Long-term Impact</h2>
        <p>
          Beyond the immediate results, the transformation has positioned Ecobank for ongoing success:
        </p>
        <ul>
          <li>Established a scalable, flexible technology foundation that can support the bank&apos;s continued expansion</li>
          <li>Enhanced ability to serve the unbanked and underbanked populations across Africa</li>
          <li>Improved competitiveness against both traditional banks and fintech disruptors</li>
          <li>Created a platform for ongoing innovation in digital financial services</li>
          <li>Strengthened the bank&apos;s position as a leader in pan-African banking</li>
        </ul>
      </AnimatedElement>
    </CaseStudyLayout>
  );
}
