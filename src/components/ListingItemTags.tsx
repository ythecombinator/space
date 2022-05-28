import * as React from 'react';
import { replaceSlashes } from 'src/utils/string';
import { basePath, tagsPath } from 'src/utils/config';
import Link from 'next/link';

type TagsProps = {
  tags: {
    name: string;
    slug: string;
  }[];
};

const ItemTags = ({ tags }: TagsProps) => {
  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <Link
            sx={(t) => ({ ...t.styles?.a })}
            href={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          >
            {tag.name}
          </Link>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default ItemTags;
