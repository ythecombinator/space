import {
  defineDocumentType,
  ComputedFields,
  makeSource,
} from 'contentlayer/source-files';
import path from 'path';
import readingTime from 'reading-time';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
// Rehype packages
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypeKatex from 'rehype-katex';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
// Remark packages
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import remarkCodeTitles from 'utils/remark/remark-code-title';
import remarkExtractFrontmatter from 'utils/remark/remark-extract-frontmatter';
import remarkImgToJsx from 'utils/remark/remark-img-to-jsx';
import { extractTocHeadings } from 'utils/remark/remark-toc-headings';

const root = process.cwd();

/*~
 * UTILS
 */

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

/*~
 * MODELS
 */

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields,
}));

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: 'about/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    slug: computedFields.slug,
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post, About],
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
      rehypeAccessibleEmojis,
      rehypePrettyCode,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
