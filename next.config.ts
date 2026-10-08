import type { NextConfig } from "next";



const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && process.env.VERCEL !== "1";
// Plain static export (no basePath) for self-hosted zips / artifact-style hosting.
const isPlainStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: isGitHubPages || isPlainStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves project sites under /<repo-name>/ — match the repo name here.
  basePath: isGitHubPages ? `/${process.env.PAGES_REPO_NAME || "rida-birthday"}` : "",
  assetPrefix: isGitHubPages ? `/${process.env.PAGES_REPO_NAME || "rida-birthday"}/` : "",
  allowedDevOrigins: [
    "10.165.23.136",
    "10.165.23.136:3000",
    "172.26.64.1",
    "172.26.64.1:3000",
    "localhost",
    "localhost:3000",
  ],
};

export default nextConfig;
