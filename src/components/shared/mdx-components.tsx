import { MDXContentProps } from 'mdx-bundler/client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { FunctionComponent } from 'react';

import { Layouts, LayoutsMap } from 'config/constants';

import { coreContent } from 'utils/contentlayer';

import Link from 'components/shared/link';
import Pre from 'components/shared/pre';
import TOCInline from 'components/shared/toc-inline';

/*~
 * TYPES
 */

interface MDXLayout {
  layout: Layouts;
  content: Blog | Authors;
  [key: string]: unknown;
}

/*~
 * UTILS
 */

const Wrapper: FunctionComponent<MDXLayout> = ({
  layout,
  content,
  ...rest
}) => {
  const Layout = LayoutsMap[layout];
  return <Layout content={content} {...rest} />;
};

const MDXComponents: MDXContentProps['components'] = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
};

/*~
 * COMPONENT
 */

const MDXLayoutRenderer: FunctionComponent<MDXLayout> = ({
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
