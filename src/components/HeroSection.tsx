"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = bgRef.current;
      if (!el) return;
      const y = window.scrollY;
      el.style.transform = `translateY(${y * -0.05}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToQuiz = () => {
    const element = document.getElementById('quiz-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const featureItems = [
    { icon: '✓', text: '100 Structured Questions' },
    { icon: '✓', text: 'Instant Score Analysis' },
    { icon: '✓', text: 'Completely Anonymous' },
    { icon: '✓', text: 'Shareable Results' },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen lg:min-h-[90vh] flex items-center pt-20 pb-12 lg:pb-0">
      {/* Animated Background Gradient Mesh */}
      <div ref={bgRef} className="absolute inset-0 -z-10 transform-gpu will-change-transform">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
            <linearGradient id="mesh-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mesh-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="mesh-3" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Large floating blob 1 - top left */}
          <circle cx="200" cy="200" r="300" fill="url(#mesh-1)" filter="url(#blur)" />

          {/* Large floating blob 2 - bottom right */}
          <circle cx="1200" cy="700" r="350" fill="url(#mesh-2)" filter="url(#blur)" />

          {/* Medium floating blob 3 - center */}
          <circle cx="700" cy="450" r="250" fill="url(#mesh-3)" filter="url(#blur)" />

          {/* Subtle grain texture - removed for performance */}
          {/* <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" />
            <feDisplacementMap in="SourceGraphic" scale="0.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <rect width="1400" height="900" fill="#0F172A" opacity="0.5" filter="url(#grain)" /> */}
        </svg>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 via-transparent to-primary-navy/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Heading */}
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                The Official Rice Purity Test{' '}
                <span className="bg-gradient-button bg-clip-text text-transparent">(2026 Updated)</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Be honest… how innocent are you really? Take the test, get your score instantly, and keep it just between us.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-3">
              {featureItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-200"
                >
                  {item.icon && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-indigo/20 text-primary-indigo text-sm font-bold">
                      {item.icon}
                    </span>
                  )}
                  <span className="text-base">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleScrollToQuiz}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-indigo/40 hover:scale-105 transform transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-primary-navy"
              >
                Start the Test
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('about-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-indigo/40 text-primary-indigo font-semibold rounded-lg hover:bg-primary-indigo/10 hover:border-primary-indigo/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-primary-navy"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Column - Only Stats Card (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-6 justify-start"
          >
            {/* Question Section Placeholder - Move your question section here if needed */}
            {/* <QuestionSection ...props /> */}

            {/* Enhanced Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-primary-indigo/30 p-8 shadow-2xl flex flex-col items-center gap-4 overflow-hidden"
            >
              
              {/* Tagline */}
              <span className="mt-14 text-base font-semibold text-white tracking-wide text-center">The viral purity test trusted by millions</span>
              {/* Stats */}
              <div className="flex flex-row justify-center gap-8 w-full mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-primary-violet drop-shadow">2M+</span>
                  <span className="text-xs text-slate-300">Participants</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-primary-indigo drop-shadow">100</span>
                  <span className="text-xs text-slate-300">Questions</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-green-400 drop-shadow">70</span>
                  <span className="text-xs text-slate-300">Avg. Score</span>
                </div>
              </div>
              {/* Credibility badges */}
              <div className="flex flex-row justify-center gap-3 w-full mt-4">
                <span className="inline-flex items-center gap-1 text-xs text-green-300 bg-green-900/40 px-3 py-1 rounded-full font-medium shadow">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Anonymous
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-blue-200 bg-blue-900/40 px-3 py-1 rounded-full font-medium shadow">
                  <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Instant Results
                </span>
              </div>
              {/* Animated glowing border */}
              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-primary-indigo/40 border-dashed"
                style={{ boxShadow: '0 0 32px 4px #6366f1, 0 0 64px 8px #a78bfa33' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Scroll to explore</span>
          <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
