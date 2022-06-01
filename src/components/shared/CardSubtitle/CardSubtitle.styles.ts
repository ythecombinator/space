import { buildStyleObject } from 'styles/theme';

export const subtitle = buildStyleObject({
  fontWeight: 600,
  margin: '0.1rem',
  color: (theme) => theme.colors?.secondary,
});
