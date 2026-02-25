'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-16">
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
            Blog
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Coming soon: Stories, insights, and articles about self-reflection and personal growth.
          </p>
        </div>

        {/* Take Test Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary-indigo/20 to-primary-violet/20 border border-primary-indigo/30 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Discover Your Purity Score?
            </h2>
            <p className="text-slate-300 mb-6">
              Take our 100-question Rice Purity Test and get instant results. Completely anonymous and free.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-indigo/40 hover:scale-105 transform transition-all"
            >
              Take the Test
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
