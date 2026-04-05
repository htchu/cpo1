import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/en/about",
        permanent: false,
      },
      {
        source: "/schedule",
        destination: "/en/schedule",
        permanent: false,
      },
      {
        source: "/resources",
        destination: "/en/resources",
        permanent: false,
      },
      {
        source: "/feedback",
        destination: "/en/feedback",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
