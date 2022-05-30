import { ThemeUIStyleObject } from 'theme-ui';

import { buildStyleObject } from 'styles/theme';

export const wrapper = buildStyleObject({
  borderRadius: 12,
  background: (theme) => theme.colors?.background,
});

export const container = (firstColor: string, secondColor: string) =>
  buildStyleObject({
    padding: ['1rem', '3px'],
    margin: '10px',
    borderRadius: 15,
    position: 'relative',
    background: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
    minWidth: '300px',
    maxWidth: '300px',
    display: 'block',
    transition: '0.25s',
    height: 'fit-content',
    ':hover': { transform: 'translateY(0.5rem)' },
  });
