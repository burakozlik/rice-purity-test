'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type ShareButtonsProps = {
  score: number;
  title?: string;
};

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : '';

function buildShareText(score: number): string {
  return `I scored ${score}/100 on the Rice Purity Test! Find out your score at`;
}

export default function ShareButtons({ score, title = 'Rice Purity Test' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = SITE_URL;
  const shareText = buildShareText(score);

  async function copyToClipboard() {
    const text = `${shareText} ${shareUrl}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select and copy
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const instagramUrl = `https://www.instagram.com/`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;

  const shareOptions = [
    {
      id: 'twitter',
      label: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
        </svg>
      ),
      url: twitterUrl,
      action: 'link',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.6 6.32c-1.63-1.63-3.8-2.53-6.1-2.53-4.75 0-8.63 3.85-8.63 8.6 0 1.52.39 3 1.14 4.31L3 21l4.84-1.27c1.25.68 2.66 1.04 4.09 1.04 4.75 0 8.63-3.85 8.63-8.6 0-2.3-.9-4.47-2.53-6.1m-6.1 14.08c-1.27 0-2.51-.33-3.6-.96l-.26-.15-2.66.7.72-2.62-.17-.27c-.73-1.14-1.12-2.46-1.12-3.85 0-3.95 3.22-7.17 7.17-7.17 1.91 0 3.71.75 5.07 2.11s2.11 3.16 2.11 5.07c0 3.95-3.22 7.17-7.17 7.17m3.91-5.37l-.5-.25s-.69-.35-1.13-.58c-.1-.06-.21-.08-.32-.08-.27 0-.52.12-.69.35l-.59.77c-.11.15-.29.24-.5.24h-.06c-.26-.03-.51-.13-.72-.29l-1.37-1.01c-.5-.37-.81-.9-.81-1.47 0-.52.32-1.08.86-1.55l.68-.62c.08-.07.12-.17.12-.28v-.02c0-.25-.21-.45-.46-.45l-.89.02c-.17.01-.34.08-.46.19l-.68.64c-.66.64-1.02 1.46-.98 2.33.07 1.46.81 2.77 2.07 3.6l.95.63c.4.27.85.5 1.32.67.55.2 1.13.3 1.71.27.35-.02.69-.05 1.02-.13.22-.05.43-.12.64-.21l1.06-.48c.12-.05.24-.14.33-.25l.72-1.02c.06-.09.1-.2.11-.32v-.27c.01-.12-.04-.24-.16-.32" />
        </svg>
      ),
      url: whatsappUrl,
      action: 'link',
    },
    {
      id: 'copy',
      label: 'Copy Link',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      action: 'copy',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {shareOptions.map((option, idx) => (
        <motion.button
          key={option.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          onClick={() => {
            if (option.action === 'copy') {
              copyToClipboard();
            } else if (option.action === 'link') {
              window.open(option.url, '_blank');
            }
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-indigo ${
            option.id === 'copy' && copied
              ? 'bg-green-500/20 text-green-300 border border-green-500/50'
              : 'bg-slate-800/80 hover:bg-primary-indigo/20 text-slate-200 hover:text-primary-indigo border border-slate-700 hover:border-primary-indigo/50'
          }`}
        >
          {option.icon}
          <span className="text-sm">{option.id === 'copy' && copied ? 'Copied!' : option.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
