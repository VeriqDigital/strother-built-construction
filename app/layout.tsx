import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
import { services } from "@/data/services";
import "./globals.css";
const heading = localFont({
  src: "../public/fonts/archivo-latin.woff2",
  weight: "100 900",
  variable: "--font-heading",
  display: "swap",
});
const body = localFont({
  src: "../public/fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  variable: "--font-body",
  display: "swap",
});
const title = "Home Remodeling in Des Moines, IA | Strother Built Construction";
export const metadata: Metadata = {
  ...pageMetadata(title, siteConfig.description),
  metadataBase: new URL(siteConfig.previewOrigin),
  title: { default: title, template: "%s | Strother Built Construction" },
  applicationName: siteConfig.name,
  robots: { index: false, follow: false },
  // Production canonicals intentionally deferred until launch approval.
};
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: siteConfig.name,
  url: siteConfig.businessUrl,
  email: siteConfig.contact.email,
  description: siteConfig.description,
  areaServed: { "@type": "Place", name: "Greater Des Moines, Iowa" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential remodeling",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title },
    })),
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
