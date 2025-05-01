'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Improved theme toggle with fallback
  const toggleTheme = () => {
    // Get current theme with fallback checks
    const currentTheme = resolvedTheme || 
      (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    
    // Set the opposite theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update DOM directly for immediate visual feedback
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    
    // Also update the theme in next-themes for persistence
    setTheme(newTheme);
    
    // Force a re-render of Tailwind styles
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 100);
  };

  // Ensure theme is correctly applied on initial load
  useEffect(() => {
    // Set mounted state to avoid hydration mismatch
    setMounted(true);
    
    // Ensure the theme is correctly applied on initial load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, []);

  // Show a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
      >
        <MoonIcon className="h-5 w-5" />
      </button>
    );
  }

  // Determine if dark mode is active with multiple fallbacks
  const isDark = 
    resolvedTheme === 'dark' || 
    document.documentElement.classList.contains('dark') || 
    document.documentElement.style.colorScheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
