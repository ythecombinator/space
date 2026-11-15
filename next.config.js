const isDev = process.argv.includes('dev');
const isBuild = process.argv.includes('build');
const path = require('path');

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1';
  import('velite').then(({ build }) => build({ watch: isDev, clean: !isDev }));
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  compress: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['remark', 'react-use-callback-ref', 'react-tweet'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  async headers() {
    const markdown = [
      { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
      { key: 'X-Robots-Tag', value: 'noindex' },
    ];

    return [
      {
        source: '/llms.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
      {
        source: '/llms-full.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
      {
        source: '/agent/:file',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      ...['/:slug.md', '/posts/:slug.md', '/talks/:slug.md', '/about/:slug.md'].map((source) => ({
        source,
        headers: markdown,
      })),
    ];
  },
};

module.exports = nextConfig;
