# Strother Built Construction — Codex Project Context

This documentation set guides the Veriq homepage concept and any later approved redesign for Strother Built Construction.

## Current phase

### Implemented concept

The current user brief also authorizes coherent `/services`, `/about`, and `/contact` pages. The repository now contains the responsive four-route sales mockup, using supplied Strother imagery, a shared five-service content model, and a browser-only inquiry form. No inquiries are transmitted or stored. Process, testimonials, credentials, secondary services, and phone are omitted pending confirmation.

**Stack:** Next.js 16.2.9 App Router, React 19, TypeScript, Tailwind CSS 4 plus shared custom CSS. Archivo and Source Sans 3 are bundled locally with SIL OFL licenses in `public/fonts`, so builds do not require Google Fonts access.

**Run locally:** `npm ci`, then `npm run dev`. Use the Local URL printed by Next.js. On Windows with restricted PowerShell execution policy, use `npm.cmd` and `npx.cmd`.

**Validate:** `npm run lint`, `npx tsc --noEmit`, `npm run build`.

**Preview SEO:** all routes remain noindex through metadata and HTTP headers; robots.txt disallows crawling. `NEXT_PUBLIC_SITE_URL` can specify an approved preview origin for social-image URLs (default `http://localhost:3000`). Production canonicals, sitemap, indexing, and form delivery are deliberately deferred. Nothing has been published.

**Content structure:** `data/services.ts` owns the five offerings and stable anchors; `data/projects.ts` owns gallery labels and alt text; `config/site.ts` owns confirmed contact information; `config/metadata.ts` owns shared social metadata. Dedicated service routes can be introduced after approval without changing the service identifiers.

See `docs/QA.md` for validation and remaining content needs.

The project is in **pre-sale homepage concept** stage. Josh responded to Veriq’s free mockup offer and asked for a cleaner, more focused website that appeals to higher-end remodeling clients.

The current task is not a full production rebuild. Build only what is needed to present a strong homepage direction unless the user explicitly expands scope.

## Confirmed direction

- Lead with kitchen remodeling, bathroom remodeling, basement finishing, whole-home remodeling, and home additions.
- Keep legitimate secondary services deeper in a future Services page.
- Remove handyman services entirely.
- Replace keyword-heavy messaging with trust-, quality-, and craftsmanship-oriented communication.
- Use Compelling Homes and Zenith Design + Build as positioning references, not templates.
- Make project photography and proof central to the experience.
- Preserve Strother’s orange as a restrained brand accent rather than a dominant background color.

## Files

- `AGENTS.md` — project-specific operating rules for Codex
- `docs/PROJECT.md` — phase, scope, goals, information architecture, status, and acceptance criteria
- `docs/BRAND.md` — visual and verbal direction, references, palette, typography, and imagery rules
- `docs/CONTENT.md` — confirmed facts, client-directed services, draft copy, claims, and open content questions
- `docs/SEO.md` — search strategy, page map, metadata direction, schema, and technical checks
- `docs/DECISIONS.md` — chronological client feedback and project decisions

## Source hierarchy

When information conflicts:

1. The user’s current instruction
2. Latest active decision in `docs/DECISIONS.md`
3. Confirmed information in the relevant source-of-truth document
4. Current repository implementation
5. Existing public site or inherited starter content

The current public website is evidence of existing content, not automatic approval to preserve every claim or design choice.

## Recommended first Codex prompt

> Read `AGENTS.md` and all files in `/docs` before making changes. This is a pre-sale homepage concept for Strother Built Construction, not yet an authorized production rebuild. Audit the repository for inherited client content, then implement the homepage direction in the project docs without inventing facts or copying the reference companies. Preserve useful engineering, but make the design specific to Strother and the five client-confirmed priority services.

## Before the mockup is shown

- Confirm the project uses the five priority services in the intended hierarchy.
- Remove handyman language and any previous-client contamination.
- Treat unconfirmed claims, process steps, testimonials, and stock photography as placeholders.
- Verify the page on mobile and desktop.
- Run applicable lint, type-check, test, and build commands.
- Ensure no real submission routing or production configuration was changed.

## Before any future launch

Resolve every launch-critical `[CONFIRM]` item, obtain usable logo and project-photo assets, confirm credentials and service areas, approve final copy, test forms, complete SEO migration planning, and receive explicit client approval.
