/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Arcitect' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Arcitect/' : '',
}

export default nextConfig