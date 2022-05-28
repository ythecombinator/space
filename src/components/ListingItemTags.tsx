import { replaceSlashes } from 'utils/string';
import { NavigationPath } from 'config/constants';
import Link from 'next/link';
import { FC, Fragment } from 'react';

/*~
 * TYPES
 */

export type TagsProps = {
  tags: {
    name: string;
    slug: string;
  }[];
};

/*~
 * COMPONENT
 */

const ListingItemTags: FC<TagsProps> = (props) => {
  const { tags } = props;

  return (
    <Fragment>
      {tags.map((tag, i) => (
        <Fragment key={tag.slug}>
          {!!i && `, `}
          <Link
            sx={(theme) => ({ ...theme.styles?.a })}
            href={replaceSlashes(
              `/${NavigationPath.base}/${NavigationPath.tags}/${tag.slug}`
            )}
          >
            {tag.name}
          </Link>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ListingItemTags;
