'use client';

import React from 'react';
import { CaseStudyLayout } from '@/components/layouts/case-study-layout';
import Image from 'next/image';
import AnimatedElement from '@/components/ui/animated-element';

export default function NationwideBankCaseStudy() {
  return (
    <CaseStudyLayout
      title="Nationwide Bank Sales Module Implementation"
      description="How a leading financial institution transformed their sales processes with Dynamics 365 and AI integration"
      heroImage="/images/case-studies/case-study-3.jpg"
      client="Nationwide Financial Services"
      industry="Banking & Financial Services"
      services={["Dynamics 365 Sales Implementation", "AI Integration", "Business Process Optimization", "Change Management"]}
      technologies={["Dynamics 365 Sales", "Azure OpenAI Service", "Power BI", "Power Automate", "Microsoft 365"]}
      duration="9 months"
      results={[
        {
          title: "Sales Productivity",
          value: "+38%"
        },
        {
          title: "Lead Conversion",
          value: "+45%"
        },
        {
          title: "Customer Acquisition Cost",
          value: "-32%"
        }
      ]}
      prevCaseStudy={{
        title: "Retail Chain Digital Transformation",
        slug: "retail-transformation"
      }}
    >
      <AnimatedElement>
        <h2>The Challenge</h2>
        <p>
          Nationwide Bank, a major financial institution with over 500 branches across the UK, was struggling with an outdated sales management system that was hindering their ability to effectively manage customer relationships and sales processes. Key challenges included:
        </p>
        <ul>
          <li>Fragmented customer data across multiple systems leading to incomplete customer views</li>
          <li>Manual sales processes resulting in inefficiencies and lost opportunities</li>
          <li>Limited visibility into sales pipeline and forecasting</li>
          <li>Inconsistent sales methodologies across different regions and teams</li>
          <li>Inability to leverage AI and analytics for sales insights and recommendations</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Approach</h2>
        <p>
          I led a comprehensive implementation of Dynamics 365 Sales, enhanced with AI capabilities, to transform the bank&apos;s sales operations. The approach included:
        </p>
        
        <h3>1. Discovery & Requirements Analysis</h3>
        <p>
          Conducted in-depth workshops with sales leaders, relationship managers, and IT stakeholders to understand current processes, pain points, and requirements. Mapped the customer journey and identified key touchpoints for optimization.
        </p>
        
        <h3>2. Solution Design & Architecture</h3>
        <p>
          Designed a tailored Dynamics 365 Sales implementation that aligned with the bank&apos;s specific sales methodology and compliance requirements. Developed a comprehensive data model and integration architecture to connect with core banking systems.
        </p>
        
        <div className="my-8 relative rounded-xl overflow-hidden">
          <Image 
            src="/images/case-studies/case-study-3.jpg" 
            alt="Nationwide Bank Sales Module Implementation" 
            width={800} 
            height={450}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        
        <h3>3. AI-Enhanced Sales Capabilities</h3>
        <p>
          Integrated Azure OpenAI Service to provide intelligent capabilities throughout the sales process:
        </p>
        <ul>
          <li>AI-powered lead scoring and prioritization based on propensity to convert</li>
          <li>Intelligent product recommendations based on customer profile and behavior</li>
          <li>Automated meeting summaries and next-step recommendations</li>
          <li>Sentiment analysis of customer interactions to identify risks and opportunities</li>
        </ul>
        
        <h3>4. Process Automation & Workflow Optimization</h3>
        <p>
          Implemented Power Automate workflows to streamline key sales processes:
        </p>
        <ul>
          <li>Automated lead routing and assignment based on territory, expertise, and capacity</li>
          <li>Streamlined approval processes for special pricing and terms</li>
          <li>Automated compliance checks and documentation generation</li>
          <li>Intelligent follow-up reminders and task prioritization</li>
        </ul>
        
        <h3>5. Analytics & Performance Management</h3>
        <p>
          Deployed Power BI dashboards and reports to provide real-time visibility into sales performance:
        </p>
        <ul>
          <li>Sales pipeline and forecast analytics</li>
          <li>Performance metrics by product, region, and relationship manager</li>
          <li>Customer acquisition and retention analytics</li>
          <li>Sales activity effectiveness measurements</li>
        </ul>
        
        <h3>6. Change Management & Adoption</h3>
        <p>
          Developed a comprehensive change management program to ensure successful adoption:
        </p>
        <ul>
          <li>Role-based training programs for different user groups</li>
          <li>Champions network to provide peer support and feedback</li>
          <li>Gamification elements to encourage system usage and best practices</li>
          <li>Executive dashboards to monitor adoption and identify areas for intervention</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Results</h2>
        <p>
          The implementation delivered significant business value across multiple dimensions:
        </p>
        
        <h3>Sales Performance Improvements</h3>
        <ul>
          <li>38% increase in sales productivity (measured by revenue per relationship manager)</li>
          <li>45% improvement in lead conversion rates</li>
          <li>32% reduction in customer acquisition costs</li>
          <li>28% increase in cross-selling and up-selling success</li>
        </ul>
        
        <h3>Operational Efficiencies</h3>
        <ul>
          <li>65% reduction in time spent on administrative tasks</li>
          <li>42% faster sales cycle from lead to close</li>
          <li>95% compliance with sales process and documentation requirements</li>
          <li>50% reduction in manual reporting effort</li>
        </ul>
        
        <h3>Customer Experience Enhancements</h3>
        <ul>
          <li>360-degree customer view enabling more personalized interactions</li>
          <li>More relevant product recommendations leading to higher customer satisfaction</li>
          <li>Faster response times to customer inquiries and requests</li>
          <li>More consistent experience across different channels and touchpoints</li>
        </ul>
        
        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <blockquote className="italic text-slate-600 dark:text-slate-300">
            &quot;The Dynamics 365 Sales implementation has transformed how our relationship managers engage with customers. The AI-powered insights and streamlined processes have not only improved our sales performance but have also enhanced the quality of customer interactions. Fred&apos;s expertise in both the technical and business aspects of the project was invaluable.&quot;
          </blockquote>
          <p className="mt-4 font-medium text-slate-900 dark:text-white">— Head of Sales Transformation, Nationwide Bank</p>
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Key Success Factors</h2>
        <p>
          Several factors contributed to the success of this implementation:
        </p>
        <ul>
          <li>Strong executive sponsorship and clear alignment with business strategy</li>
          <li>User-centered design approach ensuring the solution met the needs of relationship managers</li>
          <li>Integration of AI capabilities to provide tangible value and competitive differentiation</li>
          <li>Comprehensive change management and adoption program</li>
          <li>Phased implementation approach allowing for quick wins and continuous improvement</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Long-term Impact</h2>
        <p>
          Beyond the immediate results, the implementation has positioned Nationwide Bank for ongoing success:
        </p>
        <ul>
          <li>Established a scalable platform that can adapt to changing market conditions and customer expectations</li>
          <li>Created a foundation for ongoing AI and automation innovations in the sales process</li>
          <li>Enabled data-driven decision making at all levels of the sales organization</li>
          <li>Improved collaboration between sales, marketing, and customer service teams</li>
          <li>Enhanced ability to rapidly introduce new products and services to the market</li>
        </ul>
      </AnimatedElement>
    </CaseStudyLayout>
  );
}
