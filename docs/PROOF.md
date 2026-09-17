# Homepage proof sources

## Confirmed for this mockup

The September 16, 2026 client brief explicitly authorizes the following proof. This supersedes earlier documentation that deferred all awards and testimonials.

- **Google:** 4.9 rating, 28 reviews, supplied as verified in the client brief and independently checked on the public Google Maps listing on September 16, 2026. These are a dated snapshot, not a live feed. Update `googleReviews` in `data/proof.ts` when new evidence is supplied. Its `url` uses Google's Maps search endpoint with the business name and location, verified to resolve to the correct single business listing with the review summary and customer reviews visible. No place ID or share token is invented.
- **2025 CommunityVotes Ankeny:** Gold Winner — Kitchen Remodeling; Gold Winner — Bathroom Remodeling; Top Pick — Home Renovation; Top Pick — General Contractor. All four are legible in the supplied `public/awards.jpg`, which is retained as evidence and not displayed on the homepage. [CommunityVotes also lists the General Contractors result](https://ankeny.communityvotes.com/2024/12/home-builders-and-contractors/general-contractors).

## Curated testimonial excerpts

Source: [Strother's published testimonials](https://www.strotherbuiltconstruction.com/testimonials), read September 16, 2026. Exact excerpts and displayed attribution are stored in `data/proof.ts`.

- **Rich:** first complete sentence of the living-room remodeling testimonial. Display context comes directly from that sentence. The later scheduling statement is not used.
- **Shelly:** the contiguous communication/no-surprises excerpt from the first sentence. Original lowercase wording and punctuation are retained. No project type, surname, date, star rating, or platform is inferred.
- Both are presented as customer testimonials, not relabeled as Google reviews. The homepage now links to the internal `/testimonials` page; its quotation citations point to the corresponding internal anchors. No visible link sends visitors to the old website.

## Internal testimonials page

The subsequent client request authorizes a concise internal page with 6–8 genuine testimonials. Seven excerpts are stored in `data/testimonials.ts`; the approved homepage quotes remain unchanged.

- **rickhawk22:** Google display name preserved exactly. The public review describes finishing a basement; the featured excerpt is the complete sentence about timeline/progress communication. Read the expanded review directly on Google Maps on September 16, 2026. It is presented as one customer's experience, not a company-wide scheduling promise. The local audit text is in ignored `.qa/google-review-evidence.txt`.
- **Rich:** first two sentences of the living-room review.
- **Shelly:** contiguous excerpt on communication and cleanup; retains the original lowercase opening and omits the garbled opening phrase rather than guessing a rewrite.
- **Chase:** two complete sentences on professionalism, responsiveness, and completing the work correctly.
- **David:** the separate reliability testimonial, not the construction/handy-work testimonial also attributed to David.
- **Neiko:** the workmanship testimonial.
- **Marque:** the respect-for-home/cleanup testimonial.

The six website excerpts are verified against the published Strother testimonial source above and remain word-for-word. They are labeled customer testimonials, not Google reviews. Topic labels describe the quoted content; no unknown kitchen, bathroom, whole-home scope, surname, date, or rating is assigned. The TV-mounting, broken-door, patio, and handy-work reviews are excluded. The page is static, without a carousel, filters, or a review archive.

## Scope boundaries

- No Review or AggregateRating schema; existing factual business schema is unchanged.
- No licensing, insurance, years of experience, financing, warranty, or scheduling guarantee added.
- No competitor testimonials, stock projects, raw trophy display, carousel, or review-feed integration.
- Keep the approved hero, photo collection, typography, palette, service list, CTA, and footer. Existing local edits removing the hero-bottom line and intro eyebrow are preserved.
