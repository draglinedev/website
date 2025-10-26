# Work Section Readme

This document explains how the "Work" section is structured and how to add or maintain case studies.

## Overview
- Work listing page: `app/work/page.tsx`
- Case detail page (dynamic route): `app/work/[slug]/page.tsx`
- Cases are defined in code (no CMS or MDX yet).
- Unknown slugs return a 404 via Next.js `notFound()`.

## Files
- `app/work/page.tsx`
  - Renders a list of case studies from a local `cases` array.
  - Each item links to `/work/[slug]`.
- `app/work/[slug]/page.tsx`
  - Maps `slug` -> case content using a local `cases` record.
  - If `params.slug` is not present in the record, calls `notFound()`.

## How It Works
1. The listing page defines a simple array with `{ slug, title, summary }` for each case.
2. The dynamic page defines a record keyed by `slug` with `{ title, problem, approach, outcome }`.
3. When a user navigates to `/work/<slug>`, Next.js passes `params.slug` to the page, which looks up the case in the record. If not found, it shows the 404 page.

## Add a New Case
Follow these steps to add a case called `acme-analytics`.

1) Update the listing (`app/work/page.tsx`):
```tsx
// app/work/page.tsx
const cases = [
  { slug:'case-1', title:'Case Study One (Placeholder)', summary:'A structured case study placeholder without fabricated metrics.'},
  { slug:'case-2', title:'Case Study Two (Placeholder)', summary:'Outline of problem, approach, outcome with verifiable facts only.'},
  { slug:'acme-analytics', title:'Acme Analytics', summary:'Data platform consolidation with verifiable throughput improvements.'}, // NEW
]
```

2) Add the case content (`app/work/[slug]/page.tsx`):
```tsx
// app/work/[slug]/page.tsx
const cases: Record<string, {title:string, problem:string, approach:string, outcome:string}> = {
  'case-1': {
    title: 'Case Study One (Placeholder)',
    problem: 'Clear, testable problem statement (to be filled with real data).',
    approach: 'Our approach—architecture, stack, and process (no fake metrics).',
    outcome: 'Verifiable outcomes; if unknown, leave as TBD and request facts.'
  },
  // ... existing cases ...
  'acme-analytics': {
    title: 'Acme Analytics',
    problem: 'Legacy data silos across 3 tools caused slow reporting and duplicated ETL.',
    approach: 'Unified ingestion on Kafka, warehouse on Postgres, metrics via dbt. Iterative rollout with benchmarks.',
    outcome: 'Reduced ETL failures by 45% and cut report TTR from 12h to 1h. Verified with logs and dashboards.'
  }
}
```

3) Run the dev server and visit the pages:
- `pnpm dev` (or `npm run dev`)
- Listing: `http://localhost:3000/work`
- Case: `http://localhost:3000/work/acme-analytics`

If you see a 404 for your slug, confirm the slug string matches in both files.

## Writing Guidelines
- Facts only: do not invent metrics. Use verifiable numbers and sources.
- Structure: always include `Problem`, `Approach`, `Outcome`.
- Constraints: mention trade‑offs, timelines, budgets, or team size when relevant.
- Clarity: avoid marketing fluff; prefer plain language and concrete examples.
- Accessibility: keep headings semantic and paragraphs concise.

## Optional: Per‑Case Metadata (SEO)
You can add metadata to each case page for a better title/description in previews. Two options:

1) Simple static metadata per case file:
```tsx
export const metadata = { title: 'Acme Analytics' }
```

2) Dynamic metadata using `generateMetadata`:
```tsx
// app/work/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = cases[params.slug]
  if (!data) return { title: 'Case Not Found' }
  return { title: data.title, description: data.outcome }
}
```

## Optional: Move Cases to MDX
If you outgrow hard‑coded cases, mirror the blog’s approach:
- Store files under `content/work/<slug>.mdx` with frontmatter.
- Parse with `gray-matter` and `reading-time` like `app/blog/page.tsx`.
- Render MDX content in the dynamic route.

This keeps authoring in content files and reduces code changes.

## Images
- Place assets under `public/assets/` and reference with `/assets/<file>`.
- For case‑specific folders, use `/public/assets/<slug>/...` and link as `/assets/<slug>/<file>`.

## QA Checklist
- Listing shows the new case with a clear summary.
- Detail page renders `Problem`, `Approach`, `Outcome` sections.
- No broken links or 404s for the new slug.
- No invented metrics; all numbers are defensible.

## Troubleshooting
- 404 on case page: ensure matching `slug` in both files and no typos.
- Build errors: check TypeScript types in the `cases` record; all required keys must be present.
- Styling issues: adjust Tailwind classes on containers (e.g., borders, spacing) to match site style.