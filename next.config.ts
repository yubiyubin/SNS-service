import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

  async rewrites() {
    return [
      {
        source: '/upload/:slug',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/upload/:slug`, // Matched parameters can be used in the destination
      },
    ];
  },
  turbopack: {
    root: '/Users/user/Desktop/YUBIN_DEVELOP/SNS_service/z-com',
  },
  serverExternalPackages: ['msw'],
};

export default nextConfig;
