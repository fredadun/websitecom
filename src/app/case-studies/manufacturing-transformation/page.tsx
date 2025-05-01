'use client';

import React from 'react';
import { CaseStudyLayout } from '@/components/layouts/case-study-layout';
import Image from 'next/image';
import AnimatedElement from '@/components/ui/animated-element';

export default function ManufacturingTransformationPage() {
  return (
    <CaseStudyLayout
      title="Manufacturing Company Digital Transformation"
      description="How a leading manufacturing company modernized operations with Dynamics 365 F&O, resulting in significant efficiency improvements and cost reductions"
      heroImage="/images/case-studies/case-study-1.jpg"
      client="Global Manufacturing Leader"
      industry="Manufacturing"
      services={["Dynamics 365 Implementation", "Business Process Optimization", "Change Management", "Power BI Analytics"]}
      technologies={["Dynamics 365 Finance & Operations", "Power BI", "Azure Integration Services", "Microsoft 365"]}
      duration="12 months"
      results={[
        {
          title: "Operational Efficiency",
          value: "+35%"
        },
        {
          title: "Inventory Costs",
          value: "-28%"
        },
        {
          title: "Reporting Time",
          value: "-65%"
        }
      ]}
      nextCaseStudy={{
        title: "Retail Chain Digital Transformation",
        slug: "retail-transformation"
      }}
    >
      <AnimatedElement>
        <h2>The Challenge</h2>
        <p>
          The client, a global manufacturing company with operations in 15 countries, was struggling with outdated legacy systems that couldn't keep pace with their growth. Their existing ERP system was over 15 years old, heavily customized, and increasingly difficult to maintain. Key challenges included:
        </p>
        <ul>
          <li>Siloed data across multiple systems leading to decision-making delays</li>
          <li>Manual inventory management processes causing stockouts and overstock situations</li>
          <li>Limited visibility into global operations and supply chain</li>
          <li>Lengthy month-end closing processes taking up to 15 days</li>
          <li>Inability to adapt quickly to changing market conditions</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Approach</h2>
        <p>
          I led a comprehensive digital transformation initiative centered around implementing Dynamics 365 Finance & Operations. The approach included:
        </p>
        
        <h3>1. Discovery & Assessment</h3>
        <p>
          Conducted detailed workshops with stakeholders across all departments to understand pain points, requirements, and future state vision. Performed a gap analysis between current processes and Dynamics 365 capabilities.
        </p>
        
        <h3>2. Solution Design</h3>
        <p>
          Developed a tailored implementation strategy that leveraged Dynamics 365 F&O's standard functionality where possible while designing custom solutions for unique business requirements. Created a detailed integration architecture to connect with existing systems that would remain in place.
        </p>
        
        <div className="my-8 relative rounded-xl overflow-hidden">
          <Image 
            src="/images/case-studies/case-study-1.jpg" 
            alt="Solution architecture diagram" 
            width={800} 
            height={450}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        
        <h3>3. Implementation</h3>
        <p>
          Utilized an agile implementation approach with 2-week sprints and regular demos to stakeholders. Key implementation components included:
        </p>
        <ul>
          <li>Core financial modules including GL, AP, AR, and Fixed Assets</li>
          <li>Supply chain modules for Procurement, Inventory, and Production</li>
          <li>Power BI dashboards for real-time operational insights</li>
          <li>Azure Integration Services to connect with shop floor systems</li>
          <li>Custom mobile applications for warehouse management</li>
        </ul>
        
        <h3>4. Change Management & Training</h3>
        <p>
          Developed a comprehensive change management strategy to ensure smooth adoption. This included:
        </p>
        <ul>
          <li>Identifying and training super-users who would become internal champions</li>
          <li>Creating role-based training materials and conducting hands-on sessions</li>
          <li>Regular communication about project milestones and benefits</li>
          <li>Post-go-live support to address questions and concerns</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Results</h2>
        <p>
          The transformation initiative delivered significant business value across multiple dimensions:
        </p>
        
        <h3>Operational Improvements</h3>
        <ul>
          <li>35% increase in overall operational efficiency through streamlined processes</li>
          <li>28% reduction in inventory costs through improved forecasting and management</li>
          <li>Month-end closing reduced from 15 days to just 3 days</li>
          <li>65% reduction in time spent on reporting and data analysis</li>
        </ul>
        
        <h3>Strategic Benefits</h3>
        <ul>
          <li>Real-time visibility into global operations enabling faster decision-making</li>
          <li>Improved customer satisfaction through more accurate delivery estimates</li>
          <li>Enhanced compliance with industry regulations and financial reporting requirements</li>
          <li>Scalable platform that can grow with the business and adapt to changing needs</li>
        </ul>
        
        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <blockquote className="italic text-slate-600 dark:text-slate-300">
            "The Dynamics 365 implementation led by Fred transformed our business operations. We now have the visibility and agility we need to respond quickly to market changes and customer demands. The ROI has exceeded our expectations."
          </blockquote>
          <p className="mt-4 font-medium text-slate-900 dark:text-white">— CIO, Global Manufacturing Leader</p>
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Key Success Factors</h2>
        <p>
          Several factors contributed to the success of this transformation initiative:
        </p>
        <ul>
          <li>Executive sponsorship and clear alignment on strategic objectives</li>
          <li>Thorough understanding of business processes before implementing technology</li>
          <li>Focus on change management and user adoption from day one</li>
          <li>Agile implementation approach allowing for quick wins and course corrections</li>
          <li>Integration of AI and analytics capabilities to provide actionable insights</li>
        </ul>
      </AnimatedElement>
    </CaseStudyLayout>
  );
}
