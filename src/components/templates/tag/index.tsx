/** @jsx jsx */
import {FunctionComponent} from 'react';

import {Flex} from '@theme-ui/components';
import {Link} from 'gatsby';
import {jsx, Styled} from 'theme-ui';

import Layout from 'components/common/layout';
import Listing from 'components/common/listing';
import SEO from 'components/common/seo';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';

import {PageProps} from 'model/PageProps';

import * as styles from './styles';

const Tag: FunctionComponent<PageProps> = (props) => {
  const { pageContext, data } = props;
  const { tagsPath, basePath } = useConfig();

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Flex sx={styles.flex}>
        <Styled.h2>{pageContext.name}</Styled.h2>
        <Styled.a
          as={Link}
          sx={styles.a}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Styled.a>
      </Flex>
      <Listing posts={data.allPost.nodes} sx={styles.listing} />
    </Layout>
  );
};

export default Tag;
