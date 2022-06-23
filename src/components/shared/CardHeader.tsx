import { chakra } from '@chakra-ui/react';
import { FC } from 'react';

/*~
 * TYPES
 */

export type CardHeaderProps = {
  backgroundImage?: string;
};

/*~
 * STYLES
 */

const getBackground = (backgroundImage: string | undefined) =>
  backgroundImage
    ? {
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
      }
    : {};

/*~
 * COMPONENT
 */

const CardHeader: FC<CardHeaderProps> = (props) => {
  const { children, backgroundImage } = props;

  return (
    <chakra.header
      height={150}
      width="100%"
      {...getBackground(backgroundImage)}
    >
      <chakra.p
        textTransform="uppercase"
        backgroundColor="Background"
        boxSizing="border-box"
        display="inline-block"
        fontSize={16}
        fontWeight={600}
        padding="0.5rem"
        margin="0.5rem"
        textDecoration="none"
      >
        {children}
      </chakra.p>
    </chakra.header>
  );
};

export default CardHeader;
