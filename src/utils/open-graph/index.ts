import { readFileSync } from 'fs';
import { outputFile } from 'fs-extra';
import { compile } from 'handlebars';
import isInCi from 'is-in-ci';
import { join } from 'path';
import { webkit } from 'playwright';

import { Routes, siteMetadata } from 'config/constants';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface TemplateProps extends Pick<ImageProps, 'width' | 'height'> {
  title: string;
  type: Routes.talks | Routes.posts | Routes.about;
  authorName: string;
}

interface ImageProps {
  width?: number;
  height?: number;
  content: string;
}

type ImageOptions = Pick<ImageProps, 'height' | 'width'> &
  Pick<TemplateProps, 'title' | 'type'> & {
    path: string;
  };

export interface MetadataConfig {
  title: string;
  description: string;
}

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const templatePath = join(process.cwd(), 'src/utils/open-graph/template.hbs');
const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 630;
const DEFAULT_MULTIPLIER = 3;

const backgroundVariants = {
  [Routes.talks]: 'bg-gradient-to-br from-teal-700 via-black to-amber-800',
  [Routes.posts]: 'bg-gradient-to-tr from-purple-900 via-black to-indigo-800',
  [Routes.about]: 'bg-gradient-to-tr from-current via-violet-500 to-green-300',
};

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function compileTemplate({ title, authorName, type, width, height }: TemplateProps) {
  const templateHTML = readFileSync(templatePath, 'utf-8');
  const backgroundFilter = backgroundVariants[type];

  return compile(templateHTML)({
    title,
    authorName,
    backgroundFilter,
    width,
    height,
    type: `${type} →`,
  });
}

async function generateImage({ width, height, content }: Required<ImageProps>) {
  const browser = await webkit.launch({
    headless: true,
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(0);
  page.setDefaultNavigationTimeout(0);
  await page.setViewportSize({ width, height });
  await page.setContent(content);
  await page.waitForSelector('#body', { state: 'visible' });

  const image = await page.screenshot();
  await browser.close();

  return image;
}

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export async function generateOpenGraphImage({
  width = DEFAULT_WIDTH * DEFAULT_MULTIPLIER,
  height = DEFAULT_HEIGHT * DEFAULT_MULTIPLIER,
  ...options
}: ImageOptions) {
  if (isInCi) {
    console.info('Running in a CI environment');
    console.warn('Skipping OG image generation');
    return `${siteMetadata.siteUrl}/${options.path}`;
  }

  const content = compileTemplate({
    ...options,
    width,
    height,
    authorName: siteMetadata.author,
  });

  const image = await generateImage({
    width,
    height,
    content: content,
  });

  const path = `./public/${options.path}`;

  try {
    await outputFile(path, image);
  } catch (err) {
    console.log(err);
  }

  return `${siteMetadata.siteUrl}/${options.path}`;
}
