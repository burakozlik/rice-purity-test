'use client';

import { motion } from 'framer-motion';

type QuestionCardProps = {
  index: number;
  text: string;
  checked: boolean;
  onToggle: () => void;
};

export default function QuestionCard({ index, text, checked, onToggle }: QuestionCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: '-100px' }}
      className="list-none"
    >
      <label
        className={`group flex items-start gap-4 p-4 rounded-lg cursor-pointer select-none transition-all duration-300 ${
          checked
            ? 'bg-primary-indigo/10 border border-primary-indigo/30 shadow-glow-indigo'
            : 'bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 hover:shadow-lg'
        }`}
      >
        {/* Custom Checkbox */}
        <div className="flex-shrink-0 mt-0.5">
          <div
            className={`relative w-5 h-5 rounded-lg border-2 transition-all duration-300 ${
              checked
                ? 'border-transparent bg-gradient-button'
                : 'border-slate-400 group-hover:border-primary-indigo'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={onToggle}
              className="sr-only"
              aria-label={`Question ${index + 1}: ${text}. ${checked ? 'Selected' : 'Not selected'}.`}
              onAnimationEnd={(e) => {
                if (checked) {
                  e.currentTarget.parentElement?.parentElement?.parentElement?.classList.add('animate-checkbox-pulse');
                }
              }}
            />

            {/* Checkmark - only visible when checked */}
            {checked && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="absolute inset-0 m-auto w-3 h-3 text-white pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            )}

            {/* Hover glow ring */}
            {!checked && (
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary-indigo/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>
        </div>

        {/* Question Text */}
        <div className="flex-1 min-w-0">
          <span className="text-slate-200 text-sm sm:text-base leading-relaxed block">
            <span className="text-slate-400 font-medium text-xs sm:text-sm">
              {index + 1}.
            </span>
            {' '}
            {text}
          </span>
        </div>
      </label>
    </motion.li>
  );
}
