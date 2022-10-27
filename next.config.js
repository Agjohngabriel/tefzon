/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};
