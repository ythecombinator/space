import { ThemeUIStyleObject } from 'theme-ui';

export const container: ThemeUIStyleObject = {
  display: 'flex',
  width: '100%',
  margin: 0,
  whiteSpace: 'normal',
  overflowX: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  '@media (min-width: 768px)': {
    whiteSpace: 'nowrap',
    marginTop: '0',
  },
};
