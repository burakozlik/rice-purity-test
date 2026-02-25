 'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { QUESTIONS, TOTAL_QUESTIONS } from '@/lib/questions';
import { calculateScore, getScoreBadge } from '@/lib/scoring';
import HeroSection from '@/components/HeroSection';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import QuestionSection from '@/components/QuestionSection';
import ScoreDisplay from '@/components/ScoreDisplay';
import ShareButtons from '@/components/ShareButtons';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

// Question grouping by category - ordered by sequence
const questionCategories = {
  relationships: { title: 'Relationships', icon: '💑', range: [0, 35] },
  personal: { title: 'Personal', icon: '👤', range: [36, 50] },
  experiences: { title: 'Experiences', icon: '🌍', range: [51, 75] },
  lifestyle: { title: 'Lifestyle', icon: '🎯', range: [76, 100] },
};

export default function PurityTestFlow() {
  const [selected, setSelected] = useState<Set<number>>(() => new Set());
  const [submitted, setSubmitted] = useState(false);

  const selectedCount = selected.size;
  const score = calculateScore(selectedCount);
  const badge = getScoreBadge(score);

  const toggle = useCallback((index: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSelected(new Set());
    setSubmitted(false);
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
    // Smooth scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />

      {/* Quiz Section */}
      <section id="quiz-section" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-primary-navy/20">
        {!submitted && <ProgressBar current={selectedCount} total={TOTAL_QUESTIONS} />}

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-lg bg-primary-indigo/10 border border-primary-indigo/30"
          >
            <p className="text-slate-300 text-center">
              Check every item you have done. <span className="font-semibold text-primary-indigo">MPS</span> = Member of the Preferred Sex.
              <br />
              Your purity score = <span className="font-semibold text-primary-indigo">100 − selected items</span>
            </p>
          </motion.div>

          {/* Questions by Category */}
          {!submitted ? (
            <>
              {Object.entries(questionCategories).map(([key, category]) => {
                const [start, end] = category.range;
                const categoryQuestions = QUESTIONS.slice(start, end + 1).map((q, i) => ({
                  text: q,
                  index: start + i,
                }));

                return (
                  <QuestionSection
                    key={key}
                    title={category.title}
                    icon={category.icon}
                    description={`${categoryQuestions.length} questions`}
                  >
                    {categoryQuestions.map(({ text, index }) => (
                      <QuestionCard
                        key={index}
                        index={index}
                        text={text}
                        checked={selected.has(index)}
                        onToggle={() => toggle(index)}
                      />
                    ))}
                  </QuestionSection>
                );
              })}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-indigo/40 hover:scale-105 transform transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-primary-navy"
                >
                  Submit & Get My Score
                </button>
                <button
                  onClick={reset}
                  className="px-6 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-primary-indigo hover:text-primary-indigo transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-indigo"
                >
                  Clear Selections
                </button>
              </motion.div>
            </>
          ) : (
            /* Results Section */
            <div id="results-section" className="py-8">
              <ScoreDisplay score={score} />

              {/* Share and Retake */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Share Your Results</h3>
                  <ShareButtons score={score} />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={reset}
                    className="px-8 py-3 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-indigo/40 hover:scale-105 transform transition-all"
                  >
                    Retake Test
                  </button>
                  <Link
                    href="/"
                    className="px-8 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-primary-indigo hover:text-primary-indigo transition-all text-center"
                  >
                    Back to Home
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* About & FAQ Sections */}
      <AboutSection />
      <FAQSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
