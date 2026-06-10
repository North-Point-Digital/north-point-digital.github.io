# North Point Digital — Website Redesign Spec

_Last updated: June 2026. Owner: David Turnbull. Status: shipped (all four slices)._

**Decisions (10 Jun 2026):** Hero = "Most AI projects stall. Yours won't." · AI
Launchpad is a six-week engagement (fix the 2-week copy) · Footer company details =
placeholder until David supplies them (flag before final deploy) · Build on main,
push at slice boundaries (auto-deploys via Pages).

## 1. Goals

1. Reposition the site around **AI adoption for UK businesses**, with AWS expertise (cost optimisation, Well-Architected, migration) as the credibility backbone.
2. Replace the purple-gradient/glassmorphism design with a **light, clean, premium** visual system.
3. Best-in-class speed (static Astro, near-zero JS) and on-page technical SEO with no gaps.
4. Copy reads as written by a person: UK English, concrete claims, no filler.

## 2. Market research summary

Sites reviewed: Firemind (AWS Premier, Anthropic partner), CirrusHQ, Geeks Ltd, Devoteam
(absorbed Ubertas), plus UK AI agency pricing research (helium42) and gov adoption data.

What the better sites have in common (table stakes):

- **Outcome-led hero, under 10 words**, with one concrete CTA ("Let's talk AWS", "Book a
  strategy consultation", "Send us your next RFP").
- **Proof before claims**: client logos and hard numbers immediately under the hero
  (CirrusHQ: "+93 NPS", "100+ staff certifications"; Firemind: "90% auto-resolved
  incidents", "50%+ cost reduction").
- **Productised offers with names and timelines** — fixed-fee assessments, funded
  Well-Architected reviews, six-week pilots. Vague "we do AI" loses to "working
  prototype in six weeks, fixed fee".
- **Anti-hype framing sells AI** (Geeks: "Most AI projects fail long before the
  technology does"). Honesty about failure rates is the credibility move in 2026.
- **Light, minimal design with one accent colour** is the dominant pattern for the
  trust-led firms; dark is used by the developer-tools-flavoured ones (Firemind).
- AWS badges/competencies displayed prominently; UK firms reference AWS funding
  programmes (MAP, funded WAR) in offers.

Market context worth using in copy: UK government research (Feb 2026) found only 16% of
UK businesses use any AI technology — the opportunity framing writes itself. Typical UK
pricing: strategy workshops £12–35k, PoCs £25–85k, boutique day rates £1,200–2,500 — our
fixed-fee Launchpad sits comfortably inside market norms, so we can be confident in the
offer without publishing prices.

## 3. Positioning & messaging

**Lead offer:** AI adoption (AI Launchpad as flagship). AWS services are the proof we
can run what we build: cost optimisation Blueprint and Build Better become supporting
offers under "and we make the cloud it runs on cheaper and safer".

**Message hierarchy:**

1. We get AI into production for UK businesses — fixed fee, fixed timeline, on AWS.
2. We're AWS people first: certified, partner-badged, with a track record of cutting
   bills 25%+ and fixing security. That's why our AI estimates and architectures hold up.
3. Risk reversal: fixed-fee engagements, no long-term contracts, free initial call.

**Hero (recommended):**

> **Working AI in six weeks. Not someday.**
> Most UK businesses still haven't put AI to work. We build fixed-fee proofs of concept
> on AWS — with honest costings and a route to production — and we run the cloud
> underneath properly too.

Primary CTA: "Book a free call" (Calendly). Secondary: "Get the AI Adoption Playbook".

**Copy rules (anti-AI-tells):**

- UK English throughout (optimisation, organisation, programme).
- Ban list: "unlock", "empower", "seamless", "elevate", "supercharge", "delve",
  "game-changing", "cutting-edge", "transformative", "it's not just X, it's Y",
  "in today's fast-paced world", rhetorical-question openers, triple-adjective lists.
- Every claim is concrete and deliverable: timelines, percentages and prices we already
  stand behind. No invented testimonials or fabricated stats.
- Sentences vary in length. Contractions are fine. Write like an engineer who sells.

## 4. Design guidelines

### Palette (derived from the logo: two blues + orange pixel-cross)

| Role | Value | Tailwind |
|---|---|---|
| Page background | `#FFFFFF` | `white` |
| Tinted section bg | `#F8FAFC` | `slate-50` |
| Hairline borders | `#E2E8F0` | `slate-200` |
| Headings | `#0F172A` | `slate-900` (never pure black) |
| Body text | `#334155` | `slate-700` |
| Muted text | `#64748B` | `slate-500` (floor for contrast) |
| **Accent / CTA** | `#1D4ED8`–`#2563EB` | `blue-700`/`blue-600` (logo-adjacent) |
| Accent tint | `#EFF6FF` | `blue-50` |
| Highlight (sparing) | `#F59E0B` | `amber-500` — logo orange; eyebrows/stat accents only |
| Dark band (footer + closing CTA) | `#0F172A` | `slate-900` |

Rules: one accent (blue) at ~1–5% of pixels; amber only as a garnish (never buttons);
no gradients except an at-most-faint radial tint behind the hero; alternate white and
slate-50 sections for rhythm.

### Typography

- **Geist Sans** (variable, self-hosted, latin subset) for everything; fallback stack
  with metric overrides to kill CLS. ≤2 font files, ≤120KB.
- **Geist Mono** for eyebrow labels, stats and the odd technical detail.
- H1: `clamp(2.5rem, 5vw + 1rem, 4.25rem)`, weight 600, tracking −0.03em, lh 1.05.
- Body 16–18px, lh 1.65, measure ≤72ch. Mono eyebrows 12–13px, letter-spaced, uppercase.

### Components & imagery

- Cards: white, `border-slate-200`, `rounded-2xl`, `shadow-sm` max; hover = 2px lift.
- Buttons: solid blue primary (white text), ghost/outline secondary. Rounded-lg, not pills.
- Icons: Lucide-style inline SVG, 1.5px stroke, `currentColor`.
- Illustration: inline SVG line diagrams (nodes/edges, data-flow, architecture) in
  slate-400 with blue highlights. No stock photos, no robots, no sparkles, no 3D.
- Photography only for the team — consistent treatment.
- Logo wall: monochrome (CSS grayscale, slate-toned), uniform height, static grid.

### Motion

- Scroll reveals: opacity + 16px translateY, 400ms ease-out, staggered ≤100ms, via a
  ~15-line IntersectionObserver. Content visible without JS.
- Global `prefers-reduced-motion` gate. No blobs, glass, parallax, marquees, typewriters.

## 5. Page plan

### Homepage (section order)

1. **Nav** — sticky, 64px, white/80 + blur after scroll; logo left, 4 links, CTA right.
2. **Hero** — text-led (fast LCP), headline above + AWS Partner badge row; no bg image.
3. **Logo wall** — "Teams we've worked with", monochrome.
4. **Stats band** — keep the three industry stats but reframe around AI + cloud waste
   (16% UK AI adoption; 78% overspend on AWS; 30–40% savings found in reviews). Sourced.
5. **Services** — 3 cards, AI Launchpad featured (2-col span): "Put AI to work"
   (Launchpad), "Cut your AWS bill" (Blueprint), "Build on solid ground" (Build Better).
6. **How we work** — 4-step numbered process (Call → Assessment → Fixed-fee delivery →
   Handover/support). De-risks the purchase.
7. **Case study highlight** — one deep case study with result stat + link to the rest.
8. **Team** — real faces, names, AWS certs; consultancies are bought on people.
9. **FAQ** — native `<details>`, FAQPage JSON-LD.
10. **Closing CTA band** — dark slate-900, headline + Calendly CTA.
11. **Footer** — links, socials, certifications, UK company details (Companies Act:
    registered name, company number, registered office) — **needs info from David**.

### Inner pages (same system, lighter build)

- `/ai-launchpad` — flagship offer page: outcome hero, what you get, timeline,
  process, FAQ, CTA. Fix the 2-week vs 6-week inconsistency (currently says both).
- `/aws-profitability-resilience-blueprint` — keep offer, restyle; consider URL alias
  `/aws-cost-optimisation` later (301-safe, not in slice 1).
- `/build-better` — restyle; keep MRA tool link.
- `/ai-adoption-playbook` — lead capture; form as the only island.
- Blog + case studies — typography-first article layout, `@tailwindcss/typography`.
- `/contact`, `/thank-you`, `/404`, `/privacy-policy` — restyle to match.

## 6. Technical & SEO checklist

- Astro static; remove React islands where HTML/CSS suffices (counters, back-to-top,
  nav). Forms stay as small islands or move to plain HTML POST. Target <30KB JS sitewide.
- `astro:assets` for all raster images (AVIF/WebP, dimensions set); team photos ≤800px.
- Self-hosted fonts, preloaded, `font-display: swap` + fallback metrics.
- Calendly: link out (no embed). No eager third-party scripts; GA4 stays lightweight.
- CWV targets: LCP <1.2s, INP <100ms, CLS ≈ 0.
- Head: keep existing canonical/OG/breadcrumbs; add proper favicon set (ico/svg/png),
  twitter:card, correct `theme-color`; OG image 1200×630 branded template.
- JSON-LD: Organization, WebSite, ProfessionalService (homepage), Service per offer
  page, FAQPage where FAQs render, Article on posts, BreadcrumbList on inner pages.
- Sitemap (have), robots.txt pointing at sitemap (verify), 404 (have).
- Accessibility: WCAG 2.2 AA — contrast per palette table, `:focus-visible` rings,
  skip link, landmarks, one h1/page, labelled forms, alt text everywhere,
  reduced-motion gate, ≥24px touch targets.

## 7. Implementation slices (bullet tracer)

1. **Slice 1 — Design system + shell + homepage:** Tailwind tokens, fonts, global CSS,
   Navigation, Footer, BaseLayout, and all homepage sections. (Shell and homepage share
   the light system — splitting them would leave white text on a white page, so they
   ship together.) Inner pages keep their self-contained gradient backgrounds until
   slice 2. _Check-in._
2. **Slice 2 — Offer pages:** ai-launchpad, blueprint, build-better, playbook.
3. **Slice 3 — Blog/case studies/utility pages** + SEO polish pass (favicons, OG image).
4. **Slice 4 — Performance audit:** Lighthouse, JS budget, image weights; fix stragglers.

Commit and push at every slice boundary. Each slice leaves the site shippable.

## 8. Open questions for David

1. UK company details for the footer (registered name, company number, registered
   office address)?
2. AI Launchpad: is it two weeks or six? Page currently claims both.
3. Confirm hero copy direction (§3) or pick an alternative.
4. Any client logos/case studies we must NOT use under the new AI-first framing?
