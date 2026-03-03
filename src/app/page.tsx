import { faqSchema } from '../lib/faqSchema';
import PurityTestFlow from '@/components/PurityTestFlow';

export const metadata = {
  title: 'The Official Rice Purity Test 2026 [updated]',
  description: 'Take the official Rice Purity Test with 100 questions. Get your score instantly, see how you rank, and share with friends. Fun college quiz!',
  applicationName: 'Rice Purity Test 2026 Updated',
  metadataBase: new URL('https://ricepurtytest.com'),
  openGraph: {
    title: 'The Official Rice Purity Test 2026 [updated]',
    description: 'Take the official Rice Purity Test with 100 questions. Get your score instantly, see how you rank, and share with friends. Fun college quiz!',
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
  description: 'Take the official Rice Purity Test with 100 questions. Get your score instantly, see how you rank, and share with friends. Fun college quiz!',
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
