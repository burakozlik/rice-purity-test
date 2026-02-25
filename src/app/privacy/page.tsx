import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Data Protection & Confidentiality',
  description: 'How we protect your privacy on the Rice Purity Test. Learn about anonymous data handling, cookies, and our commitment to keeping your information secure and confidential.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary-indigo hover:text-primary-violet transition-colors mb-6 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-400">
            Your privacy is important to us. This policy explains how we handle your data.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Overview</h2>
            <p className="text-lg font-semibold text-primary-indigo mb-4">
              We do not collect, store, or transmit your personal quiz responses.
            </p>
            <p>
              The Rice Purity Test is designed with privacy as a core principle. Your quiz answers are processed entirely in your browser and never sent to our servers unless you voluntarily choose to share your results on social media.
            </p>
          </section>

          {/* How We Handle Your Data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. How We Handle Your Data</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Quiz Responses:</span> Your answers are not collected, stored, or transmitted. They exist only in your browser during your session.</li>
              <li><span className="font-semibold">Quiz Score:</span> Your score is calculated locally in your browser. We do not store your score on our servers.</li>
              <li><span className="font-semibold">Shared Results:</span> If you choose to share your score on social media, only your score number (0-100) is shared via URL. No personal information is used.</li>
              <li><span className="font-semibold">No Cookies:</span> We do not use cookies to track your activity or store your preferences.</li>
            </ul>
          </section>

          {/* Personal Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Personal Information</h2>
            <p>
              We do not collect personal information such as your name, email address, phone number, or any identifying data when you use the Rice Purity Test. You can complete the quiz entirely anonymously.
            </p>
          </section>

          {/* Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Analytics & Monitoring</h2>
            <p>
              We may use website analytics tools (such as Google Analytics) to understand how visitors use our site. These tools collect aggregated, non-personal data such as:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Number of visitors</li>
              <li>Pages visited</li>
              <li>Time spent on the site</li>
              <li>General geographic information (country-level only)</li>
            </ul>
            <p className="mt-4">
              This data is used solely to improve our website experience. It does not identify you personally and cannot be linked to your quiz responses.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We use the following third-party services, which have their own privacy policies:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><span className="font-semibold">Google Analytics:</span> Helps us understand site usage patterns. For questions, please <a href="/contact" className="text-primary-indigo hover:text-primary-violet">contact us</a>.</li>
              <li><span className="font-semibold">Hosting Provider:</span> Your connection data may be logged by our hosting provider per standard server practices.</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              Since we do not collect personal data, there is typically nothing to access, modify, or delete. However, you can:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Clear your browser data/cookies at any time</li>
              <li>Disable analytics by installing an ad blocker or analytics blocker</li>
              <li>For analytics questions, please <a href="/contact" className="text-primary-indigo hover:text-primary-violet">contact us</a></li>
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security</h2>
            <p>
              We maintain industry-standard security practices to protect our website from unauthorized access and misuse. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Children&apos;s Privacy</h2>
            <p>
              This Service is not intended for users under 18 years of age. We do not knowingly collect data from minors. If you are under 18, please do not use this site.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Modified&quot; date. Your continued use of the Service following such modifications constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-4">
              <a href="mailto:ricepurtytest@gmail.com" className="text-primary-indigo hover:text-primary-violet transition-colors font-semibold">
                ricepurtytest@gmail.com
              </a>
            </p>
          </section>

          {/* Last Updated */}
          <section className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-400">
              Last updated: February 23, 2026
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
