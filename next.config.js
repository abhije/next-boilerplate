/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['images.prismic.io'],
        unoptimized: true,
    },
}

module.exports = nextConfig
