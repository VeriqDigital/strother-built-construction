import Arrow from "@/components/ui/Arrow";
import Link from "next/link";
import { testimonials } from "@/data/proof";

export default function TestimonialsSection() {
  return (
    <div className="homeowner-stories">
      <div className="stories-heading">
        <p className="eyebrow">In our clients’ words</p>
        <h2>Homeowners tell the story better.</h2>
      </div>
      <div className="testimonial-layout">
        <figure className="testimonial-featured">
          <blockquote cite={`/testimonials#${testimonials.featured.id}`}>
            <p>“{testimonials.featured.quote}”</p>
          </blockquote>
          <figcaption>
            <span>{testimonials.featured.name}</span>
            <span>{testimonials.featured.context}</span>
          </figcaption>
        </figure>
        <div className="testimonial-aside">
          <figure className="testimonial-supporting">
            <blockquote cite={`/testimonials#${testimonials.supporting.id}`}>
              <p>“{testimonials.supporting.quote}”</p>
            </blockquote>
            <figcaption>
              <span>{testimonials.supporting.name}</span>
            </figcaption>
          </figure>
          <Link className="text-link" href="/testimonials">
            Read More Testimonials <Arrow diagonal />
          </Link>
        </div>
      </div>
    </div>
  );
}
