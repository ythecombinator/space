import { buildStyleObject } from 'styles/theme';

export const header = buildStyleObject({ mb: [3, 5] });

export const flex = buildStyleObject({
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const container = buildStyleObject((theme) => ({
  boxSizing: 'border-box',
  display: 'flex',
  variant: 'dividers.bottom',
  alignItems: 'center',
  justifyContent: 'space-between',
  mt: 3,
  color: 'secondary',
  a: { ...theme.styles?.a },
  flexFlow: 'wrap',
}));
