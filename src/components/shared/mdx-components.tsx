import { MDXContentProps } from 'mdx-bundler/client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { coreContent } from 'pliny/utils/contentlayer';
import { FunctionComponent, PropsWithChildren } from 'react';

import { Layouts, LayoutsMap } from 'config/constants';

import { RawMDXEntry } from 'services/content/markdown';
import { RawBlogEntry } from 'services/content/posts';

import Pre from 'components/shared/pre';
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

const Wrapper: FunctionComponent<PropsWithChildren<MDXLayout>> = ({ layout, content, ...rest }) => {
  const Layout = LayoutsMap[layout];
  return <Layout content={content} {...rest} />;
};

const MDXComponents: MDXContentProps['components'] = {
  Image,
  // @ts-ignore
  a: Typography.a,
  pre: Pre,
  wrapper: Wrapper,
  Lead: Typography.lead,
  Subtle: Typography.subtle,
  Inventory: Inventory,
  CustomerPortfolio: CustomerPortfolio,
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const MDXLayoutRenderer: FunctionComponent<PropsWithChildren<MDXLayout>> = ({ layout, content, ...rest }) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return <MDXLayout layout={layout} content={mainContent} components={MDXComponents} {...rest} />;
};

export default MDXLayoutRenderer;
