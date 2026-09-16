import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="Strother Built Construction home">
              <Image
                src="/strother-built-logo.png"
                alt="Strother Built Construction"
                width={600}
                height={125}
                sizes="260px"
              />
            </Link>
            <p>
              Thoughtful spaces.
              <br />
              Strother built.
            </p>
            <span>Greater Des Moines &amp; Central Iowa</span>
          </div>
          <nav aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Remodeling services">
            <p className="footer-label">Remodeling</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/services#${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <p className="footer-label">Let’s talk about your home</p>
            <a href={siteConfig.contact.emailHref}>
              {siteConfig.contact.email}
            </a>
            <Link className="text-link" href="/contact">
              Start Your Project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Strother Built Construction</span>
          <span>Website concept · Draft for review</span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
}
