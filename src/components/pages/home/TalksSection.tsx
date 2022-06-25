import { Heading, VStack, List, ListItem, Icon, Box } from '@chakra-ui/react';
import { CgArrowRight } from 'react-icons/cg';

import { NavigationPath } from 'config/constants';

import Link from 'components/shared/Link';
import TalkCard, { TalkCardProps } from 'components/shared/TalkCard';

export type TalksSectionProps = {
  talks: TalkCardProps[];
};

const TalksSection = (props: TalksSectionProps) => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">Latest Talks</Heading>

      <List w="full" spacing={{ base: 8, md: 2 }}>
        {props.talks.map((talk) => (
          <ListItem key={talk.slug}>
            <TalkCard {...talk} />
          </ListItem>
        ))}
      </List>

      <Box>
        <Link
          display="flex"
          alignItems="center"
          href={NavigationPath.speaking}
          ml={{ base: 0, md: 4 }}
          role="group"
        >
          View all talks
          <Icon
            as={CgArrowRight}
            ml={1}
            color="purple.500"
            _groupHover={{ ml: 3 }}
            transitionDuration="slow"
            transitionProperty="margin-left"
            transitionTimingFunction="ease-out"
          />
        </Link>
      </Box>
    </VStack>
  );
};

export default TalksSection;
