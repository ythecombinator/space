import {
  defineDocumentType,
  ComputedFields,
  makeSource,
} from 'contentlayer/source-files';
import path from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypeKatex from 'rehype-katex';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrismPlus from 'rehype-prism-plus';
// Rehype packages
import rehypeSlug from 'rehype-slug';
import remarkFootnotes from 'remark-footnotes';
// Remark packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import remarkCodeTitles from './src/lib/remark-code-title';
import remarkExtractFrontmatter from './src/lib/remark-extract-frontmatter';
import remarkImgToJsx from './src/lib/remark-img-to-jsx';
import { extractTocHeadings } from './src/lib/remark-toc-headings';

const root = process.cwd();

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => {
      return doc._raw.flattenedPath.replace(/^.+?(\/)/, '');
    },
  },
  toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'posts/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Blog],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      [remarkFootnotes, { inlineNotes: true }],
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
