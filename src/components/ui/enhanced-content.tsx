'use client';

import React, { ReactNode, ReactElement, JSXElementConstructor } from 'react';
import { motion } from 'framer-motion';

interface EnhancedContentProps {
  children: ReactNode;
  className?: string;
}

// Define a more specific type for React elements with props we care about
type ReactElementWithProps = ReactElement<{
  className?: string;
  children?: ReactNode;
  alt?: string;
  [key: string]: unknown;
}, string | JSXElementConstructor<unknown>>;

/**
 * EnhancedContent component improves the formatting and visual presentation
 * of content within motion components, particularly for case studies and project pages.
 */
export const EnhancedContent: React.FC<EnhancedContentProps> = ({
  children,
  className = '',
}) => {
  // Process children to enhance specific elements
  const enhanceChildren = (children: ReactNode): ReactNode => {
    if (!children) return null;

    // Handle React elements
    if (React.isValidElement(children)) {
      const child = children as ReactElementWithProps;
      const childClassName = child.props.className || '';
      
      // Apply specific enhancements based on element type
      if (child.type === 'h2') {
        return React.cloneElement(child, {
          className: `text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center ${childClassName}`,
          children: (
            <>
              <span className="w-8 h-1 bg-blue-500 mr-4 rounded-full hidden md:block"></span>
              {child.props.children}
            </>
          ),
        });
      }
      
      if (child.type === 'h3') {
        return React.cloneElement(child, {
          className: `text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4 mt-8 ${childClassName}`,
          children: child.props.children,
        });
      }
      
      if (child.type === 'p') {
        return React.cloneElement(child, {
          className: `text-slate-600 dark:text-slate-300 mb-6 leading-relaxed ${childClassName}`,
          children: child.props.children,
        });
      }
      
      if (child.type === 'ul' || child.type === 'ol') {
        return React.cloneElement(child, {
          className: `mb-6 pl-6 space-y-2 ${childClassName}`,
          children: React.Children.map(child.props.children, (listItem) => {
            if (React.isValidElement(listItem)) {
              const listItemEl = listItem as ReactElementWithProps;
              
              if (listItemEl.type === 'li') {
                return React.cloneElement(listItemEl, {
                  className: `text-slate-600 dark:text-slate-300 leading-relaxed ${listItemEl.props.className || ''}`,
                  children: listItemEl.props.children,
                });
              }
            }
            return listItem;
          }),
        });
      }
      
      if (child.type === 'img') {
        return (
          <div className="my-8 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
            {React.cloneElement(child, {
              className: `w-full ${childClassName}`,
              alt: child.props.alt || 'Case study image',
            })}
            {child.props.alt && (
              <div className="bg-slate-50 dark:bg-slate-800 py-3 px-4 text-sm text-slate-600 dark:text-slate-400 text-center italic">
                {child.props.alt}
              </div>
            )}
          </div>
        );
      }
      
      if (child.type === 'blockquote') {
        return React.cloneElement(child, {
          className: `border-l-4 border-blue-500 pl-6 py-1 my-6 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg ${childClassName}`,
          children: React.Children.map(child.props.children, (blockquoteChild) => 
            enhanceChildren(blockquoteChild)
          ),
        });
      }
      
      // Recursively process children of this element
      if (child.props.children) {
        const newProps = {...child.props};
        return React.cloneElement(child, {
          ...newProps,
          children: React.Children.map(child.props.children, (nestedChild) => 
            enhanceChildren(nestedChild)
          ),
        });
      }
      
      return child;
    }
    
    // Handle arrays of children
    if (Array.isArray(children)) {
      return children.map((child) => 
        enhanceChildren(child)
      );
    }
    
    // Return as is for primitive types
    return children;
  };

  return (
    <motion.div
      className={`enhanced-content ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {enhanceChildren(children)}
    </motion.div>
  );
};

export default EnhancedContent;
