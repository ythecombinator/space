/* eslint-disable react/display-name */
import CustomLink from 'components//Link';
import Pre from 'components//Pre';
import TOCInline from 'components//TOCInline';
import Image from 'components/Image';
import { BlogNewsletterForm } from 'components/NewsletterForm';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`components/layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
