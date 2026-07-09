import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles build output natively — no standalone needed.
  async rewrites() {
    // Serve the password-gated competitive-analysis dashboard at /admin.
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
