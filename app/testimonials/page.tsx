import { pageMetadata } from "@/config/metadata";
import { googleReviews } from "@/data/proof";
import { customerTestimonials } from "@/data/testimonials";
import Section from "@/components/ui/Section";
import Arrow from "@/components/ui/Arrow";

export const metadata = pageMetadata(
  "Customer Testimonials",
  "Read Strother Built Construction customer experiences with remodeling, communication, workmanship, and care for the home.",
);

export default function TestimonialsPage() {
  const [featured, ...supporting] = customerTestimonials;

  return (
    <main id="main-content">
      <Section className="page-intro testimonials-intro">
        <p className="eyebrow">Customer stories</p>
        <h1>Homeowners tell the story better.</h1>
        <div className="testimonials-rating">
          <p>
            <span className="review-rating">{googleReviews.rating}</span>
            <span>Google rating</span>
          </p>
          <p>{googleReviews.count} Google reviews</p>
          <a
            className="text-link"
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Google Reviews <Arrow diagonal />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </Section>
      <Section tone="white" className="testimonials-collection">
        <h2 className="sr-only">Selected customer testimonials</h2>
        <figure className="review-feature" id={featured.id}>
          <figcaption className="review-attribution">
            <p className="eyebrow">{featured.topic}</p>
            <div>
              <span>{featured.name}</span>
              <span>{featured.source} · Excerpt</span>
            </div>
          </figcaption>
          <blockquote cite={googleReviews.url}>
            <p>“{featured.quote}”</p>
          </blockquote>
        </figure>
        <div className="review-editorial-grid">
          {supporting.map((review) => (
            <figure className="review-excerpt" id={review.id} key={review.id}>
              <p className="eyebrow">{review.topic}</p>
              <blockquote>
                <p>“{review.quote}”</p>
              </blockquote>
              <figcaption>
                <span>{review.name}</span>
                <span>{review.source} · Excerpt</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </main>
  );
}
