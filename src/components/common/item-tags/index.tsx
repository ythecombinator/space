import React, {ComponentType, FunctionComponent} from 'react';

import {Link as GatsbyLink} from 'gatsby';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';
import {StyledGatsbyLink} from 'utils/theme-ui';

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
          <StyledGatsbyLink
            as={GatsbyLink}
            to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          >
            {tag.name}
          </StyledGatsbyLink>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default ItemTags;
