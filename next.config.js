/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['msw/browser'] = false
    }
    return config
  },
}

module.exports = nextConfig
