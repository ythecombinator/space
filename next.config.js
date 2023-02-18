const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['react-spring', '@react-spring/web', 'remark'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });

    return config;
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
};

module.exports = withContentlayer(nextConfig);
