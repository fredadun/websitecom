'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, CheckIcon, AlertCircleIcon } from 'lucide-react';

type NewsletterSignupProps = {
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'blog';
};

export default function NewsletterSignup({
  title = 'Subscribe to my newsletter',
  description = 'Get the latest insights on Microsoft technologies, AI integration, and digital transformation delivered to your inbox.',
  className = '',
  variant = 'default',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConsented, setIsConsented] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setIsSubmitting(true);
    
    // Validate form
    if (!email) {
      setError('Email is required');
      setIsSubmitting(false);
      return;
    }
    
    if (!isConsented) {
      setError('Please consent to receive the newsletter');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Call the newsletter API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Handle specific error cases from the API
        if (data.error) {
          setError(data.error);
        } else {
          throw new Error('Failed to subscribe');
        }
        return;
      }
      
      // Handle the case where the user is already subscribed
      if (data.alreadySubscribed) {
        setIsSuccess(true);
        // You could set a different success message for already subscribed users
      } else {
        // Success for new subscribers
        setIsSuccess(true);
      }
      
      // Reset form
      setEmail('');
      setFirstName('');
      setIsConsented(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Define different variants
  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return 'p-4 max-w-md';
      case 'blog':
        return 'p-6 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 rounded-xl';
      default:
        return 'p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 rounded-xl';
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${getVariantClasses()} ${className}`}
    >
      {isSuccess ? (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
              <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Thank you for subscribing!
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            You&apos;ve been added to my newsletter. Look out for insights on Microsoft technologies, AI integration, and digital transformation in your inbox.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {description}
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  First Name (optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MailIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={isConsented}
                    onChange={(e) => setIsConsented(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <label htmlFor="consent" className="ml-2 text-sm text-slate-600 dark:text-slate-300">
                  I agree to receive newsletter emails and can unsubscribe at any time. See the <a href="/legal/privacy-policy" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Privacy Policy</a> for details.
                </label>
              </div>
              
              {error && (
                <div className="flex items-center text-red-600 dark:text-red-400 text-sm">
                  <AlertCircleIcon className="h-4 w-4 mr-2" />
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
}
