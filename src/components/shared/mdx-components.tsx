import Image from 'components/Image';
import CustomLink from 'components/Link';
import Pre from 'components/Pre';
import { getMDXComponent, MDXContentProps } from 'mdx-bundler/client';
import { ComponentType, useMemo } from 'react';

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
  a: CustomLink,
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
