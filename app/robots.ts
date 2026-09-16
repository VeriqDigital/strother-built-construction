import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  // The sales concept is not a public production website.
  return { rules: { userAgent: "*", disallow: "/" } };
}
