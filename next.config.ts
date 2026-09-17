import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the client concept free of Next.js's floating development control.
  devIndicators: false,
  images: {
    qualities: [75, 100],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
