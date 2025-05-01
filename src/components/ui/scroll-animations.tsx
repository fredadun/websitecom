'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animate, inView, stagger } from 'framer-motion/dom';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position on page change
    window.scrollTo(0, 0);

    // Initialize animations
    setupScrollAnimations();

    // Re-initialize animations when pathname changes
  }, [pathname]);

  const setupScrollAnimations = () => {
    // Stagger fade-in for list items
    inView('.animate-stagger-list', (info) => {
      const element = info.target as HTMLElement;
      animate(
        element.querySelectorAll('li'),
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.5 }
      );
      return () => {};
    });

    // Fade in for sections
    inView('.animate-fade-in', (info) => {
      const element = info.target as HTMLElement;
      animate(
        element,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: 0.2 }
      );
      return () => {};
    });

    // Slide in from left
    inView('.animate-slide-left', (info) => {
      const element = info.target as HTMLElement;
      animate(
        element,
        { opacity: [0, 1], x: [-50, 0] },
        { duration: 0.6 }
      );
      return () => {};
    });

    // Slide in from right
    inView('.animate-slide-right', (info) => {
      const element = info.target as HTMLElement;
      animate(
        element,
        { opacity: [0, 1], x: [50, 0] },
        { duration: 0.6 }
      );
      return () => {};
    });

    // Scale up animation
    inView('.animate-scale', (info) => {
      const element = info.target as HTMLElement;
      animate(
        element,
        { opacity: [0, 1], scale: [0.9, 1] },
        { duration: 0.5 }
      );
      return () => {};
    });

    // Count up animation for numbers
    inView('.animate-count', (info) => {
      const element = info.target as HTMLElement;
      const countElements = element.querySelectorAll('.count-value');
      countElements.forEach((el: Element) => {
        const value = parseInt(el.getAttribute('data-value') || '0', 10);
        const startValue = 0;
        const duration = 1500; // ms
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const easeOutQuad = (t: number) => t * (2 - t);
        
        let frame = 0;
        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          const currentValue = Math.round(startValue + (value - startValue) * progress);
          
          if (el instanceof HTMLElement) {
            el.innerText = currentValue.toString();
          }
          
          if (frame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
      });
      return () => {};
    });
  };

  return null;
}
