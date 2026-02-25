import { TOTAL_QUESTIONS, MAX_SCORE } from './questions';

/**
 * Purity score = 100 - (number of items selected).
 * Same logic as ricepurtytest.com.
 */
export function calculateScore(selectedCount: number): number {
  const score = MAX_SCORE - selectedCount;
  return Math.max(0, Math.min(MAX_SCORE, score));
}

export function getScoreRange(score: number): 'certified-innocent' | 'curious-explorer' | 'experienced' | 'legend' {
  if (score >= 90) return 'certified-innocent';
  if (score >= 70) return 'curious-explorer';
  if (score >= 40) return 'experienced';
  return 'legend';
}

/** Engaging one-liners + icon for shareability and fun */
export type ScoreBadge = {
  icon: string;       // emoji or icon key
  headline: string;    // short punchy title
  tagline: string;    // supporting line
  gradient: string;   // tailwind gradient class
  shadow: string;     // tailwind shadow class
};

export function getScoreBadge(score: number): ScoreBadge {
  const range = getScoreRange(score);
  switch (range) {
    case 'certified-innocent':
      return {
        icon: '✨',
        headline: 'Certified Innocent.',
        tagline: 'You\'ve kept things traditional and focused.',
        gradient: 'bg-gradient-score-high',
        shadow: 'shadow-glow-green',
      };

    case 'curious-explorer':
      return {
        icon: '🧭',
        headline: 'Curious Explorer.',
        tagline: 'You\'ve ventured selectively and stayed balanced.',
        gradient: 'bg-gradient-score-mid',
        shadow: 'shadow-glow-yellow',
      };

    case 'experienced':
      return {
        icon: '🌟',
        headline: 'Experienced.',
        tagline: 'You\'ve lived a full social life with diverse experiences.',
        gradient: 'bg-gradient-score-mid',
        shadow: 'shadow-glow-yellow',
      };

    case 'legend':
    default:
      return {
        icon: '🔥',
        headline: 'Legend Status.',
        tagline: 'You\'ve embraced life\'s adventures without hesitation.',
        gradient: 'bg-gradient-score-low',
        shadow: 'shadow-glow-rose',
      };
  }
}

export function getScoreMessage(score: number): string {
  return getScoreBadge(score).headline;
}

export { TOTAL_QUESTIONS, MAX_SCORE };
