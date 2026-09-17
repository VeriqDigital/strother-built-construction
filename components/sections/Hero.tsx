import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Arrow from "@/components/ui/Arrow";
import ProjectInquiry from "@/components/layout/ProjectInquiry";
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/kitchen.jpg"
        alt="Strother kitchen with white cabinetry, an island for gathering, and warm wood flooring"
        fill
        sizes="100vw"
        preload
      />
      <div className="hero-shade" />
      <Container className="hero-content">
        <p className="eyebrow">
          <span className="accent-rule" />
          Home remodeling · Des Moines, Iowa
        </p>
        <h1 id="hero-title">
          Built around
          <br />
          the way you live.
        </h1>
        <p className="hero-description">
          Kitchens. Bathrooms. Basements.
          <br />
          Whole-home remodeling and additions.
        </p>
        <div className="hero-actions">
          <ProjectInquiry />
          <Link href="#our-work" className="text-link text-link-light">
            Explore Our Work <Arrow />
          </Link>
        </div>
      </Container>
    </section>
  );
}
