// const withMDX = require('@next/mdx')();

// module.exports = withMDX({
//   pageExtensions: ['js', 'mdx', 'tsx'],
// });

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(graphql|gql)$/,
//       exclude: /node_modules/,
//       loader: 'graphql-tag/loader',
//     });
//     return config;
//   },
//   webpackDevMiddleware: (config) => {
//     return config;
//   },
// };

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')([
  'react-spring',
  '@react-spring/web',
]);

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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
};

module.exports = withPlugins([[withBundleAnalyzer], [withTM]], nextConfig);
