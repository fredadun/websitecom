'use client';

import Link from 'next/link';
import { MailIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-blue-500 mb-4 inline-block">
              Fred Adun
            </Link>
            <p className="text-slate-400 mt-4 max-w-md">
              AI-Powered Microsoft Solutions Architect specializing in Dynamics 365, Azure, and Power Platform implementations with over 12 years of experience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/fred-adun-5994488/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/fredadun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/fredadun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a 
                href="mailto:fredadun@hotmail.com" 
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-blue-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#blog" className="text-slate-400 hover:text-blue-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-4">Subscribe to receive updates on Microsoft technologies and AI innovations.</p>
            <form className="space-y-2">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Fred Adun. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="/privacy-policy" 
              className="text-sm text-slate-500 hover:text-blue-500 transition-colors mr-6"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="text-sm text-slate-500 hover:text-blue-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
