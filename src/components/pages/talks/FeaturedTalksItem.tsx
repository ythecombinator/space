import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

import { NavigationPath } from 'config/constants';

/*~
 * TYPES
 */

export type FeaturedTalksItemProps = {
  talkTitle: string;
  talkSlug: string;
  eventName: string;
  photo: string;
};

/*~
 * COMPONENT
 */

const FeaturedTalksItem: FC<FeaturedTalksItemProps> = (props) => {
  const { talkTitle, talkSlug, eventName, photo } = props;

  return (
    <Box
      filter="grayscale(95%)"
      width="33.33%"
      height="250px"
      backgroundImage={`url(${photo})`}
      backgroundPosition="50% 50%"
      backgroundSize="cover"
      position="relative"
      _hover={{ filter: 'none' }}
    >
      <Flex
        justify="center"
        align="center"
        width="100%"
        height="100%"
        transition="opacity 250ms ease-out"
        opacity={0}
        zIndex={15}
        position="absolute"
        top={0}
        left={0}
        _hover={{ opacity: 1 }}
      >
        <Link href={`${NavigationPath.speaking}/${talkSlug}`}>
          <Flex
            maxWidth="85%"
            direction="column"
            cursor="pointer"
            textTransform="uppercase"
            textDecoration="none"
            letterSpacing="1px"
            padding="10px 25px"
            backgroundColor="Background"
          >
            <p>{talkTitle}</p>
            <p>@ {eventName}</p>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default FeaturedTalksItem;
