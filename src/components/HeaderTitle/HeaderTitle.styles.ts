import { buildStyleObject } from 'styles/theme';

export const link = buildStyleObject({
  color: `heading`,
  textDecoration: `none`,
});

export const logoContainer = buildStyleObject({
  my: 0,
  fontWeight: `medium`,
  fontSize: [3, 4],
});
