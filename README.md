# Баджо Строй

Landing page за Баджо Строй ЕООД — ремонт и изграждане на покриви в България. Изграден със стека на MG Enterprise: Next.js 16 + React 19 + Tailwind v4.

## Setup

```bash
npm install
npm run dev
```

Отваря се на http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

GitHub `main` push → auto-deploy в Vercel project `badjo-stroy` (team `mg-enterprise`).

## Какво трябва да се смени преди live deploy

- Реални тестимониали в `src/components/Trust.tsx` (заменят placeholder-ите)
- Реални цени в `src/lib/faqs.ts` (ако се различават от стандартните)
- Купуване и свързване на `badjostroy.bg` като custom domain в Vercel

## Структура

- `src/app/page.tsx` — главната страница, композирана от секциите
- `src/app/layout.tsx` — глобална metadata, JSON-LD structured data, шрифтове
- `src/app/globals.css` — Tailwind v4 `@theme inline` с цветова палитра + keyframes
- `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` — SEO discovery + PWA
- `src/app/icon.svg`, `apple-icon.svg` — favicon assets
- `src/app/privacy/`, `terms/` — задължителни юридически стъбове
- `src/components/` — всички секции и UI-tate
- `src/components/Logo.tsx` — SVG бранд лого (Cyrillic "Б" с покривен пик)
- `src/lib/faqs.ts` — FAQ data, ползва се и в `Faq.tsx`, и в `FAQPage` JSON-LD
- `public/` — реални снимки на обекти
