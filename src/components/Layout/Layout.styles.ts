import { GlobalProps } from '@emotion/react';
import { Theme } from 'theme-ui';

export const global = (theme: Theme) =>
  ({
    '*': {
      boxSizing: 'inherit',
    },
    html: {
      WebkitTextSizeAdjust: '100%',
    },
    img: {
      borderStyle: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: '1em',
    },
    '[hidden]': {
      display: 'none',
    },
    '::selection': {
      backgroundColor: theme.colors?.text,
      color: theme.colors?.background,
    },
    a: theme.styles?.a,
  } as GlobalProps['styles']);
