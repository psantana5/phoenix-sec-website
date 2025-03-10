/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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
  // Add Vercel Speed Insights and Analytics configuration
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  speedInsights: {
    enabled: true,
  },
}
module.exports = nextConfig