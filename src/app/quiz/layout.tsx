import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Official Rice Purity Test 2026 [updated]',
  description: 'Take the official Rice Purity Test with 100 questions. Get your score instantly, see how you rank, and share with friends. Fun college quiz!',
  robots: { index: true, follow: true },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
