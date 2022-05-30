import { ThemeUIStyleObject } from 'theme-ui';

export const button: ThemeUIStyleObject = {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  transition: '0.25s',
  svg: { marginRight: '0.3rem' },
  margin: '0.5rem 0',
  '&:hover': { transform: 'translate(10px, 0)' },
};
