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
import NewsletterSignup from '../../../components/ui/newsletter-signup';

// Define the page component
export default function BlogPostPage() {
  // Define a type for the blog post
  type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    readingTime: string;
    date: string;
    author: {
      name: string;
      role: string;
      image: string;
    };
    categories: string[];
    content: string;
    relatedPosts?: {
      slug: string;
      title: string;
      excerpt: string;
      image: string;
    }[];
  };

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    // Extract slug from pathname
    const slugMatch = pathname?.match(/\/blog\/([^/]+)/);
    const slug = slugMatch ? slugMatch[1] : null;
    
    if (slug) {
      const foundPost = blogPosts.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        router.push('/blog');
      }
    } else {
      router.push('/blog');
    }
    
    setLoading(false);
  }, [pathname, router]);
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Loading...</p>
        </div>
      </Layout>
    );
  }
  
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Post not found. Redirecting to blog...</p>
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
          
          {/* Newsletter Signup */}
          <div className="mt-16 mb-16">
            <NewsletterSignup 
              variant="blog"
              title="Enjoyed this article?"
              description="Subscribe to receive notifications when new articles on Microsoft technologies, AI integration, and digital transformation are published."
            />
          </div>
          
          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {post.relatedPosts.map((relatedPost: { slug: string; title: string; excerpt: string; image: string; }) => (
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
      
      <h2>Applying DDD Principles to Dynamics 365</h2>
      <p>Here's how you can apply key DDD principles to your Dynamics 365 implementations:</p>
      
      <h3>1. Ubiquitous Language</h3>
      <p>Establish a common language between technical and business stakeholders. This means naming entities, fields, and processes using terminology that business users understand and use in their daily work.</p>
      
      <p><strong>Example:</strong> Instead of generic names like "new_transaction" or "new_process", use domain-specific names like "LoanApplication" or "UnderwritingProcess".</p>
      
      <h3>2. Bounded Contexts</h3>
      <p>Identify distinct business domains within your organization and establish clear boundaries between them. In Dynamics 365, this might mean creating separate solutions or business units for different domains.</p>
      
      <p><strong>Example:</strong> In a financial services organization, you might have separate bounded contexts for Loan Origination, Customer Service, and Collections, each with its own entities, processes, and business rules.</p>
      
      <h3>3. Entities, Value Objects, and Aggregates</h3>
      <p>Model your domain using DDD concepts:</p>
      <ul>
        <li><strong>Entities:</strong> Objects with a distinct identity that persists over time (e.g., Customer, Account)</li>
        <li><strong>Value Objects:</strong> Objects defined by their attributes rather than identity (e.g., Address, PhoneNumber)</li>
        <li><strong>Aggregates:</strong> Clusters of entities and value objects treated as a single unit (e.g., Order and OrderLines)</li>
      </ul>
      
      <p>In Dynamics 365, entities naturally map to CRM entities, while value objects might be implemented as complex field types or related entities.</p>
      
      <h3>4. Domain Services</h3>
      <p>Implement business operations that don't naturally belong to a single entity as domain services. In Dynamics 365, these might be implemented as plugins, actions, or custom workflow activities.</p>
      
      <p><strong>Example:</strong> A "Loan Approval Service" might evaluate a loan application against multiple criteria and update various entities as part of the approval process.</p>
      
      <h2>Practical Implementation Strategies</h2>
      
      <h3>Solution Architecture</h3>
      <p>Organize your Dynamics 365 solutions around bounded contexts rather than technical layers. This might mean having separate solutions for different business domains, each containing the entities, forms, views, and business logic relevant to that domain.</p>
      
      <h3>Custom Development</h3>
      <p>When developing custom code (plugins, JavaScript, etc.), organize it around domain concepts rather than technical functions. For example, instead of having a generic "ValidationPlugin" that handles validation for multiple entities, create domain-specific plugins like "LoanApplicationValidation".</p>
      
      <h3>Business Process Flows</h3>
      <p>Use Business Process Flows to explicitly model domain processes and ensure they align with how business users actually work. This makes the system more intuitive and reduces the need for extensive training.</p>
      
      <h2>Case Study: Reimagining a Financial Services Implementation</h2>
      <p>I recently worked with a financial services client to reimagine their Dynamics 365 implementation using DDD principles. The original implementation was organized around technical concepts (entities, workflows, etc.) and suffered from poor user adoption and maintenance challenges.</p>
      
      <p>By reorganizing the solution around domain concepts (Loan Origination, Underwriting, Servicing, etc.), we were able to:</p>
      <ul>
        <li>Improve user adoption by aligning the system with how users actually work</li>
        <li>Reduce development time for new features by 30%</li>
        <li>Decrease the number of bugs by 45% through clearer domain boundaries</li>
        <li>Make the system more adaptable to changing business requirements</li>
      </ul>
      
      <h2>Challenges and Considerations</h2>
      <p>While DDD can significantly improve your Dynamics 365 implementations, there are some challenges to consider:</p>
      
      <h3>Platform Constraints</h3>
      <p>Dynamics 365 has certain platform constraints that may limit your ability to fully implement DDD concepts. For example, the entity model is relatively fixed, and there are limitations on how you can implement value objects.</p>
      
      <h3>Legacy Systems</h3>
      <p>If you're working with an existing implementation, it may be challenging to refactor it according to DDD principles. In such cases, consider applying DDD to new features or areas undergoing significant changes.</p>
      
      <h3>Team Skills</h3>
      <p>DDD requires a different mindset and skill set than traditional Dynamics 365 development. Invest in training and mentoring to help your team adopt DDD principles.</p>
      
      <h2>Conclusion</h2>
      <p>Domain-Driven Design offers a powerful approach to building more maintainable and business-aligned Dynamics 365 solutions. By focusing on the business domain and using it to inform your technical implementation, you can create systems that better meet user needs and adapt more easily to changing requirements.</p>
      
      <p>In my experience, the initial investment in understanding and modeling the domain pays significant dividends in terms of reduced maintenance costs, improved user adoption, and greater business agility.</p>
      
      <p>I'd love to hear about your experiences applying DDD to Dynamics 365 or other Microsoft technologies. Feel free to reach out with questions or share your own insights.</p>
    `,
    relatedPosts: [
      {
        slug: 'azure-integration-patterns',
        title: 'Azure Integration Patterns for Enterprise Applications',
        excerpt: 'A deep dive into event-driven architecture and integration patterns for complex enterprise systems on Azure.',
        image: '/images/blog/blog-3.jpg'
      },
      {
        slug: 'microservices-vs-monoliths',
        title: 'Microservices vs. Monoliths: Making the Right Choice',
        excerpt: 'A balanced perspective on when to choose microservices architecture and when a monolithic approach might be better.',
        image: '/images/blog/blog-7.jpg'
      }
    ]
  },
  // Additional blog posts would be defined here
];
