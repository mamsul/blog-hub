/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/post',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
