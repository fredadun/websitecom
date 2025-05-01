'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  // Force light theme on all clients
  useEffect(() => {
    // Remove dark mode class and set light color scheme
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
    
    // Clear any saved theme preference
    localStorage.removeItem('theme');
  }, []);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      forcedTheme="light" // Force light theme
      storageKey="theme"
      enableSystem={false} // Disable system preference
      enableColorScheme={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
