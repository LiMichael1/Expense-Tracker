/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false, // This can be updated to true once team confirms they're happy with these routes
      },
    ]
  }
}

module.exports = nextConfig
