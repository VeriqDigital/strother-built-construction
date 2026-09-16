import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/config/metadata";
import { services } from "@/data/services";
import Section from "@/components/ui/Section";
import Arrow from "@/components/ui/Arrow";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
export const metadata = pageMetadata(
  "Remodeling Services in Des Moines",
  "Explore kitchen remodeling, bathroom remodeling, basement finishing, whole-home remodeling, and home additions with Strother Built Construction.",
);
export default function ServicesPage() {
  return (
    <main id="main-content">
      <Section className="page-intro">
        <p className="eyebrow">Residential remodeling · Greater Des Moines</p>
        <h1>
          Room for the life
          <br />
          you want to live.
        </h1>
        <p className="page-lead">
          Five remodeling services. One starting point: what would make your
          home work better for you?
        </p>
      </Section>
      <div className="services-banner">
        <Image
          src="/kitchen.jpg"
          alt="White kitchen cabinetry and a central island with black seating"
          fill
          sizes="100vw"
          preload
        />
      </div>
      <Section>
        <div className="service-details">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug}>
              <span className="service-number">0{index + 1}</span>
              <h2>{service.title}</h2>
              <div>
                <p>{service.detail}</p>
                <Link className="text-link" href="/contact">
                  Discuss Your{" "}
                  {service.title === "Home Additions" ? "Addition" : "Remodel"}{" "}
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <ContactCtaSection />
    </main>
  );
}
