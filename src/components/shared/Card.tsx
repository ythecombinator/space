import { FC, FunctionComponent, PropsWithChildren } from 'react';

import { buildStyleObject } from 'styles/theme';
import { useGradient } from 'styles/utils';

/*~
 * TYPES
 */

export type CardProps = PropsWithChildren<{
  width?: number;
}>;

/*~
 * STYLES
 */

const buildStyles = (firstColor: string, secondColor: string, width: number) =>
  buildStyleObject({
    container: {
      padding: ['1rem', '3px'],
      margin: '10px',
      position: 'relative',
      minWidth: width,
      maxWidth: width,
      display: 'block',
      transition: '0.25s',
      height: '100%',

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
    },
  });

/*~
 * COMPONENT
 */

const Card: FC<CardProps> = (props) => {
  const { children, width = 400 } = props;

  const gradient = useGradient();
  const styles = buildStyles(gradient[0], gradient[1], width);

  return <article sx={styles.container}>{children}</article>;
};

export default Card;
