'use client';

import { usePathname } from 'next/navigation';

export default function StructuredData() {
  const pathname = usePathname();
  const baseUrl = 'https://fredadun.com';
  
  // Base person data for Fred Adun
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Fred Adun',
    jobTitle: 'AI-Powered Microsoft Solutions Architect',
    description: 'Transforming businesses with advanced AI integration across Dynamics 365, Azure, and Power Platform with over 12 years of experience.',
    image: `${baseUrl}/images/hero/fred-profile.jpg`,
    url: baseUrl,
    sameAs: [
      'https://www.linkedin.com/in/fred-adun-5994488/',
      // Add other social profiles if available
    ],
    knowsAbout: [
      'Microsoft Dynamics 365',
      'Azure',
      'Power Platform',
      'AI Integration',
      'Digital Transformation',
      'Microsoft Solutions Architecture'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Fred Adun Consulting',
      url: baseUrl
    }
  };

  // Professional service data
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#business`,
    name: 'Fred Adun Consulting',
    description: 'AI-Powered Microsoft Solutions Architecture services specializing in Dynamics 365, Azure, and Power Platform integration.',
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    image: `${baseUrl}/og-image.jpg`,
    founder: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United Kingdom'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI-Powered Microsoft Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Dynamics 365 Implementation',
          description: 'Custom Dynamics 365 implementation with AI integration'
        },
        {
          '@type': 'Offer',
          name: 'Azure Cloud Solutions',
          description: 'Enterprise-grade Azure cloud solutions with AI capabilities'
        },
        {
          '@type': 'Offer',
          name: 'Power Platform Development',
          description: 'Custom Power Platform applications with AI enhancements'
        },
        {
          '@type': 'Offer',
          name: 'AI Integration Services',
          description: 'Seamless AI integration into existing Microsoft ecosystems'
        }
      ]
    }
  };

  // Website data
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Fred Adun - AI-Powered Microsoft Solutions Architect',
    description: 'Transforming businesses with advanced AI integration across Dynamics 365, Azure, and Power Platform with over 12 years of experience.',
    publisher: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`
    }
  };

  // Breadcrumb data
  const getBreadcrumbData = () => {
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      }
    ];

    if (pathname === '/') {
      return null; // No need for breadcrumbs on homepage
    }

    // Extract path segments
    const segments = pathname.split('/').filter(Boolean);
    
    segments.forEach((segment, index) => {
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: formattedName,
        item: `${baseUrl}/${segments.slice(0, index + 1).join('/')}`
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    };
  };

  const breadcrumbData = getBreadcrumbData();
  
  // Determine which structured data to use based on the current page
  const pageSpecificData = null;
  
  if (pathname.startsWith('/blog/')) {
    // Blog post structured data would go here
    // We would need to pass the actual blog post data to this component
  } else if (pathname.startsWith('/case-studies/')) {
    // Case study structured data would go here
    // We would need to pass the actual case study data to this component
  }

  // Combine all structured data
  const structuredDataArray = [
    personData,
    serviceData,
    websiteData
  ];

  if (breadcrumbData) {
    structuredDataArray.push(breadcrumbData as unknown as typeof personData);
  }

  if (pageSpecificData) {
    structuredDataArray.push(pageSpecificData);
  }

  return (
    <>
      {structuredDataArray.map((data, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
