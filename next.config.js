/** @type {import('next').NextConfig} */
require("dotenv").config;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  env: {
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_PUBLIC_KEY: process.env.YOUR_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
