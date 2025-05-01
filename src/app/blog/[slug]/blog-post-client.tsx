'use client';

import React from 'react';
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

// Import the blog post type
import { BlogPost } from './types';

// Client component to render the blog post
export function BlogPostClient({ post }: { post: BlogPost }) {
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
            {post.categories.map(category => (
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
                {post.relatedPosts.map(relatedPost => (
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
