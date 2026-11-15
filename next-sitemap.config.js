const siteUrl = 'https://www.ythecombinator.space';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  autoLastmod: false,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    transformRobotsTxt: async (_config, robotsTxt) =>
      [
        `# Agent map: ${siteUrl}/llms.txt`,
        `# Full catalog: ${siteUrl}/llms-full.txt`,
        '# Markdown mirrors use the same path with .md added, for example /posts/my-post.md',
        '',
        robotsTxt,
      ].join('\n'),
  },
};
