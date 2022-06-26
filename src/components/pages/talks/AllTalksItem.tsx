import {
  Link,
  HStack,
  Text,
  LinkBox,
  VStack,
  LinkOverlay,
  Heading,
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import NextLink from 'next/link';
import { FC } from 'react';

import { NavigationPath } from 'config/constants';

import Tag from 'components/shared/Tag';

/*~
 * TYPES
 */

export type AllTalksItemProps = {
  slug: string;
  title: string;
  headline: ContentfulDocument;
  tags: {
    name: string;
    id: string;
  }[];
};

/*~
 * COMPONENT
 */

const AllTalksItem: FC<AllTalksItemProps> = (props) => {
  const { title, headline, tags, slug } = props;

  return (
    <LinkBox as="article">
      <VStack
        alignItems="stretch"
        width="full"
        p={{ base: 0, md: 4 }}
        _hover={{
          bg: 'gray.100',
          transform: 'scale(1.025, 1.025)',
        }}
        _dark={{
          _hover: {
            bg: 'gray.700',
          },
        }}
        rounded="md"
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
      >
        <VStack alignItems="flex-start">
          <NextLink href={`${NavigationPath.talks}/${slug}`}>
            <Link>
              <LinkOverlay>
                <Heading size="md">{title}</Heading>
              </LinkOverlay>
            </Link>
          </NextLink>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            {tags.map((tag) => (
              <Tag name={tag.name} id={tag.id} />
            ))}
          </HStack>
        </VStack>
        <Text color="gray.500" fontSize="sm">
          {documentToReactComponents(headline)}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export default AllTalksItem;
