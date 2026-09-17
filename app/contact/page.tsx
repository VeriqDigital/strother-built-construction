import { pageMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import InquiryForm from "@/components/layout/InquiryForm";
import LocationSection from "@/components/sections/LocationSection";
export const metadata = pageMetadata(
  "Start Your Project",
  "Tell Strother Built Construction about your kitchen, bathroom, basement, whole-home remodel, or addition in the Greater Des Moines area.",
);
export default function ContactPage() {
  return (
    <main id="main-content">
      <Section className="contact-section">
        <div className="contact-grid">
          <div className="contact-copy">
            <h1>
              What’s next
              <br />
              for your home?
            </h1>
            <p>
              Share a little about your space, your ideas, and where you are in
              the planning. It’s a place to begin.
            </p>
            <div className="contact-info">
              <span className="eyebrow">Reach Joshua Strother</span>
              <a href={siteConfig.contact.emailHref}>
                {siteConfig.contact.email}
              </a>
              <p>Greater Des Moines &amp; Central Iowa</p>
            </div>
          </div>
          <div className="contact-form-panel">
            <h2>Tell us about your project.</h2>
            <InquiryForm />
          </div>
        </div>
      </Section>
      <Section tone="white">
        <LocationSection />
      </Section>
    </main>
  );
}
