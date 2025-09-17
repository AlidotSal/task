import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://s2.coinmarketcap.com/static/img/coins/64x64/**"),
    ],
  },
};

export default nextConfig;
