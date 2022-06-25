import { Avatar, AvatarProps, Text, TextProps } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FunctionComponent, PropsWithChildren } from 'react';

import ExternalLink, { ExternalLinkProps } from './ExternalLink';

/*~
 * TYPES
 */

type AvatarWrapperComponent = FunctionComponent<AvatarProps>;
type TextWrapperComponent = FunctionComponent<TextProps>;
type LinkWrapperComponent = FunctionComponent<ExternalLinkProps>;

export type MDXRendererProps = PropsWithChildren<MDXRemoteProps>;

/*~
 * UTILS
 */

const AvatarWrapper: AvatarWrapperComponent = ({ children, ...props }) => (
  <Avatar {...props}>{children}</Avatar>
);

const TextWrapper: TextWrapperComponent = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

const LinkWrapper: LinkWrapperComponent = ({ children, ...props }) => (
  <ExternalLink {...props}>{children}</ExternalLink>
);

const defaultComponents = {
  a: LinkWrapper,
  Avatar: AvatarWrapper,
  Text: TextWrapper,
};

/*~
 * COMPONENT
 */

const MDXRenderer = (props: MDXRendererProps) => {
  return <MDXRemote {...props} components={defaultComponents} />;
};

export default MDXRenderer;
