'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'Is the Rice Purity Test Safe and Anonymous?',
    answer: 'Yes, the Rice Purity Test is generally safe to take and designed to be anonymous. Most reputable versions of the test don\'t ask for your name, email, or any personal details. You simply answer the questions honestly, and your responses aren\'t stored on a server in a way that identifies you.',
  },
  {
    question: 'What is the Rice Purity test for 14-year-olds',
    answer: 'For 14-year-olds, the Rice Purity Test is a lighter, age-appropriate version of the original quiz. It\'s a fun way for teens to reflect on their experiences safely, without mature content meant for older students.',
  },
  {
    question: 'Is 27 a low rice purity score?',
    answer: 'Yes, a score of 27 is considered on the lower side of the Rice Purity Test scale. It suggests that you\'ve had a wide range of life experiences, including social, romantic, or adventurous activities.',
  },
  {
    question: 'Is 97 rice purity good?',
    answer: 'Yes, a score of 97 is considered very high on the Rice Purity Test. It means you\'ve had very few of the experiences listed in the quiz, suggesting a more innocent or sheltered lifestyle.',
  },
  {
    question: 'What does it mean if you get a 100% on the rice purity test?',
    answer: 'Scoring 100% on the Rice Purity Test means you haven\'t checked off any of the experiences listed — essentially, you\'ve had none of them. It represents the highest level of "purity" on the scale.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-300">
            Everything you need to know about the Rice Purity Test
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-slate-700 rounded-lg overflow-hidden hover:border-primary-indigo/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-slate-900/50 hover:bg-slate-800/50 flex items-center justify-between gap-4 transition-colors text-left"
              >
                <h3 className="font-semibold text-white text-base sm:text-lg">
                  {item.question}
                </h3>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-primary-indigo flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Answer - Animated */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-primary-indigo/5 border-t border-slate-700">
                      <p className="text-slate-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-300 mb-6">
            Still have questions?{' '}
            <a
              href="/contact"
              className="text-primary-indigo hover:text-primary-violet underline transition-colors"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
