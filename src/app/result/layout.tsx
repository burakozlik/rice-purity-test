import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Score | Rice Purity Test',
  description: 'View your Rice Purity Test score. Share with friends and compare.',
  robots: 'noindex, follow', // Result pages are user-specific, don't index
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
