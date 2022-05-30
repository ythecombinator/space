import { ThemeUIStyleObject } from 'theme-ui';

export type HeaderProps = {
  backgroundImage?: string;
};

const headerBackground = (props: HeaderProps) =>
  (props.backgroundImage
    ? {
        backgroundSize: 'cover',
        backgroundImage: `url(${props.backgroundImage})`,
      }
    : {}) as ThemeUIStyleObject;

export const header = (props: HeaderProps) =>
  ({
    height: 150,
    width: '100%',
    padding: 15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    ...headerBackground(props),
  } as ThemeUIStyleObject);

export const title: ThemeUIStyleObject = {
  textTransform: 'uppercase',
  margin: 0,
  backgroundColor: (theme) => theme.colors?.background,
  color: (theme) => theme.colors?.text,
  boxSizing: 'border-box',
  display: 'inline-block',
  fontSize: 16,
  fontWeight: 600,
  padding: '0.5rem',
  textDecoration: 'none',
};
