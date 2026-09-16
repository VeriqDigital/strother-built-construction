# Strother concept — implementation and verification

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
