# Strother concept — implementation and verification

## Final mockup cleanup

- Made gallery photographs non-clickable; removed raw-image links, the “View photograph” overlays, and their hover zoom. No project-detail route exists, and none was added.
- Preserved the blue-kitchen featured image, finished shower, investment image, and all approved composition, typography, colors, spacing, navigation, services, CTA, and footer. Rechecked the available photo collection and retained the intro image because no stronger unused finished-interior alternative was available.
- Audited all four public routes, application copy, metadata, schema, and image sources. No inherited client branding, cleaning/handyman positioning, competitor content, or unsupported factual claims found. Internal source documents retain the client's removal instructions and historical references.
- Reviewed responsive screenshots at 375, 768, and 1440px, including navigation, image crops, gallery, services, closing CTA, and footer. Verified no horizontal overflow or browser exceptions, no raw-image links, no new tab on gallery click, working mobile navigation, service navigation, and closing inquiry CTA.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` passed. Screenshots and the check report are in ignored `.qa/cleanup-*` files.

## Focused polish follow-up

- Preserved the approved homepage structure, key headlines, warm palette, asymmetric gallery, five services, local section, and closing CTA.
- Audited the local collection and 34 published gallery photographs; added four authentic finished-space images and recorded source URLs and crop decisions in `PHOTOGRAPHY.md`. Replaced the brick-look tub close-up, repeated intro bathroom, and empty-basement gallery image. Kept photo reuse limited to the existing white-kitchen bookends and a tighter blue-kitchen view.
- Identified the floating circle as the Next.js development indicator and disabled it with the documented `devIndicators: false` option. Verified its control is absent in the browser.
- Increased logo width while retaining the original 96px desktop / 80px mobile header heights. Refined service typography, row spacing, visible title links, and hover/focus feedback. Removed repetitive homepage wording without adding claims.
- Rechecked all four routes at 375, 768, 1440, and 1920 pixels. Image loading, overflow, one H1, navigation, service-anchor destinations, modal focus, and demo submission checks passed. Reviewed homepage crops, hero legibility, service focus, logo presence, and footer alignment at the requested widths.
- `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `git diff --check` passed after the polish changes.

## Delivered

- Photography-led homepage with a full-width kitchen hero, editorial introduction, asymmetric project gallery, five-service presentation, craftsmanship section, local service-area statement, and closing project invitation.
- Coherent Services, About, and Contact routes. Each primary service has a working anchor on `/services`; no thin dedicated pages or invented project case studies.
- Supplied Strother photography and logo; properly encoded logo and crest favicon. No competitor imagery or generated project photographs.
- Warm ivory, charcoal, and restrained orange. Locally bundled Archivo and Source Sans 3 with their SIL Open Font Licenses.
- Shared inquiry form and reusable modal state. Native dialog supplies focus containment; Escape, close button, backdrop dismissal, scroll locking, and focus restoration are supported. Form success explicitly states that nothing was sent or saved.
- Route metadata, OpenGraph/Twitter images, a single H1 per route, descriptive alt text, and GeneralContractor schema limited to confirmed facts. Preview noindex protection is consistent across metadata, HTTP headers, and robots.txt.

## Verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; all four routes prerendered successfully.
- Automated Chromium checks on `/`, `/services`, `/about`, and `/contact` at 375, 768, 1366, and 1920 pixels: all 16 combinations passed. Checked HTTP responses, horizontal overflow, image loading/alt text, one H1, noindex metadata, five schema offerings, and browser exceptions.
- Reviewed responsive screenshots, including the mobile menu, mobile contact form, desktop About page, and full tablet/wide-desktop homepages. Corrected footer-logo contrast and consecutive repeated photography after visual review.
- Verified inquiry opening, keyboard containment, Escape dismissal, focus restoration, successful local-only preview, zero submission POST requests, mobile menu dismissal/navigation, and a cross-route service anchor positioned below the header.
- Source audit: no inherited client names, cleaning services, former contact details, or excluded service positioning in application content, data, metadata, package identity, or image labels. Source-of-truth documents retain the client's removal instructions and historical decision record.
- `git diff --check`: passed.

The interactive browser connector was unavailable. Responsive verification used a temporary Playwright installation and headless Chromium. Local screenshots and the machine-readable check report are in ignored `.qa/`; no QA dependency was added to the application.

## Client information still needed

1. Actual project process and responsibilities, including scope, planning, communication, and final walkthrough.
2. Approved exact testimonial text, attribution, source, and reuse permission.
3. Company origin, team story, verified credentials, and differentiators.
4. Reconfirmation of phone, hours, individual service-area cities, and social/Google Business Profile URLs.
5. Approved project scopes, locations, and stories, especially whole-home renovations and additions.
6. Final copy, CTA, brand palette approval, and any secondary services to retain.

Detailed process, testimonials, statistics, awards, credentials, financing, secondary service claims, and phone are intentionally omitted pending confirmation. The provided award graphic is not used. No budget selector, real inquiry delivery, CMS, production canonical/sitemap, indexing, publishing, or infrastructure changes were introduced. These require a later approved phase.
