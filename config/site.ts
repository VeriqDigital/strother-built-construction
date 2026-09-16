export const siteConfig = {
  name: "Strother Built Construction",
  description:
    "Explore kitchen, bathroom, basement, whole-home remodeling, and home additions from Strother Built Construction in the Greater Des Moines area.",
  businessUrl: "https://www.strotherbuiltconstruction.com",
  previewOrigin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contact: {
    email: "info@strotherbuiltconstruction.com",
    emailHref: "mailto:info@strotherbuiltconstruction.com",
  },
  serviceArea: "Greater Des Moines & Central Iowa",
} as const;
export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#our-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
export const primaryCta = {
  label: "Start Your Project",
  modal: "service",
} as const;
