/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Technology/business-phone-systems',
        destination: '/Technology/Business-phone-systems',
        permanent: true,
      },
      {
        source: '/Technology/business-phone-systems/:path*',
        destination: '/Technology/Business-phone-systems/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
