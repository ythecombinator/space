import { buildStyleObject } from 'styles/theme';

import { transformColor } from './Tag.utils';

export const boxContainer = (color: string, colorMode: string) =>
  buildStyleObject({
    display: 'inline-flex',
    margin: 1,
    border: `3px solid ${color}`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: transformColor(color, colorMode),
    },
    '&:active': {
      backgroundColor: transformColor(color, colorMode),
    },
  });

export const flexContainer = buildStyleObject({
  alignItems: 'center',
  padding: 0,
  margin: '0.2rem 0.5rem',
});

export const tagName = buildStyleObject({
  marginY: 0,
  marginX: 1,
  fontSize: 14,
});
