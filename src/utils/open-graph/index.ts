import { readFileSync, writeFileSync } from 'fs';
import { outputFile } from 'fs-extra';
import { compile } from 'handlebars';
import { join } from 'path';
import { launch } from 'puppeteer';

import { siteMetadata } from 'config/constants';

/*~
 * TYPES
 */

interface TemplateProps {
  title: string;
  authorName: string;
  authorTwitter: string;
  authorPic: string;
  basePath: string;
  postPath: string;
}

interface ImageProps {
  width?: number;
  height?: number;
  content: string;
}

type Options = Pick<TemplateProps, 'title' | 'postPath'> &
  Pick<ImageProps, 'width' | 'height'> & { path: string };

/*~
 * CONFIG
 */

const templatePath = join(process.cwd(), 'src/utils/open-graph/template.hbs');
const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 630;

/*~
 * UTILS
 */

function compileTemplate({
  title,
  authorName,
  authorTwitter,
  authorPic,
  basePath,
  postPath,
}: TemplateProps) {
  const templateHTML = readFileSync(templatePath, 'utf-8');
  return compile(templateHTML)({
    title,
    authorName,
    authorTwitter,
    authorPic,
    basePath,
    postPath,
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
  const element = await page.$('#body');
  const image = await element!.screenshot();
  await browser.close();

  return image;
}

/*~
 * MAIN
 */

export async function generateOpenGraphImage(options: Options) {
  const compiledHTML = compileTemplate({
    ...options,
    basePath: siteMetadata.siteUrl,
    authorName: siteMetadata.author,
    authorTwitter: siteMetadata.twitter,
    authorPic: siteMetadata.avatar,
  });

  const image = await generateImage({
    width: options.width,
    height: options.height,
    content: compiledHTML,
  });

  const path = `./public/${options.path}`;
  try {
    await outputFile(path, image);
  } catch (err) {
    console.log(err);
  }

  return path;
}
