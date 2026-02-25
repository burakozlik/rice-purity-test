'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type QuestionSectionProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function QuestionSection({ title, description, icon, children }: QuestionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="mb-8"
    >
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-3">
        {icon && (
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-indigo/20 flex items-center justify-center text-lg">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-2 pl-0 sm:pl-11">
        {children}
      </div>
    </motion.section>
  );
}
