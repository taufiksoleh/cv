/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cv',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
