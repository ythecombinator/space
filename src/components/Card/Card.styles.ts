import { buildStyleObject } from 'styles/theme';

export const container = (firstColor: string, secondColor: string) =>
  buildStyleObject({
    padding: ['1rem', '3px'],
    margin: '10px',
    position: 'relative',
    minWidth: '300px',
    maxWidth: '300px',
    display: 'block',
    transition: '0.25s',
    height: 'fit-content',

    ':hover': {
      transform: 'translateY(0.5rem)',
    },

    border: `6px solid ${firstColor}`,
    borderImageSlice: 1,
    borderImageSource: `conic-gradient(
        from 0deg,
        ${firstColor}, 
        ${secondColor},
        ${firstColor}
      )`,
  });
