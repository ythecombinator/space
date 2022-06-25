import { Avatar, AvatarProps, Text, TextProps } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FunctionComponent, PropsWithChildren } from 'react';

/*~
 * TYPES
 */

type AvatarWrapperComponent = FunctionComponent<AvatarProps>;
type TextWrapperComponent = FunctionComponent<TextProps>;

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

const defaultComponents = {
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
