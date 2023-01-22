import { getMDXComponent, MDXContentProps } from 'mdx-bundler/client';
import Image from 'next/image';
import { ComponentType, useMemo } from 'react';

import Link from 'components/shared/link';
import Pre from 'components/shared/pre';
import TOCInline from 'components/shared/toc-inline';

/*~
 * COMPONENT
 */

const Wrapper: ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`components/layouts/${layout}`).default;
  return <Layout {...rest} />;
};

export const MDXComponents: MDXContentProps['components'] = {
  Image,
  TOCInline,
  //@ts-ignore
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
};

interface Props {
  layout: string;
  mdxSource: string;
  [key: string]: unknown;
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
