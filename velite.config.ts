import path from 'path';
import readingTime from 'reading-time';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import { defineCollection, defineConfig, s } from 'velite';

const root = process.cwd();
const contentRoot = path.join(root, 'src/content');

function relativeContentPath(filePath: string) {
  return path.relative(contentRoot, filePath).replace(/\.(md|mdx)$/, '');
}

function slugFromPath(filePath: string) {
  return path.basename(filePath).replace(/\.(md|mdx)$/, '');
}

const blogEntries = defineCollection({
  name: 'BlogEntry',
  pattern: 'blog/**/*.{md,mdx}',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      summary: s.string(),
      language: s.enum(['pt', 'en']).default('en'),
      tags: s.array(s.string()),
      lastmod: s.isodate().optional(),
      images: s.array(s.string()).optional(),
      canonicalUrl: s.string().optional(),
      code: s.mdx(),
    })
    .transform((data, { meta }) => {
      const slug = slugFromPath(meta.path);
      const flattenedPath = relativeContentPath(meta.path).replace(/^blog\//, 'posts/');

      return {
        title: data.title,
        date: data.date,
        summary: data.summary,
        language: data.language,
        tags: data.tags,
        lastmod: data.lastmod,
        images: data.images,
        canonicalUrl: data.canonicalUrl,
        slug,
        hero: `/content/${flattenedPath}/hero.png`,
        readingTime: readingTime(meta.content ?? ''),
        body: { code: data.code },
      };
    }),
});

const mdxEntries = defineCollection({
  name: 'MDXEntry',
  pattern: 'misc/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      color: s.string(),
      code: s.mdx(),
    })
    .transform((data, { meta }) => {
      const slug = slugFromPath(meta.path);
      const flattenedPath = relativeContentPath(meta.path);

      return {
        title: data.title,
        color: data.color,
        slug,
        hero: `/content/${flattenedPath}.jpg`,
        body: { code: data.code },
      };
    }),
});

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    clean: true,
  },
  collections: { blogEntries, mdxEntries },
  mdx: {
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
    ],
  },
});
