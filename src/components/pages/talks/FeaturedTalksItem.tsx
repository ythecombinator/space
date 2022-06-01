import Link from 'next/link';
import { FC } from 'react';
import { Themed } from 'theme-ui';

import { buildStyleObject } from 'styles/theme';

/*~
 * TYPES
 */

export type FeaturedTalksItemProps = {
  talkSlug: string;
  eventName: string;
};

/*~
 * STYLES
 */

const styles = {
  item: buildStyleObject({
    filter: 'grayscale(95%)',
    width: '33.33%',
    height: '250px',
    backgroundImage:
      'url(https://www.ythecombinator.space/static/the_conf-b15f5196ff0c8dec6b0382f01150de57.jpg)',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    position: 'relative',
    ':hover': { filter: 'none' },
  }),
  content: buildStyleObject({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    transition: 'opacity 250ms ease-out',
    opacity: 0,
    zIndex: 15,
    position: 'absolute',
    top: '0',
    left: '0',
    ':hover': { opacity: 1 },
  }),
  link: buildStyleObject({
    textTransform: 'uppercase',
    textDecoration: 'none',
    letterSpacing: '1px',
    padding: '10px 25px',
    backgroundColor: (theme) => theme.colors?.background,
    color: (theme) => theme.colors?.text,
  }),
};

/*~
 * COMPONENT
 */

const FeaturedTalksItem: FC<FeaturedTalksItemProps> = (props) => {
  const { talkSlug, eventName } = props;

  return (
    <div sx={styles.item}>
      <div sx={styles.content}>
        <Link href={talkSlug}>
          <Themed.p sx={styles.link}>{eventName}</Themed.p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTalksItem;
