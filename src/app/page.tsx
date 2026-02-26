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

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Rice Purity Test - 100 Question Self-Assessment',
  description:
    'A comprehensive 100-question self-assessment quiz measuring personal experiences. Get instant purity score results and share anonymously with friends.',
  numberOfQuestions: 100,
  learningResourceType: 'Quiz',
  educationalLevel: 'College/Adult',
  author: {
    '@type': 'Organization',
    name: 'Rice Purity Test',
  },
  assessment: {
    '@type': 'Assessment',
    name: 'Purity Score Calculation',
    description: 'Calculate purity score as 100 minus number of items experienced',
    maxValue: 100,
    minValue: 0,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    ratingCount: '15000',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  itemListElement: [
    {
      '@type': 'Question',
      name: 'What is the Rice Purity Test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rice Purity Test is a 100-question anonymous self-assessment quiz that measures personal experiences and behaviors. Respondents check off items they have experienced, and the resulting score (100 minus checked items) represents their purity score.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the purity score calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your purity score is calculated as: 100 minus the number of items you checked. The result is a number between 0 (experienced everything) and 100 (experienced nothing).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data private and anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Rice Purity Test is completely anonymous. We do not collect or store personal information. Your responses are only used to calculate your score, which you can optionally share.',
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PurityTestFlow />
    </>
  );
}
