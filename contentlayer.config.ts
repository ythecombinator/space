import {
  defineDocumentType,
  ComputedFields,
  makeSource,
  FieldDefs,
} from 'contentlayer/source-files';
import path from 'path';
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
} from 'pliny/mdx-plugins.js';
import readingTime from 'reading-time';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
// Rehype packages
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
// Remark packages
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const root = process.cwd();

/*~
 * UTILS
 */

const fields: FieldDefs = { title: { type: 'string', required: true } };

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
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
    title: fields.title,
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    language: {
      type: 'enum',
      options: ['pt', 'en'],
      default: 'en',
    },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    lastmod: { type: 'date' },
    images: { type: 'list', of: { type: 'string' } },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    cover: {
      type: 'string',
      resolve: (doc) => `/content/${doc._raw.flattenedPath}/cover.png`,
    },
  },
}));

export const BiographyEntry = defineDocumentType(() => ({
  name: 'BiographyEntry',
  filePathPattern: 'biography/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: fields.title,
    color: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    cover: {
      type: 'string',
      resolve: (doc) => `/content/${doc._raw.flattenedPath}.jpg`,
    },
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
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
