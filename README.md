# Rice Purity Test – Next.js Clone

A **pixel-perfect functional clone** of [ricepurtytest.com](https://ricepurtytest.com/) built with **Next.js (App Router)**, TypeScript, and Tailwind CSS. Same questions, scoring logic, and behavior with a modern, fast, and SEO-optimized implementation.

## Features

- **Landing page** – Hero, instructions, CTA
- **Quiz** – 100 questions, checkbox selection, sticky progress bar
- **Scoring** – Purity score = 100 − (number of items selected)
- **Results** – Animated score, share buttons (X, Facebook, WhatsApp, copy), restart
- **Responsive** – Mobile-first, works on all screen sizes
- **Accessible** – Semantic HTML, ARIA, keyboard nav, focus states

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (JIT)
- **Animations:** Framer Motion (lightweight)
- **Rendering:** Static where possible; client components only where needed (quiz state, result share)

## Performance

- **Static generation** for `/`, `/quiz`, `/privacy`; result page reads `?score=` from URL (no server state).
- **Code splitting** – Dynamic import for `SubmitButton`; Framer Motion tree-shaken.
- **Fonts** – `next/font` (Inter, Nunito) with `display: swap` to avoid layout shift.
- **Minimal JS** – Quiz state is the only meaningful client state; rest is server-rendered or URL-driven.
- **No heavy UI libs** – Custom components only.

To target Lighthouse ≥ 95:

- Ensure production build (`npm run build`) and measure with Lighthouse in production mode.
- Use `NEXT_PUBLIC_SITE_URL` for correct canonical/sitemap URLs in production.

## SEO

- **Metadata:** Title, description, keywords, OG, Twitter Card on all relevant pages.
- **Semantic HTML:** `<main>`, `<header>`, `<section>`, `<nav>`, `<footer>`, proper heading hierarchy (H1–H2).
- **JSON-LD:** Quiz schema on the homepage.
- **Sitemap:** `/sitemap.xml` (home + quiz).
- **Robots:** `/robots.txt` allows `/`, disallows `/result`, links sitemap.
- **Canonical:** Set via `metadataBase` and `alternates.canonical`.

Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://yoursite.com`) so sitemap and canonical URLs are correct.

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Landing (SSG)
    globals.css
    quiz/
      layout.tsx
      page.tsx       # Quiz (client)
    result/
      layout.tsx
      page.tsx       # Result (client, reads ?score=)
    privacy/
      page.tsx       # Privacy (SSG)
    sitemap.ts
    robots.ts
  components/
    ProgressBar.tsx
    QuestionCard.tsx
    ScoreDisplay.tsx
    ShareButtons.tsx
    SubmitButton.tsx
  lib/
  questions.ts     # 100 questions
    scoring.ts       # calculateScore, getScoreRange, getScoreMessage
  types/
    index.ts
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy (Vercel)

```bash
npm run build
npm run start
```

For Vercel:

1. Push to GitHub and import the repo in Vercel.
2. Set **Environment Variable:** `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://your-purity-test.vercel.app`).
3. Deploy. Vercel will use the correct Node/Next version from the project.

No server-side storage or API routes are used; the app is static + client-side state and URL params, so it runs on the Edge/static pipeline.

## License

MIT. Content (questions) mirrors the public Rice Purity Test; design and code are original.
