import { faqSchema } from '../lib/faqSchema';
import PurityTestFlow from '@/components/PurityTestFlow';

export const metadata = {
  title: 'Rice Purity Test 2026: Official Score & Meaning Guide',
  description: 'Take the Rice Purity Test 2026 and get your Rice Purity Test score instantly. View score meaning, compare the average score, and check the official 100-question scale.',
  applicationName: 'Rice Purity Test 2026 Updated',
  metadataBase: new URL('https://ricepurtytest.com'),
  openGraph: {
    title: 'Rice Purity Test 2026: Official Score & Meaning Guide',
    description: 'Take the Rice Purity Test 2026 and get your score instantly. View score meaning, compare the average score, and check the official 100-question scale.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ricepurtytest.com',
    siteName: 'Rice Purity Test 2026 Updated',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ricepurtytest.com',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rice Purity Test',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ricepurtytest.com'}/logo.png`,
  description: 'An anonymous self-assessment quiz to measure personal experiences and purity score.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Support',
    email: 'ricepurtytest@gmail.com',
    availableLanguage: 'en',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    ratingCount: '15000',
  },
};


export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PurityTestFlow />
    </>
  );
}
