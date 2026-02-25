import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Usage Agreement & Guidelines',
  description: 'Review complete terms and conditions for using the Rice Purity Test. Understand user rights, responsibilities, and guidelines for appropriate use of our quiz platform.',
};

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-400">
            Please read these terms carefully before using the Rice Purity Test website.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Rice Purity Test website (the &quot;Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the Service.
            </p>
          </section>

          {/* 2. Age Requirement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Age Requirement</h2>
            <p>
              You must be at least 18 years of age to use this Service. By using the Service, you represent and warrant that you are at least 18 years old and of legal age to form a binding contract with us.
            </p>
          </section>

          {/* 3. Purpose & Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Purpose & Disclaimer</h2>
            <p>
              The Rice Purity Test is provided for entertainment purposes only. It is not a clinical, psychological, or professional assessment of your character, behavior, or personality. The results should not be taken as a definitive statement about who you are or what you will do in the future.
            </p>
            <p className="mt-4">
              We make no claims about the scientific accuracy or validity of this test. The content is presented in a lighthearted manner and should be understood as such.
            </p>
          </section>

          {/* 4. No Professional Advice */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. No Professional Advice</h2>
            <p>
              This Service does not provide medical, legal, financial, psychological, or professional advice of any kind. If you need professional guidance, please consult with a qualified professional in the appropriate field.
            </p>
          </section>

          {/* 5. User Responsibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Responsibility</h2>
            <p>
              You are solely responsible for your use of the Service and your decisions based on the results. You acknowledge that:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Your responses to the quiz are voluntary and self-reported</li>
              <li>You provide truthful and accurate information</li>
              <li>You will not use the Service for any illegal or unauthorized purpose</li>
              <li>You will not attempt to manipulate, hack, or interfere with the Service</li>
              <li>You assume all responsibility for the consequences of your use of the Service</li>
            </ul>
          </section>

          {/* 6. Privacy & Data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Privacy & Data</h2>
            <p>
              We do not collect, store, or process your personal responses. Your quiz answers are processed locally in your browser and are never transmitted to our servers unless you choose to share your results. Please refer to our Privacy Policy for more information.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permissible by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* 8. Modification of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the Service following any modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with applicable law, without regard to conflict of law principles.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:ricepurtytest@gmail.com" className="text-primary-indigo hover:text-primary-violet transition-colors">
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
