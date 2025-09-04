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
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
  },
  // Configure webpack to handle PDF files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/files/',
          outputPath: 'static/files/',
        },
      },
    });
    return config;
  },
})