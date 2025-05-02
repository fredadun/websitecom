'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  ClockIcon, 
  LinkedinIcon, 
  TwitterIcon,
  BookmarkIcon,
  ThumbsUpIcon,
  MessageSquareIcon
} from 'lucide-react';

import Layout from '../../../components/layout/layout';

// This would typically come from a CMS or API
const blogPosts = [
  {
    slug: 'domain-driven-design-dynamics-365',
    title: 'Domain-Driven Design in Dynamics 365: Building More Maintainable Solutions',
    excerpt: 'How applying DDD principles can transform your approach to Dynamics 365 implementations, creating more business-aligned and maintainable solutions.',
    coverImage: '/images/blog/blog-1.jpg',
    readingTime: '8 min read',
    date: 'March 15, 2023',
    author: {
      name: 'Fred Adun',
      role: 'Microsoft Solutions Architect',
      image: '/images/hero/hero-profile.jpg'
    },
    categories: ['dynamics-365', 'solution-design'],
    content: `
      <h2>Introduction to Domain-Driven Design</h2>
      <p>Domain-Driven Design (DDD) is an approach to software development that focuses on understanding the business domain and using that understanding to inform system design. When applied to Dynamics 365 implementations, it can significantly improve the maintainability and business alignment of your solutions.</p>
      
      <p>In my experience working with large enterprises across various industries, I've found that many Dynamics 365 implementations suffer from a disconnect between the technical implementation and the business domain. This leads to solutions that are difficult to maintain, extend, and align with evolving business needs.</p>
      
      <h2>The Problem with Traditional Dynamics 365 Implementations</h2>
      <p>Traditional Dynamics 365 implementations often focus primarily on the technical aspects of the platform, such as entity relationships, forms, views, and workflows. While these are important, they sometimes overshadow the need to deeply understand and model the business domain.</p>
      
      <p>Common issues I've observed include:</p>
      <ul>
        <li>Entities that don't accurately reflect business concepts</li>
        <li>Business logic scattered across plugins, workflows, and JavaScript</li>
        <li>Lack of clear boundaries between different business domains</li>
        <li>Difficulty adapting to changing business requirements</li>
      </ul>
      
      <h2>Applying DDD to Dynamics 365</h2>
      <p>Domain-Driven Design offers several principles that can be applied to Dynamics 365 implementations:</p>
      
      <h3>1. Ubiquitous Language</h3>
      <p>Establish a common language between technical and business teams. This means naming entities, fields, and processes using terminology that business users understand and use in their daily work.</p>
      
      <p>For example, instead of generic names like "Account" and "Contact," use domain-specific terms like "Borrower" or "Underwriter" if those better reflect how the business thinks about these concepts.</p>
      
      <h3>2. Bounded Contexts</h3>
      <p>Identify clear boundaries between different parts of the system. In Dynamics 365, this might mean:</p>
      <ul>
        <li>Creating separate solutions for different business domains</li>
        <li>Using business units to separate concerns</li>
        <li>Implementing clear interfaces between different parts of the system</li>
      </ul>
      
      <h3>3. Aggregates and Entities</h3>
      <p>Model the domain using aggregates (clusters of entities and value objects that change together). In Dynamics 365, this might involve:</p>
      <ul>
        <li>Identifying which entities form natural clusters</li>
        <li>Using relationships appropriately (1:N, N:N)</li>
        <li>Implementing business rules that maintain the integrity of these aggregates</li>
      </ul>
      
      <h3>4. Domain Services</h3>
      <p>Implement complex business operations as domain services. In Dynamics 365, this might involve:</p>
      <ul>
        <li>Custom plugins for complex business logic</li>
        <li>Power Automate flows for business processes</li>
        <li>Custom actions for operations that span multiple entities</li>
      </ul>
      
      <h2>Case Study: Financial Services Implementation</h2>
      <p>I recently worked with a financial services client to reimagine their Dynamics 365 implementation using DDD principles. The original implementation was organized around technical concepts (entities, workflows, etc.) and suffered from poor user adoption and maintenance challenges.</p>
      
      <p>By reorganizing the solution around domain concepts (Loan Origination, Underwriting, Servicing, etc.), we were able to:</p>
      <ul>
        <li>Improve user adoption by aligning the system with how users actually work</li>
        <li>Reduce development time for new features by 40%</li>
        <li>Decrease the number of bugs by creating clearer boundaries between system components</li>
        <li>Enable more effective communication between business and technical teams</li>
      </ul>
      
      <h2>Getting Started with DDD in Dynamics 365</h2>
      <p>If you're interested in applying DDD principles to your Dynamics 365 implementation, here are some steps to get started:</p>
      
      <ol>
        <li>Conduct domain modeling workshops with business stakeholders</li>
        <li>Create a glossary of business terms (ubiquitous language)</li>
        <li>Identify bounded contexts within your organization</li>
        <li>Map existing entities to business concepts</li>
        <li>Refactor your solution architecture to align with domain boundaries</li>
      </ol>
      
      <p>The effort required to implement DDD principles will vary depending on whether you're starting a new implementation or refactoring an existing one. However, the benefits in terms of maintainability, business alignment, and user adoption make it well worth the investment.</p>
    `,
    relatedPosts: [
      {
        slug: 'azure-integration-patterns',
        title: 'Azure Integration Patterns for Enterprise Applications',
        excerpt: 'Explore common integration patterns for connecting Dynamics 365 with other systems using Azure services.',
        image: '/images/blog/blog-2.jpg'
      },
      {
        slug: 'power-platform-governance',
        title: 'Establishing Effective Power Platform Governance',
        excerpt: 'Best practices for managing and governing Power Platform implementations in enterprise environments.',
        image: '/images/blog/blog-3.jpg'
      }
    ]
  }
  // Additional blog posts would be defined here
];

// Define the page component
export default function BlogPostPage() {
  // Define a type for the blog post
  type BlogPost = typeof blogPosts[0];
  
  const router = useRouter();
  const pathname = usePathname();
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    // Extract slug from pathname
    const slug = pathname?.split('/').pop();
    
    if (slug) {
      // Find the blog post with the matching slug
      const foundPost = blogPosts.find(p => p.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        // If no post is found, redirect to the blog index page
        router.push('/blog');
      }
    }
  }, [pathname, router]);
  
  if (!post) {
    return (
      <Layout>
        <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          {/* Title and Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-slate-600 dark:text-slate-400 mb-8 gap-4">
              <div className="flex items-center">
                <Image 
                  src={post.author.image} 
                  alt={post.author.name} 
                  width={40} 
                  height={40} 
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{post.author.name}</p>
                  <p className="text-sm">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center ml-auto sm:ml-4">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.date}</span>
              </div>
              
              <div className="flex items-center ml-4">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.readingTime}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden mb-10 aspect-[16/9]"
          >
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.categories.map((category: string) => (
              <span key={category} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300">
                {category.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
          
          {/* Share */}
          <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/intent/tweet" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <TwitterIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a href="https://www.linkedin.com/in/fred-adun-5994488/" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <BookmarkIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </div>
          </div>
          
          {/* Engagement */}
          <div className="mt-8 flex items-center justify-between">
            <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ThumbsUpIcon className="w-5 h-5 mr-2" />
              <span>Like this article</span>
            </button>
            <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <MessageSquareIcon className="w-5 h-5 mr-2" />
              <span>Leave a comment</span>
            </button>
          </div>
          
          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {post.relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group">
                    <div className="relative rounded-lg overflow-hidden aspect-[16/9] mb-4">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}
