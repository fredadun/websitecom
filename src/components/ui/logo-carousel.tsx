'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CompanyLogo {
  name: string;
  logo: string;
  url?: string;
}

interface LogoCarouselProps {
  className?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ className = '' }) => {
  const logos: CompanyLogo[] = [
    { name: 'Chelsea FC', logo: '/images/logos/chelseafc.png', url: 'https://www.chelseafc.com' },
    { name: 'Centrica', logo: '/images/logos/centrica.png', url: 'https://www.centrica.com' },
    { name: 'Equinor', logo: '/images/logos/equinor.png', url: 'https://www.equinor.com' },
    { name: 'Fujitsu', logo: '/images/logos/Fujitsu.png', url: 'https://www.fujitsu.com' },
    { name: 'Clarion Housing', logo: '/images/logos/Clarion_Housing_Group.svg.png', url: 'https://www.clarionhg.com' },
    { name: 'Nationwide', logo: '/images/logos/nationwide.png', url: 'https://www.nationwide.co.uk' },
    { name: 'Gilmartins', logo: '/images/logos/gilmartins.png', url: 'https://www.gilmartins.co.uk' },
    { name: 'ICS Cool Energy', logo: '/images/logos/icscoolenergy.png', url: 'https://www.icscoolenergy.com' },
    { name: 'Reply', logo: '/images/logos/reply.png', url: 'https://www.reply.com' },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animateScroll = () => {
      if (isHovered) return;
      
      const scrollAmount = 1;
      carousel.scrollLeft += scrollAmount;
      
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    };

    const interval = setInterval(animateScroll, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      
      <div 
        ref={carouselRef}
        className="flex overflow-hidden whitespace-nowrap py-6 px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <motion.div
            key={`logo-1-${index}`}
            className="flex-shrink-0 mx-8 py-4"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
          >
            <a 
              href={logo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-all duration-500 hover:drop-shadow-lg"
            >
              <div className="relative w-40 h-24 rounded-md shadow-md overflow-hidden bg-white p-2">
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </a>
          </motion.div>
        ))}
        
        {/* Duplicate set of logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <motion.div
            key={`logo-2-${index}`}
            className="flex-shrink-0 mx-8 py-4"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
          >
            <a 
              href={logo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-all duration-500 hover:drop-shadow-lg"
            >
              <div className="relative w-40 h-24 rounded-md shadow-md overflow-hidden bg-white p-2">
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
