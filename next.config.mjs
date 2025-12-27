/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: true,
    legacyBrowsers: false,
  },
  // Ensures only modern JS is emitted and legacy polyfills are not included
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
