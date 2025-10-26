# Dragline Developers Website (Next.js 14 + TS + Tailwind)

> Starter scaffold with blog (MDX via gray-matter), accessible UI, and no fake data.

## Quickstart
1. Ensure Node 18+ and pnpm or npm.
2. Install deps: `pnpm install` (or `npm i`).
3. Dev server: `pnpm dev` then open http://localhost:3000
4. Edit content in `/content`, copy in `/lib/metadata.ts`, styles in `/app/globals.css`.

## Deploy (Vercel)
- Connect repo to Vercel → framework auto-detected (Next.js).
- Environment variables:
  - `RESEND_API_KEY` (Production + Preview) for contact form emails; set in Vercel → Project → Settings → Environment Variables.
- Build settings: defaults ok (`next build`). Vercel uses `npm` (pnpm artifacts removed).
- After deploy, verify `/contact` → `/thank-you` redirect and check inbox for email.

## DNS (Squarespace → Vercel)
- In Squarespace DNS, add the A/AAAA/CNAME records Vercel provides for your domain.
- Wait for propagation, then verify domain in Vercel.

## Structure
- `app/` routes (App Router)
- `components/` shared UI
- `content/` MDX posts (parsed with gray-matter)
- `lib/` site metadata and utils
- `public/` static assets
- Tailwind & PostCSS configured

## Notes
- MDX is displayed as preformatted content in this minimal starter. If you want full MDX rendering, we can wire `next-mdx-remote` with a proper MDX component mapping.
- Replace placeholder policy texts and contact details with your real info.
