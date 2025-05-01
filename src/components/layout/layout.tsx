'use client';

import React from 'react';
import Header from './header';
import Footer from './footer';
import { AnimatedBackground } from '../ui/animated-background';

export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 flex flex-col relative">
      <AnimatedBackground />
      <div className="flex flex-col min-h-screen relative z-10">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
