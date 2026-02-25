import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Support for Rice Purity Test',
  description: 'Questions or feedback about the Rice Purity Test? Contact us directly. Our support team responds within 24-48 hours to all inquiries.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
