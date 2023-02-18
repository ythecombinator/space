import { MDXContentProps } from 'mdx-bundler/client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { FunctionComponent, PropsWithChildren } from 'react';

import { Layouts, LayoutsMap } from 'config/constants';

import { BiographyEntry } from 'services/biography-content-service';
import { BlogEntry } from 'services/posts-content-service';

import { coreContent } from 'utils/contentlayer';

import Link from 'components/shared/link';
import Pre from 'components/shared/pre';

/*~
 * TYPES
 */

interface MDXLayout {
  layout: Layouts;
  content: BiographyEntry | BlogEntry;
  [key: string]: unknown;
}

/*~
 * UTILS
 */

const Wrapper: FunctionComponent<PropsWithChildren<MDXLayout>> = ({
  layout,
  content,
  ...rest
}) => {
  const Layout = LayoutsMap[layout];
  return <Layout content={content} {...rest} />;
};

const MDXComponents: MDXContentProps['components'] = {
  Image,
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
};

/*~
 * COMPONENT
 */

const MDXLayoutRenderer: FunctionComponent<PropsWithChildren<MDXLayout>> = ({
  layout,
  content,
  ...rest
}) => {
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

export default MDXLayoutRenderer;
