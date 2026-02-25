import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rice Purity Test Blog - Insights & Articles',
  description: 'Explore articles about the Rice Purity Test, self-assessment psychology, college culture, and what your purity score means. Read expert insights and perspectives.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
