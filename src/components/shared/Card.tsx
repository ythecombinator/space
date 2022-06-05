import { FC, FunctionComponent, PropsWithChildren } from 'react';

import { buildStyleObject } from 'styles/theme';
import { useGradient } from 'styles/utils';

/*~
 * TYPES
 */

export type CardProps = PropsWithChildren<{
  mode: 'fixed' | 'fit';
}>;

/*~
 * STYLES
 */

const buildStyles = (
  firstColor: string,
  secondColor: string,
  mode: CardProps['mode']
) =>
  buildStyleObject({
    container: {
      padding: ['1rem', '3px'],
      margin: '10px',
      position: 'relative',
      ...(mode === 'fixed' ? { minWidth: 400, maxWidth5: 400 } : {}),
      ...(mode === 'fit' ? { width: '100%' } : {}),
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
  const { children, mode = 'fit' } = props;

  const gradient = useGradient();
  const styles = buildStyles(gradient[0], gradient[1], mode);

  return <article sx={styles.container}>{children}</article>;
};

export default Card;
