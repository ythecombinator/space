import React, {FunctionComponent} from 'react';

import {Link} from 'gatsby';
import {Styled} from 'theme-ui';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';

interface Props {
  tags: {
    name: string;
    slug: string;
  }[];
}

const ItemTags: FunctionComponent<Props> = (props) => {
  const { tags } = props;
  const { tagsPath, basePath } = useConfig();

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <Styled.a
            as={Link}
            to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          >
            {tag.name}
          </Styled.a>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default ItemTags;
