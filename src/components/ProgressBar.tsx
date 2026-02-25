'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type ProgressBarProps = {
  current: number;
  total: number;
  label?: string;
};

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const quizSection = document.getElementById('quiz-section');
      if (!quizSection) return;

      const rect = quizSection.getBoundingClientRect();
      setIsSticky(rect.top < -50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={label ?? 'Quiz progress'}
      className={`transition-all duration-300 ${
        isSticky
          ? 'fixed top-16 left-0 right-0 z-40 bg-primary-navy/95 backdrop-blur-md border-b border-primary-indigo/10 shadow-lg py-3'
          : 'sticky top-16 z-40 bg-primary-navy/50 backdrop-blur-sm border-b border-primary-indigo/10 py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Progress Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                {label ?? 'Question Progress'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-primary-indigo">
                {current} / {total}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-slate-800/60 rounded-full overflow-hidden border border-slate-700/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full bg-gradient-button rounded-full shadow-glow-indigo"
              />
            </div>
          </div>

          {/* Right: Percentage */}
          <div className="flex-shrink-0">
            <motion.div
              key={percentage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-lg font-bold text-primary-indigo text-right"
            >
              {percentage}%
            </motion.div>
          </div>
        </div>

        {/* Stats Line */}
        <div className="mt-3 text-xs text-slate-400 text-center sm:text-left">
          {current} items selected • {total - current} remaining
        </div>
      </div>
    </motion.div>
  );
}
