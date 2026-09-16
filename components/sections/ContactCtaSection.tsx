import Image from "next/image";
import Container from "@/components/ui/Container";
import ProjectInquiry from "@/components/layout/ProjectInquiry";
import { siteConfig } from "@/config/site";
export default function ContactCtaSection() {
  return (
    <section className="closing-cta">
      <Image
        src="/kitchen.jpg"
        alt="A light-filled kitchen with space to cook, dine, and gather"
        fill
        sizes="100vw"
      />
      <div className="cta-shade" />
      <Container>
        <p className="eyebrow">Let’s begin with your home</p>
        <h2>
          Ready to rethink
          <br />
          your home?
        </h2>
        <p>
          Tell us what you’re planning.
          <br />
          Let’s talk about what comes next.
        </p>
        <ProjectInquiry />
        <a className="cta-email" href={siteConfig.contact.emailHref}>
          {siteConfig.contact.email}
        </a>
      </Container>
    </section>
  );
}
