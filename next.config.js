/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["placekitten.com", "http://localhost"],
  },
};

module.exports = nextConfig;
