/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};
module.exports = {
  nextConfig,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    SPORTS_URL: process.env.SPORTS_URL,
    SPORTS_APIKEY: process.env.SPORTS_APIKEY,
    BANK_API_URL: process.env.BANK_API_URL,
    BANK_TOKEN: process.env.BANK_TOKEN,
  },
};
