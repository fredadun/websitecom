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
    inView('.animate-stagger-list', (element) => {
      const htmlElement = element as HTMLElement;
      animate(
        htmlElement.querySelectorAll('li'),
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.5 }
      );
      return () => {};
    });

    // Fade in for sections
    inView('.animate-fade-in', (element) => {
      const htmlElement = element as HTMLElement;
      animate(
        htmlElement,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: 0.2 }
      );
      return () => {};
    });

    // Slide up animation
    inView('.animate-slide-up', (element) => {
      const htmlElement = element as HTMLElement;
      animate(
        htmlElement,
        { opacity: [0, 1], y: [50, 0] },
        { duration: 0.6 }
      );
      return () => {};
    });

    // Slide in from right
    inView('.animate-slide-in-right', (element) => {
      const htmlElement = element as HTMLElement;
      animate(
        htmlElement,
        { opacity: [0, 1], x: [50, 0] },
        { duration: 0.6 }
      );
      return () => {};
    });

    // Slide in from left
    inView('.animate-slide-in-left', (element) => {
      const htmlElement = element as HTMLElement;
      animate(
        htmlElement,
        { opacity: [0, 1], x: [-50, 0] },
        { duration: 0.6 }
      );
      return () => {};
    });

    // Scale up animation
    inView('.animate-scale-in', (element) => {
      const htmlElement = element as HTMLElement;
      animate(
        htmlElement,
        { opacity: [0, 1], scale: [0.9, 1] },
        { duration: 0.5 }
      );
      return () => {};
    });

    // Stagger fade animation
    inView('.animate-stagger-fade', (element) => {
      const htmlElement = element as HTMLElement;
      const children = Array.from(htmlElement.children);
      animate(
        children,
        { opacity: [0, 1] },
        { delay: stagger(0.1), duration: 0.5 }
      );
      return () => {};
    });

    // Stagger slide animation
    inView('.animate-stagger-slide', (element) => {
      const htmlElement = element as HTMLElement;
      const children = Array.from(htmlElement.children);
      animate(
        children,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.5 }
      );
      return () => {};
    });

    // Count up animation for numbers
    inView('.animate-count', (element) => {
      const htmlElement = element as HTMLElement;
      const countElements = htmlElement.querySelectorAll('.count-value');
      countElements.forEach((el) => {
        const countEl = el as HTMLElement;
        const value = parseInt(countEl.getAttribute('data-value') || '0', 10);
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
          
          countEl.innerText = currentValue.toString();
          
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
