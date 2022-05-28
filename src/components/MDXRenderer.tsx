import { FC, FunctionComponent } from 'react';
import { Text, Avatar, AvatarProps, TextProps } from '@theme-ui/components';
import Title, { TitleProps } from 'components/Title';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

/*~
 * TYPES
 */

type AvatarWrapperComponent = FunctionComponent<AvatarProps>;
type TextWrapperComponent = FunctionComponent<TextProps>;
type TitleWrapperComponent = FunctionComponent<TitleProps>;

type MDXRendererProps = MDXRemoteProps;

/*~
 * UTILS
 */

const AvatarWrapper: AvatarWrapperComponent = ({ children, ...props }) => (
  <Avatar {...props}>{children}</Avatar>
);

const TextWrapper: TextWrapperComponent = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

const TitleWrapper: TitleWrapperComponent = ({ children, text, ...props }) => (
  <Title text={text} {...props}>
    {children}
  </Title>
);

const defaultComponents = {
  Avatar: AvatarWrapper,
  Text: TextWrapper,
  Title: TitleWrapper,
};

/*~
 * COMPONENT
 */

const MDXRenderer: FC<MDXRendererProps> = (props) => {
  return <MDXRemote {...props} components={defaultComponents} />;
};

export default MDXRenderer;
