import { resolve } from 'path';
import nodeLibsBrowser from 'node-libs-browser';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false, // This will ignore async_hooks.
        // If you need an alternative, use one of the following:
        // async_hooks: nodeLibsBrowser['async_hooks'], // Ensure nodeLibsBrowser['async_hooks'] is a valid string or path.
        // async_hooks: 'path-to-your-alternative-async_hooks', // This should be a valid path string.
        // async_hooks: ['path-to-alternative-1', 'path-to-alternative-2'], // This should be an array of valid path strings.
      };
    }
    return config;
  },
};

export default nextConfig;
