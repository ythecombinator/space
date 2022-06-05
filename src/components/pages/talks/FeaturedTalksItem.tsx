import Link from 'next/link';
import { FC } from 'react';
import { Flex, Themed } from 'theme-ui';

import { NavigationPath } from 'config/constants';

import { buildStyleObject } from 'styles/theme';

/*~
 * TYPES
 */

export type FeaturedTalksItemProps = {
  talkTitle: string;
  talkSlug: string;
  eventName: string;
  photo: string;
};

/*~
 * STYLES
 */

const getStyles = (photoUrl: string) =>
  buildStyleObject({
    item: {
      filter: 'grayscale(95%)',
      width: '33.33%',
      height: '250px',
      backgroundImage: `url(${photoUrl})`,
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      position: 'relative',
      ':hover': { filter: 'none' },
    },
    content: {
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
    },
    linkContainer: {
      maxWidth: '85%',
      flexDirection: 'column',
      cursor: 'pointer',
      textTransform: 'uppercase',
      textDecoration: 'none',
      letterSpacing: '1px',
      padding: '10px 25px',
      backgroundColor: (theme) => theme.colors?.background,
      color: (theme) => theme.colors?.text,
    },
  });

/*~
 * COMPONENT
 */

const FeaturedTalksItem: FC<FeaturedTalksItemProps> = (props) => {
  const { talkTitle, talkSlug, eventName, photo } = props;
  const styles = getStyles(photo);

  return (
    <div sx={styles.item}>
      <div sx={styles.content}>
        <Link href={`${NavigationPath.talks}/${talkSlug}`}>
          <Flex sx={styles.linkContainer}>
            <p>{talkTitle}</p>
            <p>@ {eventName}</p>
          </Flex>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTalksItem;
