'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  SearchIcon, 
  ClockIcon, 
  CalendarIcon, 
  ChevronRightIcon, 
  MessageSquareIcon, 
  LinkedinIcon 
} from 'lucide-react';

import Layout from '../../components/layout/layout';
import NewsletterSignup from '../../components/ui/newsletter-signup';

type Category = 'all' | 'dynamics-365' | 'azure' | 'power-platform' | 'integration' | 'solution-design' | 'implementation' | 'ai' | 'leadership';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'dynamics-365',
      label: 'Microsoft Dynamics 365',
      count: 12
    },
    {
      id: 'azure',
      label: 'Azure Architecture',
      count: 15
    },
    {
      id: 'power-platform',
      label: 'Power Platform',
      count: 8
    },
    {
      id: 'integration',
      label: 'Integration Patterns',
      count: 6
    },
    {
      id: 'solution-design',
      label: 'Solution Design',
      count: 10
    },
    {
      id: 'implementation',
      label: 'Implementation Best Practices',
      count: 9
    },
    {
      id: 'ai',
      label: 'AI Explorations',
      count: 7
    },
    {
      id: 'leadership',
      label: 'Technical Leadership',
      count: 5
    }
  ];

  const featuredArticle = {
    slug: 'domain-driven-design-dynamics-365',
    title: 'Domain-Driven Design in Dynamics 365: Building More Maintainable Solutions',
    excerpt: 'How applying DDD principles can transform your approach to Dynamics 365 implementations, creating more business-aligned and maintainable solutions.',
    image: '/images/blog/blog-1.jpg',
    readingTime: '8 min read',
    date: 'March 15, 2023',
    categories: ['dynamics-365', 'solution-design'] as Category[]
  };

  const articles = [
    {
      slug: 'domain-driven-design-dynamics-365',
      title: 'Implementing Domain-Driven Design in Dynamics 365',
      excerpt: 'Learn how to apply DDD principles to create more maintainable and business-aligned Dynamics 365 solutions.',
      image: '/images/blog/blog-2.jpg',
      readingTime: '7 min read',
      date: 'May 15, 2023',
      categories: ['dynamics-365', 'solution-design'] as Category[]
    },
    {
      slug: 'azure-integration-patterns',
      title: 'Azure Integration Patterns for Enterprise Applications',
      excerpt: 'A deep dive into event-driven architecture and integration patterns for complex enterprise systems on Azure.',
      image: '/images/blog/blog-3.jpg',
      readingTime: '9 min read',
      date: 'April 22, 2023',
      categories: ['azure', 'integration'] as Category[]
    },
    {
      slug: 'power-platform-governance',
      title: 'Power Platform Governance: Balancing Innovation and Control',
      excerpt: 'Strategies for implementing effective governance that enables innovation while maintaining necessary controls.',
      image: '/images/blog/blog-4.jpg',
      readingTime: '6 min read',
      date: 'March 8, 2023',
      categories: ['power-platform', 'leadership'] as Category[]
    },
    {
      slug: 'copilot-dynamics-365',
      title: 'My Initial Explorations with Copilot for Dynamics 365',
      excerpt: "First impressions and potential use cases for Microsoft's AI assistant in Dynamics 365 implementations.",
      image: '/images/blog/blog-5.jpg',
      readingTime: '5 min read',
      date: 'June 2, 2023',
      categories: ['dynamics-365', 'ai'] as Category[]
    },
    {
      slug: 'resilient-azure-architectures',
      title: 'Building Resilient Azure Architectures: Lessons from the Field',
      excerpt: 'Real-world experiences and best practices for creating fault-tolerant cloud architectures that stand up to unexpected challenges.',
      image: '/images/blog/blog-6.jpg',
      readingTime: '8 min read',
      date: 'February 15, 2023',
      categories: ['azure', 'implementation'] as Category[]
    },
    {
      slug: 'microservices-vs-monoliths',
      title: 'Microservices vs. Monoliths: Making the Right Choice',
      excerpt: 'A balanced perspective on when to choose microservices architecture and when a monolithic approach might be better.',
      image: '/images/blog/blog-7.jpg',
      readingTime: '7 min read',
      date: 'January 10, 2023',
      categories: ['azure', 'solution-design'] as Category[]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.categories.includes(selectedCategory);
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Thoughts on Microsoft technologies, enterprise architecture, and emerging AI applications
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-4xl mx-auto mb-16 text-center dark:prose-invert"
          >
            <p className="text-slate-600 dark:text-slate-300">
              Welcome to my collection of articles and insights on Microsoft technologies, solution architecture, 
              and my explorations in AI. Here, I share practical knowledge from real-world implementations, 
              technical deep dives, and emerging trends that are shaping enterprise solutions.
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Featured Article
            </h2>
            <Link href={`/blog/${featuredArticle.slug}`} className="group">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-96 relative">
                    <div className="h-64 w-full md:h-full relative">
                      <Image 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title} 
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {featuredArticle.date}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {featuredArticle.readingTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{featuredArticle.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {featuredArticle.categories.map(category => (
                          <span 
                            key={category} 
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {categories.find(c => c.id === category)?.label}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                        Read more
                        <ChevronRightIcon className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 justify-between">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full md:w-80 pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                  <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
                </div>
              </div>
              <div className="w-full md:w-auto">
                <select 
                  value={selectedCategory} 
                  onChange={e => setSelectedCategory(e.target.value as Category)} 
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredArticles.map((article, index) => (
                <motion.div 
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${article.slug}`} className="group block h-full">
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden h-full flex flex-col">
                      <div className="relative h-48 w-full">
                        <Image 
                          src={article.image} 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          alt={article.title} 
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                          <span className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {article.readingTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">{article.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.categories.map(category => (
                            <span 
                              key={category} 
                              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                            >
                              {categories.find(c => c.id === category)?.label}
                            </span>
                          ))}
                        </div>
                        <div className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                          Read more
                          <ChevronRightIcon className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center py-12 mb-16"
            >
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                No articles match your current filters.
              </div>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}

          {/* Newsletter Subscription */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <NewsletterSignup 
              title="Stay Updated"
              description="Subscribe to receive notifications when new articles on Microsoft technologies, AI integration, and digital transformation are published."
              className="max-w-3xl mx-auto"
            />
          </motion.div>

          {/* Suggest Topic CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Have a Topic in Mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Is there a specific Microsoft technology topic you&apos;d like me to cover? 
              Or perhaps you&apos;re facing a particular implementation challenge?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <MessageSquareIcon className="h-5 w-5 mr-2" />
                Suggest a Topic
              </Link>
              <a 
                href="https://www.linkedin.com/in/fred-adun-5994488/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
