import { buildStyleObject } from 'styles/theme';

export const footer = buildStyleObject({
  boxSizing: `border-box`,
  display: `flex`,
  justifyContent: `space-between`,
  mt: 3,
  color: `secondary`,
  a: {
    variant: `links.secondary`,
  },
  flexDirection: [`column`, `column`, `row`],
  variant: `dividers.top`,
});
