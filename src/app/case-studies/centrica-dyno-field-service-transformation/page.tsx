'use client';

import React from 'react';
import { CaseStudyLayout } from '@/components/layouts/case-study-layout';
import Image from 'next/image';
import AnimatedElement from '@/components/ui/animated-element';

export default function CentricaDynoFieldServicePage() {
  return (
    <CaseStudyLayout
      title="Centrica Dyno Field Service Transformation"
      description="How Centrica's Dyno service division achieved operational excellence through Dynamics 365 Field Service implementation"
      heroImage="/images/case-studies/case-study-4.jpg"
      client="Centrica (Dyno Services)"
      industry="Energy & Utilities"
      services={["Dynamics 365 Field Service Implementation", "Mobile Solution Development", "IoT Integration", "Business Process Optimization"]}
      technologies={["Dynamics 365 Field Service", "Power Platform", "Azure IoT", "Power BI", "Microsoft 365"]}
      duration="14 months"
      results={[
        {
          title: "First-Time Fix Rate",
          value: "+48%"
        },
        {
          title: "Service Calls Per Day",
          value: "+35%"
        },
        {
          title: "Customer Satisfaction",
          value: "+52%"
        }
      ]}
      prevCaseStudy={{
        title: "Nationwide Bank Sales Module Implementation",
        slug: "nationwide-bank-sales-module-implementation"
      }}
      nextCaseStudy={{
        title: "Financial Services Modernization",
        slug: "financial-services-modernization"
      }}
    >
      <AnimatedElement>
        <h2>The Challenge</h2>
        <p>
          Centrica&apos;s Dyno Services division, providing plumbing, heating, and electrical services across the UK, was facing significant operational challenges with their legacy field service management system. With over 1,500 field technicians serving millions of customers, the existing solution was unable to support their growing business needs. Key challenges included:
        </p>
        <ul>
          <li>Inefficient scheduling and dispatching leading to low technician utilization</li>
          <li>Limited mobile capabilities for field technicians</li>
          <li>Poor visibility into service operations and performance metrics</li>
          <li>High percentage of repeat visits due to incomplete first-time fixes</li>
          <li>Disconnected customer communication channels</li>
          <li>Inability to leverage IoT data from connected heating systems</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Approach</h2>
        <p>
          I led a comprehensive implementation of Dynamics 365 Field Service, complemented by custom mobile solutions and IoT integration, to transform Dyno&apos;s field service operations. The approach included:
        </p>
        
        <h3>1. Strategic Assessment & Roadmap</h3>
        <p>
          Conducted a thorough assessment of current processes, systems, and pain points through workshops with field technicians, dispatchers, service managers, and customers. Developed a phased implementation roadmap aligned with business priorities and change management considerations.
        </p>
        
        <h3>2. Intelligent Scheduling & Resource Optimization</h3>
        <p>
          Implemented Dynamics 365 Field Service&apos;s Resource Scheduling Optimization to:
        </p>
        <ul>
          <li>Automatically assign the right technician to each job based on skills, location, and availability</li>
          <li>Optimize travel routes to minimize drive time and maximize productive hours</li>
          <li>Balance workloads across the technician workforce</li>
          <li>Dynamically adjust schedules in response to emergency calls and cancellations</li>
        </ul>
        
        <div className="my-8 relative rounded-xl overflow-hidden">
          <Image 
            src="/images/case-studies/case-study-4.jpg" 
            alt="Centrica Dyno Field Service Transformation" 
            width={800} 
            height={450}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        
        <h3>3. Mobile Workforce Enablement</h3>
        <p>
          Developed a comprehensive mobile solution for field technicians that worked both online and offline:
        </p>
        <ul>
          <li>Intuitive mobile app providing full access to work orders, customer history, and technical documentation</li>
          <li>Digital forms for capturing service details, parts used, and customer sign-off</li>
          <li>Augmented reality guidance for complex repair procedures</li>
          <li>Real-time communication with dispatchers and subject matter experts</li>
          <li>Inventory management capabilities for van stock</li>
        </ul>
        
        <h3>4. IoT Integration & Predictive Maintenance</h3>
        <p>
          Integrated data from Centrica&apos;s connected heating systems to enable predictive maintenance:
        </p>
        <ul>
          <li>Real-time monitoring of heating system performance and fault codes</li>
          <li>Predictive analytics to identify potential failures before they occur</li>
          <li>Automatic work order generation for preventive maintenance</li>
          <li>Remote diagnostics capabilities to improve first-time fix rates</li>
        </ul>
        
        <h3>5. Customer Experience Enhancement</h3>
        <p>
          Implemented customer-facing capabilities to improve service experience:
        </p>
        <ul>
          <li>Self-service portal for appointment booking and status tracking</li>
          <li>Automated notifications for appointment confirmations and technician arrival times</li>
          <li>Post-service surveys and feedback collection</li>
          <li>Customer insights dashboard for service managers</li>
        </ul>
        
        <h3>6. Analytics & Performance Management</h3>
        <p>
          Deployed Power BI dashboards and reports to provide comprehensive visibility into service operations:
        </p>
        <ul>
          <li>Real-time operational KPIs and service level agreement tracking</li>
          <li>Technician productivity and performance metrics</li>
          <li>Customer satisfaction and Net Promoter Score analytics</li>
          <li>Parts usage and inventory optimization insights</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Results</h2>
        <p>
          The transformation initiative delivered significant business outcomes across multiple dimensions:
        </p>
        
        <h3>Operational Improvements</h3>
        <ul>
          <li>48% increase in first-time fix rate</li>
          <li>35% more service calls completed per day</li>
          <li>28% reduction in average travel time between jobs</li>
          <li>40% decrease in scheduling and dispatching effort</li>
        </ul>
        
        <h3>Financial Benefits</h3>
        <ul>
          <li>22% reduction in operational costs</li>
          <li>18% increase in service revenue</li>
          <li>25% reduction in parts inventory costs</li>
          <li>15% decrease in warranty claim costs through better service quality</li>
        </ul>
        
        <h3>Customer Experience Enhancements</h3>
        <ul>
          <li>52% improvement in customer satisfaction scores</li>
          <li>68% reduction in appointment no-shows</li>
          <li>42% decrease in customer complaints</li>
          <li>30% increase in service contract renewals</li>
        </ul>
        
        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <blockquote className="italic text-slate-600 dark:text-slate-300">
            &quot;The Dynamics 365 Field Service implementation has revolutionized how we deliver services to our customers. Our technicians now have the tools and information they need to resolve issues on the first visit, while our customers enjoy a much more responsive and transparent service experience. Fred&apos;s expertise in both the technical implementation and the field service business processes was instrumental to our success.&quot;
          </blockquote>
          <p className="mt-4 font-medium text-slate-900 dark:text-white">— Director of Field Operations, Centrica Dyno Services</p>
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Key Success Factors</h2>
        <p>
          Several factors contributed to the success of this transformation initiative:
        </p>
        <ul>
          <li>Extensive involvement of field technicians in the design and testing process</li>
          <li>Focus on mobile user experience to ensure high adoption rates</li>
          <li>Integration of IoT data to enable predictive rather than reactive service</li>
          <li>Comprehensive change management and training program</li>
          <li>Phased implementation approach with clear success metrics for each phase</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Long-term Impact</h2>
        <p>
          Beyond the immediate results, the transformation has positioned Centrica Dyno Services for ongoing success:
        </p>
        <ul>
          <li>Established a scalable platform that can support business growth and new service offerings</li>
          <li>Created a foundation for continued innovation in predictive maintenance and remote diagnostics</li>
          <li>Improved ability to attract and retain skilled technicians through better tools and work experience</li>
          <li>Enhanced competitive positioning in the home services market</li>
          <li>Enabled data-driven decision making across all levels of the service organization</li>
        </ul>
      </AnimatedElement>
    </CaseStudyLayout>
  );
}
