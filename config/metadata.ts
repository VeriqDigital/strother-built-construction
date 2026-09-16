import type { Metadata } from "next";
import { siteConfig } from "./site";
export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: "/kitchen.jpg",
          width: 2048,
          height: 1536,
          alt: "A bright kitchen from the Strother Built Construction project collection",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/kitchen.jpg"],
    },
  };
}
