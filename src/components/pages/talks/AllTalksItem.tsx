import {
  Link,
  HStack,
  Text,
  LinkBox,
  VStack,
  LinkOverlay,
  Heading,
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import NextLink from 'next/link';
import { FC } from 'react';

import { NavigationPath } from 'config/constants';

import Tag from 'components/shared/Tag';

const gradients = {
  '0': ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  '1': ' from-[#D8B4FE] to-[#818CF8]',
  '2': ' to-[#6EE7B7] from-[#6EE7F9]',
  '3': ' from-pink-500 via-red-500 to-yellow-500',
  '4': ' from-yellow-100 via-yellow-300 to-yellow-500',
  '5': ' from-indigo-200 via-red-200 to-yellow-100',
  '6': ' from-green-200 via-green-400 to-purple-700',
  '7': ' from-red-200 to-red-600',
  '8': ' from-green-300 via-yellow-300 to-pink-300',
  '9': ' from-pink-400 to-pink-600',
  '10': ' from-sky-400 via-rose-400 to-lime-400',
};

/*~
 * TYPES
 */

export type AllTalksItemProps = {
  slug: string;
  title: string;
  headline: ContentfulDocument;
  tags: {
    name: string;
    id: string;
  }[];
};

/*~
 * COMPONENT
 */

const AllTalksItem: FC<AllTalksItemProps> = (props) => {
  const { title, headline, tags, slug } = props;

  return (
    <Link
      href={`/blog/${slug}`}
      key={slug}
      className="group transform transition-all duration-500 hover:scale-[1.05] hover:duration-500"
    >
      <div
        className={
          `absolute -inset-[2.4px] rounded-2xl bg-gray-100 transition duration-1000 group-hover:bg-gradient-to-r group-hover:blur-md group-hover:duration-500 dark:bg-gray-800` +
          gradients[2]
        }
      ></div>
      <article className="relative h-full w-full rounded-xl">
        <div className="flex h-full w-full flex-col justify-between rounded-xl bg-white p-5 dark:bg-background-color">
          <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-10 flex">
            <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              {'OPA'}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default AllTalksItem;
