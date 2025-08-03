import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-1522337360788-8b13dee*",
      },
      {
        protocol: "https",
        hostname: "www.nefhairdydy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
