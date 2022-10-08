// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
        dns: "empty",
        tls: "empty",
      };
    }

    return config;
  },
};
