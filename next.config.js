/** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // Your existing Next.js configuration goes here
  // For example:
  // reactStrictMode: true,
})