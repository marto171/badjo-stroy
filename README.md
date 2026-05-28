# Покриви Майстор

Landing page за бизнес за ремонт и изграждане на покриви. Изграден със стека на MG Enterprise: Next.js 16 + React 19 + Tailwind v4.

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

## Какво трябва да се смени преди live deploy

- Телефон навсякъде (search: `+359888123456` / `+359 888 123 456`)
- Имейл (`info@pokrivi-maistor.bg`)
- Домейн в `layout.tsx`, `sitemap.ts`, `robots.ts` (`SITE_URL`)
- Реални тестимониали в `src/components/Trust.tsx` (заменят placeholder-ите)
- Реални цени в `src/lib/faqs.ts` (ако се различават от стандартните)
- Лого вместо `fa-home` иконата в `Header.tsx` и `Footer.tsx`

## Структура

- `src/app/page.tsx` — главната страница, композирана от секциите
- `src/app/layout.tsx` — глобална метаdata, JSON-LD structured data, шрифтове
- `src/app/globals.css` — Tailwind v4 `@theme inline` с цветова палитра + keyframes
- `src/app/sitemap.ts`, `robots.ts` — SEO discovery
- `src/app/privacy/`, `terms/` — задължителни юридически стъбове
- `src/components/` — всички секции и UI-tate
- `src/lib/faqs.ts` — FAQ data, ползва се и в `Faq.tsx`, и в `FAQPage` JSON-LD
- `public/` — 12 реални снимки на обекти
