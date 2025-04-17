/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for sitemap support
       images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname : 'cdn.sanity.io',
                port : ''
            }
        ]
    }
    
}

module.exports = nextConfig
