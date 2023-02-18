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
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
// Remark packages
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import remarkCodeTitles from './src/utils/remark/remark-code-title';
import remarkExtractFrontmatter from './src/utils/remark/remark-extract-frontmatter';
import remarkImgToJsx from './src/utils/remark/remark-img-to-jsx';

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
};

/*~
 * MODELS
 */

export const BlogEntry = defineDocumentType(() => ({
  name: 'BlogEntry',
  filePathPattern: 'blog/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    lastmod: { type: 'date' },
    images: { type: 'list', of: { type: 'string' } },
    canonicalUrl: { type: 'string' },
  },
  computedFields,
}));

export const BiographyEntry = defineDocumentType(() => ({
  name: 'BiographyEntry',
  filePathPattern: 'biography/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    coverImageUrl: { type: 'string', required: true },
    coverImageAltText: { type: 'string', required: true },
  },
  computedFields: {
    slug: computedFields.slug,
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [BlogEntry, BiographyEntry],
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
      // rehypePrettyCode,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
