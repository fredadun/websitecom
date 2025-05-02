'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  MailIcon, 
  CalendarIcon, 
  ClipboardIcon, 
  MapPinIcon, 
  PhoneIcon, 
  LinkedinIcon, 
  CheckIcon, 
  ChevronDownIcon,
  CheckCircleIcon
} from 'lucide-react';

const Contact = () => {
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Form field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [aiInterested, setAiInterested] = useState(false);
  const [description, setDescription] = useState('');
  const [consent, setConsent] = useState(false);
  
  // Handle technology checkbox changes
  const handleTechnologyChange = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech]);
    }
  };
  const contactOptions = [
    {
      icon: <MailIcon className="h-6 w-6" />,
      heading: 'Email Me',
      content: 'Send me a detailed message about your project requirements or questions.',
      cta: 'fredadun@hotmail.com',
      detail: 'I respond to all inquiries within 24-48 business hours.'
    },
    {
      icon: <CalendarIcon className="h-6 w-6" />,
      heading: 'Schedule a Consultation',
      content: 'Book a 30-minute consultation to discuss your Microsoft implementation challenges.',
      cta: 'Book Consultation',
      detail: 'Video or phone call options available'
    },
    {
      icon: <ClipboardIcon className="h-6 w-6" />,
      heading: 'Project Inquiry',
      content: 'Fill out the detailed project inquiry form below to help me understand your needs better.',
      detail: 'For faster and more targeted responses'
    }
  ];

  const testimonials = [
    {
      quote: "Fred's technical expertise in Dynamics 365 transformed our implementation approach. His architecture solutions addressed challenges we'd been struggling with for months.",
      attribution: 'IT Director, Financial Services'
    },
    {
      quote: 'The integration architecture Fred designed has been rock-solid, connecting our disparate systems seamlessly and providing the foundation for our digital transformation.',
      attribution: 'CTO, Energy Sector'
    },
    {
      quote: "Beyond technical skills, Fred's ability to translate complex technical concepts for our business stakeholders was invaluable. He bridges the gap between IT and business effectively.",
      attribution: 'Program Manager, Retail'
    }
  ];

  const faqs = [
    {
      q: 'What types of projects do you typically work on?',
      a: 'I specialize in complex Microsoft implementations, particularly Dynamics 365 and Azure solutions that require deep technical expertise and enterprise architecture experience. My projects typically involve system integration, data migration, custom development, and architecture design for medium to large enterprises.'
    },
    {
      q: 'Do you work with clients outside the UK?',
      a: 'Yes, I work with clients globally. Most services can be delivered remotely, with travel arranged for kickoffs, workshops, or critical implementation phases when necessary.'
    },
    {
      q: 'What is your approach to project management?',
      a: 'I typically integrate with your existing project management frameworks, whether Agile, Waterfall, or hybrid approaches. For clients without established methodologies, I recommend a tailored approach based on project scale, complexity, and organizational culture.'
    },
    {
      q: 'Can you work with our internal IT team?',
      a: 'Absolutely. I often collaborate with internal teams, providing specialized expertise while supporting knowledge transfer and capacity building. This collaborative approach ensures both project success and long-term sustainability.'
    },
    {
      q: 'How do you approach AI integration in projects?',
      a: 'I take a practical, value-focused approach to AI. Rather than implementing AI for its own sake, I identify specific areas where AI capabilities can enhance existing systems or solve particular business challenges. As AI is an emerging field, I focus on responsible implementation with clear business outcomes.'
    }
  ];

  const projectTypes = [
    'Dynamics 365 Implementation', 
    'Azure Cloud Architecture', 
    'Power Platform Development', 
    'System Integration', 
    'Technical Assessment/Review', 
    'Digital Transformation Strategy', 
    'AI Enhancement of Existing System', 
    'Other'
  ];

  const technologies = [
    'Dynamics 365 Sales', 
    'Dynamics 365 Customer Service', 
    'Dynamics 365 Field Service', 
    'Dynamics 365 Finance & Operations', 
    'Azure Cloud Services', 
    'Power Apps', 
    'Power Automate', 
    'Power BI', 
    'SharePoint', 
    'Teams', 
    'Other'
  ];

  const timelines = [
    'Immediate (within 1 month)', 
    'Short-term (1-3 months)', 
    'Medium-term (3-6 months)', 
    'Long-term (6+ months)', 
    'Exploratory/No definite timeline'
  ];

  const budgetRanges = [
    'Under £10,000', 
    '£10,000 - £25,000', 
    '£25,000 - £50,000', 
    '£50,000 - £100,000', 
    '£100,000+', 
    'Not yet determined'
  ];

  const engagementModels = [
    {
      title: 'Project-Based Consulting',
      description: 'Fixed-scope implementation or advisory projects'
    },
    {
      title: 'Retainer Services',
      description: 'Ongoing technical architecture and advisory support'
    },
    {
      title: 'Technical Assessment',
      description: 'In-depth review of existing implementations with recommendations'
    },
    {
      title: 'Specialized Implementation',
      description: 'Focused work on specific technical challenges'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
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
            <span className="relative z-10">Let&apos;s Discuss Your Project</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-500/20 -z-10 transform -rotate-1"></span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Reach out to explore how we can transform your Microsoft implementation together
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
            I&apos;m available to discuss your Microsoft technology challenges and how my expertise in Dynamics 365, 
            Azure, Power Platform, and emerging AI capabilities can help transform your implementation. 
            Whether you&apos;re planning a new project, facing challenges with an existing one, or simply want 
            to explore possibilities, I&apos;d be delighted to connect.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 h-full group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 transform transition-transform group-hover:scale-110 duration-300">{option.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {option.heading}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{option.content}</p>
              {option.cta && (
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {option.heading === 'Schedule a Consultation' ? (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md font-medium">
                      {option.cta}
                    </button>
                  ) : option.cta}
                </div>
              )}
              <p className="text-sm text-slate-500 dark:text-slate-400">{option.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-slate-200 dark:border-slate-700 p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative inline-block">
            <span className="relative z-10">Tell Me About Your Project</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="h-12 w-12 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 dark:text-green-400 mb-4">
                Thank you for reaching out. I&apos;ll respond to your inquiry within 24-48 business hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/xrbqerjj" 
              method="POST" 
              className="space-y-8"
              onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitError(null);
                
                try {
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  
                  // Add selected technologies as a single string
                  if (selectedTechnologies.length > 0) {
                    formData.set('technologies', selectedTechnologies.join(', '));
                  }
                  
                  const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                      'Accept': 'application/json'
                    }
                  });
                  
                  if (response.ok) {
                    setIsSubmitted(true);
                    // Reset form fields
                    setName('');
                    setEmail('');
                    setPhone('');
                    setCompany('');
                    setProjectType('');
                    setSelectedTechnologies([]);
                    setTimeline('');
                    setBudget('');
                    setAiInterested(false);
                    setDescription('');
                    setConsent(false);
                  } else {
                    const data = await response.json();
                    setSubmitError(data.error || 'Something went wrong. Please try again.');
                  }
                } catch {
                  setSubmitError('Network error. Please check your connection and try again.');
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Phone Number
                </label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company Name
                </label>
                <input 
                  id="company"
                  name="company"
                  type="text" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Type
                </label>
                <select 
                  id="projectType"
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Current Microsoft Technologies
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map(tech => (
                    <label key={tech} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id={`tech-${tech}`}
                        name="technologies"
                        value={tech}
                        checked={selectedTechnologies.includes(tech)}
                        onChange={() => handleTechnologyChange(tech)}
                        className="rounded border-slate-300 dark:border-slate-600 text-blue-600" 
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Timeline
                </label>
                <select 
                  id="timeline"
                  name="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a timeline</option>
                  {timelines.map(t => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Budget Range
                </label>
                <select 
                  id="budget"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input 
                    id="aiInterested"
                    name="aiInterested"
                    type="checkbox" 
                    checked={aiInterested}
                    onChange={(e) => setAiInterested(e.target.checked)}
                    className="rounded border-slate-300 dark:border-slate-600 text-blue-600" 
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    I&apos;m interested in exploring AI capabilities as part of this project
                  </span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Description
                </label>
                <textarea 
                  id="description"
                  name="description"
                  rows={6} 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of your project, challenges, and goals" 
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

              </div>
            </div>

            {/* Privacy & Submit */}
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input 
                  id="consent"
                  name="consent"
                  type="checkbox" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required 
                  className="rounded border-slate-300 dark:border-slate-600 text-blue-600" 
                />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  I consent to having this website store my submitted information so they can respond to my inquiry.
                </span>
              </label>
              {submitError && (
                <div className="text-red-500 text-sm mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  {submitError}
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center shadow-sm hover:shadow-md font-medium transform hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                I&apos;ll respond to your inquiry within 24-48 business hours.
              </p>
            </div>
          </form>
          )}
        </motion.div>

        {/* Location Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Based In</h2>
          <div className="flex items-center justify-center text-slate-600 dark:text-slate-300">
            <MapPinIcon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
            <p>
              21 Parchment Close
              <br />
              Mitcham, CR4 4FN
              <br />
              London, UK
            </p>
          </div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            While I&apos;m based in London, I work with clients across the UK and internationally. 
            Most services can be delivered remotely, with on-site visits arranged as needed.
          </p>
        </motion.div>

        {/* Availability Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 mb-16 shadow-md border border-slate-100 dark:border-slate-700"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center relative inline-block">
            <span className="relative z-10">Current Availability</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-8">
            I&apos;m currently available for new projects starting June 2024. My typical engagement models include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, index) => (
              <div key={index} className="flex items-start p-3 rounded-lg hover:bg-white dark:hover:bg-slate-700/50 transition-colors duration-300 group">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
                  <CheckIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{model.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center relative inline-block">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.q}
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center relative inline-block">
            <span className="relative z-10">What Clients Say</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group hover:-translate-y-1 transform"
              >
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-2 text-4xl text-blue-300 dark:text-blue-700 font-serif">&ldquo;</div>
                  <p className="text-slate-600 dark:text-slate-300 italic mb-4 relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-4xl text-blue-300 dark:text-blue-700 font-serif">&rdquo;</div>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">
                  {testimonial.attribution}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            <span className="relative z-10">Ready to Transform Your Microsoft Implementation?</span>
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-500/20 -z-10"></span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/fred-adun-5994488/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium transform hover:-translate-y-1"
            >
              <LinkedinIcon className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a 
              href="tel:+447477295070" 
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md font-medium transform hover:-translate-y-1"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              +44 7477 295070
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
