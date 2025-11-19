/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.ophim1.cc',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim2.cc',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim.live',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ophim.cc',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'ophim.cc',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'ophim10.cc',
                pathname: '/uploads/movies/**',
            },
            {
                protocol: 'https',
                hostname: 'static.ophim.co',
                pathname: '/uploads/movies/**',
            }
        ],
    },
}

module.exports = nextConfig
