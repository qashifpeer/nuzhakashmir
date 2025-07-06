/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },

  async redirects() {
    return [
      {
        // Redirect all internal paths to www (if domain config supports it)
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nuzhakashmir.com',
          },
        ],
        destination: 'https://www.nuzhakashmir.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
