/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    SPORTS_URL:process.env.SPORTS_URL,
    SPORTS_APIKEY:process.env.SPORTS_APIKEY,
  },
};
