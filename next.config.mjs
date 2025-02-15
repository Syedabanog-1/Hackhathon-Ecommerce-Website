/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'cdn.sanity.io'], // Combine both domains here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: 'api/portraits/**',
      },
    ], 
  },
};
export default nextConfig;
