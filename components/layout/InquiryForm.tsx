"use client";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";
type Props = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  hasSubmitted?: boolean;
};
export default function InquiryForm({ onSubmit, hasSubmitted = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const confirmation = useRef<HTMLDivElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(event);
    setSubmitted(true);
    requestAnimationFrame(() => confirmation.current?.focus());
  }
  if (submitted || hasSubmitted)
    return (
      <div
        className="form-success"
        role="status"
        tabIndex={-1}
        ref={confirmation}
      >
        <p className="eyebrow">Preview complete</p>
        <h3>Your project starts with a conversation.</h3>
        <p>
          This is a demonstration. Your details have not been sent or saved.
        </p>
        <a className="text-link" href={siteConfig.contact.emailHref}>
          Email Strother to get in touch <Arrow />
        </a>
      </div>
    );
  return (
    <form onSubmit={submit} className="inquiry-form">
      <p className="demo-note">
        Concept preview · This form does not send or save your details.
      </p>
      <div className="form-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Your full name"
          />
        </label>
        <label>
          Email <span aria-hidden="true">*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone <span className="optional">(optional)</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
          />
        </label>
        <label>
          Project location <span aria-hidden="true">*</span>
          <input
            name="city"
            autoComplete="address-level2"
            required
            placeholder="City or community"
          />
        </label>
        <label>
          Project type <span aria-hidden="true">*</span>
          <select name="projectType" required defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="not-sure">I’d like to discuss my options</option>
          </select>
        </label>
        <label>
          Desired timeline <span className="optional">(optional)</span>
          <select name="timeline" defaultValue="">
            <option value="">Select a timeframe</option>
            <option>Just exploring</option>
            <option>Within 3 months</option>
            <option>3–6 months</option>
            <option>6–12 months</option>
            <option>More than a year away</option>
          </select>
        </label>
      </div>
      <label>
        Tell us about your project <span aria-hidden="true">*</span>
        <textarea
          name="projectDetails"
          rows={4}
          required
          placeholder="What would you like to change about your home?"
        />
      </label>
      <div className="form-bottom">
        <p>* Required fields</p>
        <Button type="submit">
          Preview Inquiry <Arrow />
        </Button>
      </div>
    </form>
  );
}
