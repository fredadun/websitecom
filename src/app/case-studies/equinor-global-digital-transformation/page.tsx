'use client';

import React from 'react';
import { CaseStudyLayout } from '@/components/layouts/case-study-layout';
import Image from 'next/image';
import AnimatedElement from '@/components/ui/animated-element';

export default function EquinorDigitalTransformationPage() {
  return (
    <CaseStudyLayout
      title="Equinor Global Digital Transformation"
      description="How a leading energy company transformed their operations with Microsoft technologies and AI integration"
      heroImage="/images/case-studies/case-study-7.jpg"
      client="Equinor"
      industry="Energy & Utilities"
      services={["Digital Transformation Strategy", "Cloud Migration", "IoT Implementation", "AI & Analytics"]}
      technologies={["Azure Cloud Services", "Azure IoT", "Azure Digital Twins", "Dynamics 365", "Power Platform", "Azure AI"]}
      duration="36 months"
      results={[
        {
          title: "Operational Efficiency",
          value: "+30%"
        },
        {
          title: "Carbon Footprint",
          value: "-25%"
        },
        {
          title: "Safety Incidents",
          value: "-45%"
        }
      ]}
      prevCaseStudy={{
        title: "Ecobank Global Banking Platform",
        slug: "ecobank-global-banking-platform"
      }}
    >
      <AnimatedElement>
        <h2>The Challenge</h2>
        <p>
          Equinor, a leading international energy company with operations in more than 30 countries, was facing significant challenges in their journey toward becoming a more digital and sustainable energy provider. The company needed to transform its operations to:
        </p>
        <ul>
          <li>Reduce carbon footprint while maintaining operational efficiency</li>
          <li>Improve safety and reduce risk across global operations</li>
          <li>Optimize asset performance and maintenance across offshore and onshore facilities</li>
          <li>Enable data-driven decision making at all levels of the organization</li>
          <li>Accelerate innovation and reduce time-to-market for new energy solutions</li>
          <li>Modernize legacy systems that were hindering agility and collaboration</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Approach</h2>
        <p>
          I led a comprehensive digital transformation program leveraging Microsoft technologies to transform Equinor&apos;s operations across their global footprint. The approach included:
        </p>
        
        <h3>1. Digital Strategy & Transformation Roadmap</h3>
        <p>
          Collaborated with Equinor&apos;s leadership team to develop a holistic digital transformation strategy aligned with their business objectives and sustainability goals. Created a multi-year roadmap with clear milestones, success metrics, and prioritized initiatives across different business units.
        </p>
        
        <h3>2. Cloud-First Infrastructure</h3>
        <p>
          Designed and implemented a secure, scalable cloud architecture on Azure:
        </p>
        <ul>
          <li>Established a multi-region Azure architecture to support global operations</li>
          <li>Implemented robust security controls and governance for critical energy infrastructure</li>
          <li>Migrated legacy applications to cloud-native services</li>
          <li>Created a hybrid connectivity model to support operational technology integration</li>
          <li>Implemented infrastructure-as-code for consistent deployments across regions</li>
        </ul>
        
        <div className="my-8 relative rounded-xl overflow-hidden">
          <Image 
            src="/images/case-studies/case-study-7.jpg" 
            alt="Equinor Global Digital Transformation" 
            width={800} 
            height={450}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        
        <h3>3. Digital Twin Implementation</h3>
        <p>
          Developed comprehensive digital twins of Equinor&apos;s key assets using Azure Digital Twins:
        </p>
        <ul>
          <li>Created virtual representations of offshore platforms and onshore facilities</li>
          <li>Integrated real-time IoT sensor data from operational equipment</li>
          <li>Implemented predictive maintenance models to optimize asset performance</li>
          <li>Enabled remote monitoring and virtual inspections</li>
          <li>Developed simulation capabilities for scenario planning and training</li>
        </ul>
        
        <h3>4. Intelligent Operations</h3>
        <p>
          Implemented AI-powered operational capabilities to enhance efficiency and safety:
        </p>
        <ul>
          <li>Developed predictive analytics for equipment failure prevention</li>
          <li>Implemented computer vision solutions for safety monitoring</li>
          <li>Created intelligent workflows for maintenance and operations</li>
          <li>Deployed autonomous drone inspection capabilities</li>
          <li>Implemented energy optimization algorithms to reduce carbon footprint</li>
        </ul>
        
        <h3>5. Connected Field Operations</h3>
        <p>
          Transformed field operations with mobile and wearable technologies:
        </p>
        <ul>
          <li>Implemented Dynamics 365 Field Service for maintenance management</li>
          <li>Deployed mixed reality solutions using HoloLens for remote assistance</li>
          <li>Created mobile applications for field workers with offline capabilities</li>
          <li>Implemented IoT-enabled safety equipment and monitoring</li>
          <li>Developed location-based services for asset tracking and personnel safety</li>
        </ul>
        
        <h3>6. Data Platform & Analytics</h3>
        <p>
          Implemented a comprehensive data platform to enable data-driven decision making:
        </p>
        <ul>
          <li>Established a unified data lake for operational and business data</li>
          <li>Implemented real-time analytics pipelines for sensor and equipment data</li>
          <li>Created executive dashboards for operational performance monitoring</li>
          <li>Developed advanced analytics models for production optimization</li>
          <li>Implemented carbon footprint tracking and sustainability metrics</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>The Results</h2>
        <p>
          The digital transformation program delivered significant business value across multiple dimensions:
        </p>
        
        <h3>Operational Improvements</h3>
        <ul>
          <li>30% increase in operational efficiency across global assets</li>
          <li>45% reduction in safety incidents through predictive analytics and monitoring</li>
          <li>35% improvement in equipment uptime through predictive maintenance</li>
          <li>40% reduction in maintenance costs through optimized scheduling and remote assistance</li>
        </ul>
        
        <h3>Sustainability Impact</h3>
        <ul>
          <li>25% reduction in carbon footprint through optimized operations</li>
          <li>20% decrease in energy consumption across facilities</li>
          <li>30% reduction in unnecessary travel through remote operations capabilities</li>
          <li>15% increase in renewable energy integration efficiency</li>
        </ul>
        
        <h3>Business Agility</h3>
        <ul>
          <li>50% reduction in time-to-market for new energy solutions</li>
          <li>60% improvement in decision-making speed through real-time analytics</li>
          <li>40% increase in cross-functional collaboration</li>
          <li>25% reduction in IT operational costs through cloud optimization</li>
        </ul>
        
        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <blockquote className="italic text-slate-600 dark:text-slate-300">
            &quot;The digital transformation program has fundamentally changed how we operate as an energy company. We&apos;re now able to make data-driven decisions that not only improve our operational efficiency but also significantly reduce our environmental impact. Fred&apos;s expertise in both energy operations and Microsoft technologies was instrumental in helping us navigate this complex transformation journey.&quot;
          </blockquote>
          <p className="mt-4 font-medium text-slate-900 dark:text-white">— Chief Digital Officer, Equinor</p>
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Key Success Factors</h2>
        <p>
          Several factors contributed to the success of this transformation initiative:
        </p>
        <ul>
          <li>Strong executive sponsorship and clear alignment with business strategy</li>
          <li>Cross-functional teams combining operational and technology expertise</li>
          <li>Focus on building digital capabilities within the organization</li>
          <li>Phased implementation approach with clear value realization at each stage</li>
          <li>Comprehensive change management and adoption program</li>
        </ul>
      </AnimatedElement>

      <AnimatedElement>
        <h2>Long-term Impact</h2>
        <p>
          Beyond the immediate results, the transformation has positioned Equinor for ongoing success:
        </p>
        <ul>
          <li>Established a scalable digital foundation that can adapt to changing energy markets</li>
          <li>Enhanced ability to integrate renewable energy sources into their portfolio</li>
          <li>Improved safety culture through data-driven risk management</li>
          <li>Created a platform for ongoing innovation in sustainable energy solutions</li>
          <li>Strengthened competitive positioning in the energy transition landscape</li>
        </ul>
      </AnimatedElement>
    </CaseStudyLayout>
  );
}
