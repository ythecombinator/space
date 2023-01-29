import { coreContent } from 'lib/utils/contentlayer';
import { MDXContentProps } from 'mdx-bundler/client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { FunctionComponent } from 'react';

import { Layouts } from 'config/constants';

import Link from 'components/shared/link';
import Pre from 'components/shared/pre';
import TOCInline from 'components/shared/toc-inline';

import LayoutAbout from 'components/layouts/layout-about';
import LayoutPost from 'components/layouts/layout-post';

const layouts: Record<Layouts, FunctionComponent<any>> = {
  'layout-about': LayoutAbout,
  'layout-page': LayoutPost,
  'layout-post': LayoutPost,
};

interface MDXLayout {
  layout: Layouts;
  content: Blog | Authors;
  [key: string]: unknown;
}

/*~
 * COMPONENT
 */

const Wrapper = ({ layout, content, ...rest }: MDXLayout) => {
  const Layout = layouts[layout];
  return <Layout content={content} {...rest} />;
};

export const MDXComponents: MDXContentProps['components'] = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
};

export const MDXLayoutRenderer = ({ layout, content, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return (
    <MDXLayout
      layout={layout}
      content={mainContent}
      components={MDXComponents}
      {...rest}
    />
  );
};
