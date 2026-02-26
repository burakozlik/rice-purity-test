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
  keywords : [
    "rice purity test",
    "the rice purity test",
    "the official rice purity test",
    "purity rice test",
    "rice purity test score meaning",
    "rice purity test 2024",
    "what is a rice purity test",
    "what is rice purity test",
    "rice purity test score",
    "what is the rice purity test",
    "rice purity test questions",
    "rice purity test average",
    "official rice purity test",
    "thresher rice purity test",
    "rice purity test meaning",
    "rice purity test average score",
    "average rice purity test",
    "rice purity score test",
    "rice purity test scores",
    "ao3 rice purity test",
    "rice purity test 2025",
    "valorant rice purity test",
    "rice purity test original",
    "rice purity test scores meaning",
    "rice purity test average score by age",
    "rice purity test score meanings",
    "average rice purity test score",
    "rice purity test for 14 year olds",
    "rice purity test unblocked",
    "rice purity test free",
    "rice purity test quiz",
    "rice purity test official",
    "rice purity test score scale",
    "tests like the rice purity test",
    "new rice purity test",
    "rice university purity test",
    "overwatch rice purity test",
    "how does the rice purity test work",
    "weighted rice purity test",
    "rice purity test official site",
    "rice purity test results",
    "rice purity test scale",
    "free rice purity test",
    "rice purity test questions list",
    "updated rice purity test",
    "tests like rice purity test",
    "real rice purity test",
    "rice purity test website",
    "rice purity test 2",
    "what is the average rice purity test score",
    "what is a good rice purity test score",
    "mps meaning rice purity test",
    "rice purity test results meaning",
    "rice purity test for teens",
    "rice purity test link",
    "76 rice purity test"
],
  authors: [{ name: 'Rice Purity Test' }],
  creator: 'Rice Purity Test',
   verification: {
    google: "JsUgsGWCYVQzF6rpFH4genbCV91DHo01Po0_bcMSyLo",
  },
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
