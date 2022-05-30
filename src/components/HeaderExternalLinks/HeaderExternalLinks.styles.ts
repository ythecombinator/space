import { buildStyleObject } from 'styles/theme';

export const container = buildStyleObject({
  'a:not(:first-of-type)': { ml: 3 },
  fontSize: [1, `18px`],
});
