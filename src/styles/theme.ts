import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const purpleRing = (props) => ({
  _focus: {
    ringColor: mode('purple.300', 'purple.600')(props),
    ring: 3,
  },
});

const inputBorder = (props) => ({
  _focus: {
    borderColor: mode('purple.300', 'purple.600')(props),
  },
});

const theme = extendTheme(
  {
    config,
    styles: {
      global: {
        body: {
          fontFeatureSettings: '"ss02"',
        },
      },
    },
    sizes: {
      18: '4.5rem',
    },
    components: {
      Heading: {
        baseStyle: (props) => ({
          color: mode('gray.700', 'white')(props),
          letterSpacing: '1px',
        }),
      },
      Text: {
        baseStyle: (props) => ({
          color: mode('gray.700', 'white')(props),
        }),
      },
      Link: {
        baseStyle: (props) => ({
          textDecoration: 'none',
          _hover: {
            textDecoration: 'none',
          },
        }),
      },
      Input: {
        variants: {
          filled: (props) => ({
            field: {
              ...inputBorder(props),
            },
          }),
        },
      },
    },
    colors: {
      twitter: '#1EA1F1',
      github: '#333',
      linkedin: '#0a66c2',
      speakerdeck: '#006159',
      devto: '#333',
    },
    fonts: {
      heading: `Cal Sans, ${base.fonts.heading}`,
      body: `Inter, ${base.fonts.body}`,
    },
    mdx: {
      h1: {
        fontSize: '3xl',
        letterSpacing: '1px',
      },
      h2: {
        fontSize: 'xl',
        letterSpacing: '0.8px',
      },
      h3: {
        fontSize: 'md',
        letterSpacing: '0.6px',
      },
      h4: {
        fontSize: 'xs',
        letterSpacing: '0.5px',
      },
    },
  },
  withProse({
    baseStyle: {
      a: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  })
);

export default theme;
