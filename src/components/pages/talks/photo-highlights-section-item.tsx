import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren } from 'react';

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

const PhotoHighlightsSectionItem: FunctionComponent<
  PropsWithChildren<PhotoHighlightsSectionItemProps>
> = (props) => {
  const { photoURL, talkSlug, eventName } = props;

  return (
    <Link
      key={talkSlug}
      href={talkSlug}
      shallow
      className="group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
    >
      <figure className="relative max-w-sm cursor-pointer transition-all duration-300">
        <Image
          alt={eventName}
          className="h-auto max-w-lg rounded-lg blur-sm grayscale transition-all duration-300 hover:blur-none"
          src={photoURL}
          width={720}
          height={480}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <figcaption className="absolute bottom-6 px-4">
          <Typography.lead>{eventName}</Typography.lead>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PhotoHighlightsSectionItem;
