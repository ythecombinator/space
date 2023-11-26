import { FunctionComponent, PropsWithChildren } from 'react';

import CardFeatured from 'components/shared/card-featured';

/*~
 * TYPES
 */

export type TopicHighlightsSectionItemProps = {
  talkTitle: string;
  talkSlug: string;
  sessionsCount: number;
};

/*~
 * COMPONENT
 */

const TopicHighlightsSectionItem: FunctionComponent<PropsWithChildren<TopicHighlightsSectionItemProps>> = (props) => {
  const { talkTitle, talkSlug, sessionsCount } = props;

  return (
    <CardFeatured
      title={talkTitle}
      description={`Presented ${sessionsCount} times`}
      href={talkSlug}
      className="py-4 md:px-4 min-w-[300px]"
    />
  );
};

export default TopicHighlightsSectionItem;
