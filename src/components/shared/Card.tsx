import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

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

const getWidthForMode = (mode: CardProps['mode']) => ({
  ...(mode === 'fixed' ? { minWidth: 400, maxWidth5: 400 } : {}),
  ...(mode === 'fit' ? { width: '100%' } : {}),
});

/*~
 * COMPONENT
 */

const Card: FC<CardProps> = (props) => {
  const { children, mode = 'fit' } = props;

  const gradient = useGradient();
  const width = getWidthForMode(mode);

  return (
    <Box
      as="article"
      padding={['1rem', '3px']}
      margin="10px"
      position="relative"
      display="block"
      transition="0.25s"
      height="100%"
      _hover={{
        transform: 'translateY(0.5rem)',
      }}
      // Width
      {...width}
      // Border
      border={`6px solid ${gradient[0]}`}
      style={{
        borderImageSlice: 1,
        borderImageSource: `conic-gradient(
          from 0deg,
          ${gradient[0]}, 
          ${gradient[1]},
          ${gradient[0]}
        )`,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
