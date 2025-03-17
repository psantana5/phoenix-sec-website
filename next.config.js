/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    reactStrictMode: true,
    swcMinify: true,
  },
  async redirects() {
    return [
      {
        source: '/research',
        destination: '/ctf-research',
        permanent: true,
      },
    ]
  },
  // Remove the incorrect analyticsId and speedInsights configuration
};
module.exports = nextConfig