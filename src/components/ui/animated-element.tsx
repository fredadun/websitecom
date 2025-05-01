'use client';

import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'bounce' | 'flip';

interface AnimatedElementProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.2,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const variants = {
    hidden: {
      opacity: 0,
      y: variant === 'fadeInUp' ? 20 : variant === 'fadeInDown' ? -20 : 0,
      x: variant === 'fadeInLeft' ? 20 : variant === 'fadeInRight' ? -20 : 0,
      scale: variant === 'zoomIn' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  // Special variants
  const bounceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: [0.8, 1.1, 1],
      transition: {
        duration: duration * 1.2,
        delay,
        times: [0, 0.7, 1],
        ease: 'easeOut',
      },
    },
  };

  const flipVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  // Select the appropriate variant
  const selectedVariant = 
    variant === 'bounce' ? bounceVariants : 
    variant === 'flip' ? flipVariants : 
    variants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
