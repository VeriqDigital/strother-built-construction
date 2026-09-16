import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyStrother from "@/components/sections/WhyStrother";
import LocationSection from "@/components/sections/LocationSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Section id="introduction">
        <AboutIntro />
      </Section>
      <Section id="our-work" tone="white">
        <ProjectShowcase />
      </Section>
      <Section id="services">
        <ServicesSection />
      </Section>
      <Section tone="stone">
        <WhyStrother />
      </Section>
      <Section id="service-area">
        <LocationSection />
      </Section>
      <ContactCtaSection />
    </main>
  );
}
