'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SearchIcon, 
  ClockIcon, 
  CalendarIcon, 
  ChevronRightIcon, 
  MessageSquareIcon, 
  LinkedinIcon 
} from 'lucide-react';

type Category = 'all' | 'dynamics-365' | 'azure' | 'power-platform' | 'integration' | 'solution-design' | 'implementation' | 'ai' | 'leadership';

const Blog = () => {
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
    title: 'Domain-Driven Design in Dynamics 365: Building More Maintainable Solutions',
    excerpt: 'How applying DDD principles can transform your approach to Dynamics 365 implementations, creating more business-aligned and maintainable solutions.',
    image: '/images/blog/blog-1.jpg',
    readingTime: '8 min read',
    date: 'March 15, 2023',
    categories: ['dynamics-365', 'solution-design'] as Category[]
  };

  const articles = [
    {
      title: 'Implementing Domain-Driven Design in Dynamics 365',
      excerpt: 'Learn how to apply DDD principles to create more maintainable and business-aligned Dynamics 365 solutions.',
      image: '/images/blog/blog-2.jpg',
      readingTime: '7 min read',
      date: 'May 15, 2023',
      categories: ['dynamics-365', 'solution-design'] as Category[]
    },
    {
      title: 'Azure Integration Patterns for Enterprise Applications',
      excerpt: 'A deep dive into event-driven architecture and integration patterns for complex enterprise systems on Azure.',
      image: '/images/blog/blog-3.jpg',
      readingTime: '9 min read',
      date: 'April 22, 2023',
      categories: ['azure', 'integration'] as Category[]
    },
    {
      title: 'Power Platform Governance: Balancing Innovation and Control',
      excerpt: 'Strategies for implementing effective governance that enables innovation while maintaining necessary controls.',
      image: '/images/blog/blog-4.jpg',
      readingTime: '6 min read',
      date: 'March 8, 2023',
      categories: ['power-platform', 'leadership'] as Category[]
    },
    {
      title: 'My Initial Explorations with Copilot for Dynamics 365',
      excerpt: "First impressions and potential use cases for Microsoft's AI assistant in Dynamics 365 implementations.",
      image: '/images/blog/blog-5.jpg',
      readingTime: '5 min read',
      date: 'June 2, 2023',
      categories: ['dynamics-365', 'ai'] as Category[]
    },
    {
      title: 'Building Resilient Azure Architectures: Lessons from the Field',
      excerpt: 'Real-world experiences and best practices for creating fault-tolerant cloud architectures that stand up to unexpected challenges.',
      image: '/images/blog/blog-6.jpg',
      readingTime: '8 min read',
      date: 'February 15, 2023',
      categories: ['azure', 'implementation'] as Category[]
    },
    {
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
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-display-xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            <span className="relative z-10">Insights & Perspectives</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-500/20 -z-10 transform -rotate-1"></span>
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
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden group">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-96 relative">
                <div className="h-64 w-full md:h-full relative overflow-hidden">
                  <Image 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {featuredArticle.readingTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
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
                  <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    Read more
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery} 
                  onChange={e => setSearchQuery(e.target.value)} 
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 hover:shadow-md" 
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <select 
                value={selectedCategory} 
                onChange={e => setSelectedCategory(e.target.value as Category)} 
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 hover:shadow-md"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden group h-full flex flex-col"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {article.readingTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.categories.map(category => (
                      <span 
                        key={category} 
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {categories.find(c => c.id === category)?.label}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    Read more
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 rounded-xl p-8 text-center mb-16 shadow-md border border-slate-100 dark:border-slate-700"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 inline-block relative">
            <span className="relative z-10">Stay Updated</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Subscribe to receive notifications when new articles are published
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md font-medium"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>

        {/* Suggest Topic CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 inline-block relative">
            <span className="relative z-10">Have a Topic in Mind?</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Is there a specific Microsoft technology topic you&apos;d like me to cover? 
            Or perhaps you&apos;re facing a particular implementation challenge?
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md font-medium"
            >
              <MessageSquareIcon className="h-5 w-5 mr-2" />
              Suggest a Topic
            </a>
            <a 
              href="https://www.linkedin.com/in/fred-adun-5994488/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md font-medium"
            >
              <LinkedinIcon className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
