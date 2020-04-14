/** @jsx jsx */
import {FunctionComponent} from 'react';

import {Box, Flex} from '@theme-ui/components';
import {Link} from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import {jsx, Styled} from 'theme-ui';

import Layout from 'components/common/layout';
import SEO from 'components/common/seo';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';

import {PageProps} from 'model/PageProps';

import * as styles from './styles';

const Tags: FunctionComponent<PageProps> = (props) => {
  const { tagsPath, basePath } = useConfig();

  return (
    <Layout>
      <SEO title="Tags" />
      <Styled.h2>Tags</Styled.h2>
      <Box mt={[4, 5]}>
        {props.data.allPost.group.map((listItem) => (
          <Flex
            key={listItem.fieldValue}
            mb={[1, 1, 2]}
            sx={{ alignItems: `center` }}
          >
            <Styled.a
              as={Link}
              sx={styles.a}
              to={replaceSlashes(
                `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
              )}
            >
              {listItem.fieldValue}
              <span sx={styles.span}>({listItem.totalCount})</span>
            </Styled.a>
          </Flex>
        ))}
      </Box>
    </Layout>
  );
};

export default Tags;
