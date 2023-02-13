import Image from "next/image";
import Link from 'next/link';
import { FunctionComponent } from 'react';

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
  PhotoHighlightsSectionItemProps
> = (props) => {
  const { photoURL, talkSlug, eventName } = props;

  return (
    <Link
      key={talkSlug}
      href={talkSlug}
      shallow
      className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
    >
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
        <Image
          alt={eventName}
          className="h-auto max-w-lg transition-all duration-300 rounded-lg filter grayscale blur-sm hover:blur-none"
          src={photoURL}
          width={720}
          height={480}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <figcaption className="absolute px-4 bottom-6">
          <Typography.lead>{eventName}</Typography.lead>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PhotoHighlightsSectionItem;
