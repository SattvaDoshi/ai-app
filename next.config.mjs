// next.config.mjs
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(new NodePolyfillPlugin());
    config.resolve.fallback = {
      async_hooks: false, // Add any other Node.js core modules as needed
    };
    return config;
  },
};

export default nextConfig;
