import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

export type PhotoHighlightsSectionItemProps = {
  talkSlug: string;
  eventName: string;
  photoURL: string;
};

/*~
 * COMPONENT
 */

const PhotoHighlightsSectionItem: FunctionComponent<PropsWithChildren<PhotoHighlightsSectionItemProps>> = (props) => {
  const { photoURL, talkSlug, eventName } = props;

  return (
    <Link
      key={talkSlug}
      href={`/${Routes.talks}/${talkSlug}`}
      shallow
      className="group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
    >
      <figure className="relative max-w-sm cursor-pointer">
        <Image
          alt={eventName}
          className="h-auto max-w-lg rounded-lg"
          src={photoURL}
          width={720}
          height={480}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <figcaption className="absolute bottom-0 p-2 text-center w-full backdrop-blur-md hidden group-hover:block">
          <Typography.lead>{eventName}</Typography.lead>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PhotoHighlightsSectionItem;
