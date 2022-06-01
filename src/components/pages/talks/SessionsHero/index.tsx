import Link from 'next/link';
import { FC } from 'react';
import { Themed } from 'theme-ui';

import * as styles from './SessionsHero.styles';

/*~
 * TYPES
 */

export type SessionsHeroProps = {
  items: {
    key: string;
    talkSlug: string;
    eventName: string;
  }[];
};

/*~
 * COMPONENT
 */

const SessionsHero: FC<SessionsHeroProps> = (props) => {
  const { items } = props;

  return (
    <div sx={styles.collection}>
      {items.map((session) => (
        <div sx={styles.item} key={session.key}>
          <div sx={styles.content}>
            <Link href={session.talkSlug}>
              <Themed.p sx={styles.link}>{session.eventName}</Themed.p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionsHero;
