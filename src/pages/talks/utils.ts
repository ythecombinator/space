import { ContentfulTag, GetAllTalksQuery } from 'graphql/schema';
import { DeepNonNullable } from 'utility-types';

/*~
 * TRANSFORMERS
 */

const tagTransformer = (tag: DeepNonNullable<ContentfulTag>) => {
  const { id, name } = tag;
  return { id, name };
};

export const talksDocumentTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const { title, slug, contentfulMetadata } = item;
    return {
      title,
      headline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slug,
      tags: contentfulMetadata.tags.map(tagTransformer),
    };
  });
};
