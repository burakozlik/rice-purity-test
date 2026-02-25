'use client';

import { motion } from 'framer-motion';

type SubmitButtonProps = {
  selectedCount: number;
  onSubmit: () => void;
};

export default function SubmitButton({ selectedCount, onSubmit }: SubmitButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onSubmit}
      className="w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-2xl font-display font-semibold text-lg text-white bg-gradient-to-r from-rose-soft to-lavender shadow-soft hover:shadow-glow transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Submit quiz and see my purity score"
    >
      See My Score
    </motion.button>
  );
}
