# Strother Built Construction Website — Codex Instructions

## Purpose

This repository is for a Veriq homepage concept and potential future redesign for **Strother Built Construction** of the Des Moines, Iowa area.

The immediate deliverable is a high-quality homepage mockup intended to show Joshua Strother how the current site could be repositioned for larger, higher-end residential remodeling projects. This is still a pre-sale concept. Do not silently expand the work into a complete production website.

## Read First

Before substantial work, read:

- `docs/PROJECT.md` — current phase, scope, page strategy, constraints, and acceptance criteria
- `docs/BRAND.md` — visual direction, color use, imagery, typography, and reference-site principles
- `docs/CONTENT.md` — confirmed business facts, services, contact details, draft copy, and content gaps
- `docs/SEO.md` — search strategy, page map, metadata, schema, and SEO guardrails
- `docs/DECISIONS.md` — chronological client feedback and decisions

When these documents conflict, use this order:

1. The user's current instruction
2. The latest active entry in `docs/DECISIONS.md`
3. Confirmed facts in `docs/CONTENT.md`
4. The current repository implementation
5. The current public website or inherited starter content

Never turn a `[CONFIRM]`, draft, reference-site feature, or assumption into a public claim.

## Current Project Brief

### Business

- Public name: Strother Built Construction
- Primary contact: Joshua “Josh” Strother
- Existing site: `https://www.strotherbuiltconstruction.com/`
- Market: Greater Des Moines / Central Iowa
- Goal: attract more qualified, higher-end remodeling projects

### Client-confirmed primary services

1. Kitchen remodeling
2. Bathroom remodeling
3. Basement finishing
4. Whole-home remodeling
5. Home additions

These five services must drive the homepage hierarchy. Other legitimate services may eventually appear deeper on a Services page, but they must not receive equal homepage weight.

**Handyman services must be removed entirely.** Do not surface handyman language in navigation, copy, metadata, schema, internal links, or imagery.

### Messaging direction

The client specifically wants less keyword-heavy copy and more emphasis on:

- Trust
- Quality
- Craftsmanship
- Professional project experience
- The finished work

Write for a homeowner first. Optimize naturally afterward.

### Visual direction

The client referenced:

- Compelling Homes — `https://www.compellinghomes.com/`
- Zenith Design + Build — `https://zenithdesignbuild.com/`

Use them as market-positioning references, not templates. Borrow principles such as strong project photography, whitespace, restrained typography, clear process/trust content, and prominent project proof. Do not copy their layouts, copy, assets, awards, process, warranty, or design-build claims.

## Phase Boundary

The current authorized phase is a **homepage concept/mockup**.

Allowed now:

- Homepage information architecture
- Visual design system
- Responsive homepage implementation
- Draft messaging clearly grounded in known facts
- Placeholder treatment for missing assets or facts
- Demo-safe interactions

Not authorized yet:

- Replacing or modifying the live Wix website
- Domain, DNS, hosting, email, or analytics changes
- A production contact form that sends real submissions
- Full service-page implementation
- CMS integration
- SEO migration or redirects
- Publishing claims not confirmed by the client
- Copying content or assets from reference competitors

If the user later expands the scope, update `PROJECT.md`, the relevant source-of-truth documents, and `DECISIONS.md` before implementing it.

## Design Principles

### 1. Make the work the hero

This is a remodeling company. Authentic completed-project photography should do more selling than decorative graphics.

- Prefer large, editorial image treatments.
- Use real Strother projects when available.
- Do not use competitor photography.
- If stock images are temporarily necessary, label them as mockup-only and make replacement obvious.
- Avoid imagery that makes the company feel like a handyman or small repair service.

### 2. Premium through restraint

The existing orange and black identity can remain recognizable, but orange should be an accent rather than a dominant page background.

Prefer:

- Warm off-white and white surfaces
- Charcoal text and dark sections
- Controlled use of brand orange for actions and small accents
- Strong typography, whitespace, and image composition
- Square or subtly rounded geometry

Avoid:

- Giant orange slabs
- Generic luxury clichés
- Glassmorphism, glowing gradients, or SaaS styling
- Endless identical cards
- Excessive pills, badges, icons, and motion
- Overdesigned effects that compete with project photography

### 3. Clear conversion path

The homepage should lead a qualified homeowner toward discussing a project.

- One dominant CTA system, using a provisional label such as “Discuss Your Project” until approved
- A secondary path to view projects/work
- CTAs placed after value, proof, or service context—not scattered mechanically
- No unsupported urgency or response-time promise

### 4. Trust must be specific

Use confirmed proof where it resolves risk for a homeowner considering a substantial remodel.

Potential proof includes:

- Authentic project images
- Real testimonials with permission
- Confirmed licensing/insurance wording
- Confirmed years of experience
- A real project process
- Financing information, if still offered and confirmed

Do not fabricate a process, awards, guarantees, review counts, budgets, timelines, or credentials.

### 5. Mobile-first composition

At small widths:

- Preserve the visual impact of the hero without hiding the H1 or CTA.
- Choose image focal points deliberately.
- Stack sections based on communication priority, not desktop order alone.
- Keep tap targets at least 44px high where practical.
- Do not rely on hover to reveal services or project information.
- Avoid horizontal overflow and oversized headings.

## Content Rules

- Use “basement finishing” as the client’s preferred primary-service label unless later feedback changes it.
- Use “whole-home remodeling” consistently.
- Do not call Strother a design-build firm unless the client confirms that operating model.
- Do not say “luxury,” “award-winning,” “family-owned,” “best,” “top-rated,” or “custom home builder” without confirmation.
- Do not repeat city/service keywords unnaturally.
- Do not revive “Make Your Dream Home a Reality” unless the client explicitly keeps it.
- Do not reuse the current site's claims about schedules, financing, years, licensing, insurance, or service areas without checking their status in `CONTENT.md`.
- Do not use the reference companies’ statistics, promises, pricing language, awards, testimonials, or process.

## Homepage Communication Strategy

The homepage should generally answer, in this order:

1. What kind of work does Strother want?
2. Where does it serve?
3. What does the finished work look like?
4. Why should a homeowner trust the company with a major remodel?
5. Which five project types are the focus?
6. What is it like to work with Strother?
7. What should the visitor do next?

The working section order in `PROJECT.md` is authoritative. Do not add filler sections merely to make the page longer.

## SEO Rules

- Optimize around real homeowner intent and the five priority services.
- Keep the homepage primarily about home remodeling in the Des Moines metro.
- Give each future service page a distinct purpose; do not create doorway pages.
- Do not hide keyword blocks or repeat long city lists for ranking purposes.
- Use semantic headings and descriptive internal links.
- Keep visible NAP details consistent with structured data.
- Do not include handyman terms in metadata or schema.
- Do not add review/rating schema unless the visible content and source satisfy current requirements.

## Engineering Rules

- Inspect `package.json`, the route tree, and existing components before changing architecture.
- Respect existing framework and package versions unless the user asks for a migration.
- Prefer server rendering/server components where appropriate.
- Keep client-side JavaScript purposeful.
- Reuse reliable systems, not another client’s identity.
- Optimize images with the framework’s image tooling when available.
- Preserve semantic HTML, keyboard access, visible focus states, contrast, form labels, and reduced-motion behavior.
- Do not install dependencies for effects that can be implemented cleanly with the existing stack.
- Do not configure real form recipients or production environment variables during the concept phase.

## Legacy and Contamination Audit

If this repository was cloned or repurposed, search the entire codebase for:

- Previous client names, domains, emails, phone numbers, cities, slogans, and service lists
- Old logos, favicons, OG images, photos, reviews, and staff names
- Old metadata, JSON-LD, schema, analytics IDs, form recipients, and environment keys
- Old accessibility labels and image alt text
- Reference-company names or copied text: “Compelling Homes” and “Zenith Design + Build”

Also search for outdated Strother positioning that conflicts with the new brief:

- `handyman`
- `repair your damaged drywall`
- equal homepage promotion of concrete, deck, demolition, hauling, or exterior work
- keyword-stuffed general-contractor copy

Preserve useful architecture only after client identity and behavior are verified.

## Verification

Before reporting a homepage task complete:

1. Run the repository’s lint, type-check, test, and build commands that apply.
2. Inspect the homepage at mobile, tablet, laptop, and wide-desktop widths.
3. Verify navigation, CTAs, focus states, image crops, and form/demo behavior.
4. Search for legacy-client content and prohibited handyman language.
5. Confirm that all public claims exist in `CONTENT.md` and have an appropriate status.
6. Confirm no competitor content or assets were copied.
7. Report any missing assets or facts rather than filling them with inventions.

## Definition of Done for the Current Phase

The concept is ready to show Josh when:

- It clearly positions Strother around the five priority remodeling services.
- It feels visually credible beside the client’s references without imitating them.
- Authentic work—or clearly marked mockup imagery—is the visual focus.
- The page emphasizes quality, trust, and craftsmanship without unsupported claims.
- Handyman positioning is gone.
- Mobile and desktop both feel intentional.
- No live-site, domain, form-routing, or production changes have been made.
- Remaining confirmation items are documented rather than guessed.
