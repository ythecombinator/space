import { ComputedFields, FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files';
import path from 'path';
import { remarkCodeTitles, remarkExtractFrontmatter, remarkImgToJsx } from 'pliny/mdx-plugins.js';
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

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const fields: FieldDefs = { title: { type: 'string', required: true } };

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
};

//  ---------------------------------------------------------------------------
//  MODELS
//  ---------------------------------------------------------------------------

export const BlogEntry = defineDocumentType(() => ({
  name: 'BlogEntry',
  filePathPattern: 'blog/**/*.{md,mdx}',
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

export const MDXEntry = defineDocumentType(() => ({
  name: 'MDXEntry',
  filePathPattern: 'misc/**/*.mdx',
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
  documentTypes: [BlogEntry, MDXEntry],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      // @ts-ignore
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
      // @ts-ignore
      [rehypeCitation, { path: path.join(root, 'data') }],
      // @ts-ignore
      [rehypePrismPlus, { ignoreMissing: true }],
      // @ts-ignore
      rehypePresetMinify,
    ],
  },
});
