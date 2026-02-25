import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Take the Rice Purity Test Quiz - 100 Questions',
  description: 'Answer 100 carefully designed questions to calculate your purity score. Get instant results and share your score with friends. Anonymous and confidential quiz.',
  robots: { index: true, follow: true },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
