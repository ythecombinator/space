import { Routes, siteMetadata } from 'config/constants';

import { BlogEntry } from 'services/content/posts';

import { escapeHTML } from 'utils/html';

const generateRssItem = (post: BlogEntry) => `
  <item>
    <guid>${siteMetadata.siteUrl}/${Routes.posts}/${post.slug}</guid>
    <title>${escapeHTML(post.title)}</title>
    <link>${siteMetadata.siteUrl}/${Routes.posts}/${post.slug}</link>
    ${post.summary && `<description>${escapeHTML(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`;

export const generateRSS = (posts: Array<BlogEntry>, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escapeHTML(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/${Routes.posts}</link>
      <description>${escapeHTML(siteMetadata.description)}</description>
      <language>${siteMetadata.language}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;
