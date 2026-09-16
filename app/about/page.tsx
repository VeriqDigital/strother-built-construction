import Image from "next/image";
import { pageMetadata } from "@/config/metadata";
import Section from "@/components/ui/Section";
import WhyStrother from "@/components/sections/WhyStrother";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
export const metadata = pageMetadata(
  "About Strother",
  "Meet Strother Built Construction: residential remodeling focused on kitchens, bathrooms, basements, whole-home renovations, and additions in Greater Des Moines.",
);
export default function AboutPage() {
  return (
    <main id="main-content">
      <Section className="page-intro">
        <p className="eyebrow">Strother Built Construction</p>
        <h1>
          Your home deserves
          <br />
          careful consideration.
        </h1>
        <p className="page-lead">
          A focus on the spaces you live in, the details you notice, and the
          possibilities you see in your home.
        </p>
      </Section>
      <Section tone="white">
        <div className="about-story">
          <div className="photo">
            <Image
              src="/bathroom.jpg"
              alt="Bathroom with warm tile, a wide white vanity, and black accents"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="eyebrow">Meet Strother</p>
            <h2>
              Remodeling with
              <br />
              home at its heart.
            </h2>
            <p>
              Joshua Strother is your contact at Strother Built Construction,
              serving homeowners in the Greater Des Moines area.
            </p>
            <p>
              Our focus is residential remodeling: kitchens, bathrooms, basement
              finishing, whole-home remodeling, and additions. These are the
              projects that change how a home feels and how you live in it.
            </p>
            <p>
              Explore the work, bring your ideas, and tell us what you would
              like your home to become.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="stone">
        <WhyStrother />
      </Section>
      <ContactCtaSection />
    </main>
  );
}
