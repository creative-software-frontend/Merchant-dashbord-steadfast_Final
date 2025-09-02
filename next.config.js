// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: process.env.PORT || 8800, // fallback to 4000
  },
};

module.exports = withNextIntl(nextConfig);
