import Container from "@/components/ui/Container";
import { googleReviews, recognition } from "@/data/proof";

export default function CredibilityStrip() {
  return (
    <section className="credibility-strip" aria-label="Reviews and recognition">
      <Container>
        <div className="credibility-rail">
          <div className="review-summary">
            <p className="review-rating">
              {googleReviews.rating} <span aria-hidden="true">★</span>
              <span className="sr-only">out of 5</span>
            </p>
            <p>Google Reviews</p>
            <span className="review-count">{googleReviews.count} reviews</span>
          </div>
          <div className="recognition-summary">
            <p className="recognition-source">
              {recognition.organization} · {recognition.year}
            </p>
            <ul className="recognition-list">
              {recognition.awards.map((award) => (
                <li key={award.category}>
                  <span className="recognition-level">{award.level}</span>
                  <span>{award.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
