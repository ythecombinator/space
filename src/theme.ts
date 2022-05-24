import { swiss, deep } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

const theme: Theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
  links: {
    nav: {
      fontFamily: 'body',
    },
  },
};

export default theme;
