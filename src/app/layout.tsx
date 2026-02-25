import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Rice Purity Test 2026 - 100 Question Quiz With Score',
  description:
    'Take the official Rice Purity Test with 100 carefully crafted questions. Get your instant purity score, see how you rank, and share results with friends. Fun self-assessment quiz for college students.',
  keywords: ['rice purity test', 'purity test quiz', 'college quiz', '100 question test', 'purity score', 'self-assessment quiz', 'rice university quiz'],
  authors: [{ name: 'Rice Purity Test' }],
  creator: 'Rice Purity Test',
  publisher: 'Rice Purity Test',
  openGraph: {
    title: 'Rice Purity Test - 100 Question Quiz',
    description: 'Test your purity score with 100 engaging questions. Instant results, anonymous & shareable. Join thousands of college students.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com',
    siteName: 'Rice Purity Test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test - Get Your Purity Score',
    description: 'Take the 100-question Rice Purity Test. Anonymous, shareable, and instant results.',
    creator: '@RicePurityTest',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

import Header from '@/components/Header';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Quiz',
      item: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com'}/quiz`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Results',
      item: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com'}/result`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-slate-950 text-slate-100" suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
