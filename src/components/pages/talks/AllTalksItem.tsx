import {
  chakra,
  Box,
  useColorModeValue,
  Link,
  HStack,
  Text,
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
    <Box
      margin="4"
      paddingX={8}
      paddingY={4}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="2xl"
    >
      <HStack>
        {tags.map((tag) => (
          <Tag name={tag.name} id={tag.id} />
        ))}
      </HStack>

      <Box mt={2}>
        <Link
          fontSize="2xl"
          color={useColorModeValue('gray.700', 'white')}
          fontWeight="700"
          _hover={{
            color: useColorModeValue('gray.600', 'gray.200'),
            textDecor: 'underline',
          }}
        >
          <NextLink href={`${NavigationPath.talks}/${slug}`}>{title}</NextLink>
        </Link>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
          {documentToReactComponents(headline)}
        </Text>
      </Box>
    </Box>
  );
};

export default AllTalksItem;
