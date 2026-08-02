import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Layouts, LayoutsMap } from 'config/constants';

import { RawMDXEntry } from 'services/content/markdown';
import { RawBlogEntry } from 'services/content/posts';

import { coreContent } from 'utils/content';

import Admonition from 'components/shared/admonition';
import MDXContent from 'components/shared/mdx-content';
import Pre from 'components/shared/pre';
import Price from 'components/shared/price';
import Tweet from 'components/shared/tweet';
import Typography from 'components/shared/typography';

import CustomerPortfolio from 'components/pages/about/customer-portfolio';
import Inventory from 'components/pages/about/inventory';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface MDXLayout {
  layout: Layouts;
  content: RawMDXEntry | RawBlogEntry;
  [key: string]: unknown;
}

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function Wrapper({ layout, content, ...rest }: PropsWithChildren<MDXLayout>) {
  const Layout = LayoutsMap[layout];
  return <Layout content={content} {...rest} />;
}

const MDXComponents = {
  Image,
  // @ts-ignore
  a: Typography.a,
  pre: Pre,
  wrapper: Wrapper,
  Lead: Typography.lead,
  Subtle: Typography.subtle,
  Mention: Typography.mention,
  Inventory,
  CustomerPortfolio,
  Admonition,
  Price,
  Tweet,
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function MDXLayoutRenderer({ layout, content, ...rest }: PropsWithChildren<MDXLayout>) {
  const mainContent = coreContent(content);

  return (
    <MDXContent code={content.body.code} layout={layout} content={mainContent} components={MDXComponents} {...rest} />
  );
}

export default MDXLayoutRenderer;
