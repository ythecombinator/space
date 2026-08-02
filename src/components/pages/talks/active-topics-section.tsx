import { PropsWithChildren } from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Topic } from 'services/content/talks';

import CardFeatured from 'components/shared/card-featured';
import CardScrollArea from 'components/shared/card-scroll-area';
import Link from 'components/shared/link';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ActiveTopicsSectionProps = {
  topics: Topic[];
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ActiveTopicsSection({ topics }: PropsWithChildren<ActiveTopicsSectionProps>) {
  return (
    <SectionContainer>
      <SectionHeading title="What I Speak About" />
      <CardScrollArea>
        {topics.map((topic) => (
          <CardFeatured
            key={topic.id}
            className="min-w-[500px] py-4 md:px-4"
            title={topic.title}
            description={topic.description}
          >
            <div className="mt-6 space-y-4 overflow-x-hidden">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-200 dark:via-gray-800 dark:to-gray-800" />
                <Typography.small className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">
                  Example Talks
                </Typography.small>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-gray-200 dark:via-gray-800 dark:to-gray-800" />
              </div>
              <ul className="max-h-[280px] space-y-1.5 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700 dark:hover:scrollbar-thumb-gray-600">
                {topic.talks.map((talk, index) => (
                  <li key={talk.slug} className="group">
                    <Link
                      href={talk.slug}
                      className="flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:translate-x-1 hover:bg-primary-50/40 dark:hover:bg-primary-950/20"
                    >
                      <Typography.small className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold transition-all duration-200 group-hover:scale-110">
                        {index + 1}
                      </Typography.small>
                      <Typography.p className="my-0 min-w-0 flex-1 break-words text-base leading-relaxed text-gray-700 transition-colors duration-200 group-hover:text-primary-700 dark:text-gray-300 dark:group-hover:text-primary-400">
                        {talk.title}
                      </Typography.p>
                      <FaChevronRight className="mt-1.5 h-4 w-4 shrink-0 text-gray-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 dark:text-gray-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </CardFeatured>
        ))}
      </CardScrollArea>
    </SectionContainer>
  );
}

export default ActiveTopicsSection;
