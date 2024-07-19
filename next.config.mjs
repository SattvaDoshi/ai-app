/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          // Add this line for `node:async_hooks`:
          async_hooks: require.resolve('node-libs-browser/mock/async_hooks'),
        };
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  