import { Box, AspectRatio, Flex, Avatar } from '@chakra-ui/react';

const HeroImage = () => {
  return (
    <Flex position="relative" justify="center" pb={4}>
      <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
        <Avatar src="https://avatars.githubusercontent.com/u/2644563?v=4" />
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
