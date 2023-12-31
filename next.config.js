/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
};
