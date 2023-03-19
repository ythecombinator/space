import { Heading, VStack, List, ListItem, Icon, Box } from '@chakra-ui/react';
import { CgArrowRight } from 'react-icons/cg';

import BlogPostCard from 'components/shared/BlogPostCard';
import Link from 'components/shared/Link';

type Props = {
  posts: any[];
};

const SectionBlog = ({ posts }: Props) => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">Recent blog posts.</Heading>
      <List w="full" spacing={{ base: 8, md: 2 }}>
        {posts.map((post) => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      <Box>
        <Link
          display="flex"
          alignItems="center"
          href="/blog"
          ml={{ base: 0, md: 4 }}
          role="group"
        >
          Read all articles
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

export default SectionBlog;
