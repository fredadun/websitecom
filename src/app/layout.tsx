import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import "./font-weights.css";
import "./theme.css";
import { Providers } from "./providers";
import StructuredData from "./structured-data";
import ScrollAnimations from "../components/ui/scroll-animations";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Fred Adun - AI-Powered Microsoft Solutions Architect',
  description: 'Transforming businesses with advanced AI integration across Dynamics 365, Azure, and Power Platform with over 12 years of experience.',
  keywords: 'Microsoft Solutions Architect, Dynamics 365, Azure, Power Platform, AI Integration, Digital Transformation, Microsoft Consultant, Fred Adun',
  authors: [{ name: 'Fred Adun' }],
  creator: 'Fred Adun',
  publisher: 'Fred Adun',
  metadataBase: new URL('https://fredadun.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fred Adun - AI-Powered Microsoft Solutions Architect',
    description: 'Transforming businesses with advanced AI integration across Dynamics 365, Azure, and Power Platform with over 12 years of experience.',
    url: 'https://fredadun.com',
    siteName: 'Fred Adun Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fred Adun - AI-Powered Microsoft Solutions Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fred Adun - AI-Powered Microsoft Solutions Architect',
    description: 'Transforming businesses with advanced AI integration across Dynamics 365, Azure, and Power Platform with over 12 years of experience.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Providers>
          {children}
          <StructuredData />
          <ScrollAnimations />
        </Providers>
      </body>
    </html>
  );
}
