'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  product: [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
  ],
  legal: [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
  social: [
    { href: 'https://reddit.com', label: 'Reddit', icon: 'reddit' },
    { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
    { href: 'https://x.com', label: 'X (Twitter)', icon: 'twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
  ],
};

const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'twitter':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Follow us on Twitter" role="img">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Follow us on Instagram" role="img">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37Z" fill="#0F172A" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="#0F172A" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Follow us on Facebook" role="img">
          <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
        </svg>
      );
    case 'reddit':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Follow us on Reddit" role="img">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm2.25-16.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-4.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm2.25 9c1.5 1.25 3.75 2 6 2 .414 0 .75.336.75.75s-.336.75-.75.75c-2.625 0-5.25-1.125-7.125-2.625-.75-.75-2.25-.75-3-.75-.75 0-2.25 0-3 .75C6.5 16.875 3.875 18 1.25 18c-.414 0-.75-.336-.75-.75s.336-.75.75-.75c2.25 0 4.5-.75 6-2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Follow us on LinkedIn" role="img">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-primary-indigo via-primary-violet to-primary-indigo opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 font-heading text-lg font-bold text-white hover:text-primary-indigo transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-button flex items-center justify-center">
                <span className="text-white text-sm font-bold">R</span>
              </div>
              Rice Purity
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              A modern, honest reflection on experiences. Discover your authentic purity score.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-primary-indigo transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Legal */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-primary-indigo transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Social & Company */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {footerLinks.social.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-indigo/20 text-slate-300 hover:text-primary-indigo transition-all flex items-center justify-center"
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
  <div className="flex flex-col items-center justify-center gap-4 text-center">
    <p className="text-slate-500 text-sm">
      © {currentYear} Rice Purity Test. All rights reserved. <br />This website is not associated with rice university
    </p>
            {/* <p className="text-slate-500 text-sm">
              Built with{' '}
              <span className="text-primary-indigo font-semibold">modern design</span>
              {' '}& care
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
