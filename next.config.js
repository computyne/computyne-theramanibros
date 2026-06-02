/** @type {import('next').NextConfig} */

const redirects = require('./redirects');

const nextConfig = {
  reactStrictMode: false,

  async redirects() {
    return redirects;
  },
};

module.exports = nextConfig;