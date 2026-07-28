/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ['/services', '/doctors', '/promotions', '/contact', '/store', '/keystatic'].map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }))
  },
  outputFileTracingIncludes: {
    '/**': ['./content/**/*.json'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
