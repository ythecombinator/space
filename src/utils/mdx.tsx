import { FunctionComponent } from 'react';
import { Text, Avatar, AvatarProps, TextProps } from '@theme-ui/components';
import Title, { TitleProps } from 'src/components/Title';

type AvatarWrapperComponent = FunctionComponent<AvatarProps>;
type TextWrapperComponent = FunctionComponent<TextProps>;
type TitleWrapperComponent = FunctionComponent<TitleProps>;

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

export const defaults = {
  Avatar: AvatarWrapper,
  Text: TextWrapper,
  Title: TitleWrapper,
};
