import {
  ContentfulTag,
  GetAllTalksQuery,
  GetUpcomingTalksQuery,
} from 'graphql/schema';
import { DeepNonNullable, ValuesType } from 'utility-types';

/*~
 * TRANSFORMERS
 */

const tagTransformer = (tag: DeepNonNullable<ContentfulTag>) => {
  const { id, name } = tag;
  return { id, name };
};

export const allTalksDocumentTransformer = (result: GetAllTalksQuery) => {
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

export const upcomingTalksDocumentTransformer = (
  result: GetUpcomingTalksQuery
) => {
  const items = (result as DeepNonNullable<GetUpcomingTalksQuery>)
    .eventCollection.items;

  return items.map((item) => {
    const { name, city, sessionsCollection, startingDate, endingDate } = item;
    const { title, slug } = sessionsCollection.items[0].talk;

    return {
      talkTitle: title,
      talkSlug: slug,
      eventName: name,
      eventLocation: `${city.country.flag} ${city.name}, ${city.country.name}`,
      eventLocationImage: city.photo.url,
      eventDate: `${startingDate}`,
    };
  });
};

export type UpcomingTalk = ValuesType<
  ReturnType<typeof upcomingTalksDocumentTransformer>
>;
