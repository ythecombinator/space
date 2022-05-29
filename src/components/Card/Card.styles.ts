import { ThemeUIStyleObject } from 'theme-ui';

export const wrapper: ThemeUIStyleObject = {
  background: (theme) => theme.colors?.background,
};

export const container: ThemeUIStyleObject = {
  padding: ['1rem', '3px'],
  margin: '10px',
  position: 'relative',
  background: 'linear-gradient(to right, red, purple)',
  minWidth: '300px',
  maxWidth: '300px',
  display: 'block',
  transition: '0.25s',
  height: 'fit-content',
  ':hover': { transform: 'translateY(0.5rem)' },
};
