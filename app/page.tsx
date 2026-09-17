import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyStrother from "@/components/sections/WhyStrother";
import LocationSection from "@/components/sections/LocationSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <CredibilityStrip />
      <Section id="our-work" tone="white" className="home-work">
        <ProjectShowcase />
      </Section>
      <Section id="homeowner-stories" tone="stone" className="home-proof">
        <TestimonialsSection />
      </Section>
      <Section id="services">
        <ServicesSection />
      </Section>
      <Section id="introduction" tone="white">
        <AboutIntro />
      </Section>
      <Section tone="stone" className="home-approach">
        <WhyStrother condensed />
      </Section>
      <Section id="service-area">
        <LocationSection />
      </Section>
      <ContactCtaSection />
    </main>
  );
}
