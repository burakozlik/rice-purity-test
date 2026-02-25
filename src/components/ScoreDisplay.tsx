'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getScoreRange, getScoreBadge } from '@/lib/scoring';

type ScoreDisplayProps = {
  score: number;
  showConfetti?: boolean;
};

export default function ScoreDisplay({ score, showConfetti = true }: ScoreDisplayProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [pop, setPop] = useState(false);
  const [shake, setShake] = useState(false);
  const range = getScoreRange(score);
  const badge = getScoreBadge(score);

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const step = score / steps;
    const stepDuration = duration / steps;
    let current = 0;
    setPop(false);
    setShake(false);
    const timer = setInterval(() => {
      current += step;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(timer);
        setTimeout(() => setPop(true), 100);
        if (score <= 40) setTimeout(() => setShake(true), 200);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="text-center py-12">
      {/* Big icon + score card */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.2 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Icon with animated glow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            className={`absolute inset-0 rounded-full blur-3xl z-0`}
            animate={pop ? {
              boxShadow: [
                '0 0 60px 20px #4F46E5',
                '0 0 120px 40px #7C3AED',
                '0 0 60px 20px #4F46E5'
              ]
            } : {}}
            transition={{ duration: 0.7 }}
            style={{
              background:
                range === 'certified-innocent' ? 'rgba(34,197,94,0.18)' :
                range === 'curious-explorer' ? 'rgba(253,224,71,0.18)' :
                range === 'experienced' ? 'rgba(253,224,71,0.18)' :
                'rgba(239,68,68,0.18)'
            }}
          />
          <motion.span
            className="text-8xl sm:text-9xl select-none relative z-10 block"
            animate={pop ? { scale: [1, 1.2, 0.95, 1.05, 1] } : {}}
            transition={{ duration: 0.7 }}
          >
            {badge.icon}
          </motion.span>
          {pop && range === 'certified-innocent' && score >= 90 && <Sparkles />}
          {pop && score <= 40 && <ShakeLines />}
        </motion.div>

        {/* Score circle with gradient */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl ${badge.gradient} shadow-2xl flex flex-col items-center justify-center overflow-hidden group ${shake ? 'animate-wiggle' : ''}`}
        >
          {/* Animated glow border */}
          <motion.div
            className="absolute inset-0 rounded-3xl p-1 bg-gradient-to-r from-primary-indigo via-primary-violet to-primary-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={pop ? { opacity: [0, 1, 0.5, 1, 0] } : {}}
            transition={{ duration: 1.2 }}
          />
          <div className="relative z-10">
            <motion.div
              key={displayScore}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl sm:text-8xl font-heading font-extrabold text-white drop-shadow-lg"
              aria-live="polite"
            >
              {displayScore}
            </motion.div>
            <p className="text-white/80 text-sm font-semibold mt-2 uppercase tracking-wider">Purity Score</p>
          </div>
        </motion.div>
      </motion.div>


      {/* Headline and Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 space-y-3"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
          {badge.headline}
        </h2>
        <p className="text-lg text-slate-300 font-medium max-w-md mx-auto">
          {badge.tagline}
        </p>
      </motion.div>

      {/* Confetti for high scores */}
      {showConfetti && range === 'certified-innocent' && score >= 90 && <Confetti />}
    </div>
  );
}

function Confetti() {
  const pieces = 50;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {Array.from({ length: pieces }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
            background: i % 3 === 0 ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' :
                       i % 3 === 1 ? 'linear-gradient(135deg, #0EA5E9, #06B6D4)' :
                       'linear-gradient(135deg, #22C55E, #16A34A)',
            boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)',
          }}
          initial={{ y: 0, opacity: 1, x: 0 }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 40 : 900,
            opacity: [1, 1, 0],
            x: (Math.random() - 0.5) * 400,
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 0.6,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Sparkles animation for high scores
function Sparkles() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.7, 0] }}
      transition={{ duration: 1.2 }}
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{
            left: `${50 + 38 * Math.cos((i / 18) * 2 * Math.PI)}%`,
            top: `${50 + 38 * Math.sin((i / 18) * 2 * Math.PI)}%`,
            color: '#fff',
            fontSize: '1.5rem',
            filter: 'drop-shadow(0 0 6px #7C3AED)'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1, 0] }}
          transition={{ duration: 1.2, delay: i * 0.03 }}
        >
          ✨
        </motion.span>
      ))}
    </motion.div>
  );
}

// Shake lines for low scores
function ShakeLines() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.7, 0] }}
      transition={{ duration: 1.2 }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{
            left: `${50 + 38 * Math.cos((i / 8) * 2 * Math.PI)}%`,
            top: `${50 + 38 * Math.sin((i / 8) * 2 * Math.PI)}%`,
            color: '#ef4444',
            fontSize: '2rem',
            filter: 'drop-shadow(0 0 6px #ef4444)'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1, 0] }}
          transition={{ duration: 1.2, delay: i * 0.04 }}
        >
          💥
        </motion.span>
      ))}
    </motion.div>
  );
}

