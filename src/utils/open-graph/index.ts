import { readFileSync } from 'fs';
import { outputFile } from 'fs-extra';
import { compile } from 'handlebars';
import { join } from 'path';
import { launch } from 'puppeteer';

import { Routes, siteMetadata } from 'config/constants';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface TemplateProps {
  title: string;
  type: Routes.talks | Routes.posts | Routes.about;
  authorName: string;
  authorTwitter: string;
  authorPic: string;
  authorBio: string;
}

interface ImageProps {
  width?: number;
  height?: number;
  content: string;
}

type Options = Pick<ImageProps, 'height' | 'width'> &
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

const backgroundVariants = {
  [Routes.talks]: 'bg-gradient-to-br from-teal-700 via-black to-amber-800',
  [Routes.posts]: 'bg-gradient-to-tr from-purple-900 via-black to-indigo-800',
  [Routes.about]: 'bg-gradient-to-tr from-current via-violet-500 to-green-300',
};

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function compileTemplate({ title, authorName, authorTwitter, authorPic, authorBio, type }: TemplateProps) {
  const templateHTML = readFileSync(templatePath, 'utf-8');
  const backgroundFilter = backgroundVariants[type];

  return compile(templateHTML)({
    title,
    authorName,
    authorTwitter,
    authorPic,
    authorBio,
    backgroundFilter,
    type: `${type} — `,
  });
}

async function generateImage({ width, height, content }: ImageProps) {
  const browser = await launch({
    headless: true,
    args: ['--no-sandbox'],
    defaultViewport: {
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
    },
  });

  const page = await browser.newPage();

  if (width || height) {
    await page.setViewport({
      width: width ? Number(width) : DEFAULT_WIDTH,
      height: height ? Number(height) : DEFAULT_HEIGHT,
    });
  }

  await page.setContent(content, { waitUntil: 'networkidle2' });
  await page.waitForSelector('#body', {
    visible: true,
  });

  const element = await page.$('#body');
  const image = await element!.screenshot();
  await browser.close();

  return image;
}

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export async function generateOpenGraphImage(options: Options) {
  const content = compileTemplate({
    ...options,
    authorName: siteMetadata.author,
    authorPic: siteMetadata.avatar,
    authorBio: siteMetadata.description,
    authorTwitter: siteMetadata.twitterHandle,
  });

  const image = await generateImage({
    width: options.width,
    height: options.height,
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
